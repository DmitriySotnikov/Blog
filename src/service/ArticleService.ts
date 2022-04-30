import {instance} from "../http-common/instace";
import {IArticle} from "../models/IArticle";
import {AxiosResponse} from "axios";
import {IPreview} from "../models/IPreview";
import {ARTICLE_ROUTE, AUTHOR_ROUTE, PREFIX_URL, PREVIEW_ROUTE} from "../constants/HttpConstants";
import {IAuthor} from "../models/IAuthor";


async function preview (limit: number, page: number): Promise<AxiosResponse<IPreview>> {
    return await instance.get<IPreview>(`${PREFIX_URL}${PREVIEW_ROUTE}`,
        {params: {limit: limit, page: page}})
}

async function create(data: IArticle): Promise<AxiosResponse<IArticle[]>> {
    return await instance.post('', data)
}

async function oneArticle(id: string): Promise<AxiosResponse<IArticle>> {
    return await instance.get(`${PREFIX_URL}${ARTICLE_ROUTE}/` + id)
}

async function authorById(id: number): Promise<AxiosResponse<IAuthor>> {
    return await instance.get(`${PREFIX_URL}${AUTHOR_ROUTE}/` + id)
}

export const ArticleService = {
    preview,
    create,
    oneArticle,
    authorById
}