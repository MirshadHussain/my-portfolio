import React from 'react';
import SectionTitle from '../../ui/SectionTitle';
import SkillBar from '../../ui/SkillBar';
import { leftSkills, rightSkills } from '../../../data/skills';

const SkillsSection = () => {
  return (
    <div className="section-padding bg-bg-primary w-full">
      <SectionTitle title="My Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 md:gap-x-20">
        {/* Left column skills */}
        <div>
          {leftSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}
        </div>

        {/* Right column skills */}
        <div>
          {rightSkills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} delayOffset={leftSkills.length * 0.08} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
