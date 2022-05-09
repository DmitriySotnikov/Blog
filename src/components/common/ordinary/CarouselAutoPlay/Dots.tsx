import React, {FC} from "react";

interface DotsProps {
  activeIndex: number
  sliderImage: {
    urls: string
    title: string
    description: string
  }[]
  onclick: (index: number) => void
}

export const Dots: FC<DotsProps> = ({ activeIndex, onclick, sliderImage }) => {
  return (
    <div className="slider__dots">
      {sliderImage.map((slide, index) => (
        <span
    key={index}
    className={`${activeIndex === index ? "slider__dot slider__dot--active" : "slider__dot"}`}
    onClick={() => onclick(index)}
    />
      ))}
    </div>
  );
}