import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import Wrecks_of_the_World from '../Wrecks_of_the_World.png'

function Home() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={Wrecks_of_the_World} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and to reload.
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
        <iframe width="420" height="315"
          src="https://www.youtube.com/embed/cnVIfRDm0M8">
        </iframe>
        <Button />

        <h1 color="black">WORK IN PROGRESS</h1>
      </header>
    </div>
  );
};

export default Home;
