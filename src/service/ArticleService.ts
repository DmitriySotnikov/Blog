import {instance} from "../http-common/instace";
import {IArticle} from "../models/IArticle";
import {AxiosResponse} from "axios";
import {IPreview} from "../models/IPreview";
import {ARTICLE_ROUTE, PREFIX_URL, PREVIEW_ROUTE} from "../constants/HttpConstants";


async function preview (limit: number): Promise<AxiosResponse<IPreview>> {
    return await instance.get<IPreview>(`${PREFIX_URL}${PREVIEW_ROUTE}` + limit)}


async function create(data: IArticle): Promise<AxiosResponse<IArticle[]>> {
    return await instance.post('', data)
}

async function oneArticle(id: number): Promise<AxiosResponse<IArticle[]>> {
    return await instance.get(`${PREFIX_URL}${ARTICLE_ROUTE}` + id)
}

export const ArticleService = {
    preview,
    create,
    oneArticle
}