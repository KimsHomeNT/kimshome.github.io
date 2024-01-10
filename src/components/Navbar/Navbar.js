import React, {useState,useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import { Button } from '../Button/Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <=960){
      setButton(false);
    } else{
      setButton(true);
    }
  };

  useEffect(() =>{
    showButton();
  },[]);

  window.addEventListener('resize',showButton);
  function goToWhatsapp() {
    window.location.href = "https://wa.me/+601120797329";};
  
  const sliderRef = useRef(null);
  const scrollToSection = (sectionId) => {
    const sectionRef = document.getElementById(sectionId);
    if (sectionRef) {
      const offset = -80;
      const elementPosition = sectionRef.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition + offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };


  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img className='kims-home-small-logo' src='/icons/white-kh-logo.png'/>
            Kim's Home
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
          </div>
          
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-items">
              <Link to="/" className="nav-links" onClick = {() => { closeMobileMenu(); scrollToSection('first-page'); }}>
                Home
              </Link>
            </li>

            <li className="nav-items">
            <Link to="" className="nav-links" onClick={() => { closeMobileMenu(); scrollToSection('image-slider'); }}>
                Gallery
              </Link>
            </li>

            <li className="nav-items">
              <Link to="/" className="nav-links" onClick = {closeMobileMenu}>
                Calender
              </Link>
            </li>

            <li>
              <Link
                to='https://wa.me/+601120797329'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                <img class= 'whatsapp-logo' src={process.env.PUBLIC_URL + '/icons/whatsapp.png'}/>Contact Us
              </Link>
            </li>

          </ul>
          {button && <Button onClick={goToWhatsapp} buttonStyle='btn--contactus'>
            <img class= 'whatsapp-logo' src={process.env.PUBLIC_URL + '/icons/whatsapp.png'}/>Contacts Us
          </Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar;