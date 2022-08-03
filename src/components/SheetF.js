import React, { useState,useEffect } from 'react'
import axios from 'axios'
export default function SheetF() {
    const [files,setFiles]=useState([])
    const url='https://sheet.best/api/sheets/cf34b5cb-90d2-4003-bdd2-5cf4316b89a9'
    const file=axios.get(url).then(res=>(
        setFiles(res.data)
        
        ))
console.log(file)
// useEffect(()=>{
//     setFiles(file)
// },[])
  return (
    <>
    <h4><em>The following files has found</em></h4>
    <div>{files}</div>
    </>
    )
}
