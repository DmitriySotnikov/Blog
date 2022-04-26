import {InterfaceActionType} from '../../action'
import {ISidebarItem} from "../../../models/ISidebarItem";

export interface SidebarItemsState {
    items : ISidebarItem[]
}

export interface SetSidebarItem {
    type: InterfaceActionType.SET_SIDEBAR_ITEM
    payload: ISidebarItem[]
}

export type SidebarActionsCreator =
    SetSidebarItem