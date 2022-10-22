import React from 'react';
import '../css/Button.css';

function Button(props) {
  return (
    <div className="button-wrapper">
      <a className="header-button" href={props.href} target={props.target} rel={props.rel}>{props.name}</a>
    </div>
  );
}

export default Button;
