

import React from 'react'
import { useState } from 'react'
import Data from './Data'
import * as XLSX from 'xlsx'

export default function ExcelReader() {
  const [excelData,setExcelData]=useState(null)
  const [excelFile,setExcelFile]=useState(null)
  const [excelFileError,setExcelFileError]=useState(null)

  // console.log(excelFile)
  // const fileType=['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet']
  const fileType=['application/vnd.ms-excel']
  const handleFile=e=>{
  const selectedFile=e.target.files
  if(selectedFile){
    if(selectedFile&& fileType.includes(selectedFile.type)){
      const reader=new FileReader();
      reader.readAsArrayBuffer(selectedFile)
      reader.onload=e=>{
        setExcelFile(e.target.result)
        setExcelFileError(null)
        
    }
    }else{
      setExcelFileError("please only excel file")
      setExcelFile(null)
    }
  }
}
const handleForm=e=>{
  e.preventDefault();
  if(excelFile!==null){
    const workBook=XLSX.read(excelFile,{type:'array'})
    const workSheetName=workBook.SheetNames[0]
    const workSheet=workBook.Sheets[workSheetName]
    const data=XLSX.utils.sheet_to_json(workSheet)
    // console.log(data);
    setExcelData(data);
  }
  else{
    setExcelData(null)
  }
}


  return (
    <>
      <div className='container'>
    <div className='form'>
    <form className='form-group'  onSubmit={handleForm} autoComplete='off'>
      <label>File Uploading</label>
      <br />
<input type="file" className="form-control" onChange={handleFile} required />
{excelFileError&&<div className='text-danger' style={{marginTop:"5px"}}>{excelFileError}</div>}
<button className='btn btn-success' style={{marginTop:"5px"}}>Submit</button>


<br />
<br />
<hr/>
{/* view Recorded exell file */}

<h5>View Recorded List</h5>
<div className='viewer'>


{excelData!==null?(
  <div className='table-responsive'>
    <table className='table'>
      <thead>
      <tr>
        <th scope='col'>ID</th>
        <th scope='col'>Name</th>
        <th scope='col'>Age</th>


      </tr>
      </thead>
      <tbody>
        <Data excelData={excelData}/>
      
      </tbody>
    </table>
  </div>
)
:<>No Selected File</>
}
</div>
    </form>
    </div>
      </div>
    </>
    )
}


