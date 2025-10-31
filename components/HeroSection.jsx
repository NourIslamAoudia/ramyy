'use client';

import React, { useState } from 'react';
import './HeroSection.css';
import ContactFormModal from './ContactFormModal';
import { useLanguage } from '@/context/LanguageContext';

/**
 * HeroSection Component
 * Fullscreen background video with dark overlay and centered hero text
 * Client Component - includes modal for estimation button
 */
const HeroSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <section className="hero-section">
      {/* Background Video */}
      <video 
        className="hero-video" 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="metadata"
        loading="lazy"
      >
        <source 
          src="https://bcconciergerie.com/assets/video-hero.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-content">
        <h1 className="hero-title">
          {t('hero.title')}
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <button 
          className="estimation-button"
          onClick={() => setIsModalOpen(true)}
        >
          {t('hero.button')}
        </button>
      </div>

      <ContactFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={t('hero.modalTitle')}
      />
    </section>
  );
};

export default HeroSection;
