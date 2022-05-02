import React, {FC, useState} from "react";
import {useAppDispatchBind} from "../../../../hooks/redux";
import {Navigate} from "react-router-dom";
import {Button} from "antd";
import style from "./error.module.css"


export const Error: FC = () => {

    const {isError} = useAppDispatchBind()

    const [redirectPage, setRedirectPage] = useState(false)

    const handleClick = () => {
        setRedirectPage(true)
        isError(false)
    }

    return ( redirectPage ? <Navigate to='/'/> :
            <div className='content'>
                <div className={style.content}>
                    <span>Что-то пошло не так!</span>
                    <Button
                        type="primary"
                        shape="round"
                        size={'large'}
                        onClick={handleClick}
                    >
                        Вернутся на главную
                    </Button>
                </div>
            </div>
    );
};