import {ArticleActionsCreator, ArticleState} from '../../types/articleTypes'
import {ArticleActionTypes} from '../../action'
import {IArticle} from "../../../models/IArticle";
import {IPreview} from "../../../models/IPreview";

// Начальное состояние
const initialState: ArticleState = {
    previews: {} as IPreview ,
    article: [] as IArticle[],
    error: '',
    loading: true,
    statusArticle: false,
    setResponseLoading: false
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
        case ArticleActionTypes.SET_PREVIEW: {
            return {...state, previews: action.payload}
        }
        default:
            return state
    }
}

