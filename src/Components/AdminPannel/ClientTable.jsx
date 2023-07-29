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
import AuthContext from '../../Context/AuthProvider';
import { useContext } from 'react';
import UpdateClient from '../RregistrationForm/UpdateClient';


export default function ClientTable() {


  const { id } = useParams();

  const [client, setClient] = useState([])
  const [isDeleted, setIsDeleted] = useState(false);
  const [selectedClient, setSelectedClient] = useState(null);


  const fetchClient = async () => {
    try {

      const token = localStorage.getItem('token');

    // Include the access token in the request headers
    const headers = {
      Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
    };
      const response = await axios.get('http://localhost:9093/api/Client/getAll',{headers});

      setClient(response.data)

    }
    catch (error) {
      console.log('error to fetch data', error)
    }
  }

  useEffect(() => {
    fetchClient()
  }, [])



  // Toggle Visibility of Client details block
  const handleViewClient = (clientId) => {
    if (selectedClient && selectedClient.id === clientId) {
      setSelectedClient(null);
    } else {
      const clients = client.find((clients) => clients.id === clientId);
      setSelectedClient(clients);
    }
  };


  const [userRole, setUserRole] = useState('');
    const {auth} = useContext(AuthContext)
    const {role} = auth;

    useEffect(() =>{
        setUserRole(role);
    },[role]);



  const columns = [
    { field: 'id', headerName: 'S/N', width: 30 },
    { field: 'firstName', headerName: 'First name', width: 80 },
    { field: 'lastName', headerName: 'Last name', width: 80 },
    { field: 'userName', headerName: 'User name', width: 80 },
    { field: 'address', headerName: 'Address', width: 80 },
    { field: 'gender', headerName: 'Gender', headerName: 'Gender', width: 80 },
    { field: 'phoneNumber', headerName: 'Phone number', width: 110 },
    // { field: 'password', headerName: 'Password', width: 90 },
    { field: 'status', headerName: 'Status', width: 80 },





    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 60,

    },




    {
      field: 'action', headerName: 'Action', width: 300,
      renderCell: (params) => {


    


        return (

          <div className='cellAction'>
             

            <Button onClick={() => handleViewClient(params.id)} style={{ backgroundColor: "blue", color: "white" }} type='link' size='sm'>
              View
            </Button>

            {userRole === "ROLE_ADMIN" &&(
              <>
            <Button onClick={() => handleDelete(params.id)} style={{ backgroundColor: "red", color: "white", margin: "5px" }}>
              Delete
            </Button>


             <Button style={{ backgroundColor: "green", color: "white" }} type=''>

              <UpdateClient
              clientId={params.id}
              />
            </Button>
            
            </>

               )}


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

      await axios.delete(`http://localhost:9093/api/Client/deleteClient/${id}`,{headers});
      setIsDeleted(true);
      fetchClient();
    } catch (error) {
      console.error(error);
    }

    if (isDeleted) {
      return <p>Ite deleted successfuly.</p>;
    }

  };





  return (
    <div>

{selectedClient && (
    <div
     style={{
    padding:"1rem",
     border:"",
     width:"100%",borderRadius:"10px",
     backgroundColor:"white",color:"black",
     fontSize:"3rem",
     boxShadow: "0 7px 25px 0 rgb(0, 0, 0)"
     }} className="userdetails">
      <div className="top-single">
        <div className="left">
        
          <div className="right">
            <span style={{fontSize:"2.3rem",color:"red"}}>Client Details</span>
            <div style={{fontSize:"15px",marginTop:"1rem"}} className="row">
              <div  className="col-md-3">

                <p>First Name: {selectedClient.firstName}</p>
                <p>Last Name: {selectedClient.lastName}</p>
                <p>User Name: {selectedClient.userName}</p>
                 
                  </div>

                  <div className="col-md-3">
                  <p>Gender: {selectedClient.gender}</p>
                  <p>Phone Number: {selectedClient.phoneNumber}</p>
                  <p>Address: {selectedClient.address}</p>
                  
                  </div>
                  <div className="col-md-3">
                  <p>Status: {selectedClient.status}</p>
                  <p>Password: {selectedClient.password}</p>
                  
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

      <div style={{ 
      height: 465, width: '100%', 
      marginTop: "2rem", 
      backgroundColor: 'white', color: '', 
      marginLeft: "0", marginRight: "0",
      boxShadow: "0 7px 25px 0 rgb(0, 0, 0)"
      }}>
        <DataGrid
          rows={client}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        // checkboxSelection
        />
      </div>
    </div>


  );
}

