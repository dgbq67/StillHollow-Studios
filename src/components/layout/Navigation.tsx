'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '/', label: 'Portfolio' },
    { href: '/projects', label: 'Projects' },
    { href: '/studio', label: 'Studio' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' }
  ];

  const socialLinks = [
    {
      href: 'https://twitter.com/stillhollow',
      label: 'Twitter',
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    {
      href: 'https://github.com/stillhollow-studios',
      label: 'GitHub',
      target: '_blank',
      rel: 'noopener noreferrer'
    }
  ];

  return (
    <>
      <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <div className="nav-logo">
            <Link href="/" className="logo-text">
              SHS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav-menu">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-link ${pathname === link.href ? 'active' : ''}`}
                  data-cursor="hover"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="nav-social">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="social-link"
                target={link.target}
                rel={link.rel}
                data-cursor="hover"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
            data-cursor="hover"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}
        onClick={closeMobileMenu}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div
          className="mobile-menu-content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 id="mobile-menu-title" className="sr-only">
            Navigation Menu
          </h2>

          <ul className="mobile-nav-menu">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`mobile-nav-link ${pathname === link.href ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                  data-cursor="hover"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mobile-social-links">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="mobile-social-link"
                target={link.target}
                rel={link.rel}
                data-cursor="hover"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;