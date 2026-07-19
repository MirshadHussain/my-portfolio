import React from 'react';
import { motion } from 'framer-motion';

const AboutHero = () => {
  return (
    <div className="w-full text-center pt-[100px] pb-20 px-10">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="font-heading font-bold text-[clamp(48px,8vw,80px)] m-0"
      >
        <span className="text-text-primary">About </span>
        <span className="text-accent">Me</span>
      </motion.h1>
    </div>
  );
};

export default AboutHero;
