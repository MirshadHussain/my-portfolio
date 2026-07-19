import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 bg-bg-primary overflow-hidden">
        {!isMobile ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            // poster="/hero-bg-fallback.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/hero-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/hero-bg-fallback.webp')" }}
          />
        )}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/60 via-black/40 to-black/90 pointer-events-none" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-6">
        {/* Small tag line */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-6"
        >
          — DATA SCIENCE | BUSINESS ANALYTICS | SOFTWARE ENGINEERING —
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
          className="font-heading text-[clamp(48px,8vw,96px)] leading-[1.1] m-0"
        >
          <span className="text-text-primary font-normal italic">Hi! I'm </span>
          <span className="text-accent font-black">Mirshad Hussain.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="font-mono text-sm text-text-secondary mt-5 max-w-[580px] leading-[1.8] text-center"
        >
          Data Science Undergraduate at SLTC bridging business analytics with software development. I analyze complex data, solve operational problems, and build digital solutions.
        </motion.div>

        {/* Single CTA button */}
        <Link to="/about" className="no-underline">
          <Button className="mt-9 px-10 py-4" transition={{ delay: 0.8 }}>
            MORE ABOUT ME →
          </Button>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
