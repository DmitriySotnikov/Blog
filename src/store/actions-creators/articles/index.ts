import {Dispatch} from "redux"
import {
    ArticleActionsCreator,
    SetArticle,
    SetAuthor,
    SetIsError,
    SetIsLoading,
    SetPage,
    SetStatusArticle
} from "../../types/articleTypes"
import {ArticleActionTypes, ErrorType} from '../../action'
import {IArticle} from "../../../models/IArticle"
import {ArticleService} from "../../../service/ArticleService"
import {IAuthor} from "../../../models/IAuthor";

export const isError = (payload: boolean): SetIsError => ({
    type: ArticleActionTypes.IS_ERROR,
    payload
})

export const confirmation = (payload: boolean): SetStatusArticle => ({
    type: ArticleActionTypes.SET_STATUS,
    payload
})

export const setCurrentPage = (payload: number): SetPage => ({
    type: ArticleActionTypes.SET_PAGE,
    payload
})

export const postArticle = (date: IArticle) => {
    return async (dispatch: Dispatch<ArticleActionsCreator>) => {
        const status = (payload: boolean): SetStatusArticle => dispatch(
            {type: ArticleActionTypes.SET_STATUS, payload})
        dispatch({type: ArticleActionTypes.SET_RESPONSE_LOADING, payload: true})
        try {
            const response = await ArticleService.create(date)
            if (response.status === 201) {
                status(true)
            }
            console.log(response.status)
        } catch (e) {
            alert("Ошибка сервера, попробуйте отправить позже!!!")
        } finally {
            dispatch({type: ArticleActionTypes.SET_RESPONSE_LOADING, payload: false})
        }
    }
}

export const fetchArticle = (id: string) => {
    return async (dispatch: Dispatch<ArticleActionsCreator>) => {
        const loading = (payload: boolean): SetIsLoading => dispatch({
            type:ArticleActionTypes.IS_LOADING, payload})
        loading(true)
        // связанный генератор экшена (bound action creator),
        // который автоматически запускает отправку экшена
        const boundSetArticle = (payload: IArticle): SetArticle => dispatch(
            {type: ArticleActionTypes.SET_ARTICLE, payload})
        const SetAuthor = (payload: IAuthor): SetAuthor => dispatch(
            {type: ArticleActionTypes.SET_AUTHOR, payload})
        try {
            const response = await ArticleService.oneArticle(id)
            boundSetArticle(response.data)
            const author = await ArticleService.authorById(response.data.ArticleAuthorId)
            SetAuthor(author.data)
        } catch(e) {
            console.log(e)
        } finally {
            loading(false)
        }
    }
}

export const fetchAuthor = (id: number) => {
    return async (dispatch: Dispatch<ArticleActionsCreator>) => {
        const loading = (payload: boolean): SetIsLoading => dispatch({
            type:ArticleActionTypes.IS_LOADING, payload})
        loading(true)
        const SetAuthor = (payload: IAuthor): SetAuthor => dispatch(
            {type: ArticleActionTypes.SET_AUTHOR, payload})
        try {
            const response = await ArticleService.authorById(id)
            SetAuthor(response.data)
        } catch(e) {
            console.log(e)
        } finally {
            loading(false)
        }
    }
}

export const fetchPreviews = (limit: number, currentPage: number) => {
    return async (dispatch: Dispatch<ArticleActionsCreator>) => {
        const loading = (payload: boolean): SetIsLoading => dispatch({
            type: ArticleActionTypes.IS_LOADING, payload
        })
        loading(true)
        let response
        try {
            response = await ArticleService.preview(limit,  currentPage)
        } catch (e) {
            dispatch({type: ArticleActionTypes.IS_ERROR, payload: true})
            console.log(e)
            return
        }
        dispatch({type: ArticleActionTypes.SET_PREVIEW, payload: response.data})
        dispatch({type: ArticleActionTypes.SET_TOTAL_PAGE, payload: response.data.count})
        dispatch({type: ArticleActionTypes.SET_PAGE, payload: currentPage})
        loading(false)

    }
}