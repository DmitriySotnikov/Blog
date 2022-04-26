import {SidebarActionsCreator, SidebarItemsState} from '../../types/sidebarItemsTypes'
import {InterfaceActionType} from '../../action'
import {ISidebarItem} from "../../../models/ISidebarItem";

// Начальное состояние
const initialState: SidebarItemsState = {
    items: [] as ISidebarItem[]
}

export const sidebarItemsReducer = (
    state = initialState, action: SidebarActionsCreator): SidebarItemsState => {
    switch (action.type) {
        case InterfaceActionType.SET_SIDEBAR_ITEM:
            return {...state, items: action.payload}
        default:
            return state
    }
}

