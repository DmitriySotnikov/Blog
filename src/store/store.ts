import {applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import {reducers} from './reducers'

// Корневой reducer
export const rootReducer = combineReducers(reducers)

// Создание store
export const store = createStore(rootReducer, applyMiddleware(thunk))


// Types
//export type RootState = ReturnType<typeof store.getState>
export type RootState = ReturnType<typeof rootReducer>

export type AppDispatch = typeof store.dispatch