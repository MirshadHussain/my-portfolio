import { motion } from 'framer-motion';
import { fadeIn } from '../../animations/variants';

export default function Section({ children, className = '', id = '' }) {
  return (
    <motion.section 
      id={id} 
      className={`py-20 md:py-32 ${className}`}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}
