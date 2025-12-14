import React from 'react';
import './index.scss';
import ExpertiseHeroSection from '../../components/ExpertiseSections/ExpertiseHeroSection';
import LawSectionCards from '../../components/ExpertiseSections/LawSectionCards';

const Expertise = () => {
  return (
    <div className="expertise">
      <ExpertiseHeroSection />
      <LawSectionCards />
    </div>
  );
};

export default Expertise;