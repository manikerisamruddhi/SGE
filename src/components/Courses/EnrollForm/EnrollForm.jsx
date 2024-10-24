import React, { useState } from "react";
import './EnrollForm.css'
const EnrollForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    school: "",
    gender: "",
    courses: [],
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (type === "radio") {
      setFormData({ ...formData, gender: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleCourseChange = (e) => {
    const { value, checked } = e.target;
    const newCourses = checked
      ? [...formData.courses, value]
      : formData.courses.filter((course) => course !== value);

    setFormData({ ...formData, courses: newCourses });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-md shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Please fill the form below to join SG
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Full Name */}
          <div className="flex flex-row items-center mb-4">
            <label className="text-sm  text-gray-700 w-32 font-bold">
              Full Name<span style={{ color: '#74A8C3' }}>*</span>:
            </label>
            <div className="flex-grow">
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                className="border-2 border-[#74A8C3] p-2 w-full rounded bg-white focus:border-[#74A8C3] focus:outline-none focus:ring-0 placeholder-custom input-border"
                required
              />
            </div>
          </div>




          {/* Email */}
          <div className="flex flex-row items-center mb-4">
            <label className="text-sm font-bold text-gray-700 w-32">
              Email ID<span style={{ color: '#74A8C3' }}>*</span>:
            </label>
            <div className="flex-grow">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter a valid Email ID"
                className="border-2 border-[#74A8C3] p-2 w-full rounded bg-white focus:border-[#74A8C3] focus:outline-none focus:ring-0 placeholder-custom input-border"
                required
              />
            </div>
          </div>

          {/* Mobile No */}
          <div className="flex flex-row items-center mb-4">
            <label className="text-sm font-bold text-gray-700 w-32">
              Mobile No<span style={{ color: '#74A8C3' }}>*</span>:
            </label>
            <div className="flex-grow">
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter Your Mobile No"
                className="border-2 border-[#74A8C3] p-2 w-full rounded bg-white focus:border-[#74A8C3] focus:outline-none focus:ring-0 placeholder-custom input-border"
                required
              />
            </div>
          </div>

          {/* Address */}
          <div className="flex flex-row items-center mb-4">
            <label className="text-sm font-bold text-gray-700 w-32">
              Address<span style={{ color: '#74A8C3' }}>*</span>:
            </label>
            <div className="flex-grow">
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Address"
                className="border-2 border-[#74A8C3] p-2 w-full rounded bg-white focus:border-[#74A8C3] focus:outline-none focus:ring-0 placeholder-custom input-border"
                required
              />
            </div>
          </div>

          {/* School/College */}
          <div className="flex flex-row items-center mb-4">
            <label className="text-sm font-bold text-gray-700 w-32">
              School/College<span style={{ color: '#74A8C3' }}>*</span>:
            </label>
            <div className="flex-grow">
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                placeholder="Enter your School/College Name"
                className="border-2 border-[#74A8C3] p-2 w-full rounded bg-white focus:border-[#74A8C3] focus:outline-none focus:ring-0 placeholder-custom input-border"
                required
              />
            </div>
          </div>

          {/* Gender */}
          <div className="flex flex-row items-center mb-4">
            <label className="text-sm font-bold text-gray-700 w-44">
              Gender<span style={{ color: '#74A8C3' }}>*</span>:
            </label>
            <div className="flex space-x-4 w-full">
              <label className="text-[#74A8C3]">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Female
              </label>
              <label className="text-[#74A8C3]">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Male
              </label>
              <label className="text-[#74A8C3]">
                <input
                  type="radio"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Other
              </label>
            </div>
          </div>

          {/* Courses */}
          <div className="flex flex-row items-start mb-4">
            <label className="text-sm font-bold text-gray-700 w-40">
              Select the course<span style={{ color: '#74A8C3' }}>*</span>:
            </label>
            <div className="grid grid-cols-2 gap-4 flex-grow">
              {[
                "IIT-JEE Coaching",
                "NEET Coaching",
                "JEE/NEET Foundations",
                "MHT-CET Coaching",
                "11th & 12th Science",
                "8th-9th-10th Board",
                "Special Maths",
                "Olympiad Preparation",
              ].map((course) => (
                <div
                  key={course}
                  className={`cursor-pointer p-3 border-2 rounded-lg text-center ${formData.courses.includes(course)
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white text-gray-700 border-gray-300"
                    }`}
                  onClick={() => handleCourseChange(course)}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>


          {/* Consent */}
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label className="text-sm font-bold">
              I confirm to allow the instructor to call or message to proceed
              with the enrollment process.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-1/2 sm:w-1/2 bg-orange-500 text-white py-2 rounded-md font-medium hover:bg-orange-600 transition duration-300 mx-auto block"
          >
            Submit
          </button>

        </form>
      </div>
    </div>
  );
};

export default EnrollForm;














// import React, { useState } from "react";
// import './EnrollForm.css'
// import { useNavigate } from "react-router-dom";
// import logo from '../images/logo1.svg';

// const EnrollForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobileNo: "",
//     address: "",
//     schoolCollege: "",
//     gender: "",
//     course: "",
//     allowContact: false,
//   });

//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === "checkbox") {
//       setFormData({ ...formData, [name]: checked });
//     } else if (type === "radio") {
//       setFormData({ ...formData, [name]: value });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   const [selectedCourses, setSelectedCourses] = useState([]);

//   const handleCourseClick = (course) => {
//     if (selectedCourses.includes(course)) {
//       setSelectedCourses(selectedCourses.filter((selected) => selected !== course));
//     } else {
//       setSelectedCourses([...selectedCourses, course]);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//     navigate("/allcourses/enroll/thankyou");
//   };

//   return (
//     <>
//       <div className="min-h-screen mx-auto sm:w-full flex mt-[100px] justify-center w-[600px] items-center h-auto bg-blue-200">
//         <div className="main rounded-[20px] flex flex-col p-6">
//           {/* Logo and Title Section */}
//           <div className="relative mb-6" style={{ display: 'flex', alignItems: 'center' }}>
//             {/* Logo */}
//             <img 
//       src={logo} 
//       alt="Logo" 
//       className="responsive-logo" 
//       style={{ width: '50px', height: '50px', marginLeft: '20px' }} 
//     />
//             {/* Enrollment Form Title */}
//             <p
//               style={{
//                 position: 'absolute',  // This positions the title absolutely in the center
//                 left: '50%',           // Start from 50% of the container width
//                 transform: 'translateX(-50%)', // Center the title by shifting it by 50% of its own width
//                 color: 'black',
//                 fontSize: '50px',
//                 lineHeight: '77px',
//                 fontWeight: 'bold',
//               }}
//             >
//               Enrollment Form
//             </p>
//           </div>




//           {!isSubmitted ? (
// <form
//   onSubmit={handleSubmit}
//   className="bg-white shadow-md ml-[105px] sm:ml-[105px] mx-auto rounded-lg p-8 w-[328px] sm:w-full sm:max-w-[1200px]"
// >

//               <h2 className="text-center text-lg font-bold mb-4">
//                 Please fill the form below to join in SG
//               </h2>

//               {/* Full Name */}
//               <div className="mb-4 flex items-center">
//                 <label className="w-1/4 text-gray-700 text-sm font-bold">
//                   Full Name<span className="text-blue-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="fullName"
//                   placeholder="Enter Your Full Name"
//                   className="input-field w- ml-[24px] px-3 py-2 border w-[198px] rounded-lg shadow focus:outline-none focus:shadow-outline"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Email */}
//               <div className="mb-4 flex items-center">
//                 <label className="w-1/4 text-gray-700 text-sm font-bold">
//                   Email ID<span className="text-blue-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter a valid Email ID "
//                   className="input-field ml-[36px] sm:w-[871px]  w-[198px] px-3 py-2 border rounded-lg shadow focus:outline-none focus:shadow-outline"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Mobile No */}
//               <div className="mb-4 flex items-center">
//                 <label className="w-1/4 text-gray-700 text-sm font-bold">
//                   Mobile No<span className="text-blue-500">*</span>
//                 </label>
//                 <input
//                   type="tel"
//                   name="mobileNo"
//                   placeholder="Enter Your Mobile No"
//                   className="input-field ml-[28px] px-3  w-[198px] py-2 border rounded-lg shadow focus:outline-none focus:shadow-outline"
//                   value={formData.mobileNo}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Address */}
//               <div className="mb-4 flex items-center">
//                 <label className="w-1/4 text-gray-700 text-sm font-bold">
//                   Address<span className="text-blue-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="address"
//                   placeholder="Enter Address"
//                   className="input-field w-3/4 px-3 py-2 ml-[20px]  w-[198px] border rounded-lg shadow focus:outline-none focus:shadow-outline"
//                   value={formData.address}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* School/College */}
//               <div className="mb-4 flex items-center">
//                 <label className="w-1/4 text-gray-700 text-sm font-bold">
//                   School/College<span className="text-blue-500 w-[160px] h-[30px]">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="schoolCollege"
//                   placeholder="Enter Your School/College Name"
//                   className="input-field w-3/4 px-3 ml-[24px] py-2 border rounded-lg shadow focus:outline-none focus:shadow-outline"
//                   value={formData.schoolCollege}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               {/* Gender */}
//               <div className="mb-4 flex items-center">
//                 <label className="w-1/4 text-gray-700 text-sm font-bold">
//                   Gender<span className="text-blue-500">*</span>
//                 </label>
//                 <div className="w-3/4 flex">
//                   <label className="mr-4 flex items-center">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="Female"
//                       checked={formData.gender === "Female"}
//                       onChange={handleChange}
//                       className="mr-2"
//                       required
//                     />
//                     Female
//                   </label>
//                   <label className="mr-4 flex items-center">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="Male"
//                       checked={formData.gender === "Male"}
//                       onChange={handleChange}
//                       className="mr-2"
//                       required
//                     />
//                     Male
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="gender"
//                       value="Other"
//                       checked={formData.gender === "Other"}
//                       onChange={handleChange}
//                       className="mr-2"
//                       required
//                     />
//                     Other
//                   </label>
//                 </div>
//               </div>

//               {/* Courses */}
//               <div className="mb-4 flex items-start">
//   <label className="w-1/4 text-gray-700 text-sm font-bold">
//     Select the course: <span className="text-blue-500">*</span>
//   </label>
//   <div className="flex flex-col w-3/4 course-container">
//     <div className="flex mb-2 course-row">
//       <span
//         className={`border border-gray-300 h-[21px] w-[85px] sm:w-[285px] sm:h-[40px] p-2 text-center rounded-lg course-span ${selectedCourses.includes("IIT-JEE Coaching") ? "text-white" : ""}`}
//         onClick={() => handleCourseClick("IIT-JEE Coaching")}
//         style={{ backgroundColor: selectedCourses.includes("IIT-JEE Coaching") ? "#d9e8f0" : "", marginRight: '71px' }}
//       >
//         <strong>IIT-JEE Coaching</strong>
//       </span>
//       <span
//         className={`border border-gray-300 h-[21px] w-[85px] sm:w-[271px] sm:h-[40px] p-2 text-center rounded-lg course-span ${selectedCourses.includes("11th & 12th Science") ? "text-white" : ""}`}
//         onClick={() => handleCourseClick("11th & 12th Science")}
//         style={{ backgroundColor: selectedCourses.includes("11th & 12th Science") ? "#d9e8f0" : "" }}
//       >
//         <strong>11th & 12th Science</strong>
//       </span>
//     </div>
//     <div className="flex mb-2 course-row">
//       <span
//         className={`border border-gray-300 h-[21px] w-[85px] sm:w-[271px] sm:h-[40px] p-2 text-center rounded-lg course-span ${selectedCourses.includes("NEET Coaching") ? "text-white" : ""}`}
//         onClick={() => handleCourseClick("NEET Coaching")}
//         style={{ backgroundColor: selectedCourses.includes("NEET Coaching") ? "#d9e8f0" : "", marginRight: '71px' }}
//       >
//         <strong>NEET Coaching</strong>
//       </span>
//       <span
//         className={`border border-gray-300 h-[21px] w-[85px] sm:w-[271px] sm:h-[40px] p-2 text-center rounded-lg course-span ${selectedCourses.includes("8th-9th-10th Board") ? "text-white" : ""}`}
//         onClick={() => handleCourseClick("8th-9th-10th Board")}
//         style={{ backgroundColor: selectedCourses.includes("8th-9th-10th Board") ? "#d9e8f0" : "" }}
//       >
//         <strong>8th-9th-10th Board</strong>
//       </span>
//     </div>
//     <div className="flex mb-2 course-row">
//       <span
//         className={`border border-gray-300 h-[21px] w-[85px] sm:w-[271px] sm:h-[40px] p-2 text-center rounded-lg course-span ${selectedCourses.includes("JEE/NEET Foundation") ? "text-white" : ""}`}
//         onClick={() => handleCourseClick("JEE/NEET Foundation")}
//         style={{ backgroundColor: selectedCourses.includes("JEE/NEET Foundation") ? "#d9e8f0" : "", marginRight: '71px' }}
//       >
//         <strong>JEE/NEET Foundation</strong>
//       </span>
//       <span
//         className={`border border-gray-300 h-[21px] w-[85px] sm:w-[271px] sm:h-[40px] p-2 text-center rounded-lg course-span ${selectedCourses.includes("Special Maths") ? "text-white" : ""}`}
//         onClick={() => handleCourseClick("Special Maths")}
//         style={{ backgroundColor: selectedCourses.includes("Special Maths") ? "#d9e8f0" : "" }}
//       >
//         <strong>Special Maths</strong>
//       </span>
//     </div>
//     <div className="flex mb-2 course-row">
//       <span
//         className={`border border-gray-300 h-[21px] w-[85px] sm:w-[271px] sm:h-[40px] p-2 text-center rounded-lg course-span ${selectedCourses.includes("MHT-CET Coaching") ? "text-white" : ""}`}
//         onClick={() => handleCourseClick("MHT-CET Coaching")}
//         style={{ backgroundColor: selectedCourses.includes("MHT-CET Coaching") ? "#d9e8f0" : "", marginRight: '71px' }}
//       >
//         <strong>MHT-CET Coaching</strong>
//       </span>
//       <span
//         className={`border border-gray-300 h-[21px] w-[85px] sm:w-[271px] sm:h-[40px] p-2 text-center rounded-lg course-span ${selectedCourses.includes("Olympiad Preparation") ? "text-white" : ""}`}
//         onClick={() => handleCourseClick("Olympiad Preparation")}
//         style={{ backgroundColor: selectedCourses.includes("Olympiad Preparation") ? "#d9e8f0" : "" }}
//       >
//         <strong>Olympiad Preparation</strong>
//       </span>
//     </div>
//   </div>
// </div>


//               {/* Submit */}
//               <div className="mb-4 flex justify-center">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition duration-300"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>


//           ) : (
//             <div className="flex flex-col items-center justify-center">
//               <img src={""} alt="Sent" className="w-1/4 mb-6" />
//               <h2 className="text-center text-lg font-bold">
//                 Your form has been submitted. Thank you!
//               </h2>
//               <p className="text-center mt-4">We will contact you soon.</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default EnrollForm;



//CSS
/* Set height for input fields */
// input {
//   height: 60px; /* Height of input fields */
// }

// /* Style for labels */
// label {
//   font-weight: bold; /* Bold font for labels */
//   height: 24px; /* Height for labels */
// }

// /* Input field styles */
// .input-field {
//   border: 4px solid #549DBB; /* Set border thickness to 4px and color to #549DBB */
//   background-color: white; /* Set background color */
//   margin-right: 20px; /* Right margin for spacing */
//   padding: 10px; /* Optional: Add padding for better spacing */
//   transition: border-color 0.3s; /* Smooth transition for border color change */
//   border-radius: 20px !important;
// }

// .input-field:focus {
//   border-color: #74A8C3; /* Change border color on focus */
//   outline: none; /* Remove default outline */
// }

// /* Placeholder text color */
// .input-field::placeholder {
//   color: blue; /* Set placeholder text color to blue */
// }

// /* Optional: Style for the select field */
// select.input-field {
//   height: 60px; /* Set height for select field */
//   border: 4px solid #549DBB; /* Set border for select field */
// }

// /* Required stars color */
// .text-blue-500 {
//   color: blue; /* Set the color of the required star to blue */
// }

// .radio-button {
// width: 20px; /* Adjust size as necessary */
// height: 20px; /* Adjust size as necessary */
// cursor: pointer; /* Change cursor on hover */
// }

// /* Custom styling for the radio buttons */
// input[type="radio"] {
// -webkit-appearance: none; /* Remove default browser styling */
// appearance: none; /* Remove default browser styling */
// border: 1px solid black; /* Border color */
// border-radius: 50%; /* Make it circular */
// width: 20px; /* Set the width */
// height: 20px; /* Set the height */
// position: relative; /* Position relative for possible enhancements */
// background-color: #fff; /* Default background color */
// cursor: pointer; /* Show pointer cursor */
// transition: background-color 0.3s ease; /* Smooth transition effect */
// }

// /* Background color when the radio button is checked */
// input[type="radio"]:checked {
// background-color: #D9D9D9; /* Set the background color when checked */
// border-color: #74A8C3; /* Keep the border consistent */
// }


// .main {
//   height: 1800px;
// }

// .course-container {
//   display: flex;
//   flex-direction: column;
// }

// .course-container .course-row {
//   position: relative;
// }

// .course-span:hover {
//   transition: background-color 0.3s;
// }

// .course-row:hover::before {
//   content: "";
//   position: absolute;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   opacity: 0.75; /* Slightly transparent blue */
//   z-index: -1; /* Keeps the text visible */
// }

// .course-span.clicked {
//   transition: background-color 0.3s;
// }

// .course-span {
//   transition: background 0.3s ease-in-out;
// }
// /*   
// .course-span:hover {
//   background: linear-gradient(90deg, blue 75%, white 25%);
// }
//  */
// .clicked {
//   color: white;
// }


// .contact {
// margin-top: 60px;
// }

// .submit {
// height: 53px;
// width: 378px;
// background-color: #F67F00 !important;
// margin-top: 87px;
// }

// .submit:hover {
// background-color: #ecb982 !important;
// color: black;
// }

// form {
// margin-right: 120px;
// }

// .allow {
// font-weight: normal;
// margin-left: 11px;
// }

// input::placeholder {
// color: #60a5fa !important;  /* Optional: Make the color slightly transparent */
// }

// .course-span {
// position: relative; /* Make it relative for positioning the pseudo-element */
// overflow: hidden; /* Ensure the pseudo-element does not overflow */
// transition: color 0.3s ease; /* Smooth transition for text color */
// }

// .course-span:before {
// content: ""; /* Required for pseudo-element */
// position: absolute; /* Position it over the span */
// top: 0; /* Align to the top */
// left: -100%; /* Start off-screen to the left */
// height: 100%; /* Cover the entire height */
// width: 100%; /* Cover the entire width */
// transition: left 1s ease; /* Smooth transition for the background */
// z-index: 0; /* Behind the text */
// }

// .course-span:hover:before {
// left: 0; /* Move into view on hover */
// }

// .course-span:hover {
// color: white; /* Change text color on hover */
// z-index: 1; /* Bring text above the background */
// }



// .course-container {
// display: flex;
// flex-direction: column;
// }

// .course-span {
// position: relative; /* Make it relative for positioning the pseudo-element */
// overflow: hidden; /* Ensure the pseudo-element does not overflow */
// transition: color 0.3s ease; /* Smooth transition for text color */
// padding: 10px;
// border: 1px solid #ccc; /* Example border */
// border-radius: 8px; /* Example border-radius */
// cursor: pointer; /* Pointer on hover */
// }

// .course-span:before {
// content: ""; /* Required for pseudo-element */
// position: absolute; /* Position it over the span */
// top: 0; /* Align to the top */
// left: -100%; /* Start off-screen to the left */
// height: 100%; /* Cover the entire height */
// width: 75%; /* Cover only 75% of the width */
// background-color: #74A8C3; /* Set the background color */
// transition: left 0.5s ease; /* Smooth transition for the background */
// z-index: 0; /* Behind the text */
// }

// .course-span:hover:before {
// left: 0; /* Move into view on hover */
// }

// .course-span:hover {
// color: white; /* Change text color on hover */
// z-index: 1; /* Bring text above the background */
// }

// .course-span {
// position: relative; /* Position relative for positioning the pseudo-element */
// overflow: hidden; /* Ensure the pseudo-element does not overflow */
// transition: color 0.3s ease; /* Smooth transition for text color */
// padding: 10px; /* Adjust padding as needed */
// border: 1px solid #ccc; /* Example border */
// border-radius: 8px; /* Example border-radius */
// cursor: pointer; /* Pointer on hover */
// color: black; /* Default text color */
// z-index: 1; /* Base z-index to ensure text is above the background */
// }

// .course-span:before {
// content: ""; /* Required for pseudo-element */
// position: absolute; /* Position it over the span */
// top: 0; /* Align to the top */
// left: -100%; /* Start off-screen to the left */
// height: 100%; /* Cover the entire height */
// width: 75%; /* Cover only 75% of the width */
// background-color: #d9e8f0; /* Set the background color */
// transition: left 0.5s ease; /* Smooth transition for the background */
// z-index: 0; /* Behind the text */
// }

// .course-span:hover:before {
// left: 0; /* Move into view on hover */
// }

// .course-span:hover {
// color: white; /* Change text color on hover */
// z-index: 1; /* Ensure text is above the background */
// }

// /* Ensure that the text is always visible */
// .course-span:hover  strong {
// z-index: 100; /* Ensure text is above the background */
// }

// /* Optional: Ensure strong text has proper styling */
// .course-span > strong {
// position: relative; /* Position relative for stacking context */
// z-index: 100; /* Ensure it is above the background */
// color: black;
// }

// /* Default styles for smaller devices */
// .responsive-logo {
// width: 50px;
// height: 50px;
// }

// /* Media Query for larger screens (devices wider than sm) */
// @media (min-width: 576px) {
// .responsive-logo {
//   width: 84.58px;
//   height: 82.77px;
// }
// }
