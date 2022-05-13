import React, {FC} from 'react';
import '../../styles/Scss/_home.scss'
import '../../styles/Scss/_container.scss'
import {SliderAuto} from "../../components/common/ordinary/CarouselAutoPlay/Slider";
import img from '../../assets/icons/image.png'

export const Home: FC = () => {
    return (
        <div className='home'>
            <div className='container'>
                <div className='home-main'>
                    <SliderAuto/>
                    <div className='home__author-blog'>
                        <img className='home__author-portrait' src={img}/>
                        <div className='home__author-blog'>
                            <span className='home__author-name'>Дмитрий Сотников</span>
                            <span className='home__author-profession' >
                                Профессиональный установщик автосигнализаций
                            </span >
                            <div className='home__author-about'>
                                <span>Dmitrich.1983@mail.ru</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};