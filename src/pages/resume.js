import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Resume() {
  return (
    <div className="page-container">
      <Header /> 
      <main>
          
        <p>This is my resume: <a href='Timothy_Chu_Resume.pdf' target='_blank' rel='noopener noreferrer' className='main-text'> Resume</a></p>
          
      </main>
      <Footer />
      

    </div>
  );
};

export default Resume;
