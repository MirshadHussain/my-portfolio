import React from 'react';

const ProjectCard = ({ title, description, tags, year, type, status, onClick }) => {
  const isLive = status === "Live" || status === "Production";

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (onClick) onClick();
    }
  };

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`View ${title} case study`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      className="bg-bg-surface border border-border hover:border-accent hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent rounded-none p-8 flex flex-col gap-0 relative overflow-hidden cursor-pointer transition-all duration-300 h-full group"
    >
      {/* Top row */}
      <div className="flex justify-between items-center mb-5">
        <div className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent">
          {type}
        </div>
        <div className="font-mono text-[11px] text-text-subtle">
          {year}
        </div>
      </div>

      {/* Horizontal divider line */}
      <div className="w-full h-[1px] bg-border mb-6"></div>

      {/* Title */}
      <h3 className="font-heading font-black text-[26px] text-white leading-[1.2] m-0 mb-4">
        {title}
      </h3>

      {/* Description */}
      <p className="font-mono text-xs text-text-muted-dark leading-[1.9] m-0 mb-6 line-clamp-3">
        {description}
      </p>

      {/* Tags row */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag, index) => (
          <div key={index} className="font-mono text-[10px] tracking-[0.08em] uppercase text-[#666666] border border-border px-2.5 py-1 rounded-none bg-transparent">
            {tag}
          </div>
        ))}
      </div>

      {/* Bottom row */}
      <div className="flex justify-between items-center mt-auto pt-5 border-t border-border">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 ${isLive ? 'bg-accent' : 'bg-accent/40'}`}></div>
          <div className="font-mono text-[11px] tracking-[0.1em] uppercase text-[#888888]">
            {status}
          </div>
        </div>
        <div className="font-mono text-[11px] uppercase tracking-wider text-[#666666] transition-colors duration-300 group-hover:text-accent font-bold">
          Case Study →
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
