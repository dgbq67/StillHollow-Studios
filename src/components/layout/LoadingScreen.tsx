'use client';

import { useState, useEffect } from 'react';
import TerminalText from '@/components/ui/TerminalText';

interface LoadingScreenProps {
  onComplete?: () => void;
  duration?: number;
  showProgress?: boolean;
}

const LoadingScreen = ({
  onComplete,
  duration = 8000,
  showProgress = true
}: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showTerminalText, setShowTerminalText] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    { text: '// initializing', delay: 100 },
    { text: 'booting system...', delay: 200 },
    { text: 'loading kernel modules', delay: 150 },
    { text: 'establishing connection...', delay: 180 },
    { text: 'accessing database...', delay: 120 },
    { text: 'decrypting files...', delay: 160 },
    { text: 'rendering interface...', delay: 140 },
    { text: 'system ready.', delay: 100 }
  ];

  useEffect(() => {
    // Start terminal text after a short delay
    const terminalTimer = setTimeout(() => {
      setShowTerminalText(true);
    }, 500);

    return () => clearTimeout(terminalTimer);
  }, []);

  useEffect(() => {
    if (!showTerminalText) return;

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);

          // Complete loading after a short delay
          setTimeout(() => {
            setIsLoading(false);
            onComplete?.();
          }, 500);

          return 100;
        }

        // Random progress increment for realistic loading
        const increment = Math.random() * 15 + 5;
        return Math.min(prev + increment, 100);
      });
    }, duration / 100);

    return () => clearInterval(progressInterval);
  }, [showTerminalText, duration, onComplete]);

  const handleTerminalTextComplete = () => {
    setCurrentStep((prev) => prev + 1);
  };

  if (!isLoading) {
    return null;
  }

  return (
    <div className="loading-screen">
      <div className="loading-container">
        <div className="loading-content">
          {/* Terminal-style loading messages */}
          <div className="loading-terminal">
            {showTerminalText && loadingSteps.map((step, index) => (
              <TerminalText
                key={index}
                text={step.text}
                delay={step.delay}
                className={index === 0 ? 'terminal-comment' : 'terminal-command'}
                startVisible={index <= currentStep}
                onComplete={index < loadingSteps.length - 1 ? handleTerminalTextComplete : undefined}
              />
            ))}
          </div>

          {/* Progress bar */}
          {showProgress && showTerminalText && (
            <div className="loading-progress-container">
              <div className="loading-text">
                <span>LOADING - </span>
                <span className="loading-percentage">{Math.round(progress)}%</span>
              </div>

              <div className="terminal-progress">
                <div
                  className="terminal-progress-bar"
                  style={{ width: `${progress}%` }}
                />
              </div>

              {/* Loading status messages */}
              <div className="loading-status">
                {progress < 25 && <span className="terminal-system">initializing...</span>}
                {progress >= 25 && progress < 50 && <span className="terminal-system">processing...</span>}
                {progress >= 50 && progress < 75 && <span className="terminal-system">compiling...</span>}
                {progress >= 75 && progress < 100 && <span className="terminal-system">finalizing...</span>}
                {progress === 100 && <span className="terminal-success">complete.</span>}
              </div>
            </div>
          )}

          {/* Loading animation */}
          <div className="loading-animation">
            <div className="loading-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        {/* Background effects */}
        <div className="loading-background">
          <div className="loading-grid" />
          <div className="loading-particles">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="loading-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #000;
          z-index: 10000;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Courier New', monospace;
        }

        .loading-container {
          position: relative;
          width: 100%;
          max-width: 600px;
          padding: 40px;
          z-index: 2;
        }

        .loading-content {
          text-align: center;
        }

        .loading-terminal {
          margin-bottom: 40px;
          text-align: left;
          min-height: 200px;
        }

        .loading-progress-container {
          margin-top: 30px;
        }

        .loading-text {
          font-size: 18px;
          color: #ffaa00;
          margin-bottom: 15px;
          letter-spacing: 2px;
        }

        .loading-percentage {
          color: #00ff00;
          font-weight: bold;
          min-width: 50px;
          display: inline-block;
        }

        .loading-status {
          margin-top: 15px;
          font-size: 16px;
        }

        .loading-animation {
          margin-top: 30px;
        }

        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }

        .loading-dots span {
          width: 8px;
          height: 8px;
          background: #00ff00;
          border-radius: 50%;
          animation: loadingPulse 1.5s infinite;
        }

        .loading-dots span:nth-child(1) {
          animation-delay: 0s;
        }

        .loading-dots span:nth-child(2) {
          animation-delay: 0.3s;
        }

        .loading-dots span:nth-child(3) {
          animation-delay: 0.6s;
        }

        .loading-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          opacity: 0.3;
        }

        .loading-grid {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        .loading-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .loading-particle {
          position: absolute;
          width: 2px;
          height: 2px;
          background: #00ff00;
          border-radius: 50%;
          animation: particleFloat 4s ease-in-out infinite;
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

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 1;
          }
        }

        @media (max-width: 768px) {
          .loading-container {
            padding: 20px;
          }

          .loading-terminal {
            min-height: 150px;
          }

          .loading-text {
            font-size: 16px;
          }

          .loading-grid {
            background-size: 30px 30px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;