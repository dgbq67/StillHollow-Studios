'use client';

import { useState, useEffect } from 'react';
import TerminalText from '@/components/ui/TerminalText';
import ParallaxLayer from '@/components/ui/ParallaxLayer';

const Story = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="story-section" className="story-section">
      {/* Parallax Background */}
      <ParallaxLayer speed={0.3} className="story-background">
        <div className="story-background">
          <div className="story-grid" />
        </div>
      </ParallaxLayer>

      {/* Main Content */}
      <div className="story-container">
        <div className="story-content">
          {/* Section Title */}
          <div className="story-header">
            <TerminalText
              text="// studio_init"
              delay={60}
              className="terminal-comment"
              startVisible={showContent}
            />
            <h2 className="story-title">
              STILLHOLLOW STUDIOS
            </h2>
            <TerminalText
              text="loading creative database..."
              delay={80}
              className="terminal-system"
              startVisible={showContent}
            />
          </div>

          {/* Story Content */}
          <div className="story-narrative">
            <TerminalText
              text="In the creative space, between pixels and imagination..."
              delay={50}
              className="terminal-command"
              startVisible={showContent}
            />

            <div className="story-chapters">
              <div className="chapter">
                <h3>Chapter I: Foundation</h3>
                <p>
                  The first designs emerged from blank canvases,
                  creative visions born from the intersection of artistic expression
                  and digital innovation.
                </p>
                <div className="black-screen-placeholder">
                  <div className="black-screen">
                    <span className="screen-text">[BLANK CANVAS]</span>
                  </div>
                </div>
              </div>

              <div className="chapter">
                <h3>Chapter II: Expansion</h3>
                <p>
                  As the studio grew, more projects joined the portfolio,
                  each bringing unique perspectives and skills to the growing
                  creative ecosystem.
                </p>
                <div className="black-screen-placeholder">
                  <div className="black-screen">
                    <span className="screen-text">[PROJECT IN PROGRESS]</span>
                  </div>
                </div>
              </div>

              <div className="chapter">
                <h3>Chapter III: Innovation</h3>
                <p>
                  Together, the team explores the boundaries between design
                  and technology, seeking innovation in the vast expanse of
                  the digital frontier.
                </p>
                <div className="black-screen-placeholder">
                  <div className="black-screen">
                    <span className="screen-text">[COMING SOON]</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Elements */}
          <div className="story-interactive">
            <access project>Explore? [Y/N]</access>
              <TerminalText
                text="explore portfolio? [Y/N]"
                delay={100}
                className="terminal-success"
                startVisible={showContent}
              />

            <div className="story-actions">
              <button className="story-button" data-cursor="hover">
                View Portfolio
              </button>
              <button className="story-button" data-cursor="hover">
                Contact Studio
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .story-section {
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(180deg, #000 0%, #0a0a0a 50%, #000 100%);
          border-top: 1px solid rgba(0, 255, 0, 0.1);
          overflow: hidden;
        }

        .story-background {
          position: absolute;
          top: -10%;
          left: 0;
          right: 0;
          bottom: -10%;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
        }

        .story-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 80px 80px;
          opacity: 0.4;
        }

        .story-container {
          position: relative;
          z-index: 10;
          max-width: 1000px;
          padding: 60px 20px;
        }

        .story-content {
          text-align: center;
        }

        .story-header {
          margin-bottom: 60px;
        }

        .story-title {
          font-size: clamp(2.5rem, 6vw, 4rem);
          color: #00ff00;
          text-shadow: 0 0 20px rgba(0, 255, 0, 0.6);
          letter-spacing: 4px;
          text-transform: uppercase;
          margin: 20px 0;
          animation: titleGlow 3s ease-in-out infinite alternate;
        }

        .story-narrative {
          margin-bottom: 50px;
          text-align: left;
        }

        .story-chapters {
          margin-top: 40px;
        }

        .chapter {
          background: rgba(0, 0, 0, 0.6);
          border: 1px solid rgba(0, 255, 0, 0.2);
          border-radius: 8px;
          padding: 30px;
          margin-bottom: 30px;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .chapter:hover {
          border-color: rgba(0, 255, 0, 0.4);
          box-shadow: 0 4px 20px rgba(0, 255, 0, 0.1);
          transform: translateY(-2px);
        }

        .chapter h3 {
          font-size: 24px;
          color: #00ffff;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .chapter p {
          color: #888;
          line-height: 1.8;
          font-size: 16px;
        }

        .story-interactive {
          margin-top: 40px;
        }

        .story-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          margin-top: 30px;
          flex-wrap: wrap;
        }

        .story-button {
          padding: 15px 30px;
          font-size: 16px;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: transparent;
          border: 1px solid #00ff00;
          color: #00ff00;
          cursor: none;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          font-family: 'Courier New', monospace;
        }

        @media (pointer: coarse) {
          .story-button {
            cursor: pointer;
          }
        }

        .story-button:hover {
          background: rgba(0, 255, 0, 0.1);
          border-color: #ffaa00;
          color: #ffaa00;
          text-shadow: 0 0 10px rgba(255, 170, 0, 0.5);
          box-shadow: 0 0 15px rgba(255, 170, 0, 0.3);
          transform: translateY(-2px);
        }

        @keyframes titleGlow {
          0% {
            text-shadow: 0 0 20px rgba(0, 255, 0, 0.6);
          }
          100% {
            text-shadow: 0 0 30px rgba(0, 255, 0, 0.9), 0 0 40px rgba(0, 255, 0, 0.4);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .story-container {
            padding: 40px 15px;
          }

          .story-title {
            font-size: clamp(2rem, 8vw, 3rem);
            letter-spacing: 2px;
          }

          .chapter {
            padding: 20px;
          }

          .chapter h3 {
            font-size: 20px;
          }

          .story-actions {
            flex-direction: column;
            align-items: center;
          }

          .story-button {
            width: 200px;
          }

          .story-grid {
            background-size: 50px 50px;
          }
        }

        @media (max-width: 480px) {
          .story-container {
            padding: 30px 10px;
          }

          .chapter {
            padding: 15px;
          }

          .chapter h3 {
            font-size: 18px;
          }

          .chapter p {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
};

export default Story;