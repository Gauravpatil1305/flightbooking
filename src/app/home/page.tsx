import React from 'react';
import Hero from './components/Hero/Hero';
import ExtraService from './components/ExtraService/ExtraService';

import "./styles/Home.scss";

const Home: React.FC = () => {
  return (
    <section className='home'>
      <Hero />
      <ExtraService />
    </section>
  );
};

export default Home;