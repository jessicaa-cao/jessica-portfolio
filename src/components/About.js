import React from 'react';

export default function About() {
  const linkStyle = {
    color: 'var(--blue)',
    fontWeight: 'bold',
    textDecoration: 'none',
  };

  return (
    <div className="page">
      <div className="page-content about-content">
        <h1 className="page-title">About</h1>
        
        <div className="about-paragraphs">
          <p className="about-text">
            Hi! I'm Jessica, a{' '}
            <a href="https://sfs.georgetown.edu/" style={linkStyle} target="_blank" rel="noopener noreferrer">Georgetown</a>{' '}
            student studying Science, Tech &amp; International Affairs, with a minor in CS. Across my work experiences and personal projects, I've worn whatever hat the moment called for—PM, developer, data analyst, or designer—to move ideas forward.
          </p>

<p className="about-text">
  I've spearheaded viral growth strategies and onboarding redesigns at{' '}
  <a href="https://www.garde-robe.com/" style={linkStyle} target="_blank" rel="noopener noreferrer">Garde-Robe</a>,
  {' '}run competitive feature analysis and AI discovery research at{' '}
  <a href="https://pos.toasttab.com/" style={linkStyle} target="_blank" rel="noopener noreferrer">Toast</a>,
  {' '}scoped product specs for personalized government job feeds at{' '}
  <a href="https://govskills.io/" style={linkStyle} target="_blank" rel="noopener noreferrer">GovSkills</a>,
  {' '}and more.
</p>

    <p className="about-text">
  Beyond work, you'll find me acting on stage, mountain biking, writing{' '}
  <a href="https://sites.google.com/view/staytruetoyourshelf/home" style={linkStyle} target="_blank" rel="noopener noreferrer">screenplays</a>, or{' '}
  <a href="https://beliapp.com/" style={linkStyle} target="_blank" rel="noopener noreferrer">Beli</a>-hopping
  {' '}every city I visit. I'm driven by curiosity, creativity, and community—and I love constantly learning and building products that bring real value to users.
</p>

        </div>
      </div>
    </div>
  );
}
