import React from 'react';
import '../../App.css';
import { SliderData } from '../MorePhoto/SliderData';
import MainSection from '../MainSection/MainSection';
import Footer from '../Footer/Footer';
import MorePhoto from '../MorePhoto/MorePhoto';

function Home() {
  return (
    <>
      <MainSection />
      <MorePhoto slides={SliderData}/>
      <Footer />
    </>
  );
}

export default Home;