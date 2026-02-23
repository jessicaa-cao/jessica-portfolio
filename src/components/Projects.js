import React, { useState } from 'react';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState('garderobe');

  const projects = {
    universieats: {
      title: "UniversiEats",
      subtitle: "AI Meal Planning for College Students",
      role: "Product Manager",
      context: "Georgetown Product Case Competition - 1st Place",
      date: "April 2025",
      video: "/videos/universieats.mov",
      tagline: "Designing an AI-powered campus dining app that helps college students consistently eat healthy despite time pressure, dietary restrictions, and decision fatigue.",
      problem: "College students struggle to maintain consistent nutrition despite having meal plans. They juggle classes, clubs, work, and hectic social lives. This leads to predictable behaviors of skipped meals, random fast food choices, poor nutrition tracking, or allergen mistakes.",
      goal: "Create an AI-driven product that automatically tells students what to eat, where to eat, and when to eat, while fitting their schedule, nutrition goals, allergies, and campus logistics.",
      strategyIntro: "We approached the problem through three behavioral barriers:",
      strategy: [
        { focus: "Time", why: "Students forget to eat between obligations" },
        { focus: "Decision fatigue", why: "Too many dining options → avoidance" },
        { focus: "Personal health goals", why: "Students want health outcomes but won't manually track" }
      ],
      strategyNote: "We backed these barriers with 15+ user interviews, focusing on a solution that accommodates diverse preferences and dietary restrictions.",
      insights: [
        "68% of students skip at least one meal daily",
        "48% feel undernourished",
        "Dining decisions are made within ~2 minutes",
        "Nutritional data exists but is ignored or inaccurate",
        "Allergies create anxiety and avoidance"
      ],
      features: [
        {
          num: "1",
          title: "Schedule Sync + Meal Plan Onboarding",
          desc: "Connects calendar + campus schedule to detect when you can eat.",
          why: "Why: eating only happens if it fits the day"
        },
        {
          num: "2",
          title: "AI Future Meal Planning",
          desc: "Automatically generates daily meals based on: Macros missing, Past student ratings, Dietary restrictions.",
          why: "Why: removes cognitive effort of decision making"
        },
        {
          num: "3",
          title: "Allergen & Dietary Profiles",
          desc: "Customizable restrictions + ingredient transparency.",
          why: "Why: reduces anxiety and increases compliance"
        },
        {
          num: "4",
          title: "Estimated Walk Time",
          desc: "Shows travel time to dining hall.",
          why: "Why: logistical friction stops students from eating"
        },
        {
          num: "5",
          title: "Avatar Health Feedback (Gamification)",
          desc: "Visual character changes based on nutrition adherence.",
          why: "Why: behavior change through feedback, not numbers"
        },
        {
          num: "6",
          title: "Meal Rating Feedback Loop",
          desc: "Students rate meals → AI improves future recommendations.",
          why: "Why: personalization improves trust over time"
        }
      ],
      userJourney: [
        "Onboard and input goals & allergies",
        "Sync class schedule",
        "AI generates daily meal plan",
        "Notification when eating window opens",
        "Navigate to dining location",
        "Eat and rate meal",
        "Avatar updates and reinforcement loop"
      ],
      journeyNote: "The product turns eating from a decision into a routine.",
      kpis: [
        { experiment: "AI Meal Recommendations", metric: "Meal plan adherence", goal: "↑ healthy eating consistency" },
        { experiment: "Schedule Sync + Walk Time", metric: "Accepted recommendations", goal: "↑ dining hall conversions" },
        { experiment: "Avatar Feedback (Gamification)", metric: "Consecutive healthy days", goal: "↑ habit formation" },
        { experiment: "Allergen Profiles", metric: "Food incident reports", goal: "↓ safety errors" }
      ],
      outcomes: [
        "Built full interactive Figma prototype",
        "Designed AI recommendation system logic",
        "Presented product strategy & business feasibility",
        "Won 1st Place at the Georgetown Product Case Competition"
      ],
      reflection: "This project showed me that changing behavior matters more than information. Students already had menus and nutrition data but still skipped meals. The solution wasn't more data; it was removing the decision. I learned to design for habit formation by reducing cognitive load and reinforcing routines through feedback loops."
    },
    garderobe: {
      title: "Garde-Robe",
      subtitle: "Social Fashion Platform",
      role: "Product Manager Intern",
      date: "Aug 2025 – Present",
      tagline: "Driving UX optimization and growth strategy for a social fashion app focused on digital closets, wishlists, and peer-to-peer discovery.",
      problem: "Garde-Robe had strong core features with a wishlist, digital closet, discover page, and social interaction, but struggled with weak feature clarity during onboarding, friction around permissions and receipts, and low viral growth.",
      goal: "Improve product-market fit among college students by reducing onboarding friction, increasing social activation, and building organic invite loops.",
      strategyIntro: "We approached the product through three lenses:",
      strategy: [
        { focus: "Understand Competitive Landscape", why: "Analyze peers to identify differentiation opportunities" },
        { focus: "Enhance UX & Design Experience", why: "Remove friction and clarify feature value" },
        { focus: "Develop Product Strategy Recommendations", why: "Build sustainable growth mechanisms" }
      ],
      insights: [
        "Forced contact permissions felt \"pushy\"",
        "Over half of users turned off permissions post-onboarding",
        "Feature purpose wasn't clearly explained",
        "App navigation was initially confusing",
        "Users would not recommend the app because it lacked long-term utility"
      ],
      features: [
        {
          num: "1",
          title: "Rebuilt Onboarding (Research-Driven)",
          desc: "Conducted and synthesized 18 user interviews. Removed forced contact permissions. Replaced generic permission prompts with value-driven explanations. Added lightweight in-app tutorials to clarify feature purpose.",
          why: "Impact: Increased activation and reduced early drop-off during onboarding"
        },
        {
          num: "2",
          title: "Incentive-Based Viral Growth Loop",
          desc: "Designed a feature-gated invite system: +1 friend → Price-drop alerts, +2 friends → Closet Match + Style Twin, +3 friends → Anonymous voting + badges.",
          why: "Impact: Increased viral coefficient from 0.0 → 0.15, establishing the first measurable organic growth loop"
        },
        {
          num: "3",
          title: "Closet 2.0 (Strategic Differentiation)",
          desc: "Introduced organizational \"drawers\" (season, category, vibe). Built roadmap toward peer-to-peer lending/resale ecosystem.",
          why: "Impact: Positioned the Closet as a feature with high long-term utility"
        },
        {
          num: "4",
          title: "Campus Go-To-Market Strategy",
          desc: "Launched campus ambassador programs across 7 universities. Partnered with student orgs and fashion communities. Activated referral incentives tied to brand discounts.",
          why: "Impact: Increased signups by 60% across launch campuses"
        }
      ],
      kpis: [
        { experiment: "Onboarding Redesign", metric: "Activation rate", goal: "↑ reduced early friction" },
        { experiment: "Invite-Only Features", metric: "Viral coefficient", goal: "0.0 → 0.15" },
        { experiment: "Closet Feature Improvements", metric: "Closet items added per user", goal: "↑ engagement depth" },
        { experiment: "Ambassador Program", metric: "Signups", goal: "+60% on launch campuses" }
      ],
      outcomes: [
        "Increased viral coefficient from 0.0 to 0.15",
        "Reduced onboarding friction through 18 user interviews",
        "Launched campus ambassador programs across 7 universities",
        "Increased signups by 60% across launch campuses"
      ],
      reflection: "This project reinforced that product growth in startups does not always come from adding new features. It comes from clarifying the value and purpose of existing features for users and targeting long-term utility. I learned to turn qualitative insights into prioritized roadmap decisions, design intentional network effects, and align product depth with scalable growth metrics."
    },
    toast: {
      title: "Toast, Inc.",
      subtitle: "Reducing Ordering Friction & Strengthening Competitive Positioning",
      role: "Product Consultant (Contract)",
      date: "July 2025 - December 2025",
      video: "/videos/toast.mov",
      tagline: "Led a product strategy engagement focused on reducing ordering friction, strengthening competitive positioning, and improving AI discoverability for restaurant partners.",
      problem: "Users, especially students, treat every order as a high-stakes moment. Toast risks losing occasional users due to menu overwhelm, hidden pricing friction, weak AI discoverability, and competitive feature gaps.",
      goal: "Design a friction-reduction strategy that improves ordering clarity and conversion, strengthens Toast's competitive positioning, and enhances discoverability in AI-native search platforms with minimal feature overhaul.",
      strategyIntro: "We focused on three coordinated levers:",
      strategy: [
        { focus: "Reduce Cognitive Load", why: "Simplify menu navigation to prevent abandonment" },
        { focus: "Strengthen Competitive Positioning", why: "Analyze 11 competitors to identify feature gaps and differentiation opportunities" },
        { focus: "Optimize for AI Discovery", why: "Audit ranking logic across ChatGPT, Gemini, Perplexity, and Claude" }
      ],
      strategyNote: "To validate friction points, we analyzed 50+ Qualtrics responses on student ordering behavior.",
      insights: [
        "68% reported interface friction contributing to order abandonment",
        "Most students order 0–1x per week, making each session a win-or-lose conversion moment",
        "Ease of navigation ranked as a top decision driver (~32%)",
        "Estimated wait time accuracy ranked in the top 3 most important features",
        "Student-only discounts were mentioned more frequently than UX features (pricing > functionality)"
      ],
      features: [
        {
          num: "1",
          title: "Menu Filtering Feature",
          desc: "Introduce tag-based filtering directly within online menus: Price filters, Vegan/Vegetarian/Gluten-Free filters, Allergen identification tags, Spice-level markers.",
          why: "Why: Reduce navigation friction, increase trust and transparency, improve operational efficiency"
        },
        {
          num: "2",
          title: "Competitive Analysis",
          desc: "Built an Excel feature matrix analyzing 11 industry competitors to identify feature gaps and differentiation opportunities.",
          why: "Impact: Defined differentiation strategy vs 11 peers"
        },
        {
          num: "3",
          title: "AI Optimization Playbook",
          desc: "Audited AI ranking logic across major generative platforms (ChatGPT, Gemini, Perplexity, Claude). Developed an SEO optimization playbook covering reviews, FAQs, and business profile completeness.",
          why: "Impact: Improved search discoverability in AI-native platforms"
        },
        {
          num: "4",
          title: "High-Fidelity Figma Prototype",
          desc: "Created an interactive prototype of the menu-filtering solution, currently entering pilot consideration.",
          why: "Impact: Provides tangible roadmap for implementation"
        }
      ],
      kpis: [
        { experiment: "Survey Validation", metric: "Abandonment due to friction", goal: "68% identified friction as key issue" },
        { experiment: "Menu Filtering", metric: "Conversion rate (target)", goal: "↑ reduce abandonment among 0–1x users" },
        { experiment: "Competitive Analysis", metric: "Feature gap clarity", goal: "Defined differentiation strategy vs 11 peers" },
        { experiment: "AI Optimization", metric: "Search discoverability", goal: "Developed SEO + AI ranking playbook" }
      ],
      outcomes: [
        "Built an Excel feature matrix analyzing 11 competitors",
        "Synthesized findings from 50 survey respondents",
        "Created high-fidelity Figma prototype entering pilot launch",
        "Developed SEO optimization playbook for AI discovery"
      ],
      reflection: "I learned to connect user research, competitive analysis, and emerging AI discovery mechanics into one cohesive product strategy. This project taught me that friction is a trust problem, especially for low-frequency users making high-stakes decisions."
    }
  };

  const project = projects[selectedProject];

  return (
    <div className="page projects-page">
      <div className="page-content projects-content">
        <h1 className="page-title">Projects</h1>

        {/* Project Selector */}
        <div className="project-tabs">
          <button
            className={`project-tab ${selectedProject === 'garderobe' ? 'active' : ''}`}
            onClick={() => setSelectedProject('garderobe')}
          >
            Garde-Robe
          </button>
          <button
            className={`project-tab ${selectedProject === 'toast' ? 'active' : ''}`}
            onClick={() => setSelectedProject('toast')}
          >
            Toast
          </button>
          <button
            className={`project-tab ${selectedProject === 'universieats' ? 'active' : ''}`}
            onClick={() => setSelectedProject('universieats')}
          >
            UniversiEats
          </button>
        </div>

        {/* Project Content */}
        <div className="project-content">
          {/* Compact Header */}
          <div className="project-header-compact">
            <h2 className="project-main-title">{project.title}</h2>
            <p className="project-subtitle-line">{project.subtitle}</p>
            <div className="project-meta-line">
              <span className="project-role-inline">{project.role}</span>
              {project.context && (
                <>
                  <span className="meta-divider">|</span>
                  <span className="project-context">{project.context}</span>
                </>
              )}
              {project.date && (
                <>
                  <span className="meta-divider">|</span>
                  <span className="project-date-inline">{project.date}</span>
                </>
              )}
            </div>
          </div>

          {/* Tagline */}
          <p className="project-tagline">{project.tagline}</p>

          {/* Problem & Goal Grid */}
          <div className="compact-grid">
            <div className="compact-box">
              <h3>Problem</h3>
              <p>{project.problem}</p>
            </div>
            <div className="compact-box">
              <h3>Goal</h3>
              <p>{project.goal}</p>
            </div>
          </div>

          {/* Strategy */}
          <div className="compact-section">
            <h3>Strategy</h3>
            <p className="section-intro">{project.strategyIntro}</p>
            <div className="strategy-compact">
              <div className="strategy-header-row">
                <div className="strategy-col-header">Focus Area</div>
                <div className="strategy-col-header">Why It Matters</div>
              </div>
              {project.strategy.map((item, idx) => (
                <div key={idx} className="strategy-data-row">
                  <div className="strategy-cell-focus">{item.focus}</div>
                  <div className="strategy-cell-why">{item.why}</div>
                </div>
              ))}
            </div>
            {project.strategyNote && <p className="section-note">{project.strategyNote}</p>}
          </div>

          {/* User Insights */}
          <div className="compact-section">
            <h3>User {selectedProject === 'garderobe' ? 'Research' : 'Interview'} Highlights</h3>
            <ul className="compact-list">
              {project.insights.map((insight, idx) => (
                <li key={idx}>{insight}</li>
              ))}
            </ul>
          </div>

          {/* Video + Features Layout */}
          <div className="compact-section">
            <h3>Key {selectedProject === 'garderobe' ? 'Initiatives' : 'Product Decisions'} & {selectedProject === 'toast' ? 'Execution' : 'Features'}</h3>
            
            {/* Toast: Full width video on top with 2x2 grid below */}
            {selectedProject === 'toast' && project.video && (
              <>
                <div className="project-video-full">
                  <video controls>
                    <source src={project.video} type="video/quicktime" />
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="features-grid-2x2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="feature-compact">
                      <h4>{feature.num}. {feature.title}</h4>
                      <p>{feature.desc}</p>
                      {feature.why && <p className="feature-why">{feature.why}</p>}
                    </div>
                  ))}
                </div>
              </>
            )}
            
            {/* UniversiEats: Video left, features right (side by side) */}
            {selectedProject === 'universieats' && (
              <div className="video-features-grid">
                {project.video && (
                  <div className="project-video-compact">
                    <video controls>
                      <source src={project.video} type="video/quicktime" />
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
                <div className="features-compact">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="feature-compact">
                      <h4>{feature.num}. {feature.title}</h4>
                      <p>{feature.desc}</p>
                      {feature.why && <p className="feature-why">{feature.why}</p>}
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Garde-Robe: No video, just features in vertical list */}
            {selectedProject === 'garderobe' && (
              <div className="features-compact">
                {project.features.map((feature, idx) => (
                  <div key={idx} className="feature-compact">
                    <h4>{feature.num}. {feature.title}</h4>
                    <p>{feature.desc}</p>
                    {feature.why && <p className="feature-why">{feature.why}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* User Journey Roadmap - only for UniversiEats */}
          {project.userJourney && (
            <div className="compact-section">
              <h3>User Journey Roadmap</h3>
              <div className="journey-flow">
                {project.userJourney.map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="journey-step">{step}</div>
                    {idx < project.userJourney.length - 1 && (
                      <div className="journey-arrow">→</div>
                    )}
                  </React.Fragment>
                ))}
              </div>
              {project.journeyNote && <p className="section-note journey-note">{project.journeyNote}</p>}
            </div>
          )}

          {/* KPIs */}
          {project.kpis && (
            <div className="compact-section">
              <h3>KPIs & Impact</h3>
              <div className="kpis-table">
                <div className="kpis-header-row">
                  <div>Experiment</div>
                  <div>Metric</div>
                  <div>Goal</div>
                </div>
                {project.kpis.map((kpi, idx) => (
                  <div key={idx} className="kpis-data-row">
                    <div>{kpi.experiment}</div>
                    <div>{kpi.metric}</div>
                    <div>{kpi.goal}</div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Outcomes */}
          <div className="compact-section">
            <h3>Outcomes</h3>
            <ul className="compact-list">
              {project.outcomes.map((outcome, idx) => (
                <li key={idx}>{outcome}</li>
              ))}
            </ul>
          </div>

          {/* Reflection */}
          <div className="compact-section reflection">
            <h3>Reflection</h3>
            <p>{project.reflection}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
