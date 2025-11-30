'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const certificates = [
  {
    name: 'MIT Foundations Track',
    file: 'MIT FOUNDATIONS TRACK Abdul Qader Dost.pdf',
  },
  {
    name: 'MITx Introduction to Computational Thinking and Data Science',
    file: 'MITx Introduction to Computational Thinking and Data Science.pdf',
  },
  {
    name: 'MITx Introduction to Computer Science and Programming Using Python',
    file: 'MITx Introduction to Computer Science and Programming Using Python.pdf',
  },
  {
    name: 'MITx Understand the world through data',
    file: 'MITx Understand the world through data.pdf',
  },
  {
    name: 'Module 3: Introduction to Data Analytics and Machine Learning',
    file: 'Module 3_ Introduction to Data Analytics and Machine Learning Certificate issued by MIT Open Learning.pdf',
  },
  {
    name: 'Module 4: Supervised Learning Fundamentals',
    file: 'Module 4_ Supervised Learning Fundamentals Certificate issued by MIT Open Learning.pdf',
  },
  {
    name: 'Module 5: Clustering and Descriptive AI',
    file: 'Module 5_ Clustering and Descriptive AI Certificate issued by MIT Open Learning.pdf',
  },
  {
    name: 'Module 7: Hands-On Deep Learning',
    file: 'Module 7_ Hands-On Deep Learning Certificate issued by MIT Open Learning.pdf',
  },
  {
    name: 'Machine Learning A-Z',
    file: 'Machine Learning A-Z.pdf',
  },
  {
    name: 'Coursera Certificate 1',
    file: 'Coursera J7KEMHJAMK1Z 1.pdf',
  },
  {
    name: 'Coursera Certificate 2',
    file: 'Coursera 87N1UXIQ95SC 2.pdf',
  },
];

export default function CertificatesContent() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.file}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            className="group relative bg-white/5 rounded-lg p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05, y: -5 }}
            onClick={() => setSelectedCert(cert.file)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                setSelectedCert(cert.file);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`View ${cert.name} certificate`}
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform"
                animate={{ 
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: 'easeInOut',
                  delay: index * 0.2
                }}
              >
                <svg
                  className="w-8 h-8 text-pink-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </motion.div>
              <h3 className="text-white font-semibold text-sm leading-tight">
                {cert.name}
              </h3>
              <span className="text-xs text-gray-400">Click to view</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for viewing certificate */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
              <h3 className="font-semibold text-gray-900">
                {certificates.find((c) => c.file === selectedCert)?.name}
              </h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="text-gray-500 hover:text-gray-900"
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
            </div>
            <div className="p-4">
              <iframe
                src={`/certificates/${encodeURIComponent(selectedCert)}`}
                className="w-full h-[70vh] border-0"
                title="Certificate PDF"
              />
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={`/certificates/${encodeURIComponent(selectedCert)}`}
                  download
                  className="px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

