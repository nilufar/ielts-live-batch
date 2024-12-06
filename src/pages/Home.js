import React from "react";
import CourseDetails from "../components/CourseDetails";
import CourseVariants from "../components/CourseVariants";

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <CourseDetails />
      <CourseVariants />
    </div>
  );
};

export default HomePage;
