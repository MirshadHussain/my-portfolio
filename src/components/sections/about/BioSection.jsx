import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import { infoItems } from '../../../data/aboutData';

const BioSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full">
      {/* Left column — Photo */}
      <div className="relative w-full min-h-[500px] overflow-hidden bg-bg-primary">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono text-[13px] text-text-subtle"></span>
        </div>
        <img 
          src="/about-photo.webp" 
          alt="Mirshad Hussain"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-[center_15%]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-bg-primary to-100% z-1 pointer-events-none" />
      </div>

      {/* Right column — Bio content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="px-6 py-10 md:p-[60px] bg-bg-surface"
      >
        <div className="font-heading font-bold text-3xl text-text-primary mb-1">
          Mirshad Hussain
        </div>
        <div className="font-mono text-xs tracking-[0.1em] uppercase text-accent mb-6">
          Data Science Undergraduate & Aspiring Business Analyst
        </div>
        <p className="font-mono text-[13px] text-text-muted leading-[1.9] mb-8 m-0">
          I am a Data Science Undergraduate at Sri Lanka Technology Campus (SLTC) passionate about bridging business analytics, data science, and software engineering. My background combines technical analytical thinking with proven leadership experience as a former Head Prefect, School Athletic Champion, and Leadership Development graduate. I focus on solving real-world business problems by translating data insights into impactful digital solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
          {infoItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2.5">
              <div className="text-sm text-accent">
                {item.icon}
              </div>
              <div className="flex items-center">
                <span className="font-mono text-[11px] text-[#666666] uppercase whitespace-nowrap">
                  {item.label} :&nbsp;
                </span>
                <span className="font-mono text-xs text-text-primary font-bold">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>

        <Button className="mt-8 px-8 py-3.5">
          DOWNLOAD MY CV
        </Button>
      </motion.div>
    </div>
  );
};

export default BioSection;
