'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import './WelcomeSection.css';
import useInView from '../hooks/useInView';
import { useLanguage } from '@/context/LanguageContext';

/**
 * WelcomeSection Component
 * Text content on the left, three photos grid on the right
 * Introduces B&C Conciergerie Côte d'Azur
 * Client Component - uses custom hook
 */
const WelcomeSection = () => {
  const ref = useRef(null);
  const visible = useInView(ref, { threshold: 0.12 });
  const { t } = useLanguage();

  return (
    <section className="welcome-section">
      <div ref={ref} className={`welcome-container ${visible ? 'is-visible' : ''}`}>
        {/* Left side - Text content */}
        <div className="welcome-text">
          <h2 className="welcome-title">
            {t('welcome.title')}
            <br />
            {t('welcome.subtitle')}
          </h2>
          <p className="welcome-description">
            {t('welcome.description1')}
          </p>
          <p className="welcome-description">
            {t('welcome.description2')}
          </p>
          <p className="welcome-description">
            {t('welcome.description3')}
          </p>
        </div>

        {/* Right side - Photo grid */}
        <div className="welcome-photos">
          <div className="photo-grid">
            <Image
              src="https://bcconciergerie.com/assets/why1.jpg"
              alt="Conciergerie luxe Nice Monaco - Gestion locative premium"
              className="grid-photo photo-1"
              width={400}
              height={300}
              loading="lazy"
            />
            <Image
              src="https://bcconciergerie.com/assets/why2.jpg"
              alt="Location Airbnb Côte d'Azur - Gestion appartements"
              className="grid-photo photo-2"
              width={400}
              height={300}
              loading="lazy"
            />
            <Image
              src="https://bcconciergerie.com/assets/why3.jpg"
              alt="Gestion de biens Monaco - Conciergerie haut de gamme"
              className="grid-photo photo-3"
              width={400}
              height={300}
              loading="lazy"
            />
            <Image
              src="https://bcconciergerie.com/assets/why4.jpg"
              alt="Location courte durée Nice - Entretien professionnel"
              className="grid-photo photo-4"
              width={400}
              height={300}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
