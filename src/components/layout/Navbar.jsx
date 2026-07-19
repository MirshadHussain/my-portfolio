import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { name: 'Home', path: '/', icon: '⌂' },
  { name: 'About', path: '/about', icon: '☰' },
  { name: 'Projects', path: '/projects', icon: '⊞' },
  { name: 'Contact', path: '/contact', icon: '✉' }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close navigation menu on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-transparent px-10 py-7">
        {/* Left side empty spacer */}
        <div></div>

        {/* Right side - Hamburger button */}
        <button 
          type="button"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          className="flex flex-col gap-[5px] cursor-pointer bg-transparent border-none p-2 rounded focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <div className="w-6 h-[2px] bg-white" />
          <div className="w-6 h-[2px] bg-white" />
          <div className="w-6 h-[2px] bg-white" />
        </button>
      </nav>

      {/* Right Side Panel Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: 320 }}
            animate={{ x: 0 }}
            exit={{ x: 320 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            className="fixed top-0 right-0 w-[320px] h-screen bg-[#1e1e1e]/97 z-[100] flex flex-col justify-center py-10 pl-10 pr-0"
          >
            {/* Close Button */}
            <button 
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
              className="absolute top-6 right-6 cursor-pointer text-[20px] text-white bg-transparent border-none p-2 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              ✕
            </button>

            {/* Nav Links */}
            <div className="flex flex-col gap-0">
              {links.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.06, ease: "easeOut" }}
                >
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="no-underline"
                  >
                    {({ isActive }) => (
                      <div 
                        className="group py-3.5 border-b border-white/5 flex items-center gap-4 cursor-pointer relative"
                      >
                        {isActive && (
                          <div className="absolute -left-10 top-0 bottom-0 w-[3px] bg-accent" />
                        )}
                        <div className="text-sm text-accent w-5 text-center" aria-hidden="true">
                          {link.icon}
                        </div>
                        <div className={`font-mono text-[13px] tracking-[0.12em] uppercase transition-colors duration-200 ${isActive ? 'text-accent' : 'text-[#aaaaaa] group-hover:text-white'}`}>
                          {link.name}
                        </div>
                      </div>
                    )}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
