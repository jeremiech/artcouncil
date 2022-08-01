import impala from '../pics/impala.jpg'
import React,{useState,useEffect} from 'react'
import { category,clusters } from './sideComponent';


const Register=()=> {
        const [categories,setCategies]=useState([]);
    const [cluster,setCluster]=useState([]);

    // const[names,setNames]=useState("")
    // const[email,setEmail]=useState("")
 


useEffect(()=>{
setCategies(category)
},[])
const handleCategory=id=>{
    const clus=clusters.filter(ids=>(ids.categoryId===id))
    setCluster(clus);
    
}



  return (
    <>
    <div class="regist">
            <div class="harvest">
                <img src={impala} alt="impala art"/>

            </div>
            <div class="recontainer">
                <div class="heading">
                    <span>Registering Federation</span>
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
                                             <select id="cat" onChange={e=>handleCategory(e.target.value)} >
                                            
                                                <option value="-1" selected>Choose Category</option>
                                                { categories && categories!==undefined 
                                                    ?categories.map((value,index)=>{
                                                        return(
                                                            <option key={index} value={value.id}>{value.name}</option>
                                                        )
                                                        }):"No Category Chosen"}
                                            
                                             </select>  
                                          <label className='subdetails'>Cluster</label>  
                                          <select id="clid"  onChange={e=>e.target.value}>
                                                <option value="-1" selected>Select Cluster</option>
                                                {cluster&& cluster!==undefined 
                                                ?cluster.map((value,index)=>{
                                                    return(
                                                        <option key={index} value={value.id}>{value.name}</option>
                                                    )
                                                }):"No Cluster has Chosen yet"
                                                }

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