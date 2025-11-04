'use client';

import { useEffect } from 'react';
import '../styles/pages/error.css';

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
    </div>
  );
}