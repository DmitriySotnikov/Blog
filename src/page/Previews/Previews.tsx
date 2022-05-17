import './styles.css'
import React, {FC, useEffect} from 'react';
import { useAppDispatchBind, useAppSelector } from '../../hooks/redux';
import {ArticleItem} from "../../components/common/ordinary/ArticleItem";
import {RootState} from "../../store/store";
import {fetchPreviews} from "../../store/actions-creators/articles";
import {Spine} from "../../components/common/simple/Spiner";
import {PaginationElem} from "../../components/common/simple/Pagination";
import {Navigate} from "react-router-dom";
import {navItems} from "../../util/NavItems";



export const Previews: FC = () => {

    const {fetchPreviews, setPosition} = useAppDispatchBind()
    const {previews, loading, limit, currentPage} = useAppSelector((state: RootState) => state.articles)
    const {isError} = useAppSelector((state: RootState) => state.errors)
    const {positions} = useAppSelector(state => state.sidebarItems)

    useEffect(() => {
        fetchPreviews(limit, currentPage)
        return () => {
            setPosition('Статьи')
            console.log(positions)
        }
    }, [currentPage])

    if (loading) {
        return <Spine/>
    }
    console.log(positions)

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
