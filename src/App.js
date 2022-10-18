import React from 'react';
import './css/App.css';
import Home from './pages/home';
import About from './pages/about';
import Photos from './pages/photos';
import Art from './pages/art';
import Video from './pages/video';
import Music from './pages/music';
import Resume from './pages/resume';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route exact path='/' element= <Home /> />
              <Route path='/about' element= <About/> />
              <Route path='/photos' element= <Photos/> />
              <Route path='/art' element= <Art/> />
              <Route path='/video' element= <Video/> />
              <Route path='/music' element= <Music/> />
              <Route path='/resume' element= <Resume/> />

          </Routes>
        </Router>
  );
}

export default App;
