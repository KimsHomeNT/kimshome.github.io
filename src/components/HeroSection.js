import React,{ useRef } from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
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

    <div id='first-page' className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>KIM'S HOME</h1>
      <p>Your best choice</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={() => scrollToSection('image-slider')}
        >
          More Photo
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => scrollToSection('calender')}
        >
          Check Availability
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;