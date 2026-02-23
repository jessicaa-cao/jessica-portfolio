import React from 'react';

export default function Beyond() {
  return (
    <div className="page">
      <div className="page-content">
        <h1 className="page-title">Beyond</h1>

        <div className="content-section">
          <p className="large-text">
            When I'm not building products, you'll find me in theatre rehearsals, museum hopping, 
            writing book reviews, or baking. I'm driven by curiosity, creativity, and community—and 
            I love constantly learning and exploring new perspectives.
          </p>
        </div>

        <div className="beyond-grid">
          <div className="beyond-card">
            <div className="beyond-icon">🎭</div>
            <h3>Theatre & Acting</h3>
            <p>Screenwriting and performing in Georgetown's theatre productions</p>
          </div>

          <div className="beyond-card">
            <div className="beyond-icon">🏛️</div>
            <h3>Museum Hopping</h3>
            <p>Exploring DC's museums and discovering new exhibitions</p>
          </div>

          <div className="beyond-card">
            <div className="beyond-icon">📚</div>
            <h3>Book Reviews</h3>
            <p>Writing reviews on my blog, Stay True To Your Shelf</p>
          </div>

          <div className="beyond-card">
            <div className="beyond-icon">🧁</div>
            <h3>Baking</h3>
            <p>Experimenting with new recipes and sharing with friends</p>
          </div>

          <div className="beyond-card">
            <div className="beyond-icon">🎬</div>
            <h3>Videography</h3>
            <p>Creating videos and learning After Effects</p>
          </div>

          <div className="beyond-card">
            <div className="beyond-icon">🚵</div>
            <h3>Mountain Biking</h3>
            <p>Exploring trails and staying active outdoors</p>
          </div>
        </div>

        <div className="content-section highlight-section">
          <h2>Stay True To Your Shelf</h2>
          <p>
            My book review blog where I share thoughts on everything I'm reading. From fiction 
            to nonfiction, I love diving deep into stories and ideas that challenge my perspective.
          </p>
          <a 
            href="https://sites.google.com/view/staytruetoyourshelf/home" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-link"
          >
            Visit the blog →
          </a>
        </div>

        <div className="content-section">
          <h2>Leadership</h2>
          <div className="leadership-list">
            <div className="leadership-item">
              <strong>Director of Training</strong> – Hoyalytics
              <p>Designed and led 5 semester-long training modules for 300+ analysts covering Python, Tableau, SQL, R, and Excel</p>
            </div>
            <div className="leadership-item">
              <strong>Professional Development Lead</strong> – Georgetown AASA
              <p>Led a team of 5 to host monthly AAPI career development events, reaching over 1,000 alumni</p>
            </div>
            <div className="leadership-item">
              <strong>Product Analyst</strong> – Product Space
              <p>Competing in product competitions and building AI-powered prototypes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
