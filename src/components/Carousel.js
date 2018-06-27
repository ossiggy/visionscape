import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './css/Carousel.css';

export default class picCarousel extends React.Component {
  render(){
    return (
        <Carousel 
        className="carousel-container" 
        showArrows = {true}
        infiniteLoop = {true}
        autoPlay = {true}
        >
            <div>
                <img src={require("./assets/Adler1.png")} alt="adler-1"/>
            </div>
            <div>
                <img src={require("./assets/AdlerPool.png")} alt="adler-pool"/>
            </div>
            <div>
              <img src={require("./assets/Belgiovine1.jpeg")} alt="Belgovine1"/>
            </div>
            <div>
              <img src={require("./assets/CLCGlenridge1.jpg")} alt="glenridge1"/>
            </div>
            <div>
              <img src={require("./assets/CLCGlenridge2.jpg")} alt="glenridge2"/>
            </div>
            <div>
              <img src={require("./assets/GreenwoodLake1.jpg")} alt="GreenwoodLake1"/>
            </div>
            <div>
              <img src={require("./assets/GreenwoodLake2.jpg")} alt="GreenwoodLake2"/>
            </div>
            <div>
              <img src={require("./assets/Pereni1.jpg")} alt="Pereni1"/>
            </div>
            <div>
              <img src={require("./assets/Pereni2.jpg")} alt="Pereni2"/>
            </div>
            <div>
              <img src={require("./assets/Ramapo1.jpg")} alt="Ramapo1"/>
            </div>
            <div>
              <img src={require("./assets/Stears.jpg")} alt="Stears"/>
            </div>
            <div>
              <img src={require("./assets/Katz1.jpg")} alt="Katz1"/>
            </div>
            <div>
              <img src={require("./assets/Keiser1.jpg")} alt="Keiser1"/>
            </div>
            <div>
              <img src={require("./assets/Wendelaar.jpg")} alt="Wendelaar"/>
            </div>
        </Carousel>
    );
  }
}