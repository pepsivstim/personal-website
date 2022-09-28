import React from 'react';
import '../css/Header.css';
import Button from './Button.js';

function Header() {
  return (
    <div class="header">
      <a href="#default" class="logo">Timothy Chu</a>
      <div class="header-right">
        <Button name={"Home"} href="/"/>
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
