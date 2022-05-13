import * as ArticleActionCreator from './articles/index'
import * as SidebarActionsCreator from './navItems/index'
import * as ErrorActionCreator from './errors/index'

// Этот export нужен чтобы прибаиндить все action в хуке useActions
export const allActionCreators = {
    ...ArticleActionCreator,
    ...SidebarActionsCreator,
    ...ErrorActionCreator
}