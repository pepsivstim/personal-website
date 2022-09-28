import React from 'react';
import '../css/CaptionedImage.css'

function CaptionedImage(props) {
  return (
    <div class="captioned-image-container">
      <img class='captioned-image' src={props.name} />
      <div>
        Bruh
      </div>
    </div>

  );
}

export default CaptionedImage;
