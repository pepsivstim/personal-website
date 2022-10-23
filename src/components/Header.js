import React from 'react';
import '../css/Header.css';


function Header() {

  const newTabSVG =  <svg className='new-tab-svg'fill="none" height="1em" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="1em">
                        <path d="M18 14v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                        <path d="M15 4h6v6"></path>
                        <path d="M10 15L21 3"></path>
                      </svg>
  
  const githubLink = <a href='https://github.com/pepsivstim' target='_blank' rel='noopener noreferrer'>GitHub{newTabSVG}</a> ;
  const linkedinLink = <a href='https://www.linkedin.com/in/timchu2002' target='_blank' rel='noopener noreferrer'>LinkedIn{newTabSVG}</a>;
  const youtubeLink = <a href='https://www.youtube.com/c/pepsivstim' target='_blank' rel='noopener noreferrer'>YouTube{newTabSVG}</a>;
  const spotifyLink = <a href='https://open.spotify.com/user/eminaenigma?si=825d8eba2d144e82' target='_blank' rel='noopener noreferrer'>Spotify{newTabSVG}</a>;

  function LinkContainer(props) { return <div className='link-container'>{props.children}</div>};

  function Dropdown(props) { 
    return (
    <div className="dropdown">
      <h1 className="dropbutton" href='/'>{props.name}</h1>
      <div className="dropdown-content">
          {props.children}
      </div>        
    </div>)
  };


  const runningLink = <a href='/running'>Running</a>;
  const projectLink = <a href='/projects'>Projects</a>;
  const resumeLink = <a href='/resume'>Resume</a>;
  const videoLink = <a href='/video'>Video</a>;
  const photoLink = <a href='/photo'>Photo</a>;
  const artLink = <a href='/art'>Art</a>;
  const musicLink = <a href='/music'>Music</a>;

  return (
    <div className="header">
      <div className='logo-div'>
        <a href="/" className="logo">TIMOTHY CHU</a>
      </div>
      <div className="header-right">
        <LinkContainer>{projectLink}</LinkContainer>
        <LinkContainer>{resumeLink}</LinkContainer>
        <Dropdown name='Links'>
            <LinkContainer>{githubLink}</LinkContainer>
            <LinkContainer>{youtubeLink}</LinkContainer>
            <LinkContainer>{linkedinLink}</LinkContainer>
            <LinkContainer>{spotifyLink}</LinkContainer>
        </Dropdown>
        <Dropdown name='Other'>
            <LinkContainer>{videoLink}</LinkContainer>
            <LinkContainer>{photoLink}</LinkContainer>
            <LinkContainer>{artLink}</LinkContainer>
            <LinkContainer>{musicLink}</LinkContainer>
            <LinkContainer>{runningLink}</LinkContainer>
        </Dropdown>
      </div>
      <div className='hamburger-menu'>
          <div className='hamburger-line'></div>
          <div className='hamburger-line'></div>
          <div className='hamburger-line'></div>
          <div className="hamburger-content">
            <LinkContainer>{projectLink}</LinkContainer>
            <LinkContainer>{resumeLink}</LinkContainer>
            <LinkContainer>{artLink}</LinkContainer>
            <LinkContainer>{musicLink}</LinkContainer>
            <LinkContainer>{videoLink}</LinkContainer>
            <LinkContainer>{runningLink}</LinkContainer>
            <LinkContainer>{githubLink}</LinkContainer>
            <LinkContainer>{youtubeLink}</LinkContainer>
            <LinkContainer>{linkedinLink}</LinkContainer>
            <LinkContainer>{spotifyLink}</LinkContainer>
          </div>
          
      </div>
    </div>
  );
}

export default Header;
