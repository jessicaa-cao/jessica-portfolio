import React, { useState } from 'react';

export default function Work() {
  const [hovered, setHovered] = useState(null);

  const experiences = [
    {
      id: 1,
      company: "Garde-Robe",
      logo: "/logos/garderobe.png",
      period: "Aug '25 – Present",
      position: "Product Manager Intern",
      focus: "Consumer Growth & Onboarding UX"
    },
    {
      id: 2,
      company: "U.S. House of Representatives",
      logo: "/logos/house.png",
      period: "Jan '26 – Present",
      position: "Legislative Intern",
      focus: "AI Policy & Technology Governance"
    },
    {
      id: 3,
      company: "Massive Data Institute",
      logo: "/logos/mdi.jpg",
      period: "Jan '26 – Present",
      position: "Research Assistant",
      focus: "Prof. Amy O'Hara, AI Risk Evaluation & Education Tech"
    },
    {
      id: 4,
      company: "Toast",
      logo: "/logos/toast.jpg",
      period: "Jul '25 – Dec '25",
      position: "Product Management Consultant",
      focus: "UX Diagnostics & Competitive Strategy"
    },
    {
      id: 5,
      company: "SFS",
      logo: "/logos/sfs.png",
      period: "Mar '25 – Dec '25",
      position: "Web Developer Intern",
      focus: "Platform Performance & Information Architecture"
    }
  ];

  return (
    <div className="page">
      <div className="page-content work-content">
        <h1 className="page-title">Work</h1>
        
        <div className="work-grid">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              className="work-card-simple"
              onMouseEnter={() => setHovered(exp.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="work-logo-container">
                <img src={exp.logo} alt={exp.company} className="work-logo" />
              </div>
              
              <div className="work-info">
                <h3 className="work-company-name">{exp.company}</h3>
                <p className="work-dates">{exp.period}</p>
                <p className="work-role">{exp.position}</p>
                <p className={`work-focus ${hovered === exp.id ? 'visible' : ''}`}>
                  {exp.focus}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
