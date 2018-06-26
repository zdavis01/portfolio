import React from 'react';
import styles from './Navigation.css';
import { Link } from 'react-router-dom'

const Navigation = () => {
  return(
    <ul>
      <li><Link className="navigationItem" to='about'>About</Link></li>
      <li><Link className="navigationItem" to='work'>Work</Link></li>
      <li><Link className="navigationItem" to='contact'>Contact</Link></li>
    </ul>
  )
}

export default Navigation;
