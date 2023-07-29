import React from 'react'
import Sidebar from '../MainInteface/UserInterface/Sidebar'
import Topbar from '../MainInteface/UserInterface/Topbar'
import ClientPopup from './ClientPoup'

function Settings() {
  return (
    <>
      <div className="cover-dashboard">
       
       <Topbar/>
       <Sidebar/>
       <div className="main-part">
            Settings
        </div>
      </div>      
    </>
  )
}

export default Settings