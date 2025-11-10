import React, { useState } from 'react';

function Carousel({ slides }) {
  // 'useState' holds the "state" for this component.
  // 'currentIndex' is the value, and 'setCurrentIndex' is the function to update it.
  // We start at index 0 (the first slide).
  const [currentIndex, setCurrentIndex] = useState(0);

  // Check if slides array is empty or not provided
  if (!slides || slides.length === 0) {
    return <p>No slides to display.</p>;
  }

  // --- Event Handlers ---

  const goToPrevious = () => {
    // Check if we are at the first slide.
    // If true, loop to the last slide (slides.length - 1).
    // If false, just go to the previous slide (currentIndex - 1).
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    // Check if we are at the last slide.
    // If true, loop back to the first slide (0).
    // If false, just go to the next slide (currentIndex + 1).
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // --- Render ---

  return (
    <div className="carousel-container">
      {/* Left Arrow Button */}
      <button 
        className="carousel-button prev" 
        onClick={goToPrevious}
      >
        ←
      </button>
      
      {/* The current slide's image */}
      <img 
        src={slides[currentIndex].image} 
        alt={slides[currentIndex].alt} 
        className="carousel-slide" 
      />
      
      {/* Right Arrow Button */}
      <button 
        className="carousel-button next" 
        onClick={goToNext}
      >
        →
      </button>
    </div>
  );
}

export default Carousel;