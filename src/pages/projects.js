import React from 'react';
import '../css/projects.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectContainer from '../components/ProjectContainer.js';
import {JCONVERTER, PERSONAL_WEBSITE, SPACE_SHOOTER_GAME} from '../links.js';

function Projects() {
  return (
    <div className='page-container'>
        <Header />
        <main>
          <ProjectContainer name="JConverter" link={JCONVERTER} description="GUI-based application to convert text documents"/>
          <ProjectContainer name="Personal Website" link={PERSONAL_WEBSITE} description="Personal website built with React"/>
          <ProjectContainer name="Space Shooter Game" link={SPACE_SHOOTER_GAME} description="Mobile space shooter game built with Unity"/>
        </main>
        <Footer />
    </div>
  );
};

export default Projects;
