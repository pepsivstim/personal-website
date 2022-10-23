import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Video() {
  const mainText = `I got into video editing recently and I love it.`;
  
  return (
    <div className='page-container'>
      <Header />
      <main>
        <p className='main-text'>{mainText}</p>
      </main>
      <Footer />
    </div>
  );
};

export default Video;
