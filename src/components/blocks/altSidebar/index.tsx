import '../../../styles/Scss/_container.scss'
import '../../../styles/Scss/_header.scss'
import '../../../styles/Scss/_menu.scss'
import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Menu} from "../menu";
import {SliderAuto} from "../../common/ordinary/CarouselAutoPlay/Slider";

export const AltSidebar = () => {

    const [active, setActive] = useState(false)

    return (
        <div className='header'>
            <div className='container'>
                <div className='header__nav'>
                    <div className='header__nav-inner'>
                        <div className='header__burger-btn-container'>
                            <div className={
                                active ? 'header__burger-btn header__burger-btn--active' :
                                    'header__burger-btn'
                            } onClick={() => setActive(!active)}>
                            <span className={
                                active ? 'header__burger-btn-span header__burger-btn-span--active' :
                                    'header__burger-btn-span'
                            }/>
                            </div>
                        </div>
                        <div className='header__logo'>
                            Dmitry
                        </div>
                        <div className='menu'>
                            <ul className='menu__list'>
                                <li className='menu__list-item'>
                                    <Link className='menu__link--active' to={'#'}>Главная</Link>
                                </li>
                                <li className='menu__list-item'>
                                    <Link className='menu__link' to={'#'}>Cтатьи</Link>
                                </li>
                                <li className='menu__list-item'>
                                    <Link className='menu__link' to={'#'}>Помощь</Link>
                                </li>
                                <li className='menu__list-item'>
                                    <Link className='menu__link' to={'#'}>Обо мне</Link>
                                </li>
                                <li className='menu__list-item'>
                                    <Link className='menu__link' to={'#'}>Контакты</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='header__content'>
                        <div className='container'>
                            <div className='header__menu-available'>
                                <Menu active={active}/>
                            </div>
                            <SliderAuto/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
