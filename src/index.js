import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Explore from './components/Courses/AllCourses/Explore';
import Courses from './components/Courses/Courses';
import EnrollForm from './components/Courses/EnrollForm/EnrollForm';
import ThankYouPage from './components/Courses/EnrollForm/ThankYouPage';


// Sample courses data
const courses = [
  {
    id: 1,
    title: '11th & 12th Science Coaching',
    description: 'Expert faculty, In-depth syllabus coverage, Personalized attention',
  },
  {
    id: 2,
    title: 'IIT-JEE Coaching',
    description: 'Achieve top ranks with our focused & result-oriented IIT-JEE coaching',
  },
  {
    id: 3,
    title: 'NEET Coaching',
    description: 'Master NEET with our comprehensive coaching for aspiring medical professionals',
  },
  {
    id: 4,
    title: 'Foundation Course',
    description: 'Solidify your foundation with expert guidance and course materials',
    category: 'school',
  },
  {
    id: 5,
    title: 'JEE & NEET',
    description: 'Comprehensive coaching designed for both JEE and NEET exams',
    category: 'exam',
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/allcourses" element={<Courses />} />
        <Route path="/allcourses/explore/:courseId" element={<Explore courses={courses} />} />
        <Route path='/allcourses/enroll' element={<EnrollForm />} />
        <Route path='/allcourses/enroll/thankyou' element={<ThankYouPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();






// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import App from './App';
//         // Import other components that need routes
// import reportWebVitals from './reportWebVitals';
// import Explore from './components/Courses/AllCourses/Explore';
// import AllCourses from './components/Courses/AllCourses/AllCourses';
// import Courses from './components/Courses/Courses';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Router>
//       <Routes>
//         <Route path="/allcourses" element={<Courses />} />
//         <Route path="/allcourses/explore" element={<Explore />} />
//       </Routes>
//     </Router>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
