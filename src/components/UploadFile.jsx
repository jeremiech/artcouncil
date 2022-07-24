import React from 'react'
import impala from '../pics/impala.jpg'
export default function UploadFile() {
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
                
                <div class="btn">
                    <input type="button" value="Submit" />                 

                </div>
                <div class="loged">
                    <span>Alread have Registered <em><>Login</></em></span>

                </div>
            </div>
        </div>
    
    </>
    )
}
