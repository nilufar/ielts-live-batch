import React, { useEffect, useState } from "react";
import { fetchCourseVariants } from "../utils/api";

const CourseVariants = () => {
  const [variants, setVariants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getVariants = async () => {
      try {
        const data = await fetchCourseVariants();
        setVariants(data);
      } catch (err) {
        setError("Failed to load course variants. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getVariants();
  }, []);

  if (loading) return <div>Loading variants...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold">Available Variants</h2>
      <ul className="mt-2">
        {variants.map((variant, index) => (
          <li key={index} className="mb-2 p-2 border rounded">
            <p className="font-semibold">{variant.name}</p>
            <p className="text-sm text-gray-600">{variant.description}</p>
            <p className="text-sm text-green-500">Price: {variant.price}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseVariants;
