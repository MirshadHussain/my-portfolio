import React, { useId } from 'react';

const InputField = ({ label, type = "text", value, onChange, className = "", ...props }) => {
  const inputId = useId();
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={inputId} className="text-[13px] text-text-muted-dark mb-1.5 select-none">{label}</label>
      <input 
        id={inputId}
        type={type}
        className="contact-input w-full bg-surface-darker border border-border-dark rounded-[10px] px-4 py-3 text-sm text-white font-body outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default InputField;
