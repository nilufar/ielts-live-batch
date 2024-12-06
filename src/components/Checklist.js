import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Checklist = () => {
  const [checklistItems, setChecklistItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch course data from the API
    axios
      .get('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch')
      .then((response) => {
        // console.log(response);
        const courseData = response.data; 
        // console.log(courseData.data.checklist);
        if (courseData && courseData.data.checklist) {
          const checklistArray = courseData.data.checklist; 
          setChecklistItems(checklistArray);
        } else {
          console.error('No checklist data found');
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching checklist data:', error);
        setLoading(false);
      });
  }, []);

  // Loading state
  if (loading) {
    return <div className="text-center text-gray-500">Loading checklist...</div>;
  }

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Course Checklist</h2>
      <div className="space-y-4">
        {checklistItems.length > 0 ? (
          checklistItems.map((item, index) => (
            <div key={item.id || index} className="flex items-center space-x-4">
              <img src={item.icon} alt={item.text} className="w-6 h-6" />
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))
        ) : (
          <div className="text-gray-600">No checklist items available</div>
        )}
      </div>
    </div>
  );
};

export default Checklist;
