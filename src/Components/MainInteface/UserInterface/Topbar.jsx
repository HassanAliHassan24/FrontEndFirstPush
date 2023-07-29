import React from 'react'

import './UserInterface.css';
// import Image7 from '../../Image/profile.png'
import { Input } from '@mui/material';
import Profile from '../../AdminPannel/Profile';
import AccountMenu from './AccountMenu';



function Topbar() {
  return (
    <div>
         <div className="topbar">
          <div className="logo">
            <h3>Brand.</h3>
          </div>
          <div className="Srch">
            <Input type="text" id='srch' placeholder='search here' />
            <label htmlFor="search"><i className='fa fa-search'></i></label>
          </div>
          <i className='fa fa-bell'></i>
          <div className="user">
            {/* <img src={Image7} alt="" /> */}
            
            <AccountMenu/>

          </div>
        
        </div>
    </div>
  )
}

export default Topbar