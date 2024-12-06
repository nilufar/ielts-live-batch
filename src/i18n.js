import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      title: "IELTS LIVE Batch",
      description: "Master IELTS with our live sessions and expert guidance.",
      toggleLanguage: "Language",
    },
  },
  bn: {
    translation: {
      title: "আইইএলটিএস লাইভ ব্যাচ",
      description: "আমাদের লাইভ সেশন এবং বিশেষজ্ঞ নির্দেশনার মাধ্যমে IELTS আয়ত্ত করুন।",
      toggleLanguage: "ভাষা",
    },
  },
  en: {
    translation: {
      loadingText: "Loading course details...",
      seoTitle: "IELTS Live Batch",
      seoDescription: "Learn more about the IELTS Live Batch.",
      courseTitle: "Course Title",
      courseDescription: "Course description not available.",
      toggleLanguage: "Language",
    },
  },
  bn: {
    translation: {
      loadingText: "কোর্স বিস্তারিত লোড হচ্ছে...",
      seoTitle: "আইইএলটিএস লাইভ ব্যাচ",
      seoDescription: "IELTS লাইভ ব্যাচ সম্পর্কে আরও জানুন।",
      courseTitle: "কোর্স শিরোনাম",
      courseDescription: "কোর্সের বর্ণনা উপলব্ধ নয়।",
      toggleLanguage: "ভাষা",
    },
  },
};

i18n
  .use(LanguageDetector) // Automatically detect user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
