import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import CourseOverview from './components/CourseOverview';
import Checklist from './components/Checklist';
import CoursePlans from './components/CoursePlans';
import CourseDetails from './components/CourseDetails';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-4">
        <CourseOverview />
        <Checklist />
        <br></br>
        <CoursePlans />
        <br></br>
        <CourseDetails /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;
