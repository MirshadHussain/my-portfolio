import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../../ui/ProjectCard';
import ProjectModal from '../../ui/ProjectModal';
import { projects } from '../../../data/projects';

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-border">
        {projects.map((project, index) => (
          <motion.div
            key={project.id || index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.12, duration: 0.6 }}
            className="bg-bg-primary"
          >
            <ProjectCard
              {...project}
              onClick={() => setSelectedProject(project)}
            />
          </motion.div>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={Boolean(selectedProject)}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
};

export default ProjectGrid;
