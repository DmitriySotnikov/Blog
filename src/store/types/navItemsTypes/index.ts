import {InterfaceActionType} from '../../action'
import {ISidebarItem} from "../../../models/ISidebarItem";

export interface SidebarItemsState {
    items : ISidebarItem[]
    positions: string
}

export interface SetSidebarItem {
    type: InterfaceActionType.SET_SIDEBAR_ITEM
    payload: ISidebarItem[]
}

export interface SetNavPosition {
    type: InterfaceActionType.SET_NAV_POSITIONS
    payload: string
}

export type SidebarActionsCreator =
    SetSidebarItem |
    SetNavPosition