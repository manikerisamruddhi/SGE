import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import science from '../images/science.svg';
import jee from '../images/jee.svg';
import neet from '../images/neet.svg';
import fourth from '../images/fourth.svg';
import fifth from '../images/fifth.svg';
import iit from '../images/iit.svg';
import search from '../images/search.svg';
import './AllCourse.css';
import leftArrow from '../images/leftArrow.svg';
import rightArrow from '../images/rightArrow.svg';

const courses = [
    {
        id: 1,
        title: '11th & 12th Science Coaching',
        img: science,
        description: 'Expert faculty, In-depth syllabus coverage, Personalized attention',
        category: 'school',
    },
    {
        id: 2,
        title: 'IIT-JEE Coaching',
        img: iit,
        description: 'Achieve top ranks with our focused & result-oriented IIT-JEE coaching',
        category: 'exam',
    },
    {
        id: 3,
        title: 'NEET Coaching',
        img: neet,
        description: 'Master NEET with our comprehensive coaching for aspiring medical professionals',
        category: 'exam',
    },
    {
        id: 4,
        title: 'MHT-CET Coaching',
        img: fourth,
        description: 'Tailored coaching to help you ace the Maharashtra CET',
        category: 'school',
    },
    {
        id: 5,
        title: '8th-9th-10th Board Coaching',
        img: fifth,
        description: 'Strong foundation courses for students across State, CBSE, and ICSE boards',
        category: 'exam',
    },
    {
        id: 6,
        title: 'JEE & NEET',
        img: fifth,
        description: 'Early preparation courses to build a solid foundation for future success',
        category: 'exam',
    },
    {
        id: 7,
        title: 'Olympiad Preparation',
        img: fifth,
        description: 'Advanced training to excel in national and international Olympiad',
        category: 'exam',
    },
    {
        id: 8,
        title: 'Special Maths Batch',
        img: fifth,
        description: 'In-depth Maths coaching for board exam and competitive exams',
        category: 'exam',
    },
];

function AllCourses({ selectedCategory = 'all' }) {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const filteredCourses = courses.filter((course) => {
        const isCategoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
        const isSearchMatch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
        return isCategoryMatch && isSearchMatch;
    });

    const handleExploreClick = (courseId) => {
        navigate(`/allcourses/explore/${courseId}`);
    };

    const handleEnrollClick = (courseId) => {
        navigate('/allcourses/enroll');
    };

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex < filteredCourses.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => 
            prevIndex > 0 ? prevIndex - 1 : prevIndex
        );
    };

    return (
        <div className="w-full sm:max-w-screen-lg sm:mx-auto p-2 sm:p-6 md:p-8 h-auto sm:h-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
                <h2 className="text-xl hidden sm:text-2xl font-bold">Courses - All</h2>
                <div className="relative w-full ml-[720px] sm:w-2/3 md:w-1/3 mt-4 sm:mt-0 hidden sm:block">
                    <input
                        type="text"
                        placeholder="Search Courses here"
                        className="border p-2 rounded-full w-full pr-10 sm:pr-12"
                        style={{ borderRadius: '20px' }}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <img
                        src={search}
                        alt="Search"
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
                    />
                </div>
            </div>

            {/* Course Container */}
            <div className={`w-full ${isSmallScreen ? 'h-[410px]' : 'h-[660px]'} overflow-hidden sm:overflow-y-auto sm:scrollbar-hidden max-h-[660px]`}>
                <div className={`grid ${isSmallScreen ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-3'} gap-3`}>
                    {filteredCourses.length > 0 ? (
                        <>
                            {isSmallScreen ? (
                                <div
                                    key={filteredCourses[currentImageIndex].id}
                                    className="bg-white border rounded-md w-[340px] sm:w-full p-4 sm:p-6 shadow-sm"
                                    style={{
                                        maxWidth: '360px',
                                        margin: 'auto',
                                        height: '410px',
                                    }}
                                >
                                    <img
                                        src={filteredCourses[currentImageIndex].img}
                                        alt={filteredCourses[currentImageIndex].title}
                                        className="w-full h-[210px] object-cover mb-4 rounded-lg"
                                    />
                                    <h3 className="text-base sm:text-lg font-semibold">{filteredCourses[currentImageIndex].title}</h3>
                                    <p className="text-xs sm:text-sm mb-4">{filteredCourses[currentImageIndex].description}</p>

                                    <div className="flex flex-row gap-2">
                                        <button
                                            onClick={() => handleEnrollClick(filteredCourses[currentImageIndex].id)}
                                            className="bg-orange-500 text-white px-4 py-2 rounded mb-2 w-full"
                                        >
                                            Enroll Now
                                        </button>

                                        <button
                                            className="text-[#F67F00] h-10 sm:h-12 w-full border rounded-md border-[#F67F00] px-4 py-2"
                                            onClick={() => handleExploreClick(filteredCourses[currentImageIndex].id)}
                                        >
                                            Explore
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                filteredCourses.map(course => (
                                    <div
                                        key={course.id}
                                        className="bg-white border rounded-md p-4 sm:p-6 shadow-sm"
                                        style={{
                                            maxWidth: '360px',
                                            margin: 'auto',
                                            height: '410px',
                                        }}
                                    >
                                        <img
                                            src={course.img}
                                            alt={course.title}
                                            className="w-full h-[210px] object-cover mb-4 rounded-lg"
                                        />
                                        <h3 className="text-base sm:text-lg font-semibold">{course.title}</h3>
                                        <p className="text-xs sm:text-sm mb-4">{course.description}</p>

                                        <div className="flex flex-row gap-2">
                                            <button
                                                onClick={() => handleEnrollClick(course.id)}
                                                className="bg-orange-500 text-white px-4 py-2 rounded mb-2 w-full"
                                            >
                                                Enroll Now
                                            </button>

                                            <button
                                                className="text-[#F67F00] h-10 sm:h-12 w-full border rounded-md border-[#F67F00] px-4 py-2"
                                                onClick={() => handleExploreClick(course.id)}
                                            >
                                                Explore
                                            </button>
                                        </div>
                                    </div>
                                ))
                            )}
                        </>
                    ) : (
                        <p className="w-full text-center text-xl font-semibold mt-16">No courses found.</p>
                    )}
                </div>
            </div>

            {/* Navigation for small screens */}
            {isSmallScreen && filteredCourses.length > 1 && (
                <div className="flex justify-between mt-4">
                    <button
                        onClick={prevImage}
                        className="text-white ml-[139.5px] p-2 rounded-full"
                        disabled={currentImageIndex === 0}
                    >
                        <img src={leftArrow} alt="Previous" className="w-[15.41px] h-[11.94px]" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="text-white mr-[139.5px] p-2 rounded-full"
                        disabled={currentImageIndex === filteredCourses.length - 1}
                    >
                        <img src={rightArrow} alt="Next" className="w-[15.41px] h-[11.94px]" />
                    </button>
                </div>
            )}
        </div>
    );
}

export default AllCourses;

















// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import science from '../images/science.svg';
// import jee from '../images/jee.svg';
// import neet from '../images/neet.svg';
// import fourth from '../images/fourth.svg';
// import fifth from '../images/fifth.svg';
// import iit from '../images/iit.svg';
// import search from '../images/search.svg';
// import './AllCourse.css'; // Custom styles for the component
// import EnrollForm from '../EnrollForm/EnrollForm'; // Assuming the EnrollForm component exists

// const courses = [
//   {
//     id: 1,
//     title: '11th & 12th Science Coaching',
//     img: science,
//     description: 'Expert faculty, In-depth syllabus coverage, Personalized attention',
//     category: 'school',
//   },
//   {
//     id: 2,
//     title: 'IIT-JEE Coaching',
//     img: iit,
//     description: 'Achieve top ranks with our focused & result-oriented IIT-JEE coaching',
//     category: 'exam',
//   },
//   {
//     id: 3,
//     title: 'NEET Coaching',
//     img: neet,
//     description: 'Master NEET with our comprehensive coaching for aspiring medical professionals',
//     category: 'exam',
//   },
//   {
//     id: 4,
//     title: 'MHT-CET Coaching',
//     img: fourth,
//     description: 'Tailored coaching to help you ace the Maharashtra CET',
//     category: 'school',
//   },
//   {
//     id: 5,
//     title: '8th-9th-10th Board Coaching ',
//     img: fifth,
//     description: 'Strong foundation courses for students across State, CBSE, and ICSE boards',
//     category: 'exam',
//   },
//   {
//     id: 6,
//     title: 'JEE & NEET',
//     img: fifth,
//     description: 'Early preparation courses to build a solid foundation for future success',
//     category: 'exam',
//   },
//   {
//     id: 7,
//     title: 'Olympiad Preparation',
//     img: fifth,
//     description: 'Advanced training to excel in national and international Olympiad',
//     category: 'exam',
//   },
//   {
//     id: 8,
//     title: 'Special Maths Batch',
//     img: fifth,
//     description: 'In-depth Maths coaching for board exam and competitive exams',
//     category: 'exam',
//   },
// ];

// function AllCourses({ selectedCategory = 'all' }) {
//   const navigate = useNavigate();
//   const [searchQuery, setSearchQuery] = useState('');
//   const [showEnrollForm, setShowEnrollForm] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const filteredCourses = courses.filter((course) => {
//     const isCategoryMatch = selectedCategory === 'all' || course.category === selectedCategory;
//     const isSearchMatch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
//     return isCategoryMatch && isSearchMatch;
//   });

//   const handleExploreClick = (courseId) => {
//     navigate(`/allcourses/explore/${courseId}`);
//   };

//   const handleEnrollClick = () => {
//     navigate('/allcourses/enroll');
//   };

//   // Logic for Next and Previous Image Scroll
//   const nextImage = () => {
//     if (currentImageIndex < filteredCourses.length - 1) {
//       setCurrentImageIndex(currentImageIndex + 1);
//     }
//   };

//   const prevImage = () => {
//     if (currentImageIndex > 0) {
//       setCurrentImageIndex(currentImageIndex - 1);
//     }
//   };

//   return (
//     <div className="w-full sm:max-w-screen-lg sm:mx-auto p-2 sm:p-6 md:p-8 h-auto sm:h-[456px]">
//       <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
//         <h2 className="text-xl hidden sm:text-2xl font-bold">Courses - All</h2>

//         {/* Search bar visible only on sm and larger screens */}
//         <div className="relative w-full ml-[720px] sm:w-2/3 md:w-1/3 mt-4 sm:mt-0 hidden sm:block">
//           <input
//             type="text"
//             placeholder="Search Courses here"
//             className="border p-2 rounded-full w-full pr-10 sm:pr-12"
//             style={{ borderRadius: '20px' }}
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//           />
//           <img
//             src={search}
//             alt="Search"
//             className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 cursor-pointer"
//           />
//         </div>
//       </div>

//       <div className="scrollbar-hide overflow-y-auto w-full sm:overflow-y-auto h-[410px] sm:h-[556px]">
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
//           {filteredCourses.length > 0 ? (
//             filteredCourses.map((course, index) => (
//               <div
//                 key={course.id}
//                 className="bg-white border w-full rounded-20 p-4 sm:p-6 shadow-sm"
//                 style={{
//                   width: '100%', // Make the div flexible with full width on small screens
//                   height: '410px', // Default height
//                   maxWidth: '299px', // Limit width on large screens
//                   margin: 'auto', // Centering div horizontally
//                 }}
//               >
//                 {/* For larger screens, show images horizontally with Next/Prev */}
//                 <div className="sm:hidden">
//                   <div className="relative">
//                     <button
//                       onClick={prevImage}
//                       className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full"
//                     >
//                       &#60;
//                     </button>
//                     <img
//                       src={filteredCourses[currentImageIndex].img}
//                       alt={filteredCourses[currentImageIndex].title}
//                       className="w-full h-[160px] object-cover mb-4 rounded-lg"
//                     />
//                     <button
//                       onClick={nextImage}
//                       className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full"
//                     >
//                       &#62;
//                     </button>
//                   </div>
//                 </div>

//                 {/* For sm and larger screens, show as grid */}
//                 <div className="sm:grid sm:grid-cols-1">
//                   <img
//                     src={course.img}
//                     alt={course.title}
//                     className="w-full h-[160px] sm:h-[195px] object-cover mb-4 rounded-lg"
//                   />
//                 </div>

//                 <h3 className="text-base sm:text-lg font-semibold">{course.title}</h3>
//                 <ul className="text-xs sm:text-sm mb-4 list-disc list-inside">
//                   <p>{course.description}</p>
//                 </ul>
//                 <div className="flex flex-col sm:flex-row justify-center gap-2">
//                   <button
//                     onClick={() => handleEnrollClick(course)}
//                     className="bg-orange-500 text-white px-4 py-2 rounded mb-2 md:mb-0 sm:w-[132px] sm:h-[43px]"
//                     style={{ width: '120px' }}
//                   >
//                     Enroll Now
//                   </button>

//                   <button
//                     className="text-[#F67F00] h-10 sm:h-12 w-full sm:w-1/3 px-4 py-2 rounded border border-black"
//                     onClick={() => handleExploreClick(course.id)}
//                     style={{ width: '110px' }}
//                   >
//                     Explore
//                   </button>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <p>No courses found matching your search.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AllCourses;
