import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { socialLinks } from '../../../data/socialLinks';

const nameMap = {
  GH: 'GitHub',
  LI: 'LinkedIn',
  FB: 'Facebook',
  IG: 'Instagram'
};

const SocialLinks = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-row gap-4 sm:gap-5 items-center bg-bg-surface/80 sm:bg-transparent backdrop-blur-md sm:backdrop-blur-none px-4 py-2 sm:p-0 border border-border/60 sm:border-none rounded-full sm:rounded-none"
    >
      {socialLinks.map((link) => {
        const Icon = link.Icon;
        const name = nameMap[link.id] || link.id;
        return (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="no-underline cursor-pointer flex items-center group focus:outline-none focus:ring-2 focus:ring-accent rounded p-1"
          >
            <Icon 
              size={18} 
              className="text-white transition-colors duration-200 group-hover:text-accent"
              aria-hidden="true"
            />
          </a>
        );
      })}
    </motion.div>
  );
};

export default SocialLinks;
