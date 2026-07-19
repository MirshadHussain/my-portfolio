import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../../ui/SectionTitle';
import { experienceData, educationData } from '../../../data/aboutData';

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const currentTabData = activeTab === 'experience' ? experienceData : educationData;

  return (
    <div className="section-padding bg-bg-surface w-full">
      <SectionTitle title="My Resume" className="text-center" />

      {/* Tab switcher */}
      <div role="tablist" aria-label="Resume sections" className="flex justify-center items-center gap-0 mb-12">
        <button
          role="tab"
          id="tab-experience"
          aria-selected={activeTab === 'experience'}
          aria-controls="panel-experience"
          onClick={() => setActiveTab('experience')}
          className={`font-mono text-[13px] tracking-[0.12em] bg-transparent border-none cursor-pointer px-8 py-2 transition-colors duration-200 focus:outline-none focus:text-accent focus:ring-2 focus:ring-accent ${activeTab === 'experience' ? 'text-accent' : 'text-[#666666]'}`}
        >
          EXPERIENCE
        </button>
        <div className="w-[1px] h-5 bg-[#444444]" aria-hidden="true"></div>
        <button
          role="tab"
          id="tab-education"
          aria-selected={activeTab === 'education'}
          aria-controls="panel-education"
          onClick={() => setActiveTab('education')}
          className={`font-mono text-[13px] tracking-[0.12em] bg-transparent border-none cursor-pointer px-8 py-2 transition-colors duration-200 focus:outline-none focus:text-accent focus:ring-2 focus:ring-accent ${activeTab === 'education' ? 'text-accent' : 'text-[#666666]'}`}
        >
          EDUCATION
        </button>
      </div>

      {/* Cards layout */}
      <div className="relative min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            role="tabpanel"
            id={`panel-${activeTab}`}
            aria-labelledby={`tab-${activeTab}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {currentTabData.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-bg-card border border-border rounded-none p-7 relative"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="font-heading font-bold text-xl text-white">
                    {card.role}
                  </div>
                  <div className="bg-accent text-white font-mono text-[10px] font-bold tracking-[0.08em] px-3 py-1.5 rounded-none whitespace-nowrap">
                    {card.period}
                  </div>
                </div>
                <div className="font-mono text-xs text-accent tracking-[0.08em] mb-4">
                  {card.company}
                </div>
                <div className="font-mono text-xs text-[#777777] leading-[1.8]">
                  {card.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ResumeSection;
