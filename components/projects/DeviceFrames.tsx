import Image from 'next/image';

type FrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
  sizes?: string;
};

export function BrowserFrame({
  src,
  alt,
  domain,
  priority = false,
  sizes = '(max-width: 1024px) 100vw, 60vw',
}: FrameProps & { domain: string }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10 bg-[#111118] shadow-2xl shadow-black/60">
      {/* Browser top bar */}
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#1b1b24] px-3 py-2">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-gray-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-500/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-500/70" />
        </div>
        <div className="mx-auto w-full max-w-[60%] truncate rounded-full bg-white/[0.07] px-3 py-0.5 text-center text-[10px] text-gray-400 sm:text-xs">
          {domain}
        </div>
        <div className="w-[42px]" aria-hidden="true" />
      </div>
      <div className="relative aspect-[16/10] bg-black/40">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover object-top"
        />
      </div>
    </div>
  );
}

export function PhoneFrame({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 1024px) 25vw, 15vw',
}: FrameProps) {
  return (
    // Metallic outer border
    <div className="rounded-[18%/8.5%] bg-gradient-to-br from-zinc-300 via-zinc-600 to-zinc-800 p-[3%] shadow-2xl shadow-black/70">
      {/* Black bezel */}
      <div className="rounded-[16%/7.5%] bg-black p-[4%]">
        <div className="relative aspect-[9/19.5] overflow-hidden rounded-[13%/6%] bg-black">
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className="object-cover object-top"
          />
          {/* Notch */}
          <div
            className="absolute left-1/2 top-[1.5%] h-[3.2%] w-[34%] -translate-x-1/2 rounded-full bg-black"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}
