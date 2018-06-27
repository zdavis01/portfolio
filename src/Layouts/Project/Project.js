import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Project extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <img src={this.props.src} alt={this.props.alt}></img>
        <h1>
          {this.props.title}
        </h1>
        <p>
          {this.props.body}
        </p>
      </div>
    )
  }
}

Project.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}


export default Project;
