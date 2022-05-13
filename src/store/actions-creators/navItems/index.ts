import {Dispatch} from "redux";
import {InterfaceActionType} from "../../action";
import {SetNavPosition, SetSidebarItem, SidebarActionsCreator} from "../../types/navItemsTypes";
import {ISidebarItem} from "../../../models/ISidebarItem";
import {InterfaceService} from "../../../service/InterfaceService";


export const setPosition = (payload: string): SetNavPosition =>
    ({type: InterfaceActionType.SET_NAV_POSITIONS,
            payload
        }
    )

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
