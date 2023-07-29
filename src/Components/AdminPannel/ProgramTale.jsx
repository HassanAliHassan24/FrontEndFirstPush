import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from 'antd';
import {useParams } from 'react-router-dom';
import AuthContext from '../../Context/AuthProvider';
import { useContext } from 'react';



export default function ProgramTable() {

  const { id } = useParams();


const [program, setProgram] = useState([]);

const [isDeleted, setIsDeleted] = useState(false);

const [selectedProgram, setSelectedProgram] = useState(null);

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
 const fetchProgram = async () => {
  try {

    const token = localStorage.getItem('token');

  // Include the access token in the request headers
  const headers = {
    Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
  };
    const response = await axios.get('http://localhost:9093/api/Program/getAll',{headers});

    setProgram(response.data)

  }
  catch (error) {
    console.log('error to fetch data', error)
  }
}

useEffect(() => {
  fetchProgram()
}, [])
 
 const handleViewProgram = (programId) => {
  if (selectedProgram && selectedProgram.id === programId) {
    setSelectedProgram(null);
  } else {
    const programs = program.find((programs) => programs.id === programId);
    setSelectedProgram(programs);
  }
};

const [userRole, setUserRole] = useState('');
  const {auth} = useContext(AuthContext)
  const {role} = auth;

  useEffect(() =>{
      setUserRole(role);
  },[role]);



  

  const columns = [
    { field: 'id', headerName: 'S/N', width: 130 },
    { field: 'program_name', headerName: 'Program name', width: 130 },
    { field: 'duration', headerName: 'Duration', width: 130 },
    { field: 'prerequisite', headerName: 'Prerequisite', width: 300 },
   



    {
      field: 'action', headerName: 'Action', width: 240, 
     renderCell: (params) => {
      return(
        <div className='cellAction'>

          <Button onClick={() => handleViewProgram(params.id)} style={{backgroundColor:"blue",color:"white"}} type='link' size='sm'>
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

    await axios.delete(`http://localhost:9093/api/Program/deleteProgram/${id}`,{headers});
    setIsDeleted(true);
    fetchProgram('');
  }catch (error){
    console.error(error);
  }

  if(isDeleted){
    return <p>Ite deleted successfuly.</p>;
  }
  
};



  return (
  <>

    {selectedProgram && (
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
                <span style={{fontSize:"2.3rem",color:"red"}}>Program Details</span>
                <div style={{fontSize:"15px",marginTop:"1rem"}} className="row">
                  <div  className="col-md-3">
    
                    <p>Program Name: {selectedProgram.program_name}</p>
                  
                     
                      </div>
    
                      <div className="col-md-3">
                      <p>Duration: {selectedProgram.duration}</p>
                     
                      
                      </div>


                      <div className="col-md-3">
                        <p>Prerequisite: {selectedProgram.prerequisite}</p>
                        
                      
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
        rows={program}
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