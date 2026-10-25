'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {
  onEstimatorClick?: () => void;
}

export default function Navbar({ onEstimatorClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'about', 'services', 'projects', 'tech-stack', 'delivery-pod', 'team', 'estimator', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link href="#hero" className="brand-logo-link" aria-label="CeloraIT Home" onClick={closeMobile}>
          <Image
            src="/assets/logo.svg"
            alt="CeloraIT Logo"
            width={160}
            height={42}
            priority
          />
        </Link>

        <nav className="nav-links" aria-label="Main Navigation">
          <Link href="#about" className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}>About</Link>
          <Link href="#services" className={`nav-link ${activeSection === 'services' ? 'active' : ''}`}>Services</Link>
          <Link href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}>Projects</Link>
          <Link href="#tech-stack" className={`nav-link ${activeSection === 'tech-stack' ? 'active' : ''}`}>Tech Stack</Link>
          <Link href="#delivery-pod" className={`nav-link ${activeSection === 'delivery-pod' ? 'active' : ''}`}>Delivery Pods</Link>
          <Link href="#team" className={`nav-link ${activeSection === 'team' ? 'active' : ''}`}>Team</Link>
          <Link href="#estimator" className={`nav-link ${activeSection === 'estimator' ? 'active' : ''}`}>Estimator</Link>
          <Link href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}>Contact</Link>
        </nav>

        <div className="nav-actions">
          <Link href="#estimator" className="btn btn-secondary btn-sm" onClick={onEstimatorClick}>
            Scope Calculator
          </Link>
          <Link href="#contact" className="btn btn-primary btn-sm">
            Get In Touch
          </Link>
          <button
            className="mobile-menu-btn"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle Mobile Navigation"
          >
            {isMobileOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`mobile-nav-drawer ${isMobileOpen ? 'open' : ''}`} id="mobile-nav-drawer">
        <Link href="#about" className="mobile-nav-link" onClick={closeMobile}>About Us</Link>
        <Link href="#services" className="mobile-nav-link" onClick={closeMobile}>Services</Link>
        <Link href="#projects" className="mobile-nav-link" onClick={closeMobile}>Flagship Projects</Link>
        <Link href="#tech-stack" className="mobile-nav-link" onClick={closeMobile}>Tech Stack</Link>
        <Link href="#delivery-pod" className="mobile-nav-link" onClick={closeMobile}>Delivery Pods</Link>
        <Link href="#team" className="mobile-nav-link" onClick={closeMobile}>Our Team</Link>
        <Link href="#estimator" className="mobile-nav-link" onClick={closeMobile}>Cost Estimator</Link>
        <Link href="#contact" className="mobile-nav-link" onClick={closeMobile}>Contact Us</Link>
        <div style={{ marginTop: '10px' }}>
          <Link href="#contact" className="btn btn-primary" style={{ width: '100%' }} onClick={closeMobile}>
            Start a Project
          </Link>
        </div>
      </div>
    </header>
  );
}
