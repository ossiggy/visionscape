import React from 'react';

import './css/Header.css';

const FontAwesome = require('react-fontawesome');

export default function Header(props){
  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require('./assets/logo.png')} alt="logo"/>
      </div>
      <h1 className="coming-soon">Full Site Coming Soon!</h1>
      <FontAwesome 
        name='bars' 
        size="3x" 
        className="menu-button" 
        />
    </div>
  )
}