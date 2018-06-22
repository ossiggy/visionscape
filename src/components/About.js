import React from 'react';
import './css/About.css';

export default function About(props){
  return(
    <div className="about col-12">
      <h1 className="about-title col-12">About Visionscape</h1>
      <div className="about-text-container col-6">
        <h2 className="process">Our Process</h2>
        <p className="about-p1 col-12">
          We offer a wide range of services custom tailored to fit your every
          need. Our process utilizes 3D design software allowing you to see 
          the layout on your property before any work begins.  This results in
          superior customer satisfaction and comfort knowing that the vision you
          have for your yard is being applied correctly.
        </p>
        <h2 className="services col-12">Services offered</h2>
        <ul className="info-list col-12">
          <li>3D Rendering</li>
          <li>Deck Design</li>
          <li>Drafting</li>
          <li>Drought Tolerant Landscaping</li>
          <li>Garden Design</li>
          <li>Landscape Design</li>
          <li>Landscape Plans</li>
          <li>Patio Design</li>
          <li>Site Planning</li>
          <li>Swimming Pool Design</li>
        </ul>
        <h2 className="areas-serviced col-12">Areas Serviced</h2>
        <p className="areas-p">
        Airmont, Allendale, Bear Mountain, Bloomingdale, 
        Chestnut Ridge, Clifton, Franklin Lakes, Greenwood Lake, 
        Haledon, Haskell, Hawthorne, Hewitt, Ho-Ho-Kus, 
        Kaser, Kinnelon, Mahwah, Midland Park, Monsey, Montebello, 
        Mount Ivy, Newfoundland, Oakland, Paterson, Pompton Lakes, 
        Ramsey, Ridgewood, Ringwood, Riverdale, Saddle River, 
        Sloatsburg, Southfields, Sterling Forest, Suffern, Tallman, 
        Totowa, Township Of Washington, Tuxedo Park, Upper Saddle River, 
        Viola, Waldwick, Wanaque, Warwick, Wayne, Wesley Hills, West Milford, 
        West Nyack, Westwood, Woodcliff Lake, Wyckoff</p>
        <h2 className="contact-us col-12">Contact Us</h2>
        <ul className="contact-list col-12">
          <li>Phone: 201-887-1594</li>
          <li>Email: <a href="mailto:visionscapeco@gmail.com" target="_blank">visionscapeco@gmail.com</a></li>
        </ul>
      </div>
    </div>
  )
}