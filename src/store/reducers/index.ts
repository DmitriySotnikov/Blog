// Корневой Reducer в котором мы обьеденяем все reducers

import {articleReducer} from './articles'
import {sidebarItemsReducer} from "./sidebarItems";

export const reducers = {
    articles: articleReducer,
    sidebarItems: sidebarItemsReducer
}

