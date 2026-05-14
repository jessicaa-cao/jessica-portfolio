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
            Currently, I'm a PM intern at{' '}
            <a href="https://govskills.io/" style={linkStyle} target="_blank" rel="noopener noreferrer">GovSkills</a>,
            {' '}turning student research into product specs for personalized job matching, role eligibility labels, and clearer application timelines. In past roles, I've improved onboarding UX and growth strategy at{' '}
            <a href="https://www.garde-robe.com/" style={linkStyle} target="_blank" rel="noopener noreferrer">Garde-Robe</a>,
            {' '}prototyped restaurant discovery features at{' '}
            <a href="https://pos.toasttab.com/" style={linkStyle} target="_blank" rel="noopener noreferrer">Toast</a>,
            {' '}and built web/data projects across{' '}
            <a href="https://sfs.georgetown.edu/" style={linkStyle} target="_blank" rel="noopener noreferrer">Georgetown SFS</a>{' '}
            and{' '}
            <a href="https://www.einpresswire.com/" style={linkStyle} target="_blank" rel="noopener noreferrer">EIN Presswire</a>.
          </p>

          <p className="about-text">
            Beyond work, you'll find me acting on stage, mountain biking, writing for my book blog, or{' '}
            <a href="https://beliapp.com/" style={linkStyle} target="_blank" rel="noopener noreferrer">Beli</a>-hopping
            {' '}every city I visit. I'm driven by curiosity, creativity, and community—and I love constantly learning and building products that bring real value to users.
          </p>
        </div>
      </div>
    </div>
  );
}
