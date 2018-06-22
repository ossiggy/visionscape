import React from 'react';
import {toast} from 'react-toastify';

import './css/Header.css';

const FontAwesome = require('react-fontawesome');

export default function Header(props){

  const message = "Full Site Coming Soon!";

  return(
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require('./assets/logo.png')} alt="logo"/>
      </div>
      <FontAwesome 
        name='bars' 
        size="3x" 
        className="menu-button"
        onClick={(event)=>{
          event.preventDefault();
          toast.info(message, {
          position: "top-center",
          autoClose: 3000,
          pauseOnHover: false,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: false,
          draggablePercent: 80
          });
        }} 
        />
    </div>
  )
}