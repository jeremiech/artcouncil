// this page is going to read individual excel cell partial 
// 
import React from 'react'

function IndividualData({individualExcelData}) {
  return (
    <>
    <th>
        <tr>{individualExcelData.Id}</tr>
        <tr>{individualExcelData.Name}</tr>
        <tr>{individualExcelData.Age}</tr>

    </th>
    </>
  )
}

export default IndividualData