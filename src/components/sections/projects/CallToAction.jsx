import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../../ui/Button';

const CallToAction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mt-20 text-center"
    >
      <div className="font-heading text-[32px] italic text-white">
        Have a project in mind?
      </div>
      <Link to="/contact" className="no-underline inline-block">
        <Button className="mt-6 px-10 py-4 tracking-widest" whileHover={{ scale: 1.03 }}>
          Let's Talk →
        </Button>
      </Link>
    </motion.div>
  );
};

export default CallToAction;
