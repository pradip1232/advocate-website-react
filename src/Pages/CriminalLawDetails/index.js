import React from 'react';
import { useParams } from 'react-router-dom';
import './index.scss';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

import cc from '../../components/img/details/9 1.png';
import cl from '../../components/img/details/10 1.png';
import fl from '../../components/img/details/11 1.png';
import cor from '../../components/img/details/12 1.png';
import ill from '../../components/img/details/13 1.png';
import cons from '../../components/img/details/14 1.png';
import real from '../../components/img/details/15 1.png';
import cy from '../../components/img/details/16 1.png';
import la from '../../components/img/details/17 1.png';
import arb from '../../components/img/details/17 1.png';

const CriminalLawDetails = () => {
  const { id } = useParams();

  // Add your law categories data here
  const lawCategories = [
    // Your existing law categories data
  ];

  return (
    <div className="criminal-law-details">
      {/* Add your criminal law details content here */}
    </div>
  );
};

export default CriminalLawDetails;