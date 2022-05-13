import React, {FC, useState} from "react";

interface SliderContentProps {
  activeIndex: number
  sliderImage: {
    urls: string
    title: string
    description: string
  }[]
}

export const SliderContent:FC<SliderContentProps> = (
    {activeIndex, sliderImage}) => {

  return (
      <div className='slider__content'>
        {sliderImage.map((slide, index) => (
            <div
                key={index}
                className={index === activeIndex ? "slider__slides slider__slides--active" : "slider__slides--inactive"}
            >
              <img className="slider__slide-image" src={slide.urls} alt="" />
              <h2 className="slider__slide-text">{slide.title}</h2>
              <h3 className="slider__slide-text slider__slide-text--description">{slide.description}</h3>
            </div>
        ))}
      </div>
  );
}