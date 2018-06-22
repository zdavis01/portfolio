import React from 'react';
import data from '../../Content/data.json';
import styles from './About.css';

const About = () => {
  return(
    <div className="about"> {data.about} </div>
  )
}

export default About;
