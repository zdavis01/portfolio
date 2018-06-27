import React from 'react';
import styles from './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return(
    <div className="container">
      <Link className="homeButton" to="/" style={{ textDecoration: 'none' }}>
        PORTFOLIO
      </Link>
    </div>
  );
};

export default Header;
