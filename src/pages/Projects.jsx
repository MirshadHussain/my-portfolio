import React from 'react';
import ProjectsHeader from '../components/sections/projects/ProjectsHeader';
import ProjectGrid from '../components/sections/projects/ProjectGrid';
import CallToAction from '../components/sections/projects/CallToAction';

function Projects() {
  return (
    <div className="page-container px-6 md:px-[60px] pt-[140px] pb-[100px]">
      <ProjectsHeader />
      <ProjectGrid />
      <CallToAction />
    </div>
  );
}

export default Projects;
