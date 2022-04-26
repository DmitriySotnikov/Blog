import React, {FC} from 'react'
import {Card} from "antd";
import './styles.css'
import {APP_URL, ARTICLE_ROUTE, AUTHOR_ROUTE} from "../../../../constants/HttpConstants";

interface IArticleItem {
    title: string
    author: string
    date: string
    preview: string
    ArticleId: number
    ArticleAuthorId: number
}

export const ArticleItem: FC<IArticleItem> = (
    {title,
        author ,
        date,
        preview,
        ArticleId,
        ArticleAuthorId
    }) => {
    return (
        <Card title='' className='styleTitle'>
            <Card
                type="inner"
                title={author}
                extra={<a href={'/author'}>О авторе</a>}>
                {preview}
            </Card>
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={title}
                extra={<a href={`${ARTICLE_ROUTE}/${ArticleId}`}>Читать статью</a>}
            >
                {date}
            </Card>
        </Card>
    )
}