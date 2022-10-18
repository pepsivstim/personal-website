import React from 'react';
import '../css/Header.css';
import Button from './Button.js';

function Header() {
  return (
    <div className="header">
      <div className="logo-div">
        <a href="/" className="logo">TIMOTHY CHU</a>
      </div>
      
      <div className="header-right">
        <Button name={"About"} href="/about"/>
        <Button name={"Resume"} href="/resume"/>

        <div class="dropdown">
          <a class="dropbtn" href='/'>Hobbies</a>
          <div class="dropdown-content">
          <Button name="Art" href="/art"/>
          <Button name="Video" href="/video"/>
          <Button name="Photo" href="/photos"/>
          <Button name="Music" href="/music"/>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Header;
