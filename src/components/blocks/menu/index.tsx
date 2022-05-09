import '../../../styles/Scss/_burger-menu.scss'
import '../../../styles/Scss/_burger-menu.scss'
import React, {FC} from 'react';
import {Link} from "react-router-dom";

interface prop {
    active: boolean
}

export const Menu: FC<prop> = (active) => {
    return (
        <div className={active.active ? 'burger-menu__active burger-menu' : 'burger-menu'}>
            <ul className='burger-menu__list'>
                <li className='burger-menu__list-item'>
                    <Link className='burger-menu__link' to={'#'}>Главная</Link>
                </li>
                <li className='burger-menu__list-item'>
                    <Link className='burger-menu__link' to={'#'}>Cтатьи</Link>
                </li>
                <li className='burger-menu__list-item'>
                    <Link className='burger-menu__link' to={'#'}>Помощь</Link>
                </li>
                <li className='burger-menu__list-item'>
                    <Link className='burger-menu__link' to={'#'}>Обо мне</Link>
                </li>
                <li className='burger-menu__list-item'>
                    <Link className='burger-menu__link' to={'#'}>Контакты</Link>
                </li>
            </ul>
        </div>
    );
};