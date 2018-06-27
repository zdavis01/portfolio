import React from 'react';
import styles from './Navigation.css';
import { Link } from 'react-router-dom';

const navigation = [
    'about',
    'work',
    'contact',
]

const Navigation = () => {
  return(
    <div>
      <ul>
        {navigation.map(item =>
          <li key={item}>
            <Link className='navigationItem' to={item}>{item}</Link>
          </li>
        )}
      </ul>
    </div>
  )
}

export default Navigation;
