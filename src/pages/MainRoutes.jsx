import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './Home'
import About from "./About"
import SignUp from "./SignUp"
import Login from "./Login"
const MainRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/home' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='sign-up' element={<SignUp/>}></Route>
                <Route path='login' element={<Login/>}></Route>
            </Routes>
        </div>
    )
}

export default MainRoutes