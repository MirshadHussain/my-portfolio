import React from 'react';

const SectionTitle = ({ title, className = '' }) => {
  return (
    <h2 className={`font-heading font-bold text-4xl text-white mb-12 ${className}`}>
      {title}
    </h2>
  );
};

export default SectionTitle;
