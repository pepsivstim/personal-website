import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/photo.css';
import CaptionedImage from '../components/CaptionedImage';

function Photo() {
  return (
    <div className='page-container'>
      <Header />
      <main>
        <div className='photos-container'>
          <CaptionedImage name='/images/first_picture.JPG' caption='First picture taken'/>
          <CaptionedImage name={'/images/sunset_home.JPG'} />
          <CaptionedImage name={'/images/zion_mountains.jpeg'} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Photo;
