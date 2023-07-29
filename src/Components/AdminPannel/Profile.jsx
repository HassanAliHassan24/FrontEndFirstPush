import React from 'react'
import Sidebar from '../MainInteface/UserInterface/Sidebar'
import Topbar from '../MainInteface/UserInterface/Topbar'


function Profile() {
  return (
    <>
    <div className="cover-dashboard">
     
     <Topbar/>
     <Sidebar/>
     <div className="main-part">
            Profile
      </div>
    </div>      
  </>
  )
}

export default Profile