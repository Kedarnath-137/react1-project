import React, { useRef } from 'react';
import './Testimonial.css';

import next_icon from '../../assest/next-icon.png'
import back_icon from '../../assest/back-icon.png'
import user_1 from '../../assest/user-1.png'
import user_2 from '../../assest/user-2.png'
import user_3 from '../../assest/user-3.png'
import user_4 from '../../assest/user-4.png'
import Footer from './footer';


function Testimonial() {

  const slider = useRef();
  let tx =0;

  const slideForward = ()=>{
    if(tx > -50){
      tx -=25 
    }
    slider.current.style.transform=`translateX(${tx}%)`
  }

  const slideBackward=()=>{
      if(tx < 0){
        tx += 25;
      }
    slider.current.style.transform=`translateX(${tx}%)`  
  }

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
      <p style={pp}>TESTIMONIALS</p>
      <br></br>
      <h2 style={{textAlign:'center',fontSize:'32px',textTransform:'none'}}>What Student Says</h2>
      <div className='testimonials'>
      <img src={next_icon} className='next-btn' onClick={slideForward}></img>
      <img src={back_icon} className='back-btn' onClick={slideBackward}></img>
      <div className='slider'>
      <ul ref={slider}>
        <li>
          <div className='slide'>
            <div className='user-info'>
              <img src={user_1}></img>
              <div>
                <h3>Swetha</h3>
                <span>B V raju, HYD</span>
              </div>
            </div>
            <p>Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and 
            commitment to academic excellence have truly exceeded my expectations.</p>
          </div>
        </li>

        <li>
          <div className='slide'>
            <div className='user-info'>
              <img src={user_2}></img>
              <div>
                <h3>Kedarnath</h3>
                <span>B V raju, HYD</span>
              </div>
            </div>
            <p>Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and 
            commitment to academic excellence have truly exceeded my expectations.</p>
          </div>
        </li>

        <li>
          <div className='slide'>
            <div className='user-info'>
              <img src={user_3}></img>
              <div>
                <h3>Manasa</h3>
                <span>B V Raju, HYD</span>
              </div>
            </div>
            <p>Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and 
            commitment to academic excellence have truly exceeded my expectations.</p>
          </div>
        </li>

        <li>
          <div className='slide'>
            <div className='user-info'>
              <img src={user_4}></img>
              <div>
                <h3>Raju</h3>
                <span>B V Raju, HYD</span>
              </div>
            </div>
            <p>Choosing to pursue my degree at Edusity was one of the best decision I've ever made. The supportive community, state-of-the-art facilities, and 
            commitment to academic excellence have truly exceeded my expectations.</p>
          </div>
        </li>

      </ul>
      </div>
    </div>
    <Footer/>
  </div>
    
  );
}


export default Testimonial;
