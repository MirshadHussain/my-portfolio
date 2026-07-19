import React from 'react';
import { motion } from 'framer-motion';

const SkillBar = ({ skill, index, delayOffset = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index * 0.08) + delayOffset }}
      className="mb-7"
    >
      <div className="flex justify-between items-end mb-2 relative">
        <div className="font-mono text-xs tracking-widest uppercase text-text-secondary">
          {skill.name}
        </div>
        <div className="bg-accent text-white font-mono text-[11px] font-bold px-2 py-1 rounded-none">
          {skill.percent}
        </div>
      </div>
      <div 
        role="progressbar"
        aria-valuenow={parseInt(skill.percent)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label={`${skill.name} proficiency`}
        className="w-full h-[3px] bg-surface-mixed relative"
      >
        <motion.div
          initial={{ width: '0%' }}
          whileInView={{ width: skill.percent }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="h-full bg-accent"
        />
      </div>
    </motion.div>
  );
};

export default SkillBar;
