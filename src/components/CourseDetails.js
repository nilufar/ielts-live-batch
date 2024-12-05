import React, { useEffect, useState } from "react";
import { fetchCourseDetails } from "../utils/api";

const CourseDetails = () => {
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getCourseDetails = async () => {
      try {
        const data = await fetchCourseDetails();
        setCourse(data);
      } catch (err) {
        setError("Failed to load course details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    getCourseDetails();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <section className="p-4">
      <h1 className="text-3xl font-bold">{course.title}</h1>
      <p className="mt-2 text-lg">{course.description}</p>

      <div className="mt-4">
        <h2 className="text-xl font-semibold">Key Features:</h2>
        <ul className="list-disc pl-5">
          {course.features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CourseDetails;
