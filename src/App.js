import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PreviewTile from './Components/PreviewTile/PreviewTile';
import About from './Layouts/About/About';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />

        <About />
        <PreviewTile/>
        <PreviewTile/>
        <PreviewTile/>
        <PreviewTile/>
        <PreviewTile/>
        <PreviewTile/>
        <Footer />
      </div>
    );
  }
}

export default App;
