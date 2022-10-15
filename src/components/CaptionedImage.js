import React from 'react';
import '../css/CaptionedImage.css'

function CaptionedImage(props) {
  return (
    <div class="captioned-image-container">
      <img class='captioned-image' alt="Didn't load" src={props.name} />
      <div>
        <p bottom="0">Caption</p>
      </div>
    </div>

  );
}

export default CaptionedImage;
