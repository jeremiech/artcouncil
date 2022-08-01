import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import NavPage from './NavPage'

function MainPage() {
  return (
    <React.Fragment>

<div id='page-orientor' >
<section>
<div>
    <SideBar/>
    </div>
  
    </section>
    <div>
    <NavBar/>
    </div>
        <section className='navpage'>
        <div>
            <NavPage />
        </div>
        </section>
        <section>


    </section>
</div>

</React.Fragment>
    )
}

export default MainPage