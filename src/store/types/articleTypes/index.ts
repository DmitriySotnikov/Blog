// Типизация все данных которые относятся к статьям

import {IArticle} from "../../../models/IArticle";
import {IPreview} from "../../../models/IPreview";
import {ArticleActionTypes} from '../../action';

// Типизация State
export interface ArticleState {
    previews: IPreview,
    article: IArticle[]
    loading: boolean
    error: null | string
    statusArticle: boolean
    setResponseLoading: boolean
}

// ACTION CREATORS INTERFACE

export interface SetPreviews {
    type: ArticleActionTypes.SET_PREVIEW
    payload: IPreview
}

export interface SetArticle {
    type: ArticleActionTypes.SET_ARTICLE
    payload: IArticle[]
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
    SetPreviews