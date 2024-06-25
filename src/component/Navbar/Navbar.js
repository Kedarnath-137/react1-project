import React,{useState} from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assest/logo.png';
import menu_icon from '../../assest/menu-icon.png'
function Navbar() {

  const [mobileMenu,setMobileMenu]=useState(false)
  const toggleMenu = ()=>{
      mobileMenu? setMobileMenu(false):setMobileMenu(true)
  }
  return (
    <nav className='container'>
      <img src={logo} alt="Logo" className="logo" />
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
        <Link to="/"><li>Home</li></Link>
        <Link to="/program"><li>Program</li></Link>
        <Link to="/about"><li>About</li></Link>
        <Link to="/campus"><li>Campus</li></Link>
        <Link to="/testimonial"><li>Testimonial</li></Link>
        <Link to='/contact'><button className='btn'>Contact us</button></Link>
        <Link to ='/userauth'><li>sign up</li></Link>
        <Link to='/signout'><li>sign Out</li></Link>
      </ul>
      <img src={menu_icon} className='menu-icon' onClick={toggleMenu}></img>
    </nav>
  );
}

export default Navbar;



