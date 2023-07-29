import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'antd';
import {useParams } from 'react-router-dom';
import AuthContext from '../../Context/AuthProvider';
import { useContext } from 'react';



export default function TeacherTable() {

  const { id } = useParams();


const [teacher, setTeacher] = useState([]);

const [isDeleted, setIsDeleted] = useState(false);

const [selectedTeacher, setSelectedTeacher] = useState(null);

// const fetchTeacher = async () =>{
//   try {

//     const token = localStorage.getItem('token');

//     // Include the access token in the request headers
//     const headers = {
//       Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
//     };
//     const response = await axios.get('http://localhost:9093/api/Teacher/getAll',{headers})
    

//     setTeacher(response.data)
//     console.log(response.data);
//     fetchTeacher('');
//   }
//   catch(error){
//     console.log('error tto fetch data', error)
//   }
// }

// useEffect(()=>{
//   fetchTeacher()
// },[])


 // Toggle Visibility of Client details block
 const fetchTeacher = async () => {
  try {

    const token = localStorage.getItem('token');

  // Include the access token in the request headers
  const headers = {
    Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
  };
    const response = await axios.get('http://localhost:9093/api/Teacher/getAll',{headers});

    setTeacher(response.data)

  }
  catch (error) {
    console.log('error to fetch data', error)
  }
}

useEffect(() => {
  fetchTeacher()
}, [])
 
 const handleViewTeacher = (teacherId) => {
  if (selectedTeacher && selectedTeacher.id === teacherId) {
    setSelectedTeacher(null);
  } else {
    const teachers = teacher.find((teachers) => teachers.id === teacherId);
    setSelectedTeacher(teachers);
  }
};

const [userRole, setUserRole] = useState('');
  const {auth} = useContext(AuthContext)
  const {role} = auth;

  useEffect(() =>{
      setUserRole(role);
  },[role]);



  

  const columns = [
    { field: 'id', headerName: 'S/N', width: 20 },
    { field: 'firstName', headerName: 'First name', width: 80 },
    { field: 'lastName', headerName: 'Last name', width: 80 },
    { field: 'userName', headerName: 'User name', width: 80 },
    { field: 'address', headerName: 'Address', width: 70 },
    { field: 'gender', headerName: 'Gender', width: 70 },
    { field: 'phoneNumber', headerName: 'Phone number', width: 110 },
    // { field: 'password', headerName: 'Password', width: 80 },
    { field: 'service_type', headerName: 'Service Type', width: 80 },
    { field: 'education_level', headerName: 'Education Level', width: 80 },
    { field: 'certificate_released_date', headerName: 'Certificate Released Date', width: 80 },
    




    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 50,
    },



    {
      field: 'action', headerName: 'Action', width: 240, 
     renderCell: (params) => {
      return(
        <div className='cellAction'>

          <Button onClick={() => handleViewTeacher(params.id)} style={{backgroundColor:"blue",color:"white"}} type='link' size='sm'>
            View
          </Button>
                      

          {userRole === "ROLE_ADMIN" &&(
            <>
          <Button  onClick={() => handleDelete (params.id)} style={{backgroundColor:"red",color:"white",margin:"5px"}}>
            Delete
          </Button>

          <Button style={{backgroundColor:"green",color:"white"}} type=''>
            Update
          </Button>

          </>
          )}

        </div>
      );
    },
  

    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params) =>
    //     `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    // },
  ];









const handleDelete = async (id) => {
  try{

    const token = localStorage.getItem('token');

    // Include the access token in the request headers
    const headers = {
      Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
    };

    await axios.delete(`http://localhost:9093/api/Teacher/deleteTeacher/${id}`,{headers});
    setIsDeleted(true);
    fetchTeacher('');
  }catch (error){
    console.error(error);
  }

  if(isDeleted){
    return <p>Ite deleted successfuly.</p>;
  }
  
};



  return (
  <>

    {selectedTeacher && (
        <div
         style={{
        padding:"1rem",
         border:"",
         width:"94%",borderRadius:"8px",
         backgroundColor:"white",color:"black",
         fontSize:"3rem",
         boxShadow: "0 7px 25px 0 rgb(0, 0, 0)"
         }} className="userdetails">
          <div className="top-single">
            <div className="left">
            
              <div className="right">
                <span style={{fontSize:"2.3rem",color:"red"}}>Teacher Details</span>
                <div style={{fontSize:"15px",marginTop:"1rem"}} className="row">
                  <div  className="col-md-3">
    
                    <p>First Name: {selectedTeacher.firstName}</p>
                    <p>Last Name: {selectedTeacher.lastName}</p>
                    <p>User Name: {selectedTeacher.userName}</p>
                     
                      </div>
    
                      <div className="col-md-3">
                      <p>Gender: {selectedTeacher.gender}</p>
                      <p>Phone Number: {selectedTeacher.phoneNumber}</p>
                      <p>Address: {selectedTeacher.address}</p>
                      
                      </div>


                      <div className="col-md-3">
                        <p>Service Type: {selectedTeacher.service_type}</p>
                        <p>Certificate Released Date: {selectedTeacher.certificate_released_date}</p>
                      <p>Education Level: {selectedTeacher.education_level}</p>
                      <p>Password: {selectedTeacher.password}</p>
                      
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
    


    <div style={{ height: 425, 
    width: '95%', 
   marginTop: "1.7rem",  
   backgroundColor: 'white', 
   color: '', marginLeft: "0", 
   marginRight: "0",
   boxShadow: "0 7px 25px 0 rgb(0, 0, 0)"
   }}>
      <DataGrid
        rows={teacher}
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

    </>
  );
}