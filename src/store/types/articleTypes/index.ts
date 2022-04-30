// Типизация все данных которые относятся к статьям

import {IArticle} from "../../../models/IArticle";
import {IPreview} from "../../../models/IPreview";
import {ArticleActionTypes} from '../../action';
import {IAuthor} from "../../../models/IAuthor";

// Типизация State
export interface ArticleState {
    previews: IPreview
    article: IArticle
    author: IAuthor
    loading: boolean
    error: null | string
    statusArticle: boolean
    setResponseLoading: boolean
    currentPage: number
    totalPage: number
    limit: number
}

// ACTION CREATORS INTERFACE

export interface SetTotalPage {
    type: ArticleActionTypes.SET_TOTAL_PAGE
    payload: number
}

export interface SetPage {
    type: ArticleActionTypes.SET_PAGE
    payload: number
}

export interface SetAuthor {
    type: ArticleActionTypes.SET_AUTHOR
    payload: IAuthor
}

export interface SetPreviews {
    type: ArticleActionTypes.SET_PREVIEW
    payload: IPreview
}

export interface SetArticle {
    type: ArticleActionTypes.SET_ARTICLE
    payload: IArticle
}

export interface SetResponseLoading {
    type: ArticleActionTypes.SET_RESPONSE_LOADING
    payload: boolean
}

export interface SetStatusArticle {
    type: ArticleActionTypes.SET_STATUS
    payload: boolean
}

export interface SetIsLoading {
    type: ArticleActionTypes.IS_LOADING
    payload: boolean
}

export interface SetError {
    type: ArticleActionTypes.SET_ERROR
    payload: null | string
}

// Тип для обобщения все интерфейсов actions creators
export type ArticleActionsCreator =
    SetIsLoading |
    SetArticle |
    SetError |
    SetStatusArticle |
    SetResponseLoading |
    SetPreviews |
    SetAuthor |
    SetPage |
    SetTotalPage