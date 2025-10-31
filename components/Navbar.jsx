'use client';

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { FaBars, FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Navbar Component
 * Main navigation bar with logo, menu icon, phone number, app button, wishlist, and profile
 * Client Component - uses useState, useEffect, and event handlers
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLanguage();

  const toggleMenu = () => setMenuOpen((s) => !s);
  const closeMenu = () => setMenuOpen(false);

  // side effect: add a 'blurred' class to the main content when the drawer is open
  useEffect(() => {
    const main = document.querySelector('.site-main');
    if (!main) return;
    if (menuOpen) main.classList.add('blurred');
    else main.classList.remove('blurred');
    return () => main.classList.remove('blurred');
  }, [menuOpen]);

  useEffect(() => {
    // Robust scroll detection: check multiple possible scroll containers (window, documentElement, body, .home-page)
    const homeEl = document.querySelector('.home-page');
    const candidates = [window, document.documentElement, document.body, homeEl].filter(Boolean);

    let rafId = 0;

    const getTop = (c) => {
      try {
        if (c === window) return window.scrollY || window.pageYOffset || 0;
        return c.scrollTop || 0;
      } catch (_) {
        return 0;
      }
    };

    let last = null;
    const poll = () => {
      const anyScrolled = candidates.some((c) => getTop(c) > 0);
      if (anyScrolled !== last) {
        last = anyScrolled;
        setScrolled(anyScrolled);
      }
      rafId = requestAnimationFrame(poll);
    };

    // start polling
    poll();

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-inner">
        {/* Left section - Menu icon and Logo */}
        <div className="navbar-left">
          <button className="menu-icon" aria-label="Menu" onClick={toggleMenu} aria-expanded={menuOpen} aria-controls="site-drawer">
            <FaBars />
          </button>
          <div className="logo">
            <Image 
              src="https://bcconciergerie.com/assets/logo.jpg" 
              alt="conciergerie logo" 
              className="logo-img" 
              width={40} 
              height={40}
              priority
            />
            <span className="logo-text">conciergerie</span>
          </div>
        </div>

        {/* Right section - Phone, App button, Wishlist, Profile */}
        <div className="navbar-right">
          <LanguageSwitcher />
          <a
            href="https://wa.me/+33774061322"
            className="app-button whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
            <span className="whatsapp-text">{t('navbar.whatsapp')}</span>
          </a>
        </div>
      </div>
        </div>
      {/* Drawer + Backdrop */}
      <div className={`nav-backdrop ${menuOpen ? 'open' : ''}`} onClick={closeMenu} aria-hidden={!menuOpen}></div>

      <aside id="site-drawer" className={`nav-drawer ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
        <button className="drawer-close" aria-label="Close menu" onClick={closeMenu}>&times;</button>
                <div className="drawer-links">
          <a href="/" onClick={closeMenu}>{t('navbar.home')}</a>
          <a href="/services" onClick={closeMenu}>{t('navbar.services')}</a>
          <a href="/offres" onClick={closeMenu}>{t('navbar.offers')}</a>
          <a href="/a-propos" onClick={closeMenu}>{t('navbar.about')}</a>
          <a href="https://wa.me/+33774061322" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>{t('navbar.contact')}</a>
        </div>
        
        <div className="drawer-footer">
          <p className="drawer-contact">{t('navbar.footerText')}<br/><strong>+33 77 40 61 3 22</strong></p>
          <a className="drawer-contact-link" href="https://wa.me/+33774061322" target="_blank" rel="noopener noreferrer">{t('navbar.contactUs')}</a>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
