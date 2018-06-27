import React, { Component } from 'react';
import {ToastContainer} from 'react-toastify';
import Header from './Header';
import Carousel from './Carousel';
import About from './About';
import Footer from './Footer';
import 'react-toastify/dist/ReactToastify.css';
import './css/App.css';

class App extends Component {
  render() {
    return(
      <div className="app">
        <Header />
        <ToastContainer
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggablePercent = {80}
        />
        <Carousel />
        <About />
        <Footer />
      </div>
    );
  };
}

export default App;
