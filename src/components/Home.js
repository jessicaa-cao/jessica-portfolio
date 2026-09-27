import React, { useRef, useState } from 'react';
import PixelIcon from './PixelIcon';

const LINKS = [
  { name: 'About', page: 'about' },
  { name: 'Work', page: 'work' },
  { name: 'Projects', page: 'projects' },
];

const SOCIALS = [
  { label: 'Email', icon: 'mail', href: 'mailto:caojessica3@gmail.com' },
  { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/in/jessicakcao', external: true },
  { label: 'Resume', icon: 'resume', href: '/JessicaCao_PortfolioResume.pdf', external: true },
];

export default function Home({ setPage }) {
  const [selected, setSelected] = useState(null);
  const [tip, setTip] = useState(null);
  const refs = useRef([]);

  // Arrow keys move the selector like a game menu
  const onKeyDown = (e, idx) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault();
      const next = (idx + (e.key === 'ArrowDown' ? 1 : -1) + LINKS.length) % LINKS.length;
      refs.current[next]?.focus();
    }
  };

  return (
    <div className="screen menu-screen">
      <div className="menu-content">
        <header className="menu-header">
          <h1 className="menu-name">Jessica Cao</h1>
          <p className="menu-tagline">I build products and the policy around them.</p>
        </header>

        <nav className="menu-list" aria-label="Main menu">
          {LINKS.map((link, idx) => (
            <div className="menu-row" key={link.page}>
              <span className={`menu-selector ${selected === idx ? 'on' : ''}`} aria-hidden="true">
                <PixelIcon name="right" size={4} />
              </span>
              <button
                ref={(el) => (refs.current[idx] = el)}
                className="px-btn px-btn--lg menu-btn"
                onMouseEnter={() => setSelected(idx)}
                onMouseLeave={() => setSelected(null)}
                onFocus={() => setSelected(idx)}
                onBlur={() => setSelected(null)}
                onKeyDown={(e) => onKeyDown(e, idx)}
                onClick={() => setPage(link.page)}
              >
                {link.name}
              </button>
            </div>
          ))}
        </nav>

        <div className="menu-socials">
          {SOCIALS.map((s) => (
            <div className="social-slot" key={s.label}>
              <a
                href={s.href}
                className="px-btn px-btn--icon"
                aria-label={s.label}
                {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onMouseEnter={() => setTip(s.label)}
                onMouseLeave={() => setTip(null)}
                onFocus={() => setTip(s.label)}
                onBlur={() => setTip(null)}
              >
                <PixelIcon name={s.icon} size={3} />
              </a>
              <span className={`social-tip ${tip === s.label ? 'on' : ''}`} aria-hidden="true">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
