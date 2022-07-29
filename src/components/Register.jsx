import React from 'react'
import impala from '../pics/impala.jpg'
import {useState} from 'react'
function Register() {
    const[names,setNames]=useState("")
    const[email,setEmail]=useState("")
  return (
    <>
    <div class="regist">
            <div class="harvest">
                <img src={impala} alt="impala art"/>

            </div>
            <div class="recontainer">
                <div class="heading">
                    <span>Registration</span>
                </div>
                <div class="regiscont">
                    <div class="regpage">
                            <label className='subdetails'>Full names</label>
                        <input type="text" name="fn"/>
                    
                            <label className='subdetails'>date of Birth</label>
                            <input type="date" name="dob"/>                    
                        <label className='subdetails'>email</label>
                        <input type="text" name="eml"/>
                        
                                        </div>
                                        <div class="regpage">
                                        <label className='subdetails'>Category</label>  
                                             <select name="cat">
                                                <option value="paint">paint</option>
                                                <option value="paint">singer</option>
                                                <option value="paint">ibohero</option>

                                             </select>  
                                          <label className='subdetails'>cluster</label>  
                                             <select name="ad">
                                                <option value="paint">paint</option>
                                                <option value="paint">singer</option>
                                                <option value="paint">ibohero</option>

                                             </select>   
                                          
                                            </div>
                </div>
                <div class="btn">
                    <input type="button" value="Next" />                 

                </div>
                <div class="loged">
                    <span>Alread have Registered <em style={{color:"orange"}}>Login</em></span>

                </div>
            </div>
        </div>
    </>

    )
}

export default Register