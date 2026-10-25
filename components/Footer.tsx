'use client';

import Image from 'next/image';
import Link from 'next/link';

interface FooterProps {
  onProjectClick?: (projectId: string) => void;
}

export default function Footer({ onProjectClick }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand-col">
            <Image
              src="/assets/logo.svg"
              alt="CeloraIT Logo"
              width={160}
              height={42}
            />
            <p>
              CeloraIT is a modern Bangladesh-based software company building scalable digital products, SaaS platforms, ERP systems, AI-enabled automation, mobile apps, and cloud solutions.
            </p>
            <div style={{ marginTop: '16px', fontSize: '0.85rem', color: 'var(--accent-emerald)' }}>
              Dhaka, Bangladesh • www.celorait.com
            </div>
          </div>

          <div>
            <h4 className="footer-col-title">Services</h4>
            <ul className="footer-links-list">
              <li><Link href="#services">Software Development</Link></li>
              <li><Link href="#services">SaaS & ERP Solutions</Link></li>
              <li><Link href="#services">Mobile App Development</Link></li>
              <li><Link href="#services">UI/UX Design</Link></li>
              <li><Link href="#services">AI & Automation</Link></li>
              <li><Link href="#services">Blockchain Solutions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Flagship Systems</h4>
            <ul className="footer-links-list">
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    if (onProjectClick) {
                      e.preventDefault();
                      onProjectClick('retailos-bd');
                    }
                  }}
                >
                  RetailOS BD (POS SaaS)
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    if (onProjectClick) {
                      e.preventDefault();
                      onProjectClick('motoparts-erp');
                    }
                  }}
                >
                  MotoParts ERP
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    if (onProjectClick) {
                      e.preventDefault();
                      onProjectClick('activeguide-ai');
                    }
                  }}
                >
                  ActiveGuide AI (RAG)
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    if (onProjectClick) {
                      e.preventDefault();
                      onProjectClick('bus-dorkar');
                    }
                  }}
                >
                  Bus Dorkar (Ticketing)
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    if (onProjectClick) {
                      e.preventDefault();
                      onProjectClick('pathasathi');
                    }
                  }}
                >
                  Pathasathi (PWA)
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => {
                    if (onProjectClick) {
                      e.preventDefault();
                      onProjectClick('custom-blockchain');
                    }
                  }}
                >
                  Custom Layer-1 Chain
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#delivery-pod">Delivery Pods</Link></li>
              <li><Link href="#team">Our Team</Link></li>
              <li><Link href="#estimator">Scope Calculator</Link></li>
              <li><Link href="#contact">Get In Touch</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © 2026 CeloraIT. All rights reserved. Software • SaaS • ERP • AI • Cloud • Mobile Apps.
          </div>
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <button
              onClick={scrollToTop}
              className="btn-icon"
              title="Back to top"
              aria-label="Back to top"
            >
              ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
