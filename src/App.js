import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import PreviewTile from './Components/PreviewTile/PreviewTile';
import About from './Layouts/About/About';
import Main from './Main/Main';
import Work from './Content/work.json';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        {/* <Navigation/> */}
        <Main/>
        {
          Work.map(x =>
            <PreviewTile to={x.to} src={x.src} alt={x.alt} />
          )
        }
        <Footer/>
      </div>
    );
  }
}

export default App;
