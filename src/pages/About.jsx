import React from 'react';
import AboutHero from '../components/sections/about/AboutHero';
import BioSection from '../components/sections/about/BioSection';
import SkillsSection from '../components/sections/about/SkillsSection';
import ResumeSection from '../components/sections/about/ResumeSection';

const About = () => {
  return (
    <div className="page-container pb-0">
      <AboutHero />
      <BioSection />
      <SkillsSection />
      <ResumeSection />
    </div>
  );
};

export default About;
