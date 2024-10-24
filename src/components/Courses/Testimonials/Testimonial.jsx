import React, { useState, useEffect } from 'react';
import girl from '../images/girl.svg';
import './Testimonial.modules.css';

const Testimonial = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [animationStage, setAnimationStage] = useState(0);

  const testimonials = [
    {
      text: "I joined SG Education in my 11th grade and stayed with them until I finished 12th Science. The way Latesh Sir teaches Physics and Maths is exceptional...",
      name: "Sharvari Gangurde",
      rating: "★★★★★",
      position: "(12th Science)",
    },
    {
      text: "I joined SG Education in my 11th grade and stayed with them until I finished 12th Science. The way Latesh Sir teaches Physics and Maths is exceptional...",
      name: "Shraddha Gangurde",
      rating: "★★★★★",
      position: "(12th Science)",
    },
    {
      text: "The teaching methodology here is practical and engaging. I learned so much during my time.",
      name: "Another Student",
      rating: "★★★★☆",
      position: "(12th Science)",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      // Change animation stage for card transition
      setAnimationStage((prevStage) => (prevStage + 1) % 3);

      // Change current card index after a delay
      setTimeout(() => {
        setCurrentCardIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, 3000); // Time for card to fade out and next card to become visible (3 seconds)
    }, 3000); // Total cycle time for each card (3 seconds)

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="testimonial-container mt-[34px] sm:mt-[50px] h-[452px">
      <h2 className="testimonial-title text-2xl sm:text-3xl font-bold text-center mb-[10px]">Testimonials</h2>

      <div className="relative w-full flex justify-center items-center">
        {/* Card stack */}
        <div className="card-stack w-full sm:w-[70%]">
          {testimonials.map((testimonial, index) => {
            const position = (index - currentCardIndex + testimonials.length) % testimonials.length;

            return (
              <div
                key={index}
                className={`testimonial-card w-full sm:w-[85%] mx-auto rounded-xl shadow-lg bg-white p-6 sm:p-8 transition-all duration-500 ease-in-out position-${position} stage-${animationStage}`}
                style={{
                  opacity: position === 0 ? 1 : 0.5, // The current card is fully visible, others are semi-transparent
                  transform: position === 0 ? 'scale(1)' : 'scale(0.9)', // Scale down the non-visible cards
                }}
              >
                <div className="testimonial-rating text-xl sm:text-2xl text-orange-500 mb-4">{testimonial.rating}</div>
                <p className="testimonial-text text-sm sm:text-lg italic mb-6">{`“${testimonial.text}”`}</p>
                <div className="testimonial-author flex items-center justify-start">
                  <img src={girl} alt={testimonial.name} className="testimonial-avatar w-12 sm:w-16 h-12 sm:h-16 rounded-full mr-4" />
                  <div>
                    <p className="testimonial-name text-sm sm:text-lg font-semibold">{testimonial.name}</p>
                    <p className="testimonial-position text-xs sm:text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
