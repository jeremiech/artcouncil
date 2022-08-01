import React from 'react'
import { NavLink } from 'react-router-dom'
import { sideData } from './SideTitle'
import logo from '../pics/logo.jpg'
export default function SideBar() {
    const datas=sideData
  return (
        <div className='sidebar'>
              <div className='logo'>
            <img src={logo} className='logoimg' alt="artlogo" />

            </div>
    {datas.map((values,index)=>{
        return(
          
            <div key={index}  className='sideList'>

        <NavLink to={values.link} className='rows'>
        <div className='icon'>{values.icon}</div>
            <div className='sidetite'>{values.title}</div>
        </NavLink>
        </div>
        
        
        )
    }      
        
    
   )}
    </div>
    )
}
