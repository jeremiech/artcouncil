import React from 'react'
import IndividualData from './IndividualData'

export default function Data({excelData}) {
  return excelData.map(individualExcelData=>
    <tr key={individualExcelData.Id}>
        <IndividualData  individualExcelData={individualExcelData} />
    </tr>
    )
}
