import React from 'react';
import PixelIcon from './PixelIcon';

const TABS = [
  { name: 'About', page: 'about' },
  { name: 'Work', page: 'work' },
  { name: 'Projects', page: 'projects' },
];

export default function Nav({ currentPage, setPage }) {
  return (
    <nav className="hud" aria-label="Site">
      <div className="hud-inner">
        <button className="px-btn px-btn--icon px-btn--sm" onClick={() => setPage('home')} aria-label="Back to menu">
          <PixelIcon name="home" size={2} />
        </button>
        <button className="hud-name" onClick={() => setPage('home')}>Jessica Cao</button>
        <div className="hud-tabs">
          {TABS.map((t) => (
            <button
              key={t.page}
              className={`px-btn px-btn--sm ${currentPage === t.page ? 'is-pressed' : ''}`}
              aria-current={currentPage === t.page ? 'page' : undefined}
              onClick={() => setPage(t.page)}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
