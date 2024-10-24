// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import clock from '../images/clock.svg';
// import learner from '../images/learners.svg';
// import question from '../images/question.svg';
// import symbol from '../images/symbol.svg';
// import Testimonial from "../Testimonials/Testimonial.jsx";

// const Explore = ({ courses }) => {
//   const [openModule, setOpenModule] = useState(null);
//   const { courseId } = useParams();

//   // Find the course based on the courseId
//   const selectedCourse = courses.find(course => course.id === parseInt(courseId));

//   if (!selectedCourse) {
//     return <p>Course not found.</p>;
//   }

//   const handleToggle = (moduleId) => {
//     // Toggle the module based on the current state
//     setOpenModule(openModule === moduleId ? null : moduleId);
//   };

//   const modules = [
//     { id: 1, title: 'Module-1', topics: 5, duration: '1hr 40 mins', 
//       topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
//     { id: 2, title: 'Module-2', topics: 5, duration: '1hr 40 mins', 
//       topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
//     { id: 3, title: 'Module-3', topics: 5, duration: '1hr 40 mins', 
//       topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
//     { id: 4, title: 'Module-4', topics: 5, duration: '1hr 40 mins', 
//       topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
//     { id: 5, title: 'Module-5', topics: 5, duration: '1hr 40 mins', 
//       topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
//   ];

//   return (
//     <div className="mobile">
//     <div className="main h-auto">
//       <div className="min-h-screen w-full max-w-[1101px] bg-[#D8E5ED] rounded-[20px] flex flex-col mt-[53.84px] items-center mx-auto p-6 sm:mx-0 sm:w-full sm:p-6" 
//         style={{ marginLeft: '26.5px', marginRight: '26.5px', maxWidth: 'calc(100% - 53px)' }}>
//         <div className="w-full h-auto">
//           <div className="flex flex-col sm:flex-row items-start sm:space-x-6 sm:space-y-4 sm:items-center relative"> 
//             <h1 className="text-3xl text-gray-800 mb-4 font-roboto font-semibold sm:text-3xl sm:text-center" 
//               style={{ width: '210px', height: '160px' }}>
//               {selectedCourse.title} <br /> in Kalyan
//             </h1>
//             <div className="absolute mt-[20px] right-0 top-0 transform translate-y-[-50%] mr-4 sm:mr-2">
//               <img src={question} alt="Question" className="animate-bounce w-[50px] h-[50px] sm:w-[40px] sm:h-[40px]" />
//             </div>
//           </div>

//           <p className="text-lg text-gray-700 mb-6 sm:text-base sm:text-center">{selectedCourse.description}</p>

//           {/* Course features */}
//           <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6 sm:grid-cols-1">
//             <div className="bg-[#406376] text-white p-4 rounded-[20px] text-center sm:p-3">
//               In-depth coverage of the syllabus with a focus on clarity.
//             </div>
//             <div className="bg-[#406376] text-white p-4 rounded-[20px] text-center sm:p-3">
//               Personalized doubt-clearing sessions.
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6 sm:grid-cols-1">
//             <div className="bg-[#406376] text-white p-4 rounded-[20px] text-center sm:p-3">
//               Regular tests and assessments to track progress.
//             </div>
//             <div className="bg-[#406376] text-white p-4 rounded-[20px] text-center sm:p-3">
//               Exam-oriented coaching for both board and competitive exams.
//             </div>
//           </div>

//           <div className="flex mb-6 sm:flex-col flex-col sm:items-center">
//             <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 w-[293px] h-[59px] sm:w-full sm:h-[48px] sm:mb-4">
//               Enroll Now
//             </button>
//             <div className="relative w-full h-screen sm:w-20 sm:h-20 hidden sm:block">
//               <div className="absolute w-[211.61px] h-[201.56px]" style={{ left: '750.7px', transform: 'rotate(30.44deg)' }}>
//                 <img src={symbol} alt="Symbol" className="w-full h-full sm:w-full sm:h-full" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dynamic course details */}
//       <div className="w-full p-6 flex-col items-center mx-auto bg-[#D8E5ED] mt-[40px] rounded-[20px] sm:mx-0"
//         style={{ marginLeft: '26.5px', marginRight: '26.5px', maxWidth: 'calc(100% - 53px)' }}>
//         <div className="text-left sm:text-center">
//           <h1 className="text-2xl font-semibold ml-[54px] text-gray-700 sm:text-xl">Course Details</h1>
//           <div className="h-16 flex items-center sm:h-10 sm:justify-center">
//             <h2 className="text-3xl ml-[49px] font-bold text-gray-800 mb-0 overflow-hidden sm:text-2xl sm:ml-0">
//               {selectedCourse.title}
//             </h2>
//           </div>
//           <div className="flex items-center ml-[54px] text-gray-600 mb-6 sm:ml-4 sm:justify-center sm:mb-4">
//             <span className="mr-6 flex items-center sm:mr-2 sm:text-xs">
//               <img src={clock} alt="" className="mr-[5px] w-[20px] h-[20px] sm:w-[16px] sm:h-[16px]" />
//               6hrs 10 mins
//             </span>
//             <span className="mr-6 flex items-center sm:mr-2 sm:text-xs">
//               <img src={learner} alt="" className="mr-[5px] w-[20px] h-[20px] sm:w-[16px] sm:h-[16px]" />
//               101 Learners
//             </span>
//             <span className="flex items-center sm:text-xs">
//               <span className="mr-1">⭐</span>4.3
//             </span>
//           </div>

          // <div className="space-y-4 sm:ml-[133.5px] w-[294px] w-max-auto items-center sm:ml-0 sm:space-y-4">
          //   {modules.map((module) => (
          //     <div
          //       key={module.id}
          //       className="bg-white p-4 sm:w-[800px] justify-center ml-[5px] w-[294px] rounded-lg hover:shadow-md cursor-pointer transition-all duration-200  sm:p-6"
          //       onClick={() => handleToggle(module.id)}
          //     >
          //       <div className="flex justify-between items-center sm:flex-col sm:items-start sm:text-center">
          //         <div>
          //           <h3 className="text-xl font-semibold text-gray-700 sm:text-lg">{module.title}</h3>
          //           <p className="text-sm text-gray-500 sm:text-xs">Topics: {module.topics}</p>
          //           <p className="text-sm text-gray-500 sm:text-xs">Duration: {module.duration}</p>
          //         </div>
          //         <span className={`text-gray-600 text-xl sm:text-lg transition-transform duration-200 ${openModule === module.id ? 'rotate-180' : ''}`}>
          //           ^
          //         </span>                </div>
          //       {openModule === module.id && (
          //         <div className="mt-4">
          //           <ul className="list-disc pl-6">
          //             {module.topicsList.map((topic, index) => (
          //               <li key={index} className="text-gray-600 text-sm">{topic}</li>
          //             ))}
          //           </ul>
          //         </div>
          //       )}
          //     </div>
          //   ))}
          // </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="mt-10 mb-10 w-full p-6 flex flex-col items-center bg-[#D8E5ED] rounded-[20px] sm:mx-0"
//         style={{ marginLeft: '26.5px', marginRight: '26.5px', maxWidth: 'calc(100% - 53px)' }}>
//         <h1 className="text-2xl font-semibold text-gray-700 sm:text-xl">Student Testimonials</h1>
//         <Testimonial />
//       </div>
//     </div>

// </div>
//   );
// };

// export default Explore;
















//Mobile View

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import clock from '../images/clock.svg';
// import learner from '../images/learners.svg';
// import question from '../images/question.svg';
// import symbol from '../images/symbol.svg';
// import Testimonial from "../Testimonials/Testimonial.jsx";

// const Explore = ({ courses }) => {
//   const [openModule, setOpenModule] = useState(null);
//   const { courseId } = useParams();

//   // Find the course based on the courseId
//   const selectedCourse = courses.find(course => course.id === parseInt(courseId));

//   if (!selectedCourse) {
//     return <p>Course not found.</p>;
//   }

//   const handleToggle = (moduleId) => {
//     // Toggle the module based on the current state
//     setOpenModule(openModule === moduleId ? null : moduleId);
//   };

  // const modules = [
  //   { id: 1, title: 'Module-1', topics: 5, duration: '1hr 40 mins', 
  //     topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
  //   { id: 2, title: 'Module-2', topics: 5, duration: '1hr 40 mins', 
  //     topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
  //   { id: 3, title: 'Module-3', topics: 5, duration: '1hr 40 mins', 
  //     topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
  //   { id: 4, title: 'Module-4', topics: 5, duration: '1hr 40 mins', 
  //     topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
  //   { id: 5, title: 'Module-5', topics: 5, duration: '1hr 40 mins', 
  //     topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
  // ];

//   return (
//     <div className="main h-auto">
//       <div className="min-h-screen w-full max-w-[1101px] bg-[#D8E5ED] rounded-[20px] flex flex-col mt-[53.84px] items-center mx-auto p-6 sm:mx-0 sm:w-full sm:p-6" 
//         style={{ marginLeft: '26.5px', marginRight: '26.5px', maxWidth: 'calc(100% - 53px)' }}>
//         <div className="w-full h-auto">
          // <div className="flex flex-col sm:flex-row items-start sm:space-x-6 sm:space-y-4 sm:items-center relative"> 
          //   <h1 className="text-3xl text-gray-800 mb-4 font-roboto font-semibold sm:text-3xl sm:text-center" 
          //     style={{ width: '210px', height: '160px' }}>
          //     {selectedCourse.title} <br /> in Kalyan
          //   </h1>
          //   <div className="absolute mt-[20px] right-0 top-0 transform translate-y-[-50%] mr-4 sm:mr-2">
          //     <img src={question} alt="Question" className="animate-bounce w-[50px] h-[50px] sm:w-[40px] sm:h-[40px]" />
          //   </div>
          // </div>

//           <p className="text-lg text-gray-700 mb-6 sm:text-base sm:text-center">{selectedCourse.description}</p>

//           {/* Course features */}
//           <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6 sm:grid-cols-1">
//             <div className="bg-[#406376] text-white p-4 rounded-[20px] text-center sm:p-3">
//               In-depth coverage of the syllabus with a focus on clarity.
//             </div>
//             <div className="bg-[#406376] text-white p-4 rounded-[20px] text-center sm:p-3">
//               Personalized doubt-clearing sessions.
//             </div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6 sm:grid-cols-1">
//             <div className="bg-[#406376] text-white p-4 rounded-[20px] text-center sm:p-3">
//               Regular tests and assessments to track progress.
//             </div>
//             <div className="bg-[#406376] text-white p-4 rounded-[20px] text-center sm:p-3">
//               Exam-oriented coaching for both board and competitive exams.
//             </div>
//           </div>

//           <div className="flex mb-6 sm:flex-col flex-col sm:items-center">
//             <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 w-[293px] h-[59px] sm:w-full sm:h-[48px] sm:mb-4">
//               Enroll Now
//             </button>
//             <div className="relative w-full h-screen sm:w-20 sm:h-20 hidden sm:block">
//               <div className="absolute w-[211.61px] h-[201.56px]" style={{ left: '750.7px', transform: 'rotate(30.44deg)' }}>
//                 <img src={symbol} alt="Symbol" className="w-full h-full sm:w-full sm:h-full" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dynamic course details */}
//       <div className="w-full p-6 flex-col items-center mx-auto bg-[#D8E5ED] mt-[40px] rounded-[20px] sm:mx-0"
//         style={{ marginLeft: '26.5px', marginRight: '26.5px', maxWidth: 'calc(100% - 53px)' }}>
//         <div className="text-left sm:text-center">
//           <h1 className="text-2xl font-semibold ml-[54px] text-gray-700 sm:text-xl">Course Details</h1>
//           <div className="h-16 flex items-center sm:h-10 sm:justify-center">
//             <h2 className="text-3xl ml-[49px] font-bold text-gray-800 mb-0 overflow-hidden sm:text-2xl sm:ml-0">
//               {selectedCourse.title}
//             </h2>
//           </div>
//           <div className="flex items-center ml-[54px] text-gray-600 mb-6 sm:ml-4 sm:justify-center sm:mb-4">
//             <span className="mr-6 flex items-center sm:mr-2 sm:text-xs">
//               <img src={clock} alt="" className="mr-[5px] w-[20px] h-[20px] sm:w-[16px] sm:h-[16px]" />
//               6hrs 10 mins
//             </span>
//             <span className="mr-6 flex items-center sm:mr-2 sm:text-xs">
//               <img src={learner} alt="" className="mr-[5px] w-[20px] h-[20px] sm:w-[16px] sm:h-[16px]" />
//               101 Learners
//             </span>
//             <span className="flex items-center sm:text-xs">
//               <span className="mr-1">⭐</span>4.3
//             </span>
//           </div>

//           <div className="space-y-4 sm:ml-[133.5px] w-[294px] w-max-auto items-center sm:ml-0 sm:space-y-4">
//             {modules.map((module) => (
//               <div
//                 key={module.id}
//                 className="bg-white p-4 sm:w-[800px] justify-center ml-[5px] w-[294px] rounded-lg hover:shadow-md cursor-pointer transition-all duration-200  sm:p-6"
//                 onClick={() => handleToggle(module.id)}
//               >
//                 <div className="flex justify-between items-center sm:flex-col sm:items-start sm:text-center">
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-700 sm:text-lg">{module.title}</h3>
//                     <p className="text-sm text-gray-500 sm:text-xs">Topics: {module.topics}</p>
//                     <p className="text-sm text-gray-500 sm:text-xs">Duration: {module.duration}</p>
//                   </div>
//                   <span className={`text-gray-600 text-xl sm:text-lg transition-transform duration-200 ${openModule === module.id ? 'rotate-180' : ''}`}>
//                     ^
//                   </span>                </div>
//                 {openModule === module.id && (
//                   <div className="mt-4">
//                     <ul className="list-disc pl-6">
//                       {module.topicsList.map((topic, index) => (
//                         <li key={index} className="text-gray-600 text-sm">{topic}</li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Testimonials Section */}
//       <div className="mt-10 mb-10 w-full p-6 flex flex-col items-center bg-[#D8E5ED] rounded-[20px] sm:mx-0"
//         style={{ marginLeft: '26.5px', marginRight: '26.5px', maxWidth: 'calc(100% - 53px)' }}>
//         <h1 className="text-2xl font-semibold text-gray-700 sm:text-xl">Student Testimonials</h1>
//         <Testimonial />
//       </div>
//     </div>
//   );
// };

// export default Explore;












//SAmruddhi Mobile +
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import clock from '../images/clock.svg';
import learner from '../images/learners.svg';
import question from '../images/question.svg';
import tutor from '../images/alisha.svg';
import Testimonial from "../Testimonials/Testimonial.jsx";
import symbol from '../images/symbol.svg';
import alisha from '../images/alisha.PNG';

const Explore = ({ courses }) => {
  const [openModule, setOpenModule] = useState(null);
  const { courseId } = useParams();

  // Find the course based on the courseId
  const selectedCourse = courses.find(course => course.id === parseInt(courseId));

  if (!selectedCourse) {
    return <p>Course not found.</p>;
  }

  const handleToggle = (moduleIndex) => {
    setOpenModule(openModule === moduleIndex ? null : moduleIndex);
  };

  const modules = [
    { id: 1, title: 'Module-1', topics: 5, duration: '1hr 40 mins', 
      topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
    { id: 2, title: 'Module-2', topics: 5, duration: '1hr 40 mins', 
      topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
    { id: 3, title: 'Module-3', topics: 5, duration: '1hr 40 mins', 
      topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
    { id: 4, title: 'Module-4', topics: 5, duration: '1hr 40 mins', 
      topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
    { id: 5, title: 'Module-5', topics: 5, duration: '1hr 40 mins', 
      topicsList: ['Introduction', 'Topic 1', 'Topic 2', 'Topic 3', 'Topic 4'] },
  ];

  return (
    <div className="desktop">
      <div className="min-h-screen w-full bg-[#D8E5ED] rounded-[20px] h-auto h-max-[783px] flex flex-col sm:mt-[53.84px] w-max-[334px] items-center mt-[10px] sm:ml-[39px] sm:mr-[70px]  p-6"
        style={{ marginLeft: '26.5px', marginRight: '26.5px', maxWidth: 'calc(100% - 53px)' }}>
        <div className="w-full max-w-[1101px] p-6 h-[589px] mx-auto  mr-[242px]">
          <div className="flex flex-col sm:flex-row items-start sm:space-x-6 sm:space-y-4 sm:items-center relative">
            <div>
              <p className="text-sm text-gray-500 mt-0 mb-2">Courses - School</p>
              <h1 className="sm:text-5xl w-[210px] h-[160px] sm:w-[980px] sm:h-[134px] text-3xl text-gray-800 mb-4 font-roboto font-semibold">{selectedCourse.title} <br /> in Kalyan</h1>
              <p className="text-lg text-gray-700 mb-6">{selectedCourse.description}</p>

              <div className="flex-col">
                {/* Course features */}
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6 ">
                  <div className="bg-[#406376] text-white p-4 rounded-[20px] w-150x text-center">
                    In-depth coverage of the syllabus with a focus on clarity.
                  </div>
                  <div className="bg-[#406376] text-white p-4  w-200px rounded-[20px] text-center">
                    Personalized doubt-clearing sessions.
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-[#406376] text-white p-4 rounded-[20px] text-center">
                    Regular tests and assessments to track progress.
                  </div>
                  <div className="bg-[#406376] text-white p-4 rounded-[20px] text-center">
                    Exam-oriented coaching for both board and competitive exams.
                  </div>
                </div>
              </div>

              <div className="flex-col mb-6">
                <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 h-[56.31px] w-[269.85px]">
                  Enroll Now
                </button>
                <div className="relative w-full  h-screen">
                  <div className="absolute w-[211.61px]  h-[201.56px] hidden sm:block"
                    style={{ left: '750.7px', transform: 'rotate(30.44deg)' }}>
                    <img src={symbol} alt="Symbol" className="w-full h-full" />
                  </div>
                </div>
              </div>

            </div>
            {/* Bouncing question image for all devices */}
            <div className="absolute mt-[10px] sm:top-0 right-0 transform translate-y-[-50%] mr-4 sm:mr-2">
              <img src={question} alt="Question" className="animate-bounce w-[50px] h-[50px]" />
            </div>
          </div>
        </div>
      </div>

      <div className="text-left h-[600px] mt-[20px">
      <div className="min-h-screen w-full mt-[20px] bg-[#D8E5ED] rounded-[20px] h-auto flex flex-col sm:mt-[53.84px] w-max-[334px] items-center sm:ml-[39px] sm:mr-[100px]  p-6">
      {/* Course Details */}
      <h1 className="text-2xl font-semibold ml-[20px] sm:ml-[54px] text-gray-700 sm:text-xl">Course Details</h1>
      <h1 className="sm:text-5xl w-[210px] h-[160px] sm:w-[980px] sm:h-[134px] text-3xl text-gray-800 mb-4 font-roboto font-semibold">{selectedCourse.title} <br /> in Kalyan</h1>

          <div className="flex items-center ml-[54px] text-gray-600 mb-6">
            <span className="mr-6 flex items-center">
              <img src={clock} alt="" className="mr-[5px] w-[12px] sm:w-[20px] h-[14px] sm:h-[20px]" />
              <p className="">6hrs 10 mins</p> 
            </span>
            <span className="mr-6 flex items-center">
              <img src={learner} alt="" className="mr-[5px]  w-[12px] sm:w-[20px] h-[14px] sm:h-[20px]" />
              <p>101 Learners</p>
            </span>
            <span className="flex items-center">
              <span className="mr-1">⭐</span>4.3
            </span>
          </div>

          <div className="space-y-4 sm:ml-[133.5px] flex flex-col items-center ">
            {modules.map((module) => (
              <div
                key={module.id}
                className="bg-white p-4 sm:w-[800px] justify-center w-[294px] rounded-lg hover:shadow-md cursor-pointer transition-all duration-200"
                onClick={() => handleToggle(module.id)} // Clickable area expanded to entire card
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-700">{module.title}</h3>
                    <p className="text-gray-500">
                      <span className="flex items-center">
                        <img src={learner} alt="" className="mr-[5px] w-[12px] sm:w-[20px] h-[14px] sm:h-[20px]" /> {module.topics} Topics
                        <span className="mr-6 flex items-center">
                          <img className="ml-[30px] mr-[8px] w-[12px] sm:w-[20px] h-[14px] sm:h-[20px]" src={clock} alt="" /> {module.duration}
                        </span>
                      </span>
                    </p>
                  </div>
                  <div>
                    {openModule === module.id ? (
                      <svg className="h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </div>
                </div>
                
                {/* Display topics list when module is open */}
                {openModule === module.id && (
                  <ul className="mt-4 text-gray-600 list-disc ml-6">
                    {module.topicsList.map((topic, index) => (
                      <li key={index} className="mb-2">{topic}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

      {/* Testimonial Section */}
      <div className="w-full flex-col items-center justify-center mb-6 bg-[#D8E5ED] mt-4 rounded-[20px] sm:ml-[39px] sm:mr-[39px]">
        <div className="flex flex-col items-center">
         
          <Testimonial />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Explore;














//Desktop 

// import React, { useState } from "react";
// import { useParams } from "react-router-dom";
// import clock from '../images/clock.svg';
// import learner from '../images/learners.svg';
// import question from '../images/question.svg';
// import tutor from '../images/alisha.svg';
// import Testimonial from "../Testimonials/Testimonial.jsx";
// import symbol from '../images/symbol.svg';
// import alisha from '../images/alisha.PNG';

// const Explore = ({ courses }) => {
//   const [openModule, setOpenModule] = useState(null);
//   const { courseId } = useParams();

//   // Find the course based on the courseId
//   const selectedCourse = courses.find(course => course.id === parseInt(courseId));

//   if (!selectedCourse) {
//     return <p>Course not found.</p>;
//   }

//   const handleToggle = (moduleIndex) => {
//     setOpenModule(openModule === moduleIndex ? null : moduleIndex);
//   };

//   const modules = [
//     { id: 1, title: 'Module-1', topics: 5, duration: '1hr 40 mins', details: 'SG Education in Kalyan offers comprehensive coaching for 11th and 12th Science students, covering core subjects like Physics, Chemistry, Biology' },
//     { id: 2, title: 'Module-2', topics: 5, duration: '1hr 40 mins' },
//     { id: 3, title: 'Module-3', topics: 5, duration: '1hr 40 mins' },
//     { id: 4, title: 'Module-4', topics: 5, duration: '1hr 40 mins' },
//     { id: 5, title: 'Module-5', topics: 5, duration: '1hr 40 mins' },
//   ];

//   return (
//     <div className="desktop">
//       <div className="min-h-screen w-full bg-[#D8E5ED] rounded-[20px] flex flex-col mt-[53.84px] items-center mt-[10px] ml-[39px] mr-[70px]  p-6">
//         <div className="w-full max-w-[1101px] p-6 h-[589px] mx-auto  mr-[242px]">
//           <div className="flex items-start">
//             <div>
//               <p className="text-sm text-gray-500  mb-2">Courses - School - 11th & 12th Science coaching in Kalyan</p>
//               <h1 className="text-5xl text-gray-800 mb-4 font-roboto font-semibold">{selectedCourse.title} <br /> in Kalyan</h1>
//               <p className="text-lg text-gray-700 mb-6">{selectedCourse.description}</p>

//               {/* Course features */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 ">
//                 <div className="bg-[#406376] text-white p-4 rounded-[20px] w-150x text-center">
//                   In-depth coverage of the syllabus with a focus on clarity.
//                 </div>
//                 <div className="bg-[#406376] text-white p-4  w-200px rounded-[20px] text-center">
//                   Personalized doubt-clearing sessions.
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
//                 <div className="bg-[#406376] text-white p-4 rounded-[20px] text-center">
//                   Regular tests and assessments to track progress.
//                 </div>
//                 <div className="bg-[#406376] text-white p-4 rounded-[20px] text-center">
//                   Exam-oriented coaching for both board and competitive exams.
//                 </div>
//               </div>

//               <div className="flex mb-6">
//                 <button className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300 h-[56.31px] w-[269.85px]">
//                   Enroll Now
//                 </button>
//               <div className="relative w-full h-screen"> {/* Use relative to position absolutely positioned elements */}
//              <div className="absolute w-[211.61px] h-[201.56px]" style={{ left: '750.7px', transform: 'rotate(30.44deg)', }}>
//               <img src={symbol} alt="Symbol" className="w-full h-full sm:block hidden" /> {/* Use Tailwind for image sizing */}
//              </div>
//             </div>
//               </div>

//             </div>
//             <div className="ml-[48.45px]">
//               <img src={question} alt="" className="animate-bounce"/>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Dynamic course details */}
//       <div className="w-full p-6 mx-auto bg-[#D8E5ED] mt-[40px] rounded-[20px] ml-[39px] mr-[39px]">
//         <div className="text-left">
//           <h1 className="text-2xl font-semibold ml-[54px] text-gray-700">Course Details</h1>
//           <div className="h-16 flex items-center">
//             <h2 className="text-3xl ml-[49px] font-bold text-gray-800 mb-0 overflow-hidden">
//               {selectedCourse.title}
//             </h2>
//           </div>
//           <div className="flex items-center ml-[54px] text-gray-600 mb-6">
//             <span className="mr-6 flex items-center">
//               <img src={clock} alt="" className="mr-[5px] w-[20px] h-[20px]" />
//               6hrs 10 mins
//             </span>
//             <span className="mr-6 flex items-center">
//               <img src={learner} alt="" className="mr-[5px] w-[20px] h-[20px]" />
//               101 Learners
//             </span>
//             <span className="flex items-center">
//               <span className="mr-1">⭐</span>4.3
//             </span>
//           </div>


//           <div className="space-y-4 ml-[133.5px] flex flex-col items-center ">
//    {modules.map((module) => (
//     <div
//       key={module.id}
//       className="bg-white p-4 w-[800px] justify-center rounded-lg hover:shadow-md cursor-pointer transition-all duration-200"
//       onClick={() => handleToggle(module.id)} // Clickable area expanded to entire card
//     >
//       <div className="flex  justify-between items-center">
//         <div>
//           <h3 className="text-xl font-semibold text-gray-700">{module.title}</h3>
//           <p className="text-gray-500">
//             <span className="flex items-center">
//               <img src={learner} alt="" className="mr-[5px] w-[20px] h-[20px]" /> {module.topics} Topics
//               <span className="mr-6 flex items-center">
//                 <img className="ml-[30px] mr-[8px] w-[20px] h-[20px]" src={clock} alt="" /> {module.duration}
//               </span>
//             </span>
//           </p>
//         </div>
//         <div>
//           {openModule === module.id ? (
//             <svg
//               className="h-6 text-gray-600"
//               style={{ width: '130px' }}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 15l7-7 7 7"
//               />
//             </svg>
//           ) : (
//             <svg
//               className="w-6 h-6 text-gray-600"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M19 9l-7 7-7-7"
//               />
//             </svg>
//           )}
//         </div>
//       </div>
//       {openModule === module.id && (
//         <div className="mt-4 text-gray-600">
//           <ul className="list-disc list-inside">
//             <li>Topic 1</li>
//             <li>Topic 2</li>
//             <li>Topic 3</li>
//             <li>Topic 4</li>
//             <li>Topic 5</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   ))}
// </div>


//         </div>
//       </div>

//       {/* Testimonial section */}
//       <div className="testimonial">
//         <Testimonial />
//       </div>

//       {/* Tutor section */}
//       <fieldset className="border border-gray-300 bg-[#D8E5ED] rounded-lg mt-[29px] mb-[40px]" style={{height:'489px'}}>
    
//     <h2 className="text-3xl font-bold text-gray-800 text-center mt-[25.14px] mb-0 ">About Your Tutor</h2>
//   <div className="container mx-auto  flex items-center">
//       <div className="tutor-image  w-440px h-447px mb-[74.98px]">
//           <img src={alisha} alt="Tutor Image" className="rounded-lg  ml-[106px] h-auto w-440px h-447px" />
//       </div>
//       <div className="tutor-info w-440px h-447px pr-10 ml-[130px] mt-0">
//           <h3 className="text-gray-600  text-2xl font-medium leading-relaxed">Aisha Singh</h3>
//           <p className="text-gray-600 text-lg leading-relaxed">Profession/Role/Degree</p>
//           <hr className="my-2 border-gray-400" />
//           <p className="text-gray-600 text-lg leading-relaxed">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non risus auctor, efficitur leo ac, facilisis elit. 
//               Etiam imperdiet, tortor in scelerisque dignissim, nisl libero aliquam velit, ut congue justo purus ac nunc.
//           </p>
//       </div>
//   </div>
// </fieldset>
//     </div>
//   );
// };

// export default Explore;
















