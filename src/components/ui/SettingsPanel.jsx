import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const colors = [
  '#E8C22A', '#2196F3', '#795548', '#00BCD4',
  '#E8450A', '#9C27B0', '#4CAF50', '#607D8B',
  '#64B5F6', '#00838F'
];

const SettingsPanel = ({ isOpen, onClose }) => {
  const [activeColor, setActiveColor] = useState('#E8450A');
  const [activeSkin, setActiveSkin] = useState('Dark');

  const handleColorChange = (color) => {
    setActiveColor(color);
    document.documentElement.style.setProperty('--color-accent', color);
  };

  const handleSkinChange = (skin) => {
    setActiveSkin(skin);
    if (skin === 'Dark') {
      document.documentElement.style.setProperty('--color-bg-primary', '#1a1a1a');
      document.documentElement.style.setProperty('--color-bg-surface', '#222222');
      document.documentElement.style.setProperty('--color-text-primary', '#ffffff');
    } else {
      document.documentElement.style.setProperty('--color-bg-primary', '#f5f5f5');
      document.documentElement.style.setProperty('--color-bg-surface', '#ffffff');
      document.documentElement.style.setProperty('--color-text-primary', '#1a1a1a');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Customization settings"
          initial={{ x: 220 }}
          animate={{ x: 0 }}
          exit={{ x: 220 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-1/2 -translate-y-1/2 right-0 w-[220px] bg-white text-[#1a1a1a] p-6 z-30 shadow-[-4px_0_20px_rgba(0,0,0,0.3)]"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close settings panel"
            className="absolute top-3 right-3 w-7 h-7 rounded-full bg-[#f0f0f0] flex items-center justify-center cursor-pointer text-sm text-[#1a1a1a] border-none hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-accent"
          >
            ×
          </button>

          {/* COLOR SWITCHER */}
          <div className="font-mono text-[10px] tracking-[0.15em] font-bold text-[#1a1a1a] mb-4 mt-2">
            COLOR SWITCHER
          </div>
          <div className="grid grid-cols-4 gap-2 mb-6">
            {colors.map((color, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleColorChange(color)}
                aria-label={`Set accent color to ${color}`}
                className="w-8 h-8 rounded-full cursor-pointer border-2 transition-colors duration-200 hover:border-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-accent"
                style={{
                  backgroundColor: color,
                  borderColor: activeColor === color ? '#1a1a1a' : 'transparent'
                }}
              />
            ))}
          </div>

          {/* BODY SKIN */}
          <div className="font-mono text-[10px] tracking-[0.15em] font-bold text-[#1a1a1a] mb-3">
            BODY SKIN
          </div>
          <div role="radiogroup" aria-label="Body skin selector" className="flex flex-col gap-2">
            {['Dark', 'Light'].map((skin) => (
              <button
                key={skin}
                type="button"
                role="radio"
                aria-checked={activeSkin === skin}
                onClick={() => handleSkinChange(skin)}
                className="flex items-center gap-2 cursor-pointer bg-transparent border-none p-1 text-left focus:outline-none focus:ring-1 focus:ring-accent"
              >
                <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center">
                  {activeSkin === skin && (
                    <div className="w-2 h-2 rounded-full bg-[#1a1a1a]" />
                  )}
                </div>
                <span className="font-mono text-[11px] text-[#333333] select-none">
                  {skin}
                </span>
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SettingsPanel;
