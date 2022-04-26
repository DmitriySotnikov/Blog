import './style.css'
import React, {FC, useState} from 'react';
import {Button} from "antd";
import {Link} from 'react-router-dom';
import {useAppDispatchBind} from "../../../../hooks/redux";


export const Confirmation: FC = () => {

    const {confirmation} = useAppDispatchBind()

    const [redirectPage, setRedirectPage] = useState(false)

    const handleClick = () => {
        setRedirectPage(true)
        confirmation(false)
    }

    return ( redirectPage ? <Link to='/PostArticle'/> :
            <div className='content'>
                <div className='confirmation'>
                    <span>Ваша статья успешно сохранена!</span>
                    <Button
                        type="primary"
                        shape="round"
                        size={'large'}
                        onClick={handleClick}
                    >
                        Вернутся
                    </Button>
                </div>
            </div>
    );
};