import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
function Running() {
  return (
    <div className='page-container'>
      <Header />
      <main>
        <h1>
          Unoffical PRs:
        </h1>
        <p className='main-text'>
          Mile: 5:19
          1500m: 5:02
          5K: 18:32
          8k: 31:22
        </p>
      </main>
      <Footer />
        
    </div>
  );
};

export default Running;
