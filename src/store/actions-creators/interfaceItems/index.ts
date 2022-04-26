import {Dispatch} from "redux";
import {InterfaceActionType} from "../../action";
import {SetSidebarItem, SidebarActionsCreator} from "../../types/sidebarItemsTypes";
import {ISidebarItem} from "../../../models/ISidebarItem";
import {InterfaceService} from "../../../service/InterfaceService";


export function fetchItems() {
    return async function fetchItemsThunk(dispatch: Dispatch<SidebarActionsCreator>) {
        const getItem = (payload: ISidebarItem[]): SetSidebarItem => dispatch({
            type: InterfaceActionType.SET_SIDEBAR_ITEM, payload})
        try {
            const response = await InterfaceService.getItems()
            getItem(response.data)
        } catch (e) {
            console.log(e)
        }
    }
}
