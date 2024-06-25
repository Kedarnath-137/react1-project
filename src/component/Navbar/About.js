
import React from "react";
import './About.css'
import about_img from '../../assest/about.png'
import play_icon from '../../assest/play-icon.png'
import Footer from './footer'

function About ({setPlayState}){
console.log('about render');

    return(
        <div>
            <div className="about">
            <p></p>
            <div className="about-left">
                <img src={about_img} className="about-img"></img>
                <img src={play_icon} className="play-icon" onClick={() =>{setPlayState(true)}}></img>
            </div>
            <div className="about-right">
            <h3>ABOUT UNIVERSITY</h3>
            <h2>Nurturing Tomorrow's Leader Today</h2>    
            <p>Embark on a transformative educational journey with our university's 
             comprehensive education programs. Our cutting-edge curriculum is designed to empower students with the knowledge, 
             skills, and experiences needed to excel in the dynamic field of education </p>
            <p>With a focus on innovtion, hands-on learning, and personalized mentorship, our programs 
            prepare aspiring educators to make a meaningful impact in classrooms., schools, and communities
            </p>
            <p>Whether you aspire to become a teacher, administrator, counselor, or educational leader, our diverse range of programs 
            offers the perfect pathway to achieve your goals and unlock your full potential in shaping 
            the future of education.
             </p>
            </div>            
        </div>
         <Footer/>
        </div>
        
    )
}

export default About;