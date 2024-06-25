
import React from "react";
import './Contact.css'
import msg_icon from '../../assest/msg-icon.png'
import mail_icon from '../../assest/mail-icon.png'
import phone_icon from '../../assest/phone-icon.png'
import location_icon from '../../assest/location-icon.png'
import white_arrow from '../../assest/white-arrow.png';
import Footer from './footer'
function Contact (){ 
    const [result, setResult] = React.useState("");   // w3forms react

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e5f12444-424a-4c67-93d5-96b27cfb130f");
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      }).then((res) => res.json());
  
    //   const data = await response.json();
  
      if (res.success) {
        console.log('success', res);
        setResult(res.message);
        event.target.reset();
      } else {
        console.log("Error", res);
        setResult(res.message);
      }
    };

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
        <p style={pp}>CONTACT US</p>
        <br></br>
        <h2 style={{textAlign:'center',fontSize:'32px',textTransform:'none'}}>Get in Touch</h2>
            <div className="contact">
            <div className="contact-col">
            <h3>Send us a message <img src={msg_icon}></img></h3>
            <p>Feel free to reach out through contact form or find our contact information 
                below. your feedback, questions, and suggestions are important to us we strive to provide exceptional service 
                to our university community.</p>
           
        <ul>
            <li><img src={mail_icon}></img>Contact@kedar.dv</li>
            <li> <img src={phone_icon}></img>+91 7337425399</li>
            <li><img src={location_icon}></img>Narsapur, Hyderabad<br></br> India</li>
        </ul>
        </div>
        <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder="Enter your name" required/>
            <label>Phone Number</label>
            <input type="tel" name="phone" placeholder="Enter your mobile number" required/>
            <label>Write your message here</label>
            <textarea name="message" rows='6' placeholder="Enter your message" required></textarea>
            <button type="submit" className="btn dark-btn"> submit now <img src={white_arrow}></img></button>
        </form>
        <span>{result}</span>
        </div>
        </div>
        <Footer/>
      </div>
      
    )
}

export default Contact;