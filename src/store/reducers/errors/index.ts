import {ErrorActionCreators, ErrorsState} from "../../types/errorsTypes";
import {ErrorType} from "../../action";


const initialState: ErrorsState = {
    errorMessage: '',
    isError: false
}

export const errorReducer = (state = initialState, action: ErrorActionCreators): ErrorsState => {
    switch (action.type) {
        case ErrorType.SET_ERROR:
            return{...state, errorMessage: action.payload}
        case ErrorType.IS_ERROR:
            return {...state, isError: action.payload}
        default: return state
    }
}