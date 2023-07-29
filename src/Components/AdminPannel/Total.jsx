import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import AuthContext from '../../Context/AuthProvider'
import GISlocation from '../GIS/GISlocation'
import Sidebar from '../MainInteface/UserInterface/Sidebar'
import Topbar from '../MainInteface/UserInterface/Topbar'
import TotalUsers from './TotalUsers'
import UserPopup from './UserPopup'


function Total() {

  const [userRole, setUserRole] = useState('');

  const { auth } = useContext(AuthContext)
  const { role } = auth;

  useEffect(() => {
    setUserRole(role);
  }, [role]);

  return (
    <>
      <div className="cover-dashboard">

        <Topbar />
        <Sidebar />
        <div className="main-part">
        
          <div>
            {userRole === "ROLE_ADMIN" && (
              <UserPopup />
            )}
          </div>

          <div>
            {userRole === ("ROLE_CLIENT" || "ROLE_TEACHER") && (

              <h5>Only Admin Can View This Page</h5>
            )}
          </div>


          {userRole === "ROLE_ADMIN" && (
            <TotalUsers />
          )}
        </div>
      </div>
    </>
  )
}

export default Total