import React, {FC, useState} from 'react';
import '../../../../styles/Scss/_dropdown-menu.scss'
import {dropdownItems} from '../../../../util/NavItems'
import {Link} from "react-router-dom";

export const DropdownMenu:FC = () => {

    const [dropdown, setDropdown] = useState<boolean>(true)

    return ( dropdown ?
        <div className='dropdown-menu'>
            <ul className='dropdown-menu__list'>
                {
                    dropdownItems.map(i =>
                        <li className='dropdown-menu__list-item' key={i.id}>
                            <Link className={i.classNameItem} to={i.element}>{i.title}</Link>
                        </li>
                    )
                }
            </ul>
        </div> : null
    );
};