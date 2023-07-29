import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import AuthContext from '../../Context/AuthProvider';
import Sidebar from '../MainInteface/UserInterface/Sidebar'
import Topbar from '../MainInteface/UserInterface/Topbar'
import ClientTable from './ClientTable';
// import ClientEdit from '../RregistrationForm/ClientEdit'

function Admin() {

  const [userRole, setUserRole] = useState('');

  const { auth } = useContext(AuthContext)
  const { role } = auth;

  useEffect(() => {
    setUserRole(role);
  }, [role]);
  return (

    <>
    <div className="cover-dashboard">
    

     <Topbar/>

     <Sidebar/>
     <div className="main-part">
    {userRole === "ROLE_ADMIN" &&(
      <>
      
      <ClientTable/>
      </>
      )}
           
            
      </div>
    </div>      
  </>
    )
}

export default Admin