import React from 'react';
import '../css/art.css'
import Header from '../components/Header';
import Footer from '../components/Footer';
import CaptionedImage from '../components/CaptionedImage';

function Art() {
  const mainText = `I've always had a natural curiosity towards drawing. I drew here and there as a child, but didn't start really 
                    practicing seriously until the beginning of 2022. I'm still very much a novice, but it is a good destresser and 
                    it's always so satisfying seeing stuff I draw look good.`;
                    
  return (
    <div className='page-container'>
      <Header />
        <main>
          <p className='main-text'>{mainText}</p>
          <CaptionedImage src='/images/Wrecks_of_the_World.png' caption='This is a drawing I did in Third grade for an art contest spreading awareness about lifeboats.'></CaptionedImage>

        </main>
        <Footer />
    </div>
  );
};

export default Art;
