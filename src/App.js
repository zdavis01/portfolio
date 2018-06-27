import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PreviewTile from './Components/PreviewTile/PreviewTile';
import About from './Layouts/About/About';
import Main from './Main/Main';
import Projects from './Content/work.json';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Navigation/>
        <Main/>
        {
          Projects.map(project =>
            <div key={project.key}>
              <PreviewTile to={project.to} src={project.src} alt={project.alt} />
            </div>
          )
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
