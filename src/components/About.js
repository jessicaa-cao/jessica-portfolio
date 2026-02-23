import React from 'react';

export default function About() {
  return (
    <div className="page">
      <div className="page-content about-content">
        <h1 className="page-title">About</h1>
        
        <div className="about-paragraphs">
          <p className="about-text">
            Hi! I'm Jessica, a <span className="blue-text">Georgetown</span> student studying Science, Technology & International Affairs 
            with a minor in Computer Science. With experience across product and technology governance, I bring creativity and clarity around incentives, tradeoffs, and long-term impact to any product team. I focus on designing intuitive systems that work for users and hold up in the real world.
          </p>
          
          <p className="about-text">
            <strong>Currently:</strong> I'm a Product Management Intern at <strong>Garde-Robe</strong>, where I'm designing a Beli-inspired referral growth system that increases network effects by unlocking app features through friend-invite milestones. I'm focused on activation, retention loops, and turning social interactions into measurable growth.
          </p>
          
          <p className="about-text">
            <strong>Previously:</strong> At <strong>Toast Inc.</strong>, I worked on reducing ordering friction and improving restaurant discovery. I analyzed 12 competing platforms, audited search visibility across four AI ranking systems, and designed a high-fidelity menu-filtering feature now progressing toward pilot launch.
          </p>
        </div>
      </div>
    </div>
  );
}
