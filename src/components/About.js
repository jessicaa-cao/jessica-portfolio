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
                Hi! I'm Jessica, a <L href="https://sfs.georgetown.edu/">Georgetown</L> student studying Science, Tech &amp; International Affairs, with a minor in CS. Across my work experiences and personal projects, I've worn whatever hat the moment called for—PM, developer, data analyst, or designer—to move ideas forward.
              </p>

              <p className="about-text">
                I've spearheaded viral growth strategies and onboarding redesigns at <L href="https://www.garde-robe.com/">Garde-Robe</L>, run competitive feature analysis and AI discovery research at <L href="https://pos.toasttab.com/">Toast</L>, scoped product specs for personalized government job feeds at <L href="https://govskills.io/">GovSkills</L>, and more.
              </p>

              <p className="about-text">
                Beyond work, you'll find me acting on stage, mountain biking, writing <L href="https://sites.google.com/view/staytruetoyourshelf/home">screenplays</L>, or <L href="https://beliapp.com/">Beli</L>-hopping every city I visit. I'm driven by curiosity, creativity, and community—and I love constantly learning and building products that bring real value to users.
              </p>
            </div>
            <span className="dialog-more" aria-hidden="true"><PixelIcon name="down" size={2} /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
