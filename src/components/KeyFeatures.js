import React, { useEffect, useState } from 'react';
import axios from 'axios';

const KeyFeatures = () => {
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    axios.get('https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-live-batch/variants')
      .then(response => setVariants(response.data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <h2>Available Variants</h2>
      <ul>
        {variants.map(variant => (
          <li key={variant.id}>{variant.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default KeyFeatures;
