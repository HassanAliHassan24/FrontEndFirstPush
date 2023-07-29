import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import AuthContext from '../../Context/AuthProvider'
import Sidebar from '../MainInteface/UserInterface/Sidebar'
import Topbar from '../MainInteface/UserInterface/Topbar'
import ClientPopup from './ClientPoup'
import Programpopup from './ProgramPopup'
import ProgramTable from './ProgramTale'

function Program() {
  const [userRole, setUserRole] = useState('');
  const {auth} = useContext(AuthContext)
  const {role} = auth;

  useEffect(() =>{
      setUserRole(role);
  },[role]);
  return (
    <>
      <div className="cover-dashboard">
       
       <Topbar/>
       <Sidebar/>
       <div className="main-part">
       {userRole === "ROLE_ADMIN" &&(
           <Programpopup/>
            )}
      
          
           <div>
          
           Programs Lists
            <ProgramTable/>
           </div>
        </div>

       
      </div>      
    </>
  )
}

export default Program