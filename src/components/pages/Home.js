import React from 'react';
import '../../App.css';
import { SliderData } from '../SliderData';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import MorePhoto from '../MorePhoto';

function Home() {
  return (
    <>
      <HeroSection />
      <MorePhoto slides={SliderData}/>
      <Footer />
    </>
  );
}

export default Home;