import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

const ExploreWorkCTA = () => {
  return (
    <div className="section-padding bg-bg-primary w-full border-t border-border relative overflow-hidden">
      {/* Glow background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
        {/* Subtitle tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4"
        >
          — READY TO SEE MY CODE IN ACTION? —
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-heading text-3xl md:text-5xl font-black text-white leading-tight mb-6"
        >
          From Data Models to <span className="text-accent italic">Production Applications</span>
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-mono text-xs md:text-sm text-text-muted max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Explore full case studies including multi-tenant SaaS platforms, desktop gym management software with WhatsApp integration, and WebGL web apps.
        </motion.p>

        {/* Project Preview Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          <span className="font-mono text-[11px] text-text-secondary bg-bg-surface border border-border px-3.5 py-1.5 uppercase tracking-wider">
            ⚡ ShopManager SaaS
          </span>
          <span className="font-mono text-[11px] text-text-secondary bg-bg-surface border border-border px-3.5 py-1.5 uppercase tracking-wider">
            🏋️ Smart Gym System
          </span>
          <span className="font-mono text-[11px] text-text-secondary bg-bg-surface border border-border px-3.5 py-1.5 uppercase tracking-wider">
            🌐 Developer Portfolio
          </span>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/projects" onClick={() => window.scrollTo(0, 0)} className="no-underline inline-block">
            <Button
              className="px-10 py-4 text-sm tracking-widest"
              whileHover={{ scale: 1.05 }}
            >
              EXPLORE MY WORK →
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ExploreWorkCTA;
