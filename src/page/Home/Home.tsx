import React, {FC} from 'react';
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
        </div>
    );
};