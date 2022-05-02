import {ErrorType} from "../../action";
import {SetIsError} from "../../types/errorsTypes";


export const SetError = (payload: boolean): SetIsError => ({
    type: ErrorType.IS_ERROR,
    payload
})