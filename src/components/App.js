import React, { Component } from 'react';
import {ToastContainer} from 'react-toastify';
import {Route, withRouter} from 'react-router-dom';
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
        <Route exact path="/" component={Carousel} />
        <Route exact path="/about" component={About} />
        {/* <Route exact path="/contact" component={Contact} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/testimonials" component={Testimonials} /> */}
        <Footer />
      </div>
    );
  };
}

export default withRouter(App);

