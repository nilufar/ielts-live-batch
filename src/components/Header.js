import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <header className="bg-blue-500 text-white p-4 flex flex-col sm:flex-row justify-between items-center">
      <h1 className="text-xl font-bold">{t('title')}</h1>
      <div className="flex items-center space-x-4">
        <span>{t('toggleLanguage')}:</span>
        <button
          className="px-4 py-1 bg-white text-blue-500 rounded shadow"
          onClick={() => toggleLanguage('en')}
        >
          English
        </button>
        <button
          className="px-4 py-1 bg-white text-blue-500 rounded shadow"
          onClick={() => toggleLanguage('bn')}
        >
          বাংলা
        </button>
      </div>
    </header>
  );
};

export default Header;
