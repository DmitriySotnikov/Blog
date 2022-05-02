import React, {FC} from 'react';
import { Carousel } from 'antd';
import img from '../../assets/images/1.png'
import img_1 from '../../assets/images/1_1.jpg'
import img_2 from '../../assets/images/1-1.png'
import img_3 from '../../assets/images/1-2.png'
import img_4 from '../../assets/images/1-4.png'
import './styles.css'

export const Home: FC = () => {

    return (
        <div className='content'>
            <div className='header'>
                <span>О нас</span>
                <span>Контакты</span>
            </div>
            <div className='title'>
                <span>Блог посвещен автосигнализациям и пжд</span>
            </div>
            <div className='carousel'>
                <Carousel autoplay>
                    <div>
                        <img className='contentStyle' src={img} alt={'image'}/>
                    </div>
                    <div>
                        <img className='contentStyle' src={img_1}/>
                    </div>
                    <div>
                        <img className='contentStyle' src={img_2}/>
                    </div>
                    <div>
                        <img className='contentStyle' src={img_3}/>
                    </div>
                    <div>
                        <img className='contentStyle' src={img_4}/>
                    </div>
                </Carousel>

            </div>
        </div>
    );
};