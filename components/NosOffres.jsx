'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import './NosOffres.css';
import { useLanguage } from '@/context/LanguageContext';

export default function NosOffres() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="nos-offres-section" ref={sectionRef}>
      <div className="nos-offres-container">
        <h2 className={`nos-offres-title ${inView ? 'animate' : ''}`}>{t('nosOffres.title')}</h2>
        <p className={`nos-offres-subtitle ${inView ? 'animate' : ''}`}>{t('nosOffres.subtitle')}</p>
        
        <div className={`offres-grid ${inView ? 'animate' : ''}`}>
          {/* Offre Lancement Card */}
          <div className="offre-card">
            <div className="offre-icon">
              <span className="offre-emoji" role="img" aria-label="celebration">🎉</span>
            </div>
            
            <h3 className="offre-title">{t('nosOffres.launchTitle')}</h3>
            <p className="offre-badge">{t('nosOffres.launchBadge')}</p>
            
            <p className="offre-description">
              {t('nosOffres.launchDesc')}
            </p>
            
            <Link href="/offres" className="offre-button">{t('nosOffres.launchButton')}</Link>
          </div>

          {/* Offre Partenaire Card */}
          <div className="offre-card">
            <div className="offre-icon">
              <span className="offre-emoji" role="img" aria-label="celebration">🎉</span>
            </div>
            
            <h3 className="offre-title">{t('nosOffres.partnerTitle')}</h3>
            
            <p className="offre-description">
              {t('nosOffres.partnerDesc')}
            </p>
            
            <Link href="/offres" className="offre-button">{t('nosOffres.partnerButton')}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
