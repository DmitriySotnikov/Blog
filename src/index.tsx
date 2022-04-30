import React from 'react'
import * as ReactDomClient from 'react-dom/client'
import './index.css'
import {App} from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Provider} from 'react-redux'
import {store} from './store/store'

const root = ReactDomClient.createRoot(document.getElementById('root') as HTMLElement)

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes  >
                <Route path='*' element={<App/>} />
            </Routes >
        </BrowserRouter>
    </Provider>
)

reportWebVitals()
