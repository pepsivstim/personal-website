import React from 'react';
import '../css/Button.css';

function Button(props) {
  return (
    <div className="button-wrapper">
      <a className="header-button" href={props.href}>{props.name}</a>
    </div>
  );
}

export default Button;
