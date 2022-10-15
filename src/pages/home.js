import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className="page-container">
      <Header />
        <main>
          <div className="main-container">
            <h1 className="main-text">WORK in PROGRESS!!!</h1>
            <img src="/images/Wrecks_of_the_World.png" alt="logo" class="center" />
            <p className="caption">This is a drawing I did in Third grade for an art contest spreading awareness about lifeboats.</p>
          </div>
        </main>
      <Footer />
    </div>
  );
};

export default Home