import React from 'react';
import { motion } from 'framer-motion';

const Loading = () => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-bg-primary font-mono">
      <div className="relative flex flex-col items-center gap-6">
        {/* Glassmorphic spinner asset */}
        <div className="relative w-14 h-14 flex items-center justify-center">
          <motion.div
            className="absolute inset-0 border-2 border-accent/20 border-t-accent rounded-none"
            animate={{ rotate: 360 }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
          />
          <motion.div
            className="w-2.5 h-2.5 bg-accent"
            animate={{
              scale: [0.8, 1.4, 0.8],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* Text loading */}
        <motion.div
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="text-[10px] tracking-[0.25em] text-accent uppercase font-bold"
        >
          LOADING PIPELINE
        </motion.div>
      </div>
    </div>
  );
};

export default Loading;
