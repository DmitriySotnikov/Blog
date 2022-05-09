import React, {FC} from "react";

interface ArrowsProps {
    prevSlide: () => void
    nextSlide: () => void
}

export const Arrows: FC<ArrowsProps> = ({ prevSlide, nextSlide }) => {
  return (
    <div className="slider__arrows">
      <span className="slider__arrow" onClick={prevSlide}>
        &#10094;
      </span>
      <span className="slider__arrow slider__arrow--next" onClick={nextSlide}>
        &#10095;
      </span>
    </div>
  );
}