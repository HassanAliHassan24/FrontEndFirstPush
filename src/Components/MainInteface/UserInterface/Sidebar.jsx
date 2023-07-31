import './UserInterface.css';
import Main from '../Main';
import { Link, useNavigate } from 'react-router-dom';
import Dashboard from '../../AdminPannel/Dashboard';
import Client from '../../AdminPannel/Client';
import Teacher from '../../AdminPannel/Teacher';
import Admin from '../../AdminPannel/Admin';
import Total from '../../AdminPannel/Total';
import Settings from '../../AdminPannel/Settings';
import Help from '../../AdminPannel/Help';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../../Context/AuthProvider';
import { LogoutOutlined, TeamOutlined, WindowsOutlined } from '@ant-design/icons';
import ViewTeachersOnMap from '../../AdminPannel/ViewTeacherOnMap';
import Order from '../../AdminPannel/Order';

function Sidebar() {

    const [userRole, setUserRole] = useState('');
    const {auth,setAuth} = useContext(AuthContext)
    
    const {role} = auth;
    const navigate = useNavigate();

    useEffect(() =>{
        setUserRole(role);
    },[role]); 

    

      const handleLogout = () => {
        localStorage.removeItem('auth');
        setAuth({});
        // navigate("/Main")
        console.log(auth);

      }

    return (
        <div>

            <div className="sidebar">
                <ul>
                    <li>
                        <a href="">
                            <i className=''><WindowsOutlined /></i>
                            <Link to="/Dashboard" element={Dashboard}>
                                <div style={{marginTop:"10px"}}>
                                    Dashboard
                                </div>
                            </Link>
                        </a>
                    </li>

                {/* {userRole === 'ROLE_ADMIN' &&(  */}
                    
                    <li>
                        <a href="">
                            <i className='fa fa-user-graduate'><TeamOutlined /></i>
                            <Link to="/Client" element={Client}>
                                <div style={{marginTop:"10px"}}>
                                    Clients
                                </div>
                            </Link>
                        </a>
                    </li>
                {/* ) }  */}

               
                    <li>
                        <a href="">
                            <i className='fa fa-chalkboard-teacher'><TeamOutlined /></i>
                            <Link to="/Teacher" element={Teacher}>
                                <div style={{marginTop:"10px"}}>
                                    Teachers List
                                </div>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className='fa fa-cog'></i>
                            <Link to="/ViewTeachersOnMap" element={ViewTeachersOnMap}>
                                <div style={{marginTop:"10px"}}>
                                View_On_Map
                                </div>
                            </Link>
                        </a>
                    </li>

                    {userRole === 'ROLE_ADMIN' &&( 
                        <>
                    <li>
                        <a href="">
                            <i className='fa fa-users'></i>
                            <Link to="/Admin" element={Admin}>
                                <div style={{marginTop:"10px"}}>
                                    Admins
                                </div>
                            </Link>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i className='fa fa-hand-holding-usd'><TeamOutlined /></i>
                            <Link to="/Total" element={Total}>
                                <div style={{marginTop:"10px"}}>
                                    Total Users
                                </div>
                            </Link>
                        </a>
                    </li>
                    </>
                ) } 

                    <li>
                        <a href="">
                            <i className='fa fa-cog'></i>
                            <Link to="/Settings" element={Settings}>
                                <div style={{marginTop:"10px"}}>
                                    Settings
                                </div>
                            </Link>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i className='fa fa-cog'></i>
                            <Link to="/Program" element={Settings}>
                                <div style={{marginTop:"10px"}}>
                                    Programs Lists
                                </div>
                            </Link>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i className='fa fa-cog'></i>
                            <Link to="/Order" element={Order}>
                                <div style={{marginTop:"10px"}}>
                                    Book Teacher
                                </div>
                            </Link>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <i className='fa fa-cog'></i>
                            <Link to="/Policy" element={Settings}>
                                <div style={{marginTop:"10px"}}>
                                    Policy
                                </div>
                            </Link>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i className='fa fa-question'></i>
                            <Link to="/Help" element={Help}>
                                <div style={{marginTop:"10px"}}>
                                    Help
                                </div>
                            </Link>
                        </a>
                    </li>

                    <li>
                        <a href="">
                            <i className='' style={{color:"red"}}><LogoutOutlined /></i>
                            <Link to="/Main" element={Main}>
                                 <span onClick={handleLogout} style={{marginTop:"10px"}} 
                                 >Signout
                                 </span>
                                 </Link>

                        </a>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Sidebar