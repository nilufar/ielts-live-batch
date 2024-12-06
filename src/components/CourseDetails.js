import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CourseDetails = () => {
  const [courseData, setCourseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch course data from the API
    axios
      .get('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch')
      .then((response) => {
        console.log('Course Data:', response.data.data.sections);
        const sections = response.data.data.sections; // Get sections from the response
        console.log(response.data.data.sections.values)
        setCourseData(sections); // Save sections data to state
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching course data:', error);
        setError('Failed to load course data. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center p-6">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-600 p-6">{error}</div>;
  }

  if (!courseData) {
    return <div>No course data available</div>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Details</h2>

      {/* Render the dynamic sections */}
      {courseData.map((section) => (
        <div key={section.type} className="space-y-4 mb-6">
          <h3 className="text-xl font-semibold text-gray-800">{section.name}</h3>

          {/* Check if 'values' exists in each section and render it */}
         

          {/* Render content for other sections if available */}
          {section.type === 'features' && section.content && (
            <p className="text-gray-600">{section.content}</p>
          )}

          {section.type === 'pointers' && Array.isArray(section.content) && (
            <ul className="list-disc pl-5">
              {section.content.map((pointer, index) => (
                <li key={index} className="text-gray-600">{pointer}</li>
              ))}
            </ul>
          )}

          {section.type === 'testimonials' && Array.isArray(section.content) && (
            <div className="space-y-2">
              {section.content.map((testimonial, index) => (
                <div key={index} className="text-gray-600">
                  <p>"{testimonial.quote}"</p>
                  <p className="italic">- {testimonial.author}</p>
                </div>
              ))}
            </div>
          )}

          {section.type === 'routine' && Array.isArray(section.content) && (
            <ul className="list-disc pl-5">
              {section.content.map((item, index) => (
                <li key={index} className="text-gray-600">{item}</li>
              ))}
            </ul>
          )}

          {section.type === 'about' && section.content && (
            <p className="text-gray-600">{section.content}</p>
          )}

          {/* Additional sections can be added here */}
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
