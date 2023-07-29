import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import AuthContext from '../../Context/AuthProvider'
import GISpopup from '../GIS/GISpopup'
import Sidebar from '../MainInteface/UserInterface/Sidebar'
import Topbar from '../MainInteface/UserInterface/Topbar'
import TeacherPopup from './TeacherPopup'
import TeacherTable from './TeacherTable'


function Teacher() {
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
     <div className="order">
      
     </div>
     <div className="main-part">
        {userRole === "ROLE_ADMIN" &&(
            <TeacherPopup/>
            )}
            <GISpopup/>


            <div> 
              Teacher Lists
              <TeacherTable/>
            </div>
      </div>
    </div>      
  </>
  )
}

export default Teacher