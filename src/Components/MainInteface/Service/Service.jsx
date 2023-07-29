// import { DashboardOutlined, HomeOutlined, UnorderedListOutlined, UserOutlined, PoweroffOutlined } from "@ant-design/icons/lib/icons";
import React from 'react'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import AccessibleIcon from '@mui/icons-material/Accessible';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import ListIcon from '@mui/icons-material/List';

import './Service.css';



function Service() {
  return (

    // <>
    //   <div className="cover-dashboard">
    //     <div className="topbar">
    //       <div className="logo">
    //         <h3>Brand.</h3>
    //       </div>
    //       <div className="Srch">
    //         <Input type="text" id='srch' placeholder='search here' />
    //         <label htmlFor="search"><i className='fa fa-search'></i></label>
    //       </div>
    //       <i className='fa fa-bell'></i>
    //       <div className="user">
    //         <img src={Image7} alt="" />
    //       </div>
    //     </div>
    //     <div className="sidebar">
    //       <ul>
    //         <li>
    //           <a href="">
    //             <i className='fa fa-th-large'></i>
    //             <div>Dashboard</div>
    //           </a>
    //         </li>

    //         <li>
    //           <a href="">
    //             <i className='fa fa-user-graduate'></i>
    //             <div>Clients</div>
    //           </a>
    //         </li>

    //         <li>
    //           <a href="">
    //             <i className='fa fa-chalkboard-teacher'></i>
    //             <div>Teacher</div>
    //           </a>
    //         </li>

    //         <li>
    //           <a href="">
    //             <i className='fa fa-users'></i>
    //             <div>Admin</div>
    //           </a>
    //         </li>

    //         <li>
    //           <a href="">
    //             <i className='fa fa-chart-bar'></i>
    //             <div>Analystics</div>
    //           </a>
    //         </li>

    //         <li>
    //           <a href="">
    //             <i className='fa fa-hand-holding-usd'></i>
    //             <div>Total</div>
    //           </a>
    //         </li>

    //         <li>
    //           <a href="">
    //             <i className='fa fa-cog'></i>
    //             <div>Settings</div>
    //           </a>
    //         </li>

    //         <li>
    //           <a href="">
    //             <i className='fa fa-question'></i>
    //             <div>Help</div>
    //           </a>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="main-part">
    //       <div className="cad">
    //         <div className="carrd">
    //            <div className="card-content">
    //             <div className="number">00</div>

    //             <div className="card-name">Clients</div>
    //            </div>
    //            <div className="icon-box">
    //             <i className='fa fa-users'></i>
    //            </div>
    //         </div>
    //       </div>

    //       <div className="cad">
    //         <div className="carrd">
    //            <div className="card-content">
    //             <div className="number">00</div>

    //             <div className="card-name">Teachers</div>
    //            </div>
    //            <div className="icon-box">
    //             <i className='fa fa-chalkboard-teacher'></i>
    //            </div>
    //         </div>
    //       </div>

    //       <div className="cad">
    //         <div className="carrd">
    //            <div className="card-content">
    //             <div className="number">00</div>

    //             <div className="card-name">Admin</div>
    //            </div>
    //            <div className="icon-box">
    //             <i className='fa fa-user-graduate'></i>
    //            </div>
    //         </div>
    //       </div>

    //       <div className="cad">
    //         <div className="carrd">
    //            <div className="card-content">
    //             <div className="number">00</div>

    //             <div className="card-name">Total</div>
    //            </div>
    //            <div className="icon-box">
    //             <i className='fa fa-user-graduate'></i>
    //            </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>

    <div className='mainservice' id='Service'>
      <h1>Our Services</h1>
      <div className="horizontal">
        <div className="service">
          <i className='fas fa-laptop-code'><SchoolIcon style={{fontSize:"50px"}}/></i>
          <h2>Certified Teachers</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className="service">
          <i className='fas fa-laptop-code'><PsychologyAltIcon style={{fontSize:"50px"}}/></i>
          <h2>Education Consultation</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className="service">
          <i className='fas fa-laptop-code'><AccessibleIcon style={{fontSize:"50px"}}/></i>
          <h2>Special Education</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className="service">
          <i><MenuBookIcon style={{fontSize:"50px"}}/></i>
          <h2>Book & Library</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className="service">
        <i className='fa solid fa-award'><WorkspacePremiumIcon style={{fontSize:"50px"}}/></i>
          <h2>Certification</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>

        <div className="service">

          <i className='fas fa-laptop-code'><ListIcon style={{fontSize:"50px"}}/></i>
          <h2>Curriculum Guidance</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
      </div>

    </div>
  )
}

export default Service