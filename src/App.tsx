import React, {FC, useEffect} from 'react'
import {Route, Routes} from 'react-router-dom'
//import  './App.css'
import {Home} from './page/Home/Home'
import {Sidebar} from './components/blocks/Sidebar/Sidebar'
import {Previews} from './page/Previews/Previews'
import {PostArticle} from './page/PostArticle/PostArticle'
import {Article} from "./page/Article/Article";
import {Spine} from "./components/common/simple/Spiner";
import {Error} from "./components/common/simple/Error";
import {AltSidebar} from "./components/blocks/altSidebar";


export const App: FC = () => {
    return (
        <div className='layout'>
            <AltSidebar/>
            <Routes>
                <Route path='/article/:id' element={<Article />}/>
                <Route path='/preview' element={<Previews />} />
                <Route path='/postArticle' element={<PostArticle />} />
                <Route path='/' element={<Home />} />
                <Route path='/spine' element={<Spine/>}/>
                <Route path='/error' element={<Error/>} />
            </Routes>
        </div>
    )
}
