import React from 'react';
import { Link } from 'react-router-dom';
import { notFoundData } from './notFoundData';
import './index.scss';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">{notFoundData.title}</h1>
        <p className="not-found__message">{notFoundData.message}</p>
        <Link to="/" className="btn btn-primary not-found__home-btn">
          {notFoundData.homeButtonText}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;