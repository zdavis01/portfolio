import PropTypes from 'prop-types';
import React, { Component } from 'react'
import styles from './PreviewTile.css';
import { Link } from 'react-router-dom';

class PreviewTile extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <Link to={this.props.to}>
          <img src={this.props.src} alt={this.props.alt} className='work-tile'></img>
        </Link>
    )
  }
}

export default PreviewTile
