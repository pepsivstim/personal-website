import React from 'react';
import '../css/Header.css';
import Button from './Button.js';

function Header() {
  return (
    <div className="header">
      <div className="logo-div">
        <a href="/" className="logo">Timothy Chu</a>
      </div>
      
      <div className="header-right">
        <Button name={"HOME"} href="/"/>
        <Button name={"Photos"} href="/photos"/>
        <Button name={"About"} href="/about"/>
        <Button name={"Art"} href="/art"/>
        <Button name={"Video"} href="/video"/>
        <Button name={"Resume"} href="/resume"/>
      </div>
    </div>
  );
}

export default Header;
