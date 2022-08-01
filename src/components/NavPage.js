import React from 'react'
import Home from './Home'
import {Routes,Route} from 'react-router-dom'
// import ListPage from './ListPage'
import GrowthRate from './GrowthRate'
// 
import Register from './Register'
function NavPage() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/listing' element={<GrowthRate />} />
        <Route path='/federation' element={<Register />} />

    </Routes>
    )
}

export default NavPage