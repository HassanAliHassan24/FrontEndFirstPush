import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import AuthContext from '../../Context/AuthProvider'
import Sidebar from '../MainInteface/UserInterface/Sidebar'
import Topbar from '../MainInteface/UserInterface/Topbar'
import ClientEdit from '../RregistrationForm/ClientEdit'
import ClientPopup from './ClientPoup'
import ClientTable from './ClientTable'

function Client() {

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
            <ClientPopup/>
            )}
            <div>

        <ClientTable/>
            </div>
        </div>
        <div>

        </div>
      </div>      
    </>
  )
}

export default Client