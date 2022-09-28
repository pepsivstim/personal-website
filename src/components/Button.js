import React from 'react';
import '../css/Button.css';

function Button(props) {
  return (
    <div class="button-wrapper">
      <a class="header-button" href={props.href}>{props.name}</a>
    </div>
  );
}

export default Button;
