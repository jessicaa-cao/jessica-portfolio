import React from 'react';
import PixelIcon from './PixelIcon';

export default function About() {
  const L = ({ href, children }) => (
    <a href={href} className="px-link" target="_blank" rel="noopener noreferrer">{children}</a>
  );

  return (
    <div className="page">
      <div className="page-content about-content">
        <h1 className="page-title">About</h1>

        <div className="about-layout">
          <aside className="player-card panel">
            <div className="portrait">
              <img src="/sprites/jessica.png" alt="Pixel art portrait of Jessica smiling" className="portrait-sprite" />
            </div>
            <p className="player-name">Jessica</p>
            <p className="player-meta">Georgetown '28</p>
          </aside>

          <div className="dialog panel">
            <div className="about-paragraphs">
  <p className="about-text">
    Hi! I'm Jessica, a <L href="https://sfs.georgetown.edu/">Georgetown</L> student studying Science, Tech &amp; International Affairs with a minor in CS. I build products and the policy around them, and I've found each side makes me better at the other.
  </p>

  <p className="about-text">
    On the product side, I redesigned onboarding and launched the first organic invite loop at <L href="https://www.garde-robe.com/">Garde-Robe</L>, and ran competitive feature analysis and AI discovery research at <L href="https://pos.toasttab.com/">Toast</L>. 
  </p>

  <p className="about-text">
    On the policy side, I worked on tech policy and AI governance as a Legislative Assistant in the <L href="https://www.house.gov/">U.S. House of Representatives</L>. Now at Georgetown's <L href="https://mdi.georgetown.edu/">Massive Data Institute</L>, I've audited 143 classroom AI tools to guide $20M in K-12 AI tool grants. The two worlds met at <L href="https://govskills.io/">GovSkills</L>, where I scoped product specs for personalized government job feeds.
  </p>

  <p className="about-text">
    Beyond work, you'll find me acting on stage, mountain biking, writing <L href="https://sites.google.com/view/staytruetoyourshelf/home">screenplays</L>, or <L href="https://beliapp.com/">Beli</L>-hopping every city I visit. Currently, I'm learning to 3D print a telescope, inspired by my annual trip to view the Perseid Meteor Showers with friends in California!
  </p>
</div>
            <span className="dialog-more" aria-hidden="true"><PixelIcon name="down" size={2} /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
