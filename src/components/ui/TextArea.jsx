import React, { useId } from 'react';

const TextArea = ({ label, value, onChange, className = "", ...props }) => {
  const textareaId = useId();
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={textareaId} className="text-[13px] text-text-muted-dark mb-1.5 select-none">{label}</label>
      <textarea 
        id={textareaId}
        className="contact-input w-full bg-surface-darker border border-border-dark rounded-[10px] px-4 py-3 text-sm text-white font-body outline-none h-[140px] resize-y focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default TextArea;
