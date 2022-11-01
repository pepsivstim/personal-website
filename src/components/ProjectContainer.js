import React from 'react';
import '../css/ProjectContainer.css';

function ProjectContainer(props) {
  return (
    <div className='project-container'>
        <div className='project-info-container'>
            <a href={props.link} target='_blank' rel='noopener noreferrer'>{props.name}</a>
        </div> 
        <div className='project-description-container'>
            <p>{props.description}</p> 
        </div>
    </div>
  );
}

export default ProjectContainer;
