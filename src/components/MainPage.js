import React from 'react'
import NavBar from './NavBar'
import SideBar from './SideBar'
import NavPage from './NavPage'

function MainPage() {
  return (
    <React.Fragment>

    <section>
    <div>
    <NavBar/>
    </div>
    </section>
        <section className='navpage'>
        <div>
            <NavPage />
        </div>
        </section>
        <section>

            <div>
    <SideBar/>
    </div>
    </section>

</React.Fragment>
    )
}

export default MainPage