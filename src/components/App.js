import React, { Component } from 'react';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import './css/App.css';

class App extends Component {
  render() {
    return(
      <div className="app">
        <Header />
        <About />
        <Footer />
      </div>
    );
  };
}

export default App;
