import React, {FC, useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
import  './App.css'
import {Home} from './page/Home/Home'
import {Sidebar} from './components/blocks/Sidebar/Sidebar'
import {Previews} from './page/Previews/Previews'
import {PostArticle} from './page/PostArticle/PostArticle'
import {OneArticle} from "./page/OneArticle/OneArticle";


export const App: FC = () => {
    return (
        <div className='layout'>
            <Sidebar/>
            <Routes>
                <Route path='/article/:id' element={<OneArticle />}/>
                <Route path='/preview' element={<Previews />} />
                <Route path='/postArticle' element={<PostArticle />} />
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    )
}
