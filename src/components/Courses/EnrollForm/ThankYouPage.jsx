import thankYou from 'C:/Users/LENOVO/Desktop/Internship/sg_education/src/components/Courses/images/thankYou.svg';
import React from 'react';

const ThankYouPage = () => {
  return (
    <div 
      className="relative bg-blue-900 text-white flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: `url(${thankYou})`, // Correct usage of background image
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        height: '713px',
        width: '1137px', // Adjust width to 100% for full container width
        marginLeft:'105px', // Remove margins to ensure full background coverage
        marginTop:'54px',
        marginBottom:'49px',
      
      }}
    >
      {/* Main content */}
      <div className="relative z-10 text-center p-8">
      <h1 className="text-4xl font-bold mb-4" style={{ color: '#F47B1E' }}>Hurry!</h1> {/* Custom color */}
        <p className="text-lg font-medium mb-4 text-white" style={{marginTop:'65.7px',marginBottom:'28.27px'}}>Your Enrollment request is Sent Successfully</p>
        <p className="text-md">Our instructor will contact you for further step</p>
      </div>
    </div>
  );
};

export default ThankYouPage;
