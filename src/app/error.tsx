'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('KPR VERSE Error:', error);
  }, [error]);

  return (
    <div className="error-container">
      <div className="error-content">
        <div className="terminal-container">
          <h1 className="error-title">SYSTEM_ERROR</h1>
          <p className="error-code">{error.name}</p>
          <p className="error-message">{error.message}</p>
          {error.digest && (
            <p className="error-digest">Error ID: {error.digest}</p>
          )}
          <div className="error-actions">
            <button
              onClick={reset}
              className="retry-button"
              data-cursor="hover"
            >
              Attempt Recovery
            </button>
            <a href="/" className="home-button" data-cursor="hover">
              Return to Base
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .error-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          font-family: 'Courier New', monospace;
        }

        .error-content {
          text-align: center;
          max-width: 600px;
          padding: 40px 20px;
        }

        .terminal-container {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(255, 0, 0, 0.3);
          border-radius: 8px;
          padding: 40px;
          backdrop-filter: blur(10px);
        }

        .error-title {
          font-size: 3rem;
          color: #ff0000;
          text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
          margin-bottom: 20px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .error-code {
          font-size: 1.5rem;
          color: #ffaa00;
          text-shadow: 0 0 10px rgba(255, 170, 0, 0.5);
          margin-bottom: 15px;
          font-family: 'Courier New', monospace;
        }

        .error-message {
          font-size: 1.2rem;
          color: #888;
          margin-bottom: 10px;
          line-height: 1.6;
          font-family: 'Courier New', monospace;
        }

        .error-digest {
          font-size: 0.9rem;
          color: #666;
          margin-bottom: 30px;
          font-family: 'Courier New', monospace;
        }

        .error-actions {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .retry-button,
        .home-button {
          display: inline-block;
          padding: 15px 30px;
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: transparent;
          border: 2px solid #00ff00;
          color: #00ff00;
          text-decoration: none;
          transition: all 0.3s ease;
          font-family: 'Courier New', monospace;
          cursor: none;
        }

        @media (pointer: coarse) {
          .retry-button,
          .home-button {
            cursor: pointer;
          }
        }

        .retry-button:hover,
        .home-button:hover {
          background: rgba(0, 255, 0, 0.1);
          border-color: #ffaa00;
          color: #ffaa00;
          text-shadow: 0 0 10px rgba(255, 170, 0, 0.5);
          box-shadow: 0 0 15px rgba(255, 170, 0, 0.3);
        }

        @media (max-width: 768px) {
          .error-actions {
            flex-direction: column;
            align-items: center;
          }

          .retry-button,
          .home-button {
            width: 200px;
          }
        }
      `}</style>
    </div>
  );
}