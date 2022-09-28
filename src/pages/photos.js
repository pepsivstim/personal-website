import React from 'react';
import Header from '../components/Header';
import '../css/photos.css';
import CaptionedImage from '../components/CaptionedImage';


import First_Picture from '../images/first_picture.JPG';
import Sunset_Home from '../images/sunset_home.JPG';
import Zion_Mountains from '../images/zion_mountains.jpeg';
import Acadia_Shore from '../images/acadia_shore.jpeg';
import Assateague_Sunset from '../images/assateague_sunset.jpeg';
import Bryce_Canyon from '../images/bryce_canyon.jpeg';


function Photos() {
  return (
    <div class="page-container">
      <Header />
      <div class="photos-page-image-container">
        <div class="row">

            <CaptionedImage name={First_Picture} />

            <CaptionedImage name={Sunset_Home} />

            <CaptionedImage name={Zion_Mountains} />

        </div>
        <div class="row">
          <div class="column">
            <CaptionedImage name={Acadia_Shore} />
          </div>
          <div class="column">
            <CaptionedImage name={Assateague_Sunset} />
          </div>
          <div class="column">
            <CaptionedImage name={Bryce_Canyon} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Photos;
