import './styles.css'
import React, {FC, useEffect} from 'react';
import { useAppDispatchBind, useAppSelector } from '../../hooks/redux';
import {ArticleItem} from "../../components/common/ordinary/ArticleItem";
import {RootState} from "../../store/store";
import {fetchPreviews} from "../../store/actions-creators/articles";
import {Spine} from "../../components/common/simple/Spiner";
import {PaginationElem} from "../../components/common/simple/Pagination";
import {Error} from "../../components/common/simple/Error";
import {Navigate} from "react-router-dom";



export const Previews: FC = () => {

    const {fetchPreviews} = useAppDispatchBind()
    const {previews, loading, limit, currentPage} = useAppSelector((state: RootState) => state.articles)
    const {isError} = useAppSelector((state: RootState) => state.errors)

    useEffect(() => {
        fetchPreviews(limit, currentPage)
    }, [currentPage])

    if (loading) {
        return <Spine/>
    }

    return ( isError ?
            <Navigate to='/error'/> :
            <div className='contentPreview'>
                <span className={'titleArticles'}>Здесь представлены самый интересные статьи нашего ресурса</span>
                <PaginationElem />
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
