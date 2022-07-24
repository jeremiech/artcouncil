import React from 'react'
import impala from '../pics/impala.jpg'
function Register() {
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
                            <label>Full names</label>
                        <input type="text" name="fn"/>
                    
                            <label>date of Birth</label>
                            <input type="date" name="dob"/>                    
                        <label>email</label>
                        <input type="text" name="eml"/>
                        
                                        </div>
                                        <div class="regpage">
                                            <label>Category</label>
                                            <input type="text" name="cat"/>
                                            Address
                                             <select name="ad">
                                                <option value="paint">paint</option>
                                                <option value="paint">singer</option>
                                                <option value="paint">ibohero</option>

                                             </select>   
                                             <label>Gender</label>
                                             <div class="sex">
                                                <input type="radio" name="sx" value="male"/>Male &nbsp;&nbsp;&nbsp;
                                                <input type="radio" name="sx" value="female"/>Female
                                             </div>

                                            </div>
                </div>
                <div class="btn">
                    <input type="button" value="Next" />                 

                </div>
                <div class="loged">
                    <span>Alread have Registered <em><>Login</></em></span>

                </div>
            </div>
        </div>
    </>

    )
}

export default Register