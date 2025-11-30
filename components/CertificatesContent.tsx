'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

const certificates = [
  {
    name: 'MIT Foundations Track',
    file: 'MIT FOUNDATIONS TRACK Abdul Qader Dost.jpg',
  },
  {
    name: 'MITx Introduction to Computational Thinking and Data Science',
    file: 'MITx Introduction to Computational Thinking and Data Science.jpg',
  },
  {
    name: 'MITx Introduction to Computer Science and Programming Using Python',
    file: 'MITx Introduction to Computer Science and Programming Using Python.jpg',
  },
  {
    name: 'MITx Understand the world through data',
    file: 'MITx Understand the world through data.jpg',
  },
  {
    name: 'Module 3: Introduction to Data Analytics and Machine Learning',
    file: 'Module 3_ Introduction to Data Analytics and Machine Learning Certificate issued by MIT Open Learning.jpg',
  },
  {
    name: 'Module 4: Supervised Learning Fundamentals',
    file: 'Module 4_ Supervised Learning Fundamentals Certificate issued by MIT Open Learning.jpg',
  },
  {
    name: 'Module 5: Clustering and Descriptive AI',
    file: 'Module 5_ Clustering and Descriptive AI Certificate issued by MIT Open Learning.jpg',
  },
  {
    name: 'Module 7: Hands-On Deep Learning',
    file: 'Module 7_ Hands-On Deep Learning Certificate issued by MIT Open Learning.jpg',
  },
  {
    name: 'Machine Learning A-Z',
    file: 'Machine Learning A-Z.jpg',
  },
  {
    name: 'Coursera Certificate 1',
    file: 'Coursera J7KEMHJAMK1Z 1.jpg',
  },
  {
    name: 'Coursera Certificate 2',
    file: 'Coursera 87N1UXIQ95SC 2.jpg',
  },
];

export default function CertificatesContent() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div
            key={cert.file}
            className="group relative rounded-lg overflow-hidden bg-white/5 border border-white/10 cursor-pointer aspect-[4/3]"
            onClick={() => setSelectedCert(cert.file)}
          >
            {/* Certificate image */}
            <div className="relative w-full h-full">
              <Image
                src={`/certificates/${encodeURIComponent(cert.file)}`}
                alt={`${cert.name} certificate - Abdul Qader Dost`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading="lazy"
                quality={85}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            
            {/* Hover overlay - "View Certificate" */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
              <div className="text-center">
                <p className="text-white font-semibold text-sm">View Certificate</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for viewing certificate */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-6xl w-full max-h-[95vh] bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/70 hover:bg-black/90 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm"
                aria-label="Close"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Certificate full view */}
              <div className="w-full max-h-[95vh] overflow-auto bg-gray-50">
                <div className="relative w-full">
                  <Image
                    src={`/certificates/${encodeURIComponent(selectedCert)}`}
                    alt={`${certificates.find((c) => c.file === selectedCert)?.name || 'Certificate'} - Full certificate view - Abdul Qader Dost`}
                    width={1200}
                    height={1600}
                    className="w-full h-auto"
                    quality={90}
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
