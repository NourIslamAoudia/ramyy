'use client';

import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import Image from 'next/image';
import './IconicCollectionCarousel.css';
import useInView from '../hooks/useInView';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Iconic Collection Carousel Section
 * Stack of destination cards with smooth animations
 * Client Component - uses Framer Motion and custom hook
 */
const IconicCollectionCarousel = () => {
  const ref = useRef(null);
  const visible = useInView(ref, { threshold: 0.1 });
  const { t } = useLanguage();

  // Framer Motion variants
  const cardsContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.18 } }
  };

  const cardVariant = {
    hidden: { x: 80, opacity: 1 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: [0.2, 0.8, 0.2, 1] } }
  };

  return (
  <section id="destinations" className="iconic-collection-section">
      <div className="iconic-collection-header">
        <span className="section-badge">{t('destinations.badge')}</span>
        <h2 className="section-title">
          {t('destinations.title')} <span className="title-highlight">{t('destinations.titleHighlight')}</span>
        </h2>
      </div>

      <motion.div
        ref={ref}
        className={`iconic-collection-container ${visible ? 'is-visible' : ''}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.16 }}
      >
        <motion.div className="destination-cards-stack" variants={cardsContainer}>
          
          {/* Card 1 - Nice */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <Image 
                src="https://bcconciergerie.com/assets/cote azur.jpg" 
                alt="Gestion locative Nice - Location Airbnb luxe" 
                className="card-thumbnail-image" 
                width={636}
                height={180}
                loading="lazy" 
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{t('destinations.nice.title')}</h3>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                {t('destinations.nice.location')}
              </p>
              <p className="card-description">
                {t('destinations.nice.description')}
              </p>
            </div>
          </motion.div>

          {/* Card 2 - Monaco */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <Image 
                src="https://bcconciergerie.com/assets/monaco.jpg" 
                alt="Gestion locative Monaco - Conciergerie luxe Monaco" 
                className="card-thumbnail-image" 
                width={636}
                height={180}
                loading="lazy" 
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{t('destinations.monaco.title')}</h3>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                {t('destinations.monaco.location')}
              </p>
              <p className="card-description">
                {t('destinations.monaco.description')}
              </p>
            </div>
          </motion.div>

          {/* Card 3 - Villefranche-sur-Mer */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <Image 
                src="https://bcconciergerie.com/assets/ville_franche.jpg" 
                alt="Location saisonnière Villefranche-sur-Mer" 
                className="card-thumbnail-image" 
                width={636}
                height={180}
                loading="lazy" 
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{t('destinations.villefranche.title')}</h3>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                {t('destinations.villefranche.location')}
              </p>
              <p className="card-description">
                {t('destinations.villefranche.description')}
              </p>
            </div>
          </motion.div>

          {/* Card 4 - Cannes */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <Image 
                src="https://bcconciergerie.com/assets/cannes.jpg" 
                alt="Location Airbnb Cannes - Gestion appartements luxe" 
                className="card-thumbnail-image" 
                width={636}
                height={180}
                loading="lazy" 
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{t('destinations.cannes.title')}</h3>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                {t('destinations.cannes.location')}
              </p>
              <p className="card-description">
                {t('destinations.cannes.description')}
              </p>
            </div>
          </motion.div>

          {/* Card 5 - Antibes et Juan les Pins */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <Image 
                src="https://bcconciergerie.com/assets/Antibe et Juan les pins.jpg" 
                alt="Location saisonnière Antibes et Juan les Pins" 
                className="card-thumbnail-image" 
                width={636}
                height={180}
                loading="lazy" 
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{t('destinations.antibes.title')}</h3>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                {t('destinations.antibes.location')}
              </p>
              <p className="card-description">
                {t('destinations.antibes.description')}
              </p>
            </div>
          </motion.div>

          {/* Card 6 - Èze et Saint-Jean-Cap-Ferrat */}
          <motion.div className="destination-card" variants={cardVariant}>
            <div className="card-thumbnail">
              <Image 
                src="https://bcconciergerie.com/assets/Eze et saint jean cap Ferrat.jpg" 
                alt="Location luxe Èze et Saint-Jean-Cap-Ferrat" 
                className="card-thumbnail-image" 
                width={636}
                height={180}
                loading="lazy" 
              />
            </div>
            <div className="card-content">
              <h3 className="card-title">{t('destinations.eze.title')}</h3>
              <p className="card-location">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 1.75C5.067 1.75 3.5 3.317 3.5 5.25C3.5 7.4375 7 12.25 7 12.25C7 12.25 10.5 7.4375 10.5 5.25C10.5 3.317 8.933 1.75 7 1.75Z" stroke="currentColor" strokeWidth="1.2"/>
                  <circle cx="7" cy="5.25" r="1.25" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                {t('destinations.eze.location')}
              </p>
              <p className="card-description">
                {t('destinations.eze.description')}
              </p>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    </section>
  );
};

export default IconicCollectionCarousel;
