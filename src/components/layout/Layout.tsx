'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import LoadingScreen from './LoadingScreen';

interface LayoutProps {
  children: React.ReactNode;
  showLoading?: boolean;
}

const Layout = ({ children, showLoading = true }: LayoutProps) => {
  const [isLoading, setIsLoading] = useState(showLoading);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Skip loading screen if user has already visited
    const hasVisited = sessionStorage.getItem('kpr-visited');
    if (hasVisited) {
      setIsLoading(false);
    } else {
      sessionStorage.setItem('kpr-visited', 'true');
    }
  }, []);

  return (
    <div className="layout">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Loading Screen */}
      {isLoading && (
        <LoadingScreen
          onComplete={handleLoadingComplete}
          duration={6000}
        />
      )}

      {/* Main Content */}
      <div className={`main-content ${isLoading ? 'loading' : 'loaded'}`}>
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
      </div>

      <style jsx>{`
        .layout {
          min-height: 100vh;
          background: #000;
          color: #00ff00;
          font-family: 'Courier New', monospace;
          overflow-x: hidden;
        }

        .main-content {
          position: relative;
          transition: opacity 0.5s ease;
        }

        .main-content.loading {
          opacity: 0;
          pointer-events: none;
        }

        .main-content.loaded {
          opacity: 1;
          pointer-events: auto;
        }

        .main {
          min-height: calc(100vh - 200px); /* Account for header and footer */
        }
      `}</style>
    </div>
  );
};

export default Layout;