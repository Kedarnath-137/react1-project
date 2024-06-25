import React from "react";

import './Program.css'
import program_1 from '../../assest/program-1.png'
import program_2 from '../../assest/program-2.png'
import program_3 from '../../assest/program-3.png'
import program_icon_1 from '../../assest/program-icon-1.png'
import program_icon_2 from '../../assest/program-icon-2.png'
import program_icon_3 from '../../assest/program-icon-3.png'
import Footer from "./footer";
function Program (){
    console.log('program render');
   
    const pp = {
        textAlign:'center',
        fontSize:'15px',
        color:'#333',
        textTransform:'upperCase',
        fontWeight:'600'
    }
    return(
        <div>
            <br></br>
            <p style={pp}>OUR PROGRAM</p>
            <br></br>
            <h2 style={{textAlign:'center',fontSize:'32px',textTransform:'none'}}>What We Offer</h2>
           <div className="programs">
            <div className="program"> 
            <img src={program_1}></img>
            <div className="caption">
                <img src={program_icon_1}></img>
                <p>Graduation Degree</p>
            </div>
            </div>
            <div className="program">
            <img src={program_2}></img>
            <div className="caption">
                <img src={program_icon_2}></img>
                <p>Master Degree</p>
            </div>
            </div>
            <div className="program">
            <img src={program_3}></img>
            <div className="caption">
                <img src={program_icon_3}></img>
                <p>post Graduation</p>
            </div>
            </div>
        
        </div>
        <Footer/>
        </div>
     
    )
}

export default Program;