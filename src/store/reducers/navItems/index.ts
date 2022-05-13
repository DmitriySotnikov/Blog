import {SidebarActionsCreator, SidebarItemsState} from '../../types/navItemsTypes'
import {InterfaceActionType} from '../../action'
import {ISidebarItem} from "../../../models/ISidebarItem";

// Начальное состояние
const initialState: SidebarItemsState = {
    items: [] as ISidebarItem[],
    positions: ''
}

export const sidebarItemsReducer = (
    state = initialState, action: SidebarActionsCreator): SidebarItemsState => {
    switch (action.type) {
        case InterfaceActionType.SET_SIDEBAR_ITEM:
            return {...state, items: action.payload}
        case InterfaceActionType.SET_NAV_POSITIONS:
            return {...state, positions: action.payload}
        default:
            return state
    }
}

