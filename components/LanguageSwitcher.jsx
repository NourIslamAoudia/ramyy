'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, changeLanguage } = useLanguage();

  return (
    <div className="language-switcher">
      <button
        className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
        onClick={() => changeLanguage('fr')}
        aria-label="Switch to French"
      >
        FR
      </button>
      <span className="lang-divider">|</span>
      <button
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
