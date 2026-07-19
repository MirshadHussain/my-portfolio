import React from 'react';
import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import { infoItems } from '../../../data/aboutData';
import { FaDownload } from 'react-icons/fa';

const easeOutExpo = [0.16, 1, 0.3, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: easeOutExpo,
    },
  },
};

const BioSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 lg:px-12 py-8 lg:py-16">
      {/* 
        Layout Grid:
        - Mobile (<768px): Stack vertically, 100% width, 32px gap
        - Tablet (768px-1023px): Stack vertically, image 75% width centered
        - Laptop (1024px-1439px): 45% image / 55% content
        - Desktop (1440px+): 42% image / 58% content, 64px gap
      */}
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-[45%_1fr] xl:grid-cols-[42%_1fr] gap-8 md:gap-12 lg:gap-16 items-start w-full">
        
        {/* Left Column — Portrait Frame */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="w-full md:w-[75%] lg:w-full mx-auto self-start"
        >
          <div className="relative w-full max-h-[680px] rounded-[24px] overflow-hidden p-2.5 bg-white/[0.03] backdrop-blur-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] group hover:border-white/20 transition-colors duration-500">
            <div className="relative w-full h-full rounded-[18px] overflow-hidden bg-bg-surface">
              <img
                src="/about-photo.webp"
                alt="Mirshad Hussain"
                loading="lazy"
                className="w-full h-auto max-h-[660px] object-cover object-top rounded-[18px] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* Soft depth gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg-darker/50 via-transparent to-transparent pointer-events-none rounded-[18px]" />
            </div>
          </div>
        </motion.div>

        {/* Right Column — Content & Personal Info Grid */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="w-full max-w-[700px] flex flex-col justify-between"
        >
          <div>
            {/* Name */}
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[56px] text-white tracking-tight leading-[1.1] mb-3">
              Mirshad Hussain
            </h2>

            {/* Subtitle */}
            <p className="font-mono text-sm sm:text-[18px] text-accent font-medium tracking-wide mb-6">
              Data Science Undergraduate & Aspiring Business Analyst
            </p>

            {/* Bio Paragraph */}
            <p className="font-mono text-sm sm:text-[18px] text-text-muted leading-[1.9] max-w-[70ch] mb-8">
              I am a Data Science Undergraduate at Sri Lanka Technology Campus (SLTC) passionate about bridging business analytics, data science, and software engineering. My background combines technical analytical thinking with proven leadership experience as a former Head Prefect, School Athletic Champion, and Leadership Development graduate. I focus on solving real-world business problems by translating data insights into impactful digital solutions.
            </p>

            {/* Personal Information — 2-Column Responsive Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
            >
              {infoItems.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="flex items-center gap-4 p-4 rounded-[16px] bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-accent/40 hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-[12px] bg-accent/10 border border-accent/20 flex items-center justify-center text-accent text-sm shrink-0 group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block mb-0.5">
                      {item.label}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-white font-semibold truncate block">
                      {item.value}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* CTA Action Button */}
          <div>
            <Button
              className="inline-flex items-center gap-3 px-8 py-4 text-xs tracking-[0.2em] rounded-xl hover:shadow-[0_0_25px_rgba(232,69,10,0.4)] transition-all duration-300 cursor-pointer"
            >
              <FaDownload className="text-sm" />
              <span>DOWNLOAD MY CV</span>
            </Button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default BioSection;
