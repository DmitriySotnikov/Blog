import React, {FC, useEffect} from 'react';
import style from "./Sidebar.module.css"
import {Link} from "react-router-dom";
import {useAppDispatchBind, useAppSelector} from "../../../hooks/redux";


export const Sidebar: FC = () => {

    const mockData = [{
        id: 0 ,
        title: 'Первая статья',
        date: '20.20.2020',
        articleTopic: 'Автозвук',
        rating: 5
    }]

    const {fetchItems, fetchPreview} = useAppDispatchBind()

    useEffect(() => {
        fetchItems()
        //fetchPreview(7)
    }, [])

    const {items} = useAppSelector(state => state.sidebarItems)

    //const {previews, loading} = useAppSelector(state => state.articles)
    //if (loading) {return <h1>Загрузка...</h1>}

    return (
    <div>
        <div className={style.sideBar}>
            <div className={style.inner}>
                <nav className={style.menu}>
                    <header className={style.headerMenu}>
                        <span>Главное меню</span>
                    </header>
                    <div className={style.link}>
                        {items.map(i =>
                            <div key={i.id} className={style.linkItem}>
                                <Link to={i.linkTo}>{i.linkItem}</Link>
                            </div>
                        )}
                    </div>
                </nav>
                <div className={style.postMenu}>
                    <header className={style.headerMenu}>
                            <span>Последние <br/>
                                статьи
                            </span>
                    </header>
                    <div className={style.postSection}>
                        {mockData.map(i =>
                            <article key={i.id}>
                                <span>{i.title}</span>
                                <br/>
                                <span>{i.date}</span>
                                <br/>
                                <span>{i.articleTopic}</span>
                                <br/>
                                <span>Ретинг: {i.rating}</span>
                            </article>)}
                    </div>
                </div>
                <div className={style.contactMenu}>

                </div>
            </div>
        </div>
    </div>
    )
};


//