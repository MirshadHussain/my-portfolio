import React from 'react';
import AboutHero from '../components/sections/about/AboutHero';
import BioSection from '../components/sections/about/BioSection';
import SkillsSection from '../components/sections/about/SkillsSection';
import ResumeSection from '../components/sections/about/ResumeSection';
import ExploreWorkCTA from '../components/sections/about/ExploreWorkCTA';

const About = () => {
  return (
    <div className="page-container pb-0">
      <AboutHero />
      <BioSection />
      <SkillsSection />
      <ResumeSection />
      <ExploreWorkCTA />
    </div>
  );
};

export default About;
