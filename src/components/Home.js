import React, { useState, useEffect, useRef } from 'react';
import { Mail, Linkedin, FileText } from 'lucide-react';

export default function Home({ setPage }) {
  const [bubbles, setBubbles] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);

  // Initialize floating bubbles
  useEffect(() => {
    const initialBubbles = Array.from({ length: 35 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 8 + Math.random() * 16,
      vx: (Math.random() - 0.5) * 1.5, // Increased from 0.5
      vy: (Math.random() - 0.5) * 1.5, // Increased from 0.5
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.02 + Math.random() * 0.03
    }));
    setBubbles(initialBubbles);
  }, []);

  // Track mouse
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate bubbles
  useEffect(() => {
    const animate = () => {
      setBubbles(prevBubbles =>
        prevBubbles.map(bubble => {
          let newX = bubble.x + bubble.vx;
          let newY = bubble.y + bubble.vy;
          let newVx = bubble.vx;
          let newVy = bubble.vy;
          const newWobble = bubble.wobble + bubble.wobbleSpeed;

          // Bounce off edges
          if (newX < 0 || newX > window.innerWidth) {
            newVx = -newVx;
            newX = bubble.x;
          }
          if (newY < 0 || newY > window.innerHeight) {
            newVy = -newVy;
            newY = bubble.y;
          }

          // Mouse repulsion
          const dx = newX - mousePosition.x;
          const dy = newY - mousePosition.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 150 && distance > 0) {
            const force = (150 - distance) / 150 * 2;
            newVx += (dx / distance) * force;
            newVy += (dy / distance) * force;
          }

          // Gravity toward center (stronger)
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          const toCenterX = centerX - newX;
          const toCenterY = centerY - newY;
          newVx += toCenterX * 0.0003; // Increased from 0.00008
          newVy += toCenterY * 0.0003;

          // Friction
          newVx *= 0.99;
          newVy *= 0.99;

          // Add wobble to position
          const wobbleX = Math.sin(newWobble) * 2;
          const wobbleY = Math.cos(newWobble * 1.3) * 2;

          return {
            ...bubble,
            x: newX + wobbleX,
            y: newY + wobbleY,
            vx: newVx,
            vy: newVy,
            wobble: newWobble
          };
        })
      );

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mousePosition]);

  // Click to create ripple effect
  const handleClick = (e) => {
    const clickX = e.clientX;
    const clickY = e.clientY;

    setBubbles(prevBubbles =>
      prevBubbles.map(bubble => {
        const dx = bubble.x - clickX;
        const dy = bubble.y - clickY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200 && distance > 0) {
          const force = (200 - distance) / 200 * 8;
          return {
            ...bubble,
            vx: bubble.vx + (dx / distance) * force,
            vy: bubble.vy + (dy / distance) * force
          };
        }
        return bubble;
      })
    );
  };

  const links = [
    { name: 'About', page: 'about' },
    { name: 'Work', page: 'work' },
    { name: 'Projects', page: 'projects' }
  ];

  return (
    <div className="home" onClick={handleClick}>
      {/* Animated bubbles */}
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            left: `${bubble.x}px`,
            top: `${bubble.y}px`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`
          }}
        />
      ))}

      <div className="home-content">
        <div className="home-header">
          <h1 className="home-name">Jessica Cao</h1>
          <p className="home-tagline">I'm a people-first builder & problem solver.</p>
        </div>

        <nav className="home-nav">
          {links.map((link) => (
            <button
              key={link.page}
              onClick={(e) => {
                e.stopPropagation();
                setPage(link.page);
              }}
              className="home-link"
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="home-footer">
          <a 
            href="mailto:caojessica3@gmail.com"
            className="icon-link"
            title="Email"
            onClick={(e) => e.stopPropagation()}
          >
            <Mail size={20} />
          </a>
          <a 
            href="https://www.linkedin.com/in/jessicakcao" 
            target="_blank" 
            rel="noopener noreferrer"
            className="icon-link"
            title="LinkedIn"
            onClick={(e) => e.stopPropagation()}
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="/Jessica_Cao_PM_Resume.pdf"
            target="_blank" 
            rel="noopener noreferrer"
            className="icon-link"
            title="Resume"
            onClick={(e) => e.stopPropagation()}
          >
            <FileText size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
