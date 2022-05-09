import React, {FC} from 'react';
import './styles.scss';
import {Carousel} from "../Carousel";

export const Slider: FC = () => {
    return (
        <Carousel>
            <div className='item item-1'>Item 1</div>
            <div className='item item-2'>Item 2</div>
            <div className='item item-3'>Item 3</div>
        </Carousel>
    );
};