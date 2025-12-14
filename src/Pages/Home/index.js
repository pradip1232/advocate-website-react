import React from 'react';
import './index.scss';
import HeroSection from '../../components/HeroSection';
import { homeData } from './homeData';

const Home = () => {
  return (
    <div className="home">
      <HeroSection data={homeData} />
    </div>
  );
};

export default Home;