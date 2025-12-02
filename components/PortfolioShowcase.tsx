'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Award, Network, ExternalLink } from 'lucide-react';
import CertificatesContent from './CertificatesContent';
import TechStackGrid from './TechStackGrid';
import Projects from './Projects';

type TabType = 'projects' | 'certificates' | 'techstack';

export default function PortfolioShowcase() {
  const [activeTab, setActiveTab] = useState<TabType>('projects');

  const tabs = [
    {
      id: 'projects' as TabType,
      label: 'Projects',
      icon: ExternalLink,
    },
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

      {/* Tab Navigation - Matching Reference Design */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white/5 rounded-lg p-1 border border-white/10">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={isActive}
                className={`relative px-6 py-4 rounded-md flex flex-col items-center gap-2 font-medium transition-all duration-200 min-w-[100px] ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <span className="text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'projects' && <Projects />}
        {activeTab === 'techstack' && <TechStackGrid />}
        {activeTab === 'certificates' && <CertificatesContent />}
      </div>
    </div>
  );
}
