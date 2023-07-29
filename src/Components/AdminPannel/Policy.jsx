import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import AuthContext from '../../Context/AuthProvider'
import Sidebar from '../MainInteface/UserInterface/Sidebar'
import Topbar from '../MainInteface/UserInterface/Topbar'
import Policypopup from './Policypopup'
import ProlicyTable from './PolicyTable'


function Policy() {
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
            <Policypopup/>
            )}
      
          
           <div>
          
           Policy
           <ProlicyTable/>

           
           </div>
        </div>

       
      </div>      
    </>
  )
}

export default Policy