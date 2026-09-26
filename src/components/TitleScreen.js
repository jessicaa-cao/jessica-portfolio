import React from 'react';

export default function TitleScreen({ onExplore }) {
  return (
    <div className="screen title-screen">
      <div className="twinkles" aria-hidden="true">
        {[...Array(10)].map((_, i) => <span key={i} className={`twinkle t${i}`} />)}
      </div>

      <div className="title-content">
        <h1 className="title-heading">
          Welcome to<br />Jessica's Portfolio!
        </h1>
        <p className="title-sub">Are you ready?</p>
        <button className="px-btn px-btn--night px-btn--lg" onClick={onExplore}>
          Explore
        </button>
      </div>
    </div>
  );
}
