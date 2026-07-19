import React from 'react';
import { motion } from 'framer-motion';

const ContactHeader = () => {
  return (
    <div className="text-center mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-[13px] tracking-[0.1em] uppercase text-accent-secondary mb-3 text-center"
      >
        Get In Touch
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="font-heading font-bold text-[clamp(36px,6vw,56px)] text-white text-center leading-[1.2] m-0"
      >
        Let's Work Together
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="font-body text-base text-text-muted-dark text-center max-w-[480px] mx-auto mt-4 mb-0"
      >
        Have a project in mind or want to collaborate? Send me a message and I will get back to you within 24 hours.
      </motion.p>
    </div>
  );
};

export default ContactHeader;
