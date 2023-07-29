import React from 'react'
import './UserInterface.css';
import { Link } from 'react-router-dom';
import Teacher from '../../AdminPannel/Teacher';
import Client from '../../AdminPannel/Client';
import Admin from '../../AdminPannel/Admin';
import Total from '../../AdminPannel/Total';



function MenuRouting() {
    return (
        <div >
            <div className="main-part  d-flex" style={{ flexWrap: "wrap" }}>
                <Link to="/Client" element={Client}>

                    <div className="cad">
                        <div className="carrd">
                            <div className="card-content">
                                <div className="number">00</div>

                                <div className="card-name">Clients</div>
                            </div>
                            <div className="icon-box">
                                <i className='fa fa-users'></i>
                            </div>
                        </div>
                    </div>
                </Link>


                <Link to="/Teacher" element={Teacher}>
                    <div className="cad">
                        <div className="carrd">
                            <div className="card-content">
                                <div className="number">00</div>

                                <div className="card-name">Teachers</div>
                            </div>
                            <div className="icon-box">
                                <i className='fa fa-users'></i>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link to="/Admin" element={Admin}>

                    <div className="cad">
                        <div className="carrd">
                            <div className="card-content">
                                <div className="number">00</div>

                                <div className="card-name">Admin</div>
                            </div>
                            <div className="icon-box">
                                <i className='fa fa-users'></i>
                            </div>
                        </div>
                    </div>
                </Link>
                

                <Link to="/Total" element={Total}>

                    <div className="cad">
                        <div className="carrd">
                            <div className="card-content">
                                <div className="number">00</div>

                                <div className="card-name">Total</div>
                            </div>
                            <div className="icon-box">
                                <i className='fa fa-users'></i>
                            </div>
                        </div>
                    </div>
                </Link>


            </div>
        </div>
    )
}

export default MenuRouting