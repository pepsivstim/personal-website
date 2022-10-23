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
          <CaptionedImage src='/images/first_picture.JPG' caption='First picture taken'/>
          <CaptionedImage src='/images/sunset_home.JPG' caption='Trail Sunset'/>
          <CaptionedImage src='/images/shanghai_skyscrapers.jpeg' caption='Shanghai Skyscrapers'/>
          <CaptionedImage src='/images/assateague_sunset.jpeg' caption='Assateague Sunset'/>
          <CaptionedImage src='/images/zion_mountains.jpeg' caption='Zion Mountains'/>
          <CaptionedImage src='/images/taipei_skyline.jpeg' caption='Taipei Skyline'/>
          <CaptionedImage src='/images/twilight_tree.jpeg' caption='Twilight Tree'/>
          <CaptionedImage src='/images/acadia_shore.jpeg' caption='Acadia Shore'/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Photo;
