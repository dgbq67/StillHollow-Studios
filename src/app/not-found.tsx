import Link from 'next/link';
import '../styles/pages/error.css';

export default function NotFound() {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="terminal-container">
          <h1 className="error-code large">404</h1>
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
    </div>
  );
}