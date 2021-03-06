// Корневой Reducer в котором мы обьеденяем все reducers

import {articleReducer} from './articles'
import {sidebarItemsReducer} from "./navItems";
import {errorReducer} from "./errors";

export const reducers = {
    articles: articleReducer,
    sidebarItems: sidebarItemsReducer,
    errors: errorReducer
}

