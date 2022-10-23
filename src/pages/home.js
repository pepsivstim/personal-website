import React from 'react';
import '../css/home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {
  const mainText = `Welcome to my website! I plan for this to be a personal portfolio showcasing my projects,
                    interests, and hobbies I pursue in my free time. Work in Progress!!`

  return (
    <div className="page-container">
      <Header />
        <main>
          <h1 className="main-text">
            {mainText}
          </h1>    
          <img src='/images/acadia_night.jpeg' alt='Acadia Night'/>
        </main>
      <Footer />
    </div>
  );
};

export default Home