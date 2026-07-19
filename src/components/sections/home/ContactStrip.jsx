import React from 'react';
import { motion } from 'framer-motion';

const ContactStrip = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-8 left-10 z-20 flex flex-col gap-1"
    >
      <div className="font-mono text-xs text-white font-normal">
        Let's work together
      </div>
      <a 
        href="mailto:mirshadhhussain@gmail.com" 
        className="font-mono text-xs text-accent no-underline hover:underline focus:outline-none focus:ring-1 focus:ring-accent"
      >
        mirshadhhussain@gmail.com
      </a>
      <a 
        href="tel:+94776559959" 
        className="font-mono text-xs text-white no-underline hover:underline focus:outline-none focus:ring-1 focus:ring-white"
      >
        +94 776559959
      </a>
    </motion.div>
  );
};

export default ContactStrip;
