import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const pages = {
    home: <Home setPage={setCurrentPage} />,
    about: <About />,
    work: <Work />,
    projects: <Projects />
  };

  return (
    <div className="app">
      {currentPage !== 'home' && (
        <nav className="nav">
          <button onClick={() => setCurrentPage('home')} className="nav-name">
            Jessica Cao
          </button>
          <div className="nav-links">
            <button 
              onClick={() => setCurrentPage('about')}
              className={currentPage === 'about' ? 'active' : ''}
            >
              About
            </button>
            <button 
              onClick={() => setCurrentPage('work')}
              className={currentPage === 'work' ? 'active' : ''}
            >
              Work
            </button>
            <button 
              onClick={() => setCurrentPage('projects')}
              className={currentPage === 'projects' ? 'active' : ''}
            >
              Projects
            </button>
          </div>
        </nav>
      )}
      
      <main className={currentPage === 'home' ? 'main-home' : 'main-page'}>
        {pages[currentPage]}
      </main>
    </div>
  );
}

export default App;
