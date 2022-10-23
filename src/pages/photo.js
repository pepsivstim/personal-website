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
          <CaptionedImage name='/images/sunset_home.JPG' caption='Trail Sunset'/>
          <CaptionedImage name='/images/shanghai_skyscrapers.jpeg' caption='Shanghai Skyscrapers'/>
          <CaptionedImage name='/images/assateague_sunset.jpeg' caption='Assateague Sunset'/>
          <CaptionedImage name='/images/zion_mountains.jpeg' caption='Zion Mountains'/>
          <CaptionedImage name='/images/taipei_skyline.jpeg' caption='Taipei Skyline'/>
          <CaptionedImage name='/images/twilight_tree.jpeg' caption='Twilight Tree'/>
          <CaptionedImage name='/images/acadia_shore.jpeg' caption='Acadia Shore'/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Photo;
