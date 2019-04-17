import React from 'react';
import {Jumbotron} from 'reactstrap';

import './css/About.css';

const FontAwesome = require('react-fontawesome');

export default function About(props){
  return(
    <div className='col-12' id='lander'>
      <Jumbotron className="jumbo-top">
      <h1 className="jumbo-title">Our Process</h1>        
      <p className="display-5">
          We offer a wide range of services custom tailored to fit your every
          need. Our process utilizes 3D design software allowing you to see 
          the layout on your property before any work begins.  This results in
          superior customer satisfaction and comfort knowing that the vision you
          have for your yard is being applied correctly. We work with both homeowners 
          and landscape contractors to bring their visions to life! There are endless 
          possibilities to create the perfect landscape design, and it is all possible 
          with VisionScape Design.
        </p>
      </Jumbotron>
      <Jumbotron className="jumbo-middle">
        <h1 className="jumbo-title">Areas Serviced</h1>
        <p className="display-5">
          Airmont, Allendale, Bear Mountain, Bloomingdale, 
          Chestnut Ridge, Clifton, Franklin Lakes, Greenwood Lake, 
          Haledon, Haskell, Hawthorne, Hewitt, Ho-Ho-Kus, 
          Kaser, Kinnelon, Mahwah, Midland Park, Monsey, Montebello, 
          Mount Ivy, Newfoundland, Oakland, Paterson, Pompton Lakes, 
          Ramsey, Ridgewood, Ringwood, Riverdale, Saddle River, 
          Sloatsburg, Southfields, Sterling Forest, Suffern, Tallman, 
          Totowa, Township Of Washington, Tuxedo Park, Upper Saddle River, 
          Viola, Waldwick, Wanaque, Warwick, Wayne, Wesley Hills, West Milford, 
          West Nyack, Westwood, Woodcliff Lake, Wyckoff
        </p>
      </Jumbotron>
      <Jumbotron className="jumbo-bottom">
        <h1 className="jumbo-title">Services offered</h1>
        <ul className="display-5">
          <li>3D & 2D Rendering</li>
          <li>Deck Design</li>
          <li>Outdoor Kitchen Design</li>
          <li>Drought Tolerant Landscaping</li>
          <li>Native Plant Design</li>
          <li>Plant Selections & Layouts</li>
          <li>Landscape Design</li>
          <li>Landscape Plans</li>
          <li>Patio Design</li>
          <li>Site Planning</li>
          <li>Swimming Pool Design</li>
        </ul>
      </Jumbotron>
      <Jumbotron className="jumbo-footer">
        <h2 className="jumbo-title">Contact Us</h2>
        <ul className="email">
          <li><FontAwesome name="envelope" size="1x" className="envelope"/>: <a href="mailto:visionscapeco@gmail.com" target="_blank" rel="noopener noreferrer">visionscapeco@gmail.com</a></li>
        </ul>
      </Jumbotron>
      </div>
  )
}