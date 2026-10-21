'use client';

import { useCallback, useEffect, useRef, useState, type CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, MotionConfig, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import type { Project } from '@/lib/projects';
import { BrowserFrame, PhoneFrame } from './DeviceFrames';

const SLIDE_DURATION = 2000;
const TRANSITION = '0.8s';
const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';
const FRAME_SIZES = '(max-width: 1024px) 80vw, 45vw';
const CONTROL_BUTTON =
  'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors hover:border-pink-500/60 hover:bg-pink-500/20 disabled:opacity-40';

// Position of each frame in the 3D stack, by distance from the active project
const SLOTS: CSSProperties[] = [
  { transform: 'translate3d(0, 0, 0) rotateY(-13deg)', filter: 'brightness(1)', opacity: 1, zIndex: 30 },
  { transform: 'translate3d(31%, -5%, -460px) rotateY(-13deg)', filter: 'brightness(0.42)', opacity: 1, zIndex: 20 },
  { transform: 'translate3d(-27%, -9%, -760px) rotateY(-13deg)', filter: 'brightness(0.25)', opacity: 1, zIndex: 10 },
];
const HIDDEN_SLOT: CSSProperties = {
  transform: 'translate3d(-27%, -9%, -1000px) rotateY(-13deg)',
  filter: 'brightness(0.25)',
  opacity: 0,
  zIndex: 0,
};

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(query.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

export default function ProjectSlideshow({ projects }: { projects: Project[] }) {
  const count = projects.length;
  const [active, setActive] = useState(0);
  const [userPaused, setUserPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(true);
  const reducedMotion = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const elapsed = useRef(0);

  const autoplayBlocked = reducedMotion || count < 2;
  const paused = userPaused || hovered || focused || !inView || autoplayBlocked;

  const goTo = useCallback((index: number) => {
    elapsed.current = 0;
    setActive(index);
  }, []);

  // Stop the timer while the slideshow is off-screen
  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      elapsed.current += now - last;
      last = now;
      const bar = barRefs.current[active];
      if (bar) bar.style.transform = `scaleX(${Math.min(elapsed.current / SLIDE_DURATION, 1)})`;
      if (elapsed.current >= SLIDE_DURATION) {
        goTo((active + 1) % count);
        return;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [paused, active, count, goTo]);

  if (count === 0) return null;

  const project = projects[active];

  return (
    <MotionConfig reducedMotion="user">
      <div
        ref={rootRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Featured projects"
        className="grid items-center gap-8 lg:grid-cols-[3fr_2fr] lg:gap-12"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={(e) => setFocused(e.target.matches(':focus-visible'))}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget)) setFocused(false);
        }}
      >
        {/* 3D stage */}
        <div className="relative overflow-hidden px-[13%] pb-[20%] pt-[9%]">
          <div className="relative grid" style={{ perspective: '2400px' }}>
            {projects.map((item, index) => {
              const slot = (index - active + count) % count;
              const isFront = slot === 0;
              return (
                <div
                  key={item.slug}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${index + 1} of ${count}: ${item.name}`}
                  aria-hidden={!isFront}
                  className="relative [grid-area:1/1]"
                  style={{
                    ...(SLOTS[slot] ?? HIDDEN_SLOT),
                    pointerEvents: isFront ? 'auto' : 'none',
                    transition: `transform ${TRANSITION} ${EASE}, filter ${TRANSITION} ${EASE}, opacity ${TRANSITION} ${EASE}`,
                  }}
                >
                  <BrowserFrame
                    src={item.desktop}
                    alt={`${item.name} website on desktop`}
                    domain={item.domain}
                    sizes={FRAME_SIZES}
                  />
                  {/* Reflection */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 right-0 top-full mt-1 aspect-[16/10] opacity-[0.16]"
                    style={{
                      maskImage: 'linear-gradient(to bottom, #000, transparent 55%)',
                      WebkitMaskImage: 'linear-gradient(to bottom, #000, transparent 55%)',
                    }}
                  >
                    <div className="relative h-full w-full -scale-y-100 overflow-hidden rounded-xl">
                      <Image
                        src={item.desktop}
                        alt=""
                        fill
                        sizes={FRAME_SIZES}
                        className="object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Mobile screenshot of the active project */}
            <div className="pointer-events-none absolute -bottom-[16%] -right-[5%] z-40 w-[22%]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={project.slug}
                  className="absolute bottom-0 left-0 right-0"
                  initial={{ opacity: 0, scale: 0.9, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, delay: 0.3 } }}
                  exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                >
                  <PhoneFrame src={project.mobile} alt={`${project.name} website on mobile`} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Caption and controls */}
        <div className="space-y-6">
          <div aria-live={paused ? 'polite' : 'off'} className="min-h-[12rem] sm:min-h-[10rem]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3 text-sm">
                  <span className="rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-pink-300">
                    {project.kind}
                  </span>
                  <span className="tabular-nums text-gray-400">
                    {active + 1} / {count}
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-white md:text-4xl">{project.name}</h3>
                <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{project.sector}</p>
                <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 font-semibold">
                  <Link href={`/projects#${project.slug}`} className="text-pink-500 transition-colors hover:text-pink-400">
                    View project →
                  </Link>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    Visit website ↗
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {count > 1 && (
            <div className="flex items-center gap-4">
              <div className="flex flex-1 gap-1.5">
                {projects.map((item, index) => (
                  <button
                    key={item.slug}
                    type="button"
                    onClick={() => goTo(index)}
                    aria-label={`Show ${item.name}`}
                    aria-current={index === active}
                    className="group flex-1 py-2"
                  >
                    <span className="block h-[3px] overflow-hidden rounded-full bg-white/15 transition-colors group-hover:bg-white/30">
                      <span
                        ref={(el) => {
                          barRefs.current[index] = el;
                        }}
                        className="block h-full origin-left rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
                        style={{
                          transform: `scaleX(${
                            index < active ? 1 : index === active ? Math.min(elapsed.current / SLIDE_DURATION, 1) : 0
                          })`,
                        }}
                      />
                    </span>
                  </button>
                ))}
              </div>
              <div className="flex shrink-0 gap-2">
                <button
                  type="button"
                  onClick={() => goTo((active - 1 + count) % count)}
                  aria-label="Previous project"
                  className={CONTROL_BUTTON}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => goTo((active + 1) % count)}
                  aria-label="Next project"
                  className={CONTROL_BUTTON}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setUserPaused((value) => !value)}
                  disabled={autoplayBlocked}
                  aria-label={userPaused || autoplayBlocked ? 'Play slideshow' : 'Pause slideshow'}
                  className={CONTROL_BUTTON}
                >
                  {userPaused || autoplayBlocked ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </MotionConfig>
  );
}
