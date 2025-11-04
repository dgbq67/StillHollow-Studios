'use client';

import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <h3 className="footer-title">SHS</h3>
            <p className="footer-description">
              StillHollow Studios - Creative Digital Experience Studio
            </p>
          </div>

          {/* Navigation Links */}
          <div className="footer-nav">
            <h4 className="footer-heading">Navigate</h4>
            <ul className="footer-links">
              <li>
                <Link href="/" className="footer-link" data-cursor="hover">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/projects" className="footer-link" data-cursor="hover">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/studio" className="footer-link" data-cursor="hover">
                  Studio
                </Link>
              </li>
              <li>
                <Link href="/services" className="footer-link" data-cursor="hover">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link" data-cursor="hover">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="footer-social">
            <h4 className="footer-heading">Connect</h4>
            <div className="footer-social-links">
              <a
                href="https://twitter.com/stillhollow"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                data-cursor="hover"
              >
                Twitter
              </a>
              <a
                href="https://github.com/stillhollow-studios"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                data-cursor="hover"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Terminal Info */}
          <div className="footer-terminal">
            <h4 className="footer-heading">Studio</h4>
            <div className="footer-terminal-info">
              <p className="terminal-text">STATUS: READY</p>
              <p className="terminal-text">PROTOCOL: v3.1.2</p>
              <p className="terminal-text">PROJECTS: 42 ACTIVE</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="footer-copyright">
              © {currentYear} StillHollow Studios. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link" data-cursor="hover">
                Privacy
              </a>
              <a href="#" className="footer-bottom-link" data-cursor="hover">
                Terms
              </a>
              <a href="#" className="footer-bottom-link" data-cursor="hover">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: #000;
          border-top: 1px solid rgba(0, 255, 0, 0.2);
          padding: 60px 0 20px;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background:
            radial-gradient(circle at 20% 80%, rgba(0, 255, 0, 0.05) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          position: relative;
          z-index: 1;
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.5fr;
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-brand {
          max-width: 300px;
        }

        .footer-title {
          font-size: 24px;
          font-weight: bold;
          color: #00ff00;
          text-shadow: 0 0 10px rgba(0, 255, 0, 0.5);
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 15px;
        }

        .footer-description {
          color: #888;
          line-height: 1.6;
          font-size: 14px;
        }

        .footer-heading {
          font-size: 16px;
          font-weight: bold;
          color: #00ff00;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 20px;
          text-shadow: 0 0 5px rgba(0, 255, 0, 0.3);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 12px;
        }

        .footer-link {
          color: #888;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
          display: inline-block;
          position: relative;
        }

        .footer-link::before {
          content: '[';
          position: absolute;
          left: -8px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .footer-link::after {
          content: ']';
          position: absolute;
          right: -8px;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .footer-link:hover::before,
        .footer-link:hover::after {
          opacity: 1;
        }

        .footer-link:hover {
          color: #ffaa00;
          text-shadow: 0 0 8px rgba(255, 170, 0, 0.5);
        }

        .footer-social-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-social-link {
          color: #888;
          text-decoration: none;
          font-size: 14px;
          transition: all 0.3s ease;
        }

        .footer-social-link:hover {
          color: #ffaa00;
          text-shadow: 0 0 8px rgba(255, 170, 0, 0.5);
        }

        .footer-terminal-info {
          background: rgba(0, 0, 0, 0.8);
          border: 1px solid rgba(0, 255, 0, 0.2);
          border-radius: 4px;
          padding: 15px;
        }

        .terminal-text {
          color: #00ff00;
          font-family: 'Courier New', monospace;
          font-size: 12px;
          margin: 5px 0;
          text-shadow: 0 0 3px rgba(0, 255, 0, 0.3);
        }

        .footer-bottom {
          border-top: 1px solid rgba(0, 255, 0, 0.1);
          padding-top: 20px;
        }

        .footer-bottom-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-copyright {
          color: #666;
          font-size: 14px;
        }

        .footer-bottom-links {
          display: flex;
          gap: 20px;
        }

        .footer-bottom-link {
          color: #666;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.3s ease;
        }

        .footer-bottom-link:hover {
          color: #00ff00;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 30px;
          }

          .footer-brand {
            grid-column: 1 / -1;
            max-width: none;
          }
        }

        @media (max-width: 768px) {
          .footer {
            padding: 40px 0 20px;
          }

          .footer-content {
            grid-template-columns: 1fr;
            gap: 25px;
          }

          .footer-bottom-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .footer-bottom-links {
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .footer {
            padding: 30px 0 15px;
          }

          .footer-title {
            font-size: 20px;
          }

          .footer-terminal-info {
            padding: 12px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;