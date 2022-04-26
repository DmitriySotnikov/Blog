import {instance} from "../http-common/instace";
import {ISidebarItem} from "../models/ISidebarItem";
import {AxiosResponse} from "axios";
import {PREFIX_URL, SIDEBAR_ITEMS_ROUTE} from "../constants/HttpConstants";


async function getItems (): Promise<AxiosResponse<ISidebarItem[]>> {
    return await instance.get<ISidebarItem[]>(`${PREFIX_URL}${SIDEBAR_ITEMS_ROUTE}`)}

export const InterfaceService = {
    getItems
}