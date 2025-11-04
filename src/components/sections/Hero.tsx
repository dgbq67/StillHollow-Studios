'use client';

import { useState, useEffect } from 'react';
import TerminalText from '@/components/ui/TerminalText';
import ParallaxLayer from '@/components/ui/ParallaxLayer';

const Hero = () => {
  const [showDiscoverButton, setShowDiscoverButton] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100
    }));
    setParticles(newParticles);

    // Show scroll indicator after delay
    const scrollTimer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 3000);

    return () => clearTimeout(scrollTimer);
  }, []);

  const handleTerminalComplete = () => {
    setShowDiscoverButton(true);
  };

  const handleDiscoverClick = () => {
    const nextSection = document.getElementById('story-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="hero-section">
      {/* Parallax Background Layers */}
      <ParallaxLayer speed={0.3} className="hero-background">
        <div className="hero-background">
          <div className="hero-grid" />
        </div>
      </ParallaxLayer>

      {/* Floating Particles */}
      <div className="hero-particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="hero-particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <ParallaxLayer speed={0.8} className="hero-content">
        <div className="hero-content">
          {/* Main Title */}
          <h1 className="hero-title">
            KPR VERSE
          </h1>

          {/* Terminal Container */}
          <div className="hero-terminal">
            <div className="ascii-section">
              <TerminalText
                text="// initializing"
                delay={80}
                className="terminal-comment"
                startVisible={true}
              />
              <TerminalText
                text="new files in database"
                delay={100}
                className="terminal-command"
                startVisible={true}
              />
              <TerminalText
                text=" kai_53815.jpg"
                delay={90}
                className="terminal-file"
                startVisible={true}
              />
              <TerminalText
                text=" audio_log_2018116.wav"
                delay={90}
                className="terminal-file"
                startVisible={true}
              />
              <TerminalText
                text="activate console for access..."
                delay={110}
                className="terminal-system"
                startVisible={true}
                onComplete={handleTerminalComplete}
              />
            </div>

            {/* ASCII Art */}
            <div className="ascii-art">
{`
    ╔═══════════════════════════════════════╗
    ║     WELCOME TO THE KPR VERSE          ║
    ║     [KEEPERS OF THE REALM]             ║
    ╠═══════════════════════════════════════╣
    ║  STATUS: ONLINE                        ║
    ║  NODES: 8,391 ACTIVE                  ║
    ║  PROTOCOL: v2.4.1                     ║
    ║  ENCRYPTION: AES-256                   ║
    ╚═══════════════════════════════════════╝
`}
            </div>
          </div>

          {/* Discover Button */}
          {showDiscoverButton && (
            <button
              className="discover-button fade-in"
              onClick={handleDiscoverClick}
              data-cursor="hover"
            >
              Discover More
            </button>
          )}
        </div>
      </ParallaxLayer>

      {/* Loading Indicator */}
      <div className="hero-loading">
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <div className="scroll-indicator fade-in">
          <div className="scroll-icon" />
          <span className="scroll-text">Scroll</span>
        </div>
      )}

      <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-background {
          position: absolute;
          top: -10%;
          left: 0;
          right: 0;
          bottom: -10%;
          background: linear-gradient(180deg, #000 0%, #0a0a0a 30%, #111 50%, #0a0a0a 70%, #000 100%);
        }

        .hero-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            linear-gradient(rgba(0, 255, 0, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          opacity: 0.6;
        }

        .hero-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
        }

        .hero-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #00ff00;
          border-radius: 50%;
          opacity: 0.6;
          animation: particleFloat 6s ease-in-out infinite;
        }

        .hero-particle:nth-child(odd) {
          background: #ffaa00;
        }

        .hero-particle:nth-child(3n) {
          background: #00ffff;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 800px;
          padding: 40px 20px;
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: bold;
          color: #00ff00;
          text-shadow: 0 0 20px rgba(0, 255, 0, 0.6);
          margin-bottom: 30px;
          letter-spacing: 4px;
          text-transform: uppercase;
          animation: titleGlow 3s ease-in-out infinite alternate;
        }

        .hero-terminal {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(0, 255, 0, 0.3);
          border-radius: 8px;
          padding: 40px;
          margin: 20px 0;
          position: relative;
          backdrop-filter: blur(10px);
        }

        .hero-terminal::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 40px;
          background: linear-gradient(180deg, #1a1a1a, #0a0a0a);
          border-bottom: 1px solid rgba(0, 255, 0, 0.3);
          border-radius: 8px 8px 0 0;
        }

        .hero-terminal::after {
          content: '• • •';
          position: absolute;
          top: 12px;
          left: 15px;
          color: #ff0000;
          font-size: 14px;
          letter-spacing: 10px;
        }

        .ascii-section {
          margin: 20px 0;
          text-align: left;
        }

        .ascii-art {
          color: #00ff00;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          line-height: 1;
          white-space: pre;
          opacity: 0.8;
          margin: 20px 0;
        }

        .discover-button {
          margin-top: 40px;
          padding: 15px 40px;
          font-size: 18px;
          text-transform: uppercase;
          letter-spacing: 2px;
          background: transparent;
          border: 2px solid #00ff00;
          color: #00ff00;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
        }

        .discover-button:hover {
          background: rgba(0, 255, 0, 0.1);
          border-color: #ffaa00;
          color: #ffaa00;
          text-shadow: 0 0 15px rgba(255, 170, 0, 0.7);
          box-shadow: 0 0 20px rgba(255, 170, 0, 0.3);
          transform: translateY(-2px);
        }

        .hero-loading {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          z-index: 10;
        }

        .loading-dots {
          display: flex;
          gap: 8px;
        }

        .loading-dots span {
          width: 8px;
          height: 8px;
          background: #00ff00;
          border-radius: 50%;
          animation: loadingPulse 1.5s infinite;
        }

        .loading-dots span:nth-child(1) { animation-delay: 0s; }
        .loading-dots span:nth-child(2) { animation-delay: 0.3s; }
        .loading-dots span:nth-child(3) { animation-delay: 0.6s; }

        .scroll-indicator {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          opacity: 0.7;
          animation: scrollBounce 2s ease-in-out infinite;
        }

        .scroll-icon {
          width: 24px;
          height: 40px;
          border: 2px solid #00ff00;
          border-radius: 12px;
          position: relative;
        }

        .scroll-icon::before {
          content: '';
          position: absolute;
          top: 8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 8px;
          background: #00ff00;
          border-radius: 2px;
          animation: scrollWheel 2s ease-in-out infinite;
        }

        .scroll-text {
          font-size: 12px;
          color: #00ff00;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @keyframes titleGlow {
          0% {
            text-shadow: 0 0 20px rgba(0, 255, 0, 0.6);
          }
          100% {
            text-shadow: 0 0 30px rgba(0, 255, 0, 0.9), 0 0 40px rgba(0, 255, 0, 0.4);
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-30px) translateX(10px) scale(1.2);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-10px) translateX(-15px) scale(0.8);
            opacity: 1;
          }
          75% {
            transform: translateY(-40px) translateX(5px) scale(1.1);
            opacity: 0.7;
          }
        }

        @keyframes loadingPulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes scrollBounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(-10px);
          }
        }

        @keyframes scrollWheel {
          0% {
            top: 8px;
            opacity: 1;
          }
          100% {
            top: 20px;
            opacity: 0;
          }
        }

        .fade-in {
          animation: fadeIn 0.8s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-content {
            padding: 20px 15px;
          }

          .hero-terminal {
            padding: 25px 20px;
          }

          .hero-title {
            font-size: clamp(1.5rem, 8vw, 2.5rem);
            letter-spacing: 2px;
          }

          .discover-button {
            padding: 12px 30px;
            font-size: 16px;
          }

          .hero-grid {
            background-size: 40px 40px;
          }

          .ascii-art {
            font-size: 10px;
          }

          .scroll-indicator {
            bottom: 20px;
          }

          .hero-particles {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;