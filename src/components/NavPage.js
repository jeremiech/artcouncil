import React from 'react'
// import Home from './Home'
import {Routes,Route} from 'react-router-dom'
// import ListPage from './ListPage'
import GrowthRate from './GrowthRate'
import Register from './Register'
import ExReader from './ExcelReader'
import SheetF from './SheetF'
function NavPage() {
  return (
    <Routes>
        <Route path='/' element={<SheetF/>}/>
        <Route path='/listing' element={<ExReader />} />
        <Route path='/federation' element={<Register />} />
        <Route path='/notification' element={<GrowthRate />} />

        

    </Routes>
    )
}

export default NavPage