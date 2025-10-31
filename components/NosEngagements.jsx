'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import './NosEngagements.css';
import useInView from '../hooks/useInView';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Nos Engagements Section
 * Two-column layout: left side with badge, title and checklist; right side with image
 * Client Component - uses custom hook
 */
const NosEngagements = () => {
  const ref = useRef(null);
  const visible = useInView(ref, { threshold: 0.15 });
  const { t } = useLanguage();

  return (
    <section className="nos-engagements-section">
      <div ref={ref} className={`nos-engagements-container ${visible ? 'is-visible' : ''}`}>
        <div className="nos-engagements-content">
          <div className="engagements-badge">{t('nosEngagements.badge')}</div>

          <h2 className="engagements-title">{t('nosEngagements.title')}</h2>

          <p className="engagements-desc">{t('nosEngagements.description')}</p>

          <div className="engagements-checklist">
            <div className="checklist-item">
              <span className="check-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="currentColor"/>
                  <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="checklist-text">{t('nosEngagements.item1')}</span>
            </div>

            <div className="checklist-item">
              <span className="check-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="currentColor"/>
                  <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="checklist-text">{t('nosEngagements.item2')}</span>
            </div>

            <div className="checklist-item">
              <span className="check-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="currentColor"/>
                  <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="checklist-text">{t('nosEngagements.item3')}</span>
            </div>

            <div className="checklist-item">
              <span className="check-icon" aria-hidden="true">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="10" cy="10" r="10" fill="currentColor"/>
                  <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span className="checklist-text">{t('nosEngagements.item4')}</span>
            </div>
          </div>
        </div>

        <div className="nos-engagements-image-wrapper">
          <Image 
            src="https://bcconciergerie.com/assets/nos enga.jpg" 
            alt="Conciergerie haut de gamme Nice Monaco - Services premium gestion locative" 
            className="nos-engagements-image" 
            width={600}
            height={700}
            loading="lazy" 
          />
        </div>
      </div>
    </section>
  );
};

export default NosEngagements;
