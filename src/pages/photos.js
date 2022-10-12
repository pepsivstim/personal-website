import React from 'react';
import Header from '../components/Header';
import '../css/photos.css';
import CaptionedImage from '../components/CaptionedImage';




function Photos() {
  return (
    <div class="page-container">
      <Header />
      <div class="photos-page-image-container">
        <div class="row">

            <CaptionedImage name={'/images/first_picture.JPG'} />

            <CaptionedImage name={'/images/sunset_home.JPG'} />

            <CaptionedImage name={'/images/zion_mountains.jpeg'} />

        </div>
      </div>

    </div>
  );
};

export default Photos;
