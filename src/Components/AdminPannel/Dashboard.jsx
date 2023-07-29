import React from 'react'
import MenuRouting from '../MainInteface/UserInterface/MenuRouting'
import Sidebar from '../MainInteface/UserInterface/Sidebar'
import Topbar from '../MainInteface/UserInterface/Topbar'


function Dashboard() {
  return (
    <>
      <div className="cover-dashboard">
       
       <Topbar/>
       <Sidebar/>
       <div className="main-part">
            Dashboard
            <MenuRouting/>
        </div>
      </div>      
    </>
  )
}

export default Dashboard