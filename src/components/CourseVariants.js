import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Add this line

const CourseVariants = () => {
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch/variants')
      .then(response => setVariants(response.data || []))
      .catch(console.error);
  }, []);

  return (
    <div>
      {Array.isArray(variants) && variants.length > 0 ? (
        variants.map(variant => (
          <div key={variant.id}>{variant.name}</div>
        ))
      ) : (
        <div>No variants available.</div>
      )}
    </div>
  );
};

export default CourseVariants;
