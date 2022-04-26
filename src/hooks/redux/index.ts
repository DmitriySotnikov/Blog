import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import type {AppDispatch, RootState} from '../../store/store'
import {allActionCreators} from "../../store/actions-creators";

export const useAppDispatchBind = () => bindActionCreators(allActionCreators, useDispatch<AppDispatch>())//useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector