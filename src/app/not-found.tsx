import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="terminal-container">
          <h1 className="error-code">404</h1>
          <p className="error-message">NODE_NOT_FOUND</p>
          <p className="error-description">
            The requested node does not exist in the KPR VERSE network.
          </p>
          <div className="error-actions">
            <Link href="/" className="home-button" data-cursor="hover">
              Return to Base
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .not-found-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000;
          font-family: 'Courier New', monospace;
        }

        .not-found-content {
          text-align: center;
          max-width: 600px;
          padding: 40px 20px;
        }

        .terminal-container {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(0, 255, 0, 0.3);
          border-radius: 8px;
          padding: 40px;
          backdrop-filter: blur(10px);
        }

        .error-code {
          font-size: 8rem;
          color: #ff0000;
          text-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
          margin-bottom: 20px;
          font-weight: bold;
        }

        .error-message {
          font-size: 2rem;
          color: #ffaa00;
          text-shadow: 0 0 10px rgba(255, 170, 0, 0.5);
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .error-description {
          font-size: 1.2rem;
          color: #888;
          margin-bottom: 30px;
          line-height: 1.6;
        }

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
        }

        .home-button:hover {
          background: rgba(0, 255, 0, 0.1);
          border-color: #ffaa00;
          color: #ffaa00;
          text-shadow: 0 0 10px rgba(255, 170, 0, 0.5);
          box-shadow: 0 0 15px rgba(255, 170, 0, 0.3);
        }
      `}</style>
    </div>
  );
}