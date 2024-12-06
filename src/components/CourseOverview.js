import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';

const CourseOverview = () => {
  const [course, setCourse] = useState(null);
  const { t } = useTranslation(); // Hook for translations

  useEffect(() => {
    axios
      .get('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch')
      .then(response => setCourse(response.data))
      .catch(error => console.error('Error fetching course data:', error));
  }, []);

  if (!course) {
    return <div className="text-center text-gray-500">{t('loadingText', 'Loading course details...')}</div>;
  }

  // Ensure `seo` exists before accessing its properties
  const { seo = {} } = course;

  return (
    <>
      <Helmet>
        <title>{seo.title || t('seoTitle', 'IELTS Live Batch')}</title>
        <meta name="description" content={seo.description || t('seoDescription', 'Learn more about the IELTS Live Batch.')} />
        {seo.defaultMeta?.keywords && <meta name="keywords" content={seo.defaultMeta.keywords} />}
        {seo.defaultMeta?.author && <meta name="author" content={seo.defaultMeta.author} />}
      </Helmet>
      <section className="p-6 bg-gray-100">
        <h1 className="text-2xl font-bold text-gray-800">{course.title || t('courseTitle', 'Course Title')}</h1>
        <p className="mt-2 text-gray-600">{course.description || t('courseDescription', 'Course description not available.')}</p>
      </section>
    </>
  );
};

export default CourseOverview;
