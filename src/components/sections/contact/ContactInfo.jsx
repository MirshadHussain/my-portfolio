import React from 'react';
import { motion } from 'framer-motion';
import { infoCards } from '../../../data/contactData';

const ContactInfo = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        {infoCards.map((card, index) => {
          const isEmail = card.label.toLowerCase() === 'email';
          const href = isEmail ? `mailto:${card.value}` : `https://${card.value}`;
          return (
            <motion.a
              key={index}
              href={href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-bg-dark border border-border-dark rounded-[14px] p-5 px-6 flex items-center gap-4 transition-all duration-300 hover:border-accent-secondary hover:-translate-y-1 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-secondary block no-underline"
            >
              <div className="text-2xl" aria-hidden="true">{card.icon}</div>
              <div className="flex flex-col gap-1">
                <div className="text-xs text-text-muted-dark">{card.label}</div>
                <div className="text-[15px] font-medium text-white">{card.value}</div>
              </div>
            </motion.a>
          );
        })}
      </div>
      
      <div className="text-[13px] text-text-muted-dark mt-6 leading-[1.7]">
        Based in Sri Lanka 🇱🇰.<br/>Open to opportunities worldwide.
      </div>
    </div>
  );
};

export default ContactInfo;
