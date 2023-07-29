import React from 'react'
import MenuRouting from './MenuRouting';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import './UserInterface.css';


function UserInterface() {
  return (
    <>
      <div className="cover-dashboard">
       
       <Topbar/>
       <Sidebar/>
       
       <div className="main-part">

        </div>
      </div>      
    </>
    
  )
}

export default UserInterface