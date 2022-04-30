import axios from 'axios'
import {API_URL} from "../constants/HttpConstants";


// Экспорт базового инстанса
export const instance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
})