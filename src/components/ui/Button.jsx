import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  onClick, 
  disabled, 
  className = '', 
  style = {}, 
  initial = { opacity: 0, y: 20 },
  animate = { opacity: 1, y: 0 },
  transition = { delay: 0.2 },
  whileHover = { scale: 1.03 }
}) => {
  return (
    <motion.button
      initial={initial}
      animate={animate}
      transition={transition}
      whileHover={whileHover}
      onClick={onClick}
      disabled={disabled}
      className={`bg-accent text-white font-mono text-[13px] font-bold tracking-[0.15em] uppercase border-none rounded-none disabled:cursor-default disabled:opacity-70 ${className}`}
      style={style}
    >
      {children}
    </motion.button>
  );
};

export default Button;
