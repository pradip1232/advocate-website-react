import React from 'react';
import './index.scss';
import KnowAbout from '../../components/AboutSections/KnowAbout';
import AtText from '../../components/AboutSections/AtText';
import TabNavbarAbout from '../../components/AboutSections/TabNavbarAbout';
import { aboutUsData } from './aboutUsData';

const AboutUs = () => {
  return (
    <div className="about-us">
      <KnowAbout data={aboutUsData} />
      <AtText data={aboutUsData} />
      <TabNavbarAbout data={aboutUsData} />
    </div>
  );
};

export default AboutUs;