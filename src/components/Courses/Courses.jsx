import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import AllCourses from './AllCourses/AllCourses';
import bannerImage from './images/banner.svg';
import neet from './images/neet.svg';
import jee from './images/jee.svg';
import './Courses.css';
import Testimonials from './Testimonials/Testimonial';

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  // Array of banner images for the slideshow
  const bannerImages = [bannerImage, neet, jee];

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Change the image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImageIndex < bannerImages.length) {
        setCurrentImageIndex((prevIndex) => prevIndex + 1);
      } else {
        setIsTransitioning(false);
        setCurrentImageIndex(0);
        setTimeout(() => setIsTransitioning(true), 0);
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [currentImageIndex, bannerImages.length]);

  return (
    <>
      <div className="slideshow-container h-[211px] sm:h-[650px]">
        <div
          className="slideshow-images h-[211px] sm:h-[650px]"
          style={{
            transform: `translateX(-${currentImageIndex * 100}%)`,
            transition: isTransitioning ? 'transform 0.5s ease-in-out' : 'none',
          }}
        >
          {bannerImages.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className="slideshow-image"
            />
          ))}
          <img
            src={bannerImages[0]}
            alt="Clone of first image"
            className="slideshow-image"
          />
        </div>
      </div>

      <div className="flex sm:flex-row flex-col sm:h-[84px] sm:min-h-screen w-full bg-custom-bg">
        {/* Sidebar Component */}
        <Sidebar onCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />

        {/* AllCourses Component */}
        <AllCourses selectedCategory={selectedCategory} />
      </div>

      <Testimonials />
    </>
  );
}

export default Courses;
