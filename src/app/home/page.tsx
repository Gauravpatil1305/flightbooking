import React from 'react';
import Hero from './components/Hero/Hero';
import ExtraService from './components/ExtraService/ExtraService';
import CabinClass from './components/CabinClass/CabinClass';
import AboutUs from './components/AboutUs/AboutUs';

import "./styles/Home.scss";


const Home: React.FC = () => {
  return (
    <section className='home'>
      <Hero />
      <ExtraService />
      <CabinClass />
      <AboutUs />
    </section>
  );
};

export default Home;