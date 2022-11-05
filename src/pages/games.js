import React from 'react';
import '../css/about.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

function Games() {
  return (
    <div className='page-container'>
      <Header />
      <main>
        <p className='main-text'>
          I've played a number of amazing games over the years. These include:
          Cities: Skylines, Civ VI, World of Warships, World of Tanks, Battlefield V,
          and many more.  
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
