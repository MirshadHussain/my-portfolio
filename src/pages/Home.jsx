import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SettingsPanel from '../components/ui/SettingsPanel';
import HeroSection from '../components/sections/home/HeroSection';
import ContactStrip from '../components/sections/home/ContactStrip';
import SocialLinks from '../components/sections/home/SocialLinks';

function Home() {
  const [settingsOpen, setSettingsOpen] = useState(false);

  return (
    <div className="page-container relative">
      <HeroSection />

      {/* Element 1 — Rotating settings button */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20">
        <button 
          type="button"
          onClick={() => setSettingsOpen(true)}
          aria-label="Open customization settings"
          className="w-[52px] h-[52px] bg-white border-none flex-center cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="text-[22px] text-text-dark inline-block"
            aria-hidden="true"
          >
            ⚙
          </motion.span>
        </button>
      </div>

      <ContactStrip />
      <SocialLinks />

      <SettingsPanel isOpen={settingsOpen} onClose={() => setSettingsOpen(false)} />
    </div>
  );
}

export default Home;
