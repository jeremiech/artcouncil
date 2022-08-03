import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Home() {
  const url='https://docs.google.com/spreadsheets/d/1u-3MBkt7E87qfwxm1mHDAjIsX0VZGF1L4hdUEMdPxVk/edit?usp=sharing'
  // console.log(url)
  const [shData,setShData]=useState([])
 useEffect(()=>{
  axios.get(url).then(res=>{
    setShData(res.data.json());
  })
 },[])

  // console.log(data.json())
  return (
   <>
    <div>Home Data</div>
    <div>{shData}</div>
   </>
    )
}
