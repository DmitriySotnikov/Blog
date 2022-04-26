import {Dispatch} from "redux"
import {
    ArticleActionsCreator,
    SetArticle,
    SetIsLoading,
    SetStatusArticle
} from "../../types/articleTypes"
import {ArticleActionTypes} from '../../action'
import {IArticle} from "../../../models/IArticle"
import {ArticleService} from "../../../service/ArticleService"

export const confirmation = (payload: boolean): SetStatusArticle => ({
    type: ArticleActionTypes.SET_STATUS,
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

export const fetchArticle = (id: number) => {
    return async (dispatch: Dispatch<ArticleActionsCreator>) => {
        const loading = (payload: boolean): SetIsLoading => dispatch({
            type:ArticleActionTypes.IS_LOADING, payload})
        loading(true)
        // связанный генератор экшена (bound action creator),
        // который автоматически запускает отправку экшена
        const boundSetArticle = (payload: IArticle[]): SetArticle => dispatch(
            {type: ArticleActionTypes.SET_ARTICLE, payload})
        try {
            const response = await ArticleService.oneArticle(id)
            boundSetArticle(response.data)
        } catch(e) {
            console.log(e)
        } finally {
            loading(false)
        }
    }
}

export const fetchPreview = (limit: number) => {
    return async (dispatch: Dispatch<ArticleActionsCreator>) => {
        const loading = (payload: boolean): SetIsLoading => dispatch({
            type: ArticleActionTypes.IS_LOADING, payload
        })
        loading(true)
        try {
            const response = await ArticleService.preview(limit)
            dispatch({type: ArticleActionTypes.SET_PREVIEW, payload: response.data})
        } catch (e) {
            console.log(e)
        } finally {
            loading(false)
        }
    }
}