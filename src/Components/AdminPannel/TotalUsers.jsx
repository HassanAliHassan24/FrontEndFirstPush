import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { Button } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ClientPopup from './ClientPoup';
import View from '../RregistrationForm/View';
import ClientEdit from '../RregistrationForm/ClientEdit';


export default function TotalUsers() {


  const { id } = useParams();

  const [user, setUser] = useState([])
  const [isDeleted, setIsDeleted] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);


  const fetchUser = async () => {

    const token = localStorage.getItem('token');

    // Include the access token in the request headers
    const headers = {
      Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
    };
    try {
      const response = await axios.get('http://localhost:9093/api/User/getAll',{headers});

      setUser(response.data)

    }
    catch (error) {
      console.log('error to fetch data', error)
    }
  }

  useEffect(() => {
    fetchUser()
  }, [])



  // Toggle Visibility of Client details block
  const handleViewUser = (userId) => {
    if (selectedUser && selectedUser.id === userId) {
      setSelectedUser(null);
    } else {
      const users = user.find((users) => users.id === userId);
      setSelectedUser(users);
    }
  };




  const columns = [
    { field: 'id', headerName: 'S/N', width: 30 },
    { field: 'firstName', headerName: 'First name', width: 80 },
    { field: 'lastName', headerName: 'Last name', width: 80 },
    { field: 'userName', headerName: 'User name', width: 80 },

    { field: 'address', headerName: 'Address', width: 80 },
    { field: 'gender', headerName: 'Gender', headerName: 'Gender', width: 80 },
    { field: 'phoneNumber', headerName: 'Phone number', width: 110 },
    // { field: 'password', headerName: 'Password', width: 80 },






    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 60,

    },
    { field: 'roles', headerName: 'Role', width: 130 },





    {
      field: 'action', headerName: 'Action', width: 240,
      renderCell: (params) => {


        return (

          <div className='cellAction'>


            <Button  onClick={() => handleViewUser(params.id)} style={{ backgroundColor: "blue", color: "white" }} type='link' size='sm'>
              View
            </Button>

            <Button onClick={() => handleDelete(params.id)} style={{ backgroundColor: "red", color: "white", margin: "5px" }}>
              Delete
            </Button>


            <Link to="/Help">  <Button style={{ backgroundColor: "green", color: "white" }} type=''>

              Update
            </Button>
            </Link>


          </div>
        );
      },

    },
   

  ];





  const handleDelete = async (id) => {
    try {

      const token = localStorage.getItem('token');

    // Include the access token in the request headers
    const headers = {
      Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
    };

      await axios.delete(`http://localhost:9093/api/User/deleteUser/${id}`,{headers});
      setIsDeleted(true);
      fetchUser();
    } catch (error) {
      console.error(error);
    }

    if (isDeleted) {
      return <p>Ite deleted successfuly.</p>;
    }

  };





  return (
    <>

{selectedUser && (
    <div
     style={{padding:"1rem",
     border:"",
     width:"100%",borderRadius:"8px",
     backgroundColor:"white",color:"black",
     fontSize:"3rem",
     boxShadow: "0 7px 25px 0 rgb(0, 0, 0)"
     }} className="userdetails">
      <div className="top-single">
        <div className="left">
        
          <div className="right">
            <span style={{fontSize:"2.3rem",color:"red"}}>User Details</span>
            <div style={{fontSize:"15px",marginTop:"1rem"}} className="row">
              <div  className="col-md-3">

                <p>First Name: {selectedUser.firstName}</p>
                <p>Last Name: {selectedUser.lastName}</p>
                <p>User Name: {selectedUser.userName}</p>
                 
                  </div>

                  <div className="col-md-3">
                  <p>Gender: {selectedUser.gender}</p>
                  <p>Phone Number: {selectedUser.phoneNumber}</p>
                  <p>Address: {selectedUser.address}</p>
                  
                  </div>
                  <div className="col-md-3">
                  <p>Password: {selectedUser.password}</p>
                  <p>Role: {selectedUser.roles}</p>

                  
                  </div>
                {/* <div className="edit-d-flex justify-content-end">
                  <Button style={{backgroundColor:"green"}} type='link' size='sm'>
                    Update

                  </Button>
                </div> */}

                  </div>
                  
              </div>
            </div>
          </div>
        </div>
      
    
  )}

      <div style={{ height: 470, width: '100%',
     marginTop: "0.5rem", 
      backgroundColor: 'white', color: '', 
      marginLeft: "0", marginRight: "0",
      boxShadow: "0 7px 25px 0 rgb(0, 0, 0)" }}>
        <DataGrid
          rows={user}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5,10]}
        // checkboxSelection
        />
      </div>
    </>


  );
}

