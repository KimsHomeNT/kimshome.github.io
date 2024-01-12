import React from 'react';
import '../../App.css';
import { SliderData } from '../MorePhoto/SliderData';
import MainSection from '../MainSection/MainSection';
import Footer from '../Footer/Footer';
import MorePhoto from '../MorePhoto/MorePhoto';
import Features from '../Features/Features';
import Partners from '../Partners/Partners';

function Home() {
  return (
    <>
      <MainSection />
      {/* <Features /> */}
      <MorePhoto slides={SliderData}/>
      <Partners />
      <Footer />
    </>
  );
}

export default Home;