import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enCommon from './locales/en/common.json';
import enSections from './locales/en/sections.json';
import enProjects from './locales/en/projects.json';

import ptCommon from './locales/pt/common.json';
import ptSections from './locales/pt/sections.json';
import ptProjects from './locales/pt/projects.json';

const resources = {
  en: {
    common: enCommon,
    sections: enSections,
    projects: enProjects,
  },
  pt: {
    common: ptCommon,
    sections: ptSections,
    projects: ptProjects,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    defaultNS: 'common',
    ns: ['common', 'sections', 'projects'],

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
      lookupLocalStorage: 'portfolio-language',
    },

    interpolation: {
      escapeValue: false, // React already escapes
    },

    react: {
      useSuspense: false,
    },
  });

export default i18n;
