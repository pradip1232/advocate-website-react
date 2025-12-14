import React from 'react';
import './index.scss';

const CircularLoader = ({ size = 'medium', color = 'primary' }) => {
  return (
    <div className={`circular-loader circular-loader--${size} circular-loader--${color}`}>
      <div className="circular-loader__spinner"></div>
    </div>
  );
};

export default CircularLoader;