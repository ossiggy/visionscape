import React from 'react';

import './css/Footer.css';

const FontAwesome = require('react-fontawesome');

export default function Footer(props){

  return(
    <div className="footer col-12">
      <h1 className="footer-title">Check us out on social media!</h1>
      <a href="https://www.instagram.com/visionscapedesign/" target="_blank">
        <FontAwesome name="instagram" size="3x" className="instagram" />
      </a>
    </div>
  )
}