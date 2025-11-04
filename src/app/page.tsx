'use client';

import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';

export default function Home() {
  useEffect(() => {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    // Prevent scroll during loading
    const preventScroll = (e: Event) => e.preventDefault();
    document.addEventListener('wheel', preventScroll, { passive: false });
    document.addEventListener('touchmove', preventScroll, { passive: false });

    // Re-enable scroll after component mounts
    const timer = setTimeout(() => {
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
    }, 100);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('wheel', preventScroll);
      document.removeEventListener('touchmove', preventScroll);
    };
  }, []);

  return (
    <Layout>
      <Hero />

      {/* Additional sections will be added here */}
      <section id="story-section" className="story-section">
        <div className="container">
          <h2>Story Section</h2>
          <p>Story content coming soon...</p>
        </div>
      </section>

      <style jsx>{`
        .story-section {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #000 0%, #0a0a0a 100%);
          border-top: 1px solid rgba(0, 255, 0, 0.1);
          position: relative;
        }

        .story-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 70% 30%, rgba(0, 255, 255, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 30% 70%, rgba(255, 170, 0, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .container {
          text-align: center;
          max-width: 800px;
          padding: 40px 20px;
          position: relative;
          z-index: 1;
        }

        h2 {
          font-size: clamp(2rem, 5vw, 3rem);
          color: #00ff00;
          text-shadow: 0 0 15px rgba(0, 255, 0, 0.5);
          margin-bottom: 30px;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        p {
          font-size: 18px;
          color: #888;
          line-height: 1.8;
          margin-bottom: 20px;
        }
      `}</style>
    </Layout>
  );
}