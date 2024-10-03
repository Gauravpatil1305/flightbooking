import React from 'react';
import Hero from './components/Hero/Hero';

import "./styles/Home.scss";

const Home: React.FC = () => {
  return (
    <section className='home'>
      <Hero />
    </section>
  );
};

export default Home;