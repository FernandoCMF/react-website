import '../App.css';
import React from 'react';
import HeroSection from '../Components/HeroSections/HeroSection';
import Card from '../Components/Card/Card';
import Footer from '../Components/Footer/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Card />
      <Footer />
    </>
  );
}

export default Home;
