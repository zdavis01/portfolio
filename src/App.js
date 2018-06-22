import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PreviewTile from './Components/PreviewTile/PreviewTile';
import data from './Content/data.json';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <div className="about"> {data.about} </div>
        <PreviewTile/>
        <PreviewTile/>
        <Footer />
      </div>
    );
  }
}

export default App;
