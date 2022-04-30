import './styles.css'
import React, {FC, useEffect, useState} from 'react';
import { useAppDispatchBind, useAppSelector } from '../../hooks/redux';
import {ArticleItem} from "../../components/common/ordinary/ArticleItem";
import {RootState} from "../../store/store";
import {fetchPreviews} from "../../store/actions-creators/articles";
import {Spine} from "../../components/common/simple/Spiner";
import {Pagination, Row} from 'antd';


export const Previews: FC = () => {

    const {fetchPreviews} = useAppDispatchBind()
    const {previews, loading, limit} = useAppSelector((state: RootState) => state.articles)
    const [page, setPage] = useState<number>(1)

    useEffect(() => {
        fetchPreviews(limit, page)
    }, [page])

    if (loading) {
        return <Spine/>
    }

    return ( previews.count ?
            <div className='contentPreview'>
                <span className={'titleArticles'}>Здесь представлены самый интересные статьи нашего ресурса</span>
                <Row justify={'center'}>
                    <Pagination
                        className='pagination'
                        defaultCurrent={1}
                        total={previews.count}
                        defaultPageSize={5}
                        onChange={(page) => setPage(page)}
                        current={page}
                    />
                </Row>
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
            </div> : <Spine/>
    );
};
