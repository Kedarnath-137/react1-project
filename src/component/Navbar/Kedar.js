import React from 'react';

import './Home.css';
import dark_arrow from '../../assest/dark-arrow.png'
import Footer from './footer';
function Kedar() {
  
  return (
    <div>
       <div className='hero container'>
  <div className='hero-text'>
    <h2>We Ensure better education for a better world</h2>
    <p>Our cutting curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education.</p>
    <button className='btn'>Explore more<img src={dark_arrow}></img></button>
  </div>
   </div>
   <Footer/>
    </div>
  
  );
}

export default Kedar;
