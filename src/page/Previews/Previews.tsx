import './styles.css'
import React, {FC, useEffect} from 'react';
import { useAppDispatchBind, useAppSelector } from '../../hooks/redux';
import {ArticleItem} from "../../components/common/ordinary/ArticleItem";
import {RootState} from "../../store/store";
import {fetchPreview} from "../../store/actions-creators/articles";


export const Previews: FC = () => {

    const {fetchPreview} = useAppDispatchBind()
    const {previews, loading} = useAppSelector((state: RootState) => state.articles)

    useEffect(() => {
        fetchPreview(5)
    }, [])

    if (loading) {
        return <h1>Загрузка...</h1>
    }

   // console.log(previews)

    return (
        <div className={'content'}>
            <span className={'titleArticles'}>Здесь представлены самый интересные статьи нашего ресурса</span>
            { previews.rows.map ( a =>
                <ArticleItem
                    key={a.id}
                    title={a.title}
                    author={a.author}
                    date={a.date}
                    preview={a.articleTopic}
                    ArticleId={a.ArticleId}
                    ArticleAuthorId={a.ArticleAuthorId}
                />
            )}
        </div>
    );
};
