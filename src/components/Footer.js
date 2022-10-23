import React from 'react';
import '../css/Footer.css';
import {GITHUB, SPOTIFY, LINKEDIN, YOUTUBE} from '../links.js';


function Footer() {
  return (
    <div className='footer'>
      <div className='footer-info-container'>
        <p>© 2022 Timothy Chu</p>
      </div>
      <div className='icon-container'>
        <a href={LINKEDIN} target='_blank' rel='noopener noreferrer'><img src='/svg/linkedin_icon.svg'/></a>
        <a href={SPOTIFY} target='_blank' rel='noopener noreferrer'><img src='/svg/spotify_icon.svg'/></a>
        <a href={YOUTUBE} target='_blank' rel='noopener noreferrer'><img src='/svg/youtube_icon.svg'/></a>
        <a href={GITHUB} target='_blank' rel='noopener noreferrer'><img src='/svg/github_icon.svg'/></a>
      </div>

    </div>
  );
}

export default Footer;
