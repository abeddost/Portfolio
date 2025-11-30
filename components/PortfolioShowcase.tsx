'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Award, Network } from 'lucide-react';
import CertificatesContent from './CertificatesContent';
import TechStackGrid from './TechStackGrid';

type TabType = 'certificates' | 'techstack';

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>('techstack');

  const tabs = [
    {
      id: 'techstack' as TabType,
      label: 'Tech Stack',
      icon: Network,
    },
    {
      id: 'certificates' as TabType,
      label: 'Certificates',
      icon: Award,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">
            Portfolio Showcase
          </span>
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Explore my journey through projects, certifications, and technical expertise. Each section represents a milestone in my continuous learning path.
        </p>
      </motion.div>

      {/* Tab Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mb-12"
      >
        <div className="inline-flex bg-white/5 rounded-xl p-1.5 border border-white/10 backdrop-blur-md shadow-lg">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-8 py-3 rounded-lg flex flex-col items-center gap-2 font-semibold transition-all duration-300 min-w-[120px] ${
                  isActive
                    ? 'text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-to-r from-pink-500/30 via-purple-500/30 to-blue-500/30 rounded-lg border border-pink-500/50 shadow-lg shadow-pink-500/20"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
                <motion.div
                  animate={isActive ? { 
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  } : {}}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`w-6 h-6 relative z-10 ${isActive ? 'text-pink-400' : 'text-gray-400'}`} />
                </motion.div>
                <span className="relative z-10 text-sm">{tab.label}</span>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {activeTab === 'techstack' ? (
            <TechStackGrid />
          ) : (
            <CertificatesContent />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

