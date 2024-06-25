import React from 'react';
import './Campus.css';
import Footer from './footer';
import gallery_1 from '../../assest/gallery-1.png'
import gallery_2 from '../../assest/gallery-2.png'
import gallery_3 from '../../assest/gallery-3.png'
import gallery_4 from '../../assest/gallery-4.png'
import white_arrow from '../../assest/white-arrow.png'
function Campus() {
  console.log('campus render');

  const pp = {
    textAlign:'center',
    fontSize:'15px',
    color:'#333',
    textTransform:'upperCase',
    fontWeight:'600'
}
  return (
    <div>
      <br></br>
      <p style={pp}>GALLERY</p>
      <br></br>
      <h2 style={{textAlign:'center',fontSize:'32px',textTransform:'none'}}>Campus photos</h2>
      <div className='campus'>
    <div className='gallery'>
      <img src={gallery_1}></img>
      <img src={gallery_2}></img>
      <img src={gallery_3}></img>
      <img src={gallery_4}></img>
    </div>
    <button className='btn dark-btn'>See more here<img src={white_arrow}></img></button>

  </div>
  <Footer/>
    </div>
  
  );
}

export default Campus;
