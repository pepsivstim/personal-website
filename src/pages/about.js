import React from 'react';
import '../css/about.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

function About() {
  return (
    <div className='page-container'>
      <Header />
      <main>
        <p className='main-text'>HI! I'm Timothy, a student at the University of Maryland College Park</p>
        <img src='/images/selfie.jpeg' alt="Selfie"/>
        <img src='/images/acadia_night.jpeg' alt="Acadia Night"/>
      </main>
      <Footer />
      
    </div>
  );
};

export default About;
