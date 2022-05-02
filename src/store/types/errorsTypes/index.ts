import {ErrorType} from "../../action";

export interface ErrorsState {
    isError: boolean
    errorMessage: string
}

export interface SetError {
    type: ErrorType.SET_ERROR
    payload: string
}

export interface SetIsError {
    type: ErrorType.IS_ERROR
    payload: boolean
}

export type ErrorActionCreators =
    SetError |
    SetIsError