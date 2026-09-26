import React, { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import TitleScreen from './components/TitleScreen';
import Home from './components/Home';
import Nav from './components/Nav';
import About from './components/About';
import Work from './components/Work';
import Projects from './components/Projects';
import './App.css';

const reduceMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function App() {
  const [currentPage, setCurrentPage] = useState('title');
  const [wipe, setWipe] = useState(false);

  // Screen change with a short stepped "level load" fade
  const goTo = (page) => {
    if (page === currentPage) return;
    if (reduceMotion()) {
      setCurrentPage(page);
      return;
    }
    setWipe(true);
    setTimeout(() => {
      setCurrentPage(page);
      setTimeout(() => setWipe(false), 60);
    }, 260);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const pages = {
    title: <TitleScreen onExplore={() => goTo('home')} />,
    home: <Home setPage={goTo} />,
    about: <About />,
    work: <Work />,
    projects: <Projects />,
  };

  const isContent = !['title', 'home'].includes(currentPage);

  return (
    <div className={`app app--${currentPage}`}>
      {isContent && <div className="day-backdrop" aria-hidden="true" />}
      {isContent && <Nav currentPage={currentPage} setPage={goTo} />}

      <main className={isContent ? 'main-page' : 'main-screen'}>
        {pages[currentPage]}
      </main>

      <div className={`wipe ${wipe ? 'on' : ''}`} aria-hidden="true" />
      <Analytics />
    </div>
  );
}

export default App;
