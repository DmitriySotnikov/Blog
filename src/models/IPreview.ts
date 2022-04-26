export interface IPreview {
    count: number
    rows: IRow[]
}

export interface IRow {
    id: number
    author: string
    rating: number
    title: string
    date: string
    articleTopic: string
    ArticleId: number
    ArticleAuthorId: number
}