import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  // Dismiss modal on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-10 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-0"
          />

          {/* Modal Container */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative z-10 w-full max-w-4xl bg-bg-surface border border-border rounded-none p-6 md:p-10 shadow-2xl max-h-[88vh] flex flex-col overflow-hidden"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close case study modal"
              className="absolute top-6 right-6 text-text-muted hover:text-white bg-transparent border-none cursor-pointer text-xl p-2 transition-colors focus:outline-none focus:ring-2 focus:ring-accent"
            >
              <FaTimes aria-hidden="true" />
            </button>

            {/* Header / Meta */}
            <div className="mb-6 pr-10">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <span className="font-mono text-xs text-accent uppercase tracking-widest">
                  {project.type}
                </span>
                <span className="text-text-dim">•</span>
                <span className="font-mono text-xs text-text-muted">
                  {project.timeline || project.year}
                </span>
                <span className="text-text-dim">•</span>
                <span className="bg-accent/20 text-accent font-mono text-[10px] uppercase tracking-wider px-2.5 py-0.5 font-bold">
                  {project.status}
                </span>
              </div>
              <h2 id="modal-title" className="font-heading font-black text-2xl md:text-4xl text-white m-0">
                {project.title}
              </h2>
            </div>

            {/* Navigation Tabs */}
            <div role="tablist" aria-label="Case study view tabs" className="flex border-b border-border mb-6 gap-6 overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview & Problem' },
                { id: 'architecture', label: 'Architecture & Stack' },
                { id: 'impact', label: 'Features & Impact' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-mono text-xs tracking-wider uppercase pb-3 bg-transparent border-none cursor-pointer whitespace-nowrap transition-colors focus:outline-none ${
                    activeTab === tab.id ? 'text-accent border-b-2 border-accent font-bold' : 'text-text-muted hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Modal Body (Scrollable) */}
            <div className="flex-1 overflow-y-auto pr-2 space-y-6 font-mono text-xs leading-relaxed text-text-secondary">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h4 className="font-heading text-lg text-white font-bold mb-2">Project Overview</h4>
                    <p className="m-0 text-text-muted leading-relaxed">{project.overview || project.description}</p>
                  </div>
                  {project.businessProblem && (
                    <div className="bg-bg-card border border-border p-5">
                      <h4 className="font-heading text-sm text-accent font-bold mb-2 flex items-center gap-2">
                        <FaExclamationTriangle aria-hidden="true" /> Business Problem & Context
                      </h4>
                      <p className="m-0 text-text-muted leading-relaxed">{project.businessProblem}</p>
                    </div>
                  )}
                  {project.engineeringSolution && (
                    <div>
                      <h4 className="font-heading text-lg text-white font-bold mb-2">Engineering Solution</h4>
                      <p className="m-0 text-text-muted leading-relaxed">{project.engineeringSolution}</p>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'architecture' && (
                <div className="space-y-6">
                  {project.architectureSummary && (
                    <div>
                      <h4 className="font-heading text-lg text-white font-bold mb-2">System Architecture</h4>
                      <p className="m-0 text-text-muted leading-relaxed">{project.architectureSummary}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="font-heading text-lg text-white font-bold mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, idx) => (
                        <span key={idx} className="bg-surface-darker border border-border text-text-primary px-3 py-1 text-[11px] font-mono">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.technicalChallenges && project.technicalChallenges.length > 0 && (
                    <div>
                      <h4 className="font-heading text-lg text-white font-bold mb-3">Technical Challenges Overcome</h4>
                      <ul className="list-disc pl-5 space-y-2 text-text-muted m-0">
                        {project.technicalChallenges.map((challenge, idx) => (
                          <li key={idx}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeTab === 'impact' && (
                <div className="space-y-6">
                  {project.keyFeatures && project.keyFeatures.length > 0 && (
                    <div>
                      <h4 className="font-heading text-lg text-white font-bold mb-3">Key Platform Capabilities</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.keyFeatures.map((feature, idx) => (
                          <div key={idx} className="bg-bg-card border border-border p-3.5 flex items-start gap-2.5">
                            <FaCheckCircle className="text-accent text-sm mt-0.5 shrink-0" aria-hidden="true" />
                            <span className="text-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.resultsAndImpact && project.resultsAndImpact.length > 0 && (
                    <div className="bg-accent/10 border border-accent/30 p-5">
                      <h4 className="font-heading text-sm text-accent font-bold mb-3 uppercase tracking-wider">
                        Measured Business Impact & Results
                      </h4>
                      <ul className="list-disc pl-5 space-y-2 text-white m-0">
                        {project.resultsAndImpact.map((result, idx) => (
                          <li key={idx}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Footer Action Links */}
            <div className="mt-8 pt-5 border-t border-border flex justify-between items-center flex-wrap gap-4">
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-bg-card border border-border text-white text-xs font-mono tracking-wider px-5 py-2.5 hover:border-accent hover:text-accent transition-colors no-underline focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <FaGithub aria-hidden="true" /> View Source Code
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-accent text-white text-xs font-mono font-bold tracking-wider px-5 py-2.5 hover:bg-accent-hover transition-colors no-underline focus:outline-none focus:ring-2 focus:ring-white"
                  >
                    <FaExternalLinkAlt aria-hidden="true" /> Live Demo / Repo
                  </a>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="font-mono text-xs text-text-muted hover:text-white bg-transparent border-none cursor-pointer underline focus:outline-none"
              >
                Close Case Study
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
