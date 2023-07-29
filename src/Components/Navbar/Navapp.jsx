import { Navbar, Nav, Sidebar, Modal } from 'rsuite';
import Button from 'rsuite/Button';
import HomeIcon from '@rsuite/icons/legacy/Home';
import CogIcon from '@rsuite/icons/legacy/Cog';
import "rsuite/dist/rsuite.css"
import MenuIcon from '@mui/icons-material/Menu';
import './Nav.css';

import { Link } from 'react-router-dom';
import { Home } from '@mui/icons-material';

import Registration from '../RregistrationForm/Registration';

import Login from '../LoginForm/Login';
import { ContactsFilled } from '@ant-design/icons';



const Navapp = () => (

  <>
    <nav className="navbar navbar-expand-lg" >
      <div className="container-fluid" >
        <a className="navbar-brand" href="#">Navbar</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon "><MenuIcon /></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent" >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
            <li className="nav-item">


             <a className="nav-link active text-light" aria-current="page" href="#Home"> < HomeIcon fontSize="21" style={{marginRight:"2px"}} />
                Home </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Team">
                {/* <ContactsFilled  fontSize="21" style={{marginRight:"2px"}}/> */}
                OurTeam
              </a>
            </li>
            <li className="nav-item">

              <a className="nav-link" href="#Service">Service</a>

            </li>
            <li className="nav-item">

              <a className="nav-link" href="#Contact">

                Contact</a>


            </li>

            <li className="nav-item">

              <a className="nav-link" href="#About" tabindex="-1">
                Aboutus</a>
            </li>
          </ul>

          <Registration />
          <Login />


        </div>
      </div>
    </nav>
  </>

);

export default Navapp;