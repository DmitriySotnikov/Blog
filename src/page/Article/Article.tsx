import './styles.css'
import React, {FC, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {useAppDispatchBind, useAppSelector} from "../../hooks/redux";
import {fetchArticle} from "../../store/actions-creators/articles";


export const Article: FC = () => {

    let {id} = useParams()

    const {fetchArticle} = useAppDispatchBind()
    const {article, author} = useAppSelector(state => state.articles)


    useEffect( () => {

        if (id) {
            {
                fetchArticle(id)
            }
        }
    }, [id])

    if (!id && id === null){
        return <h1>Произошла ошибка загрузки статьи!</h1>
    }

    if (!article){
        return <h1>Статья не найдена, произошла ошибка!</h1>
    }

    return (
        <div className='content'>
            <div className='contentArticle'>
                <div className='articleTitle'>
                    <div className='articleTitleName'>
                        {author.firstName}
                    </div>
                    <div className='articleTitleDate'>
                        {article.date}
                    </div>
                </div>
                <div>
                    <p>{article.contentArticle}</p>
                </div>
            </div>
        </div>
    );
};