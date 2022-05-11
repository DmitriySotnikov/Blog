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
                    <ul className='burger-menu__list burger-menu__sub-menu'>
                        <li className='burger-menu__sub-item'>
                            <Link className='burger-menu__link burger-menu__sub-link' to={'#'}>Автосигнализации</Link>
                        </li>
                        <li className='burger-menu__sub-item'>
                            <Link className='burger-menu__link burger-menu__sub-link' to={'#'}>Подогреватели</Link>
                        </li>
                        <li className='burger-menu__sub-item'>
                            <Link className='burger-menu__link burger-menu__sub-link' to={'#'}>Помощь установщику</Link>
                        </li>
                    </ul>
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