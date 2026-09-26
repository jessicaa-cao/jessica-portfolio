import React from 'react';

export default function Work() {
  const experiences = [
    {
      id: 1,
      company: "Massive Data Institute",
      url: "https://mdi.georgetown.edu/",
      logo: "/logos/mdi.jpg",
      period: "Apr. '26 – Present",
      position: "Product & Data Policy Researcher",
      focus: "AI Products Risk Evaluation & K-12 Ed Tech Privacy"
    },
    {
      id: 2,
      company: "GovSkills",
      url: "https://govskills.io/",
      logo: "/logos/govskills.jpg",
      period: "Jan '26 – May '26",
      position: "Product Consultant",
      focus: "User Research & University GTM Strategy"
    },
    {
      id: 3,
      company: "Garde-Robe",
      url: "https://www.garde-robe.com/",
      logo: "/logos/garderobe.png",
      period: "Aug '25 – Mar '26",
      position: "Product Manager Intern",
      focus: "Consumer Growth & Onboarding"
    },
    {
      id: 4,
      company: "Toast",
      url: "https://pos.toasttab.com/",
      logo: "/logos/toast.jpg",
      period: "Jul '25 – Dec '25",
      position: "Product Consultant",
      focus: "UX Diagnostics & Competitive Strategy"
    },
    {
      id: 5,
      company: "SFS",
      url: "https://sfs.georgetown.edu/",
      logo: "/logos/sfs.png",
      period: "Mar '25 – Dec '25",
      position: "Web Developer Intern",
      focus: "Platform Performance & Information Architecture"
    },
    {
      id: 6,
      company: "EIN Presswire",
      url: "https://www.einpresswire.com/",
      logo: "/logos/ein.jpg",
      period: "Jan '25 – May '25",
      position: "Data Analyst Intern",
      focus: "Sales Analytics & Ad Strategy"
    }
  ];

  return (
    <div className="page">
      <div className="page-content work-content">
        <h1 className="page-title">Work</h1>

        <div className="work-grid">
          {experiences.map((exp) => (
            <article key={exp.id} className="work-card panel">
              <div className="work-logo-frame">
                <img src={exp.logo} alt="" className="work-logo" />
              </div>
              <div className="work-info">
                <h3 className="work-company-name">
                  <a href={exp.url} target="_blank" rel="noopener noreferrer" className="work-company-link">
                    {exp.company}
                  </a>
                </h3>
                <p className="work-dates">{exp.period}</p>
                <p className="work-role">{exp.position}</p>
                <p className="work-focus">{exp.focus}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
