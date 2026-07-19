import React, { useState, useEffect, useRef } from 'react';
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
  const menuRef = useRef(null);

  // Close navigation menu on Escape key press or click outside
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center bg-transparent px-6 sm:px-10 py-6 pointer-events-none">
        {/* Left side empty spacer */}
        <div></div>

        {/* Right side - Hamburger button */}
        <button 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          className="pointer-events-auto flex flex-col gap-[5px] cursor-pointer bg-bg-surface/80 hover:bg-bg-card border border-border/80 p-3 shadow-lg backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
        >
          <div className={`w-5 h-[2px] bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <div className={`w-5 h-[2px] bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-[2px] bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      {/* Floating Menu Dropdown (Heights based on elements) */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[100] pointer-events-auto">
            {/* Transparent backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-[2px]"
            />

            {/* Menu Container Card */}
            <motion.div
              ref={menuRef}
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
              initial={{ opacity: 0, y: -12, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.95 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="fixed top-20 right-6 sm:right-10 w-[240px] h-auto bg-bg-surface/95 backdrop-blur-md border border-border shadow-2xl p-5 flex flex-col gap-1 z-[101]"
            >
              {/* Header label */}
              <div className="flex justify-between items-center pb-3 border-b border-border mb-1">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent font-bold">
                  Navigation
                </span>
                <button 
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close navigation menu"
                  className="cursor-pointer text-xs text-text-muted hover:text-white bg-transparent border-none p-1 focus:outline-none"
                >
                  ✕
                </button>
              </div>

              {/* Nav Links */}
              <div className="flex flex-col gap-0.5">
                {links.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.04, ease: "easeOut" }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="no-underline block"
                    >
                      {({ isActive }) => (
                        <div 
                          className={`py-2.5 px-3 flex items-center gap-3.5 cursor-pointer transition-colors duration-200 ${
                            isActive 
                              ? 'bg-accent/10 border-l-2 border-accent text-accent font-bold' 
                              : 'text-text-secondary hover:text-white hover:bg-white/5'
                          }`}
                        >
                          <div className="text-xs text-accent w-4 text-center" aria-hidden="true">
                            {link.icon}
                          </div>
                          <div className="font-mono text-xs tracking-[0.12em] uppercase">
                            {link.name}
                          </div>
                        </div>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
