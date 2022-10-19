import React from 'react';
import '../css/Header.css';
import Button from './Button.js';

function Header() {
  return (
    <div className="header">
      <div className='logo-div'>
        <a href="/" className="logo">TIMOTHY CHU</a>
      </div>
      <div className="header-right">
        <Button name={"About"} href="/about"/>
        <Button name={"Resume"} href="/resume"/>
        <div class="dropdown">
          <h1 class="dropbutton" href='/'>Media</h1>
          <div class="dropdown-content">
            <Button name="Photo" href="/photos"/>
            <Button name="Art" href="/art"/>
            <Button name="Video" href="/video"/>
          </div>
        </div>
        <div class="dropdown">
          <h1 class="dropbutton" href='/'>Hobbies</h1>
          <div class="dropdown-content">
            <Button name="Running" href="/art"/>
            <Button name="Aquariums" href="/video"/>
            <Button name="Music" href="/music"/>
          </div>
        </div>
      </div>
      <div className='hamburger-menu'>
          <div className='hamburger-line'></div>
          <div className='hamburger-line'></div>
          <div className='hamburger-line'></div>
      </div>
    </div>
  );
}

export default Header;
