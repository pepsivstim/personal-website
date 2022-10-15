import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../css/photos.css';
import CaptionedImage from '../components/CaptionedImage';




function Photos() {
  return (
    <div class="page-container">
      <Header />
      <main>
        <div class='photos-container'>
          <div class="row">
              <CaptionedImage name={'/images/first_picture.JPG'} />
              <CaptionedImage name={'/images/sunset_home.JPG'} />
              <CaptionedImage name={'/images/zion_mountains.jpeg'} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Photos;
