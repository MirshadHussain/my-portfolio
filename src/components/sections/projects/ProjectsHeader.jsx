import React from 'react';
import { motion } from 'framer-motion';

const ProjectsHeader = () => {
  return (
    <div className="mb-20">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="flex items-center gap-4"
      >
        <div className="w-12 h-[1px] bg-accent"></div>
        <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-accent">
          Portfolio
        </div>
      </motion.div>

      <div className="mt-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="font-heading font-black text-[clamp(48px,8vw,88px)] text-white leading-[1.05]"
        >
          Selected
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="font-heading font-black text-[clamp(48px,8vw,88px)] text-white leading-[1.05]"
        >
          Projects<span className="text-accent">.</span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-mono text-[13px] text-text-subtle mt-4"
      >
        — 04 Projects
      </motion.div>
    </div>
  );
};

export default ProjectsHeader;
