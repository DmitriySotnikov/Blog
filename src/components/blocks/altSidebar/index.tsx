import '../../../styles/Scss/_container.scss'
import '../../../styles/Scss/_header.scss'
import '../../../styles/Scss/_menu.scss'
import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import {Menu} from "../menu";
import {navItems} from '../../../util/NavItems'
import {DropdownMenu} from "../../common/ordinary/DropdownMenu";
import {useAppDispatchBind, useAppSelector} from "../../../hooks/redux";

export const AltSidebar = () => {

    const [active, setActive] = useState<boolean>(false)
    const [dropdown, setDropdown] = useState<boolean>(false)
    const {positions} = useAppSelector(state => state.sidebarItems)
    const {setPosition} = useAppDispatchBind()

    useEffect(() => {setPosition(positions)}, [positions])

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
                                {navItems.map(i => {
                                        return i.title === 'Cтатьи' ?
                                            <li className='menu__list-item'
                                                onMouseEnter={() => setDropdown(!dropdown)}
                                                onMouseLeave={() => setDropdown(!dropdown)}
                                            >
                                                <Link
                                                    className={i.title === positions ?
                                                        'menu__link--active' :
                                                        'menu__link'
                                                    } to={i.element}
                                                >
                                                    {i.title}
                                                </Link>
                                                <DropdownMenu drop = {dropdown}/>
                                            </li>
                                            :
                                            <li className='menu__list-item'
                                            >
                                                <Link
                                                    className={i.title === positions ?
                                                        'menu__link--active' :
                                                        'menu__link'
                                                    } to={i.element}
                                                >
                                                    {i.title}
                                                </Link>
                                            </li>
                                    }
                                )}
                            </ul>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='header__menu-available'>
                            <Menu active={active} setActive = {setActive}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
