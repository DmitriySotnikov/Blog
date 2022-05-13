import React, {FC, useEffect, useState} from "react";
import {SliderContent} from "./SliderContent";
import {Dots} from "./Dots";
import {Arrows} from "./Arrows";
import {sliderImage} from "./sliderImage";
import "../../../../styles/Scss/_slider.scss"

const len = sliderImage.length - 1;

export const SliderAuto: FC = (props) => {

    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
        }, 5000);
        return () => clearInterval(interval);
    }, [activeIndex]);

    return (
        <div className='slider'>
            <SliderContent
                activeIndex={activeIndex}
                sliderImage={sliderImage}
            />
                <Arrows
                    prevSlide={() =>
                        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)
                    }
                    nextSlide={() =>
                        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)
                    }
                />
                <Dots
                activeIndex={activeIndex}
                sliderImage={sliderImage}
                onclick={(activeIndex: number) => setActiveIndex(activeIndex)}
            />
        </div>
    );
}