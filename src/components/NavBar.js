import React from 'react'
import { GrSearch } from 'react-icons/gr'
import { BsDownload } from 'react-icons/bs'

export default function NavBar() {
  return (
    <React.Fragment>
        <section>
        <div className='navbar'>
          <div className='sac-input'>
            <input className='src' type='search' />
            <button type='button' className='src-btn'><GrSearch /></button>
          </div>
          <div className='csv-btn'>
          <button type='button' className='src-csv'><BsDownload /><span style={{marginLeft:"5px"}}>Download CSV</span></button>
        
          </div>
        </div>
        </section>

    </React.Fragment>
  )
}
