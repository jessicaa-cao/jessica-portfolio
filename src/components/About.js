import React from 'react';

export default function About() {
  return (
    <div className="page">
      <div className="page-content about-content">
        <h1 className="page-title">About</h1>
        
        <div className="about-paragraphs">
          <p className="about-text">
            Hi! I'm Jessica, a <span className="blue-text">Georgetown</span> student studying Science, Technology & International Affairs 
            with a minor in Computer Science. With experience across product, security, and technology governance, I bring creativity and clarity around incentives, design decisions, and long-term impact to any team. 
          </p>
          
          <p className="about-text">
            <strong>Currently:</strong> Currently, I’m a Product Management Intern at<strong>Garde-Robe,</strong> where I improve growth and onboarding UX for a social shopping platform. I also serve as a Legislative Intern in the <strong>U.S. House of Representatives</strong> researching AI policy, intellectual property, and data privacy, and as a Research Assistant at the <strong>Massive Data Institute</strong> evaluating privacy and security risks in K-12 AI tools as part of a $20M grant initiative.
          </p>
          
          <p className="about-text">
            <strong>Previously:</strong> At <strong>Toast Inc.</strong>, I worked on reducing ordering friction and improving restaurant discovery. I analyzed 12 competing platforms, audited search visibility across four AI ranking systems, and designed a high-fidelity menu-filtering feature now progressing toward pilot launch.
          </p>
        </div>
      </div>
    </div>
  );
}
