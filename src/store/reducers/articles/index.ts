import {ArticleActionsCreator, ArticleState} from '../../types/articleTypes'
import {ArticleActionTypes} from '../../action'
import {IArticle} from "../../../models/IArticle";
import {IPreview} from "../../../models/IPreview";
import {IAuthor} from "../../../models/IAuthor";

// Начальное состояние
const initialState: ArticleState = {
    previews: {} as IPreview ,
    article: {} as IArticle,
    author: {} as IAuthor,
    error: '',
    loading: true,
    statusArticle: false,
    setResponseLoading: false,
    currentPage: 1,
    totalPage: 0,
    limit: 5
}

export const articleReducer = (
    state = initialState, action: ArticleActionsCreator): ArticleState => {
    switch (action.type) {
        case ArticleActionTypes.IS_LOADING:
            return {...state, loading: action.payload}
        case ArticleActionTypes.SET_ARTICLE:
            return {...state, article: action.payload}
        case ArticleActionTypes.SET_ERROR:
            return {...state, error: action.payload  , loading: false}
        case ArticleActionTypes.SET_STATUS:
            return {...state, statusArticle: action.payload}
        case ArticleActionTypes.SET_RESPONSE_LOADING:
            return {...state, setResponseLoading: action.payload}
        case ArticleActionTypes.SET_PREVIEW:
            return {...state, previews: action.payload}
        case ArticleActionTypes.SET_AUTHOR:
            return {...state, author: action.payload}
        case ArticleActionTypes.SET_PAGE:
            return {...state, currentPage: action.payload}
        case ArticleActionTypes.SET_TOTAL_PAGE:
            return {...state, totalPage: action.payload}
        default:
            return state
    }
}