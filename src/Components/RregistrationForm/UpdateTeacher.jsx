import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Modal, ButtonToolbar } from 'rsuite';

export const UpdateTeacher = ({ teacherId }) => {
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = value => {
        setSize(value);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [userName, setUserName] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [service_type,setServiceType] = useState('');
    const [education_level, setEducationLevel] = useState('');
   const  [certificate_released_date, setCertificateReleasedDate] = useState('');

    const Navigate = useNavigate();


    // Fetch
    const fetchDataUpdate = async () => {
        try {


            const headers = {
                Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
              };

            const response = await axios.get(`http://localhost:9093/api/Teacher/getById/${teacherId}`,{headers});
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setAge(response.data.age);
            setUserName(response.data.userName);
            setAddress(response.data.address);
            setGender(response.data.gender);
            setEmail(response.data.email);
            setPhoneNumber(response.data.phoneNumber);
            setServiceType(response.data.service_type);
            setEducationLevel(response.data.education_level);
            setCertificateReleasedDate(response.data.certificate_released_date);

            
           
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataUpdate();
    }, [teacherId]);
    // End of Fetch

   

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare the form data
        const formData = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            userName: userName,
            address: address,
            gender: gender,
            email: email,
            phoneNumber: phoneNumber,
            service_type: service_type,
            certificate_released_date:certificate_released_date,
            education_level: education_level,
        };
      

        try {

            const headers = {
                Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
              };
            // Send the PUT request to the correct API URL
            const response = await axios.put(`http://localhost:9093/api/Teacher/updateTeacher/${teacherId}`, formData,  {headers});

            // Handle the response
            console.log(response.data);
            setFirstName('');
            setLastName('');
            setAge('');
            setUserName('');
            setAddress('');
            setGender('');
            setEmail('');
            setPhoneNumber('');
            setEducationLevel('');
            setCertificateReleasedDate('');
            setServiceType('');

          

            // Update fetched data
            fetchDataUpdate();
            handleClose()
        } catch (error) {
            // Handle the error
            console.error(error);
        }
    };

    return (
        <>
            <ButtonToolbar>
                <span  onClick={() => handleOpen('md')}>
                    Update
                </span>
            </ButtonToolbar>
            <Modal size={size} open={open} onClose={handleClose}>
                <Modal.Header>
                    <Modal.Title>Update Service</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* start form */}


        <div>

<form onSubmit={handleSubmit} style={{ overflow: "auto", scrollBehavior: "smooth", height: "auto",width:"100%",border:"2px solid darkblue",borderRadius:"10px",boxShadow: "0 7px 25px 0 rgb(0, 0, 0)", paddingBottom:"15px"}} class="row g-3">
    <h3 style={{ textAlign: "center", color: "blue" }}>UPDATE TEACHER</h3>

    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">First Name</label>
        <div class="input-group has-validation">
            {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
            <input
            value={firstName}
            onChange={event => setFirstName(event.target.value)} 
            type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a First Name.
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Last Name</label>
        <div class="input-group has-validation">
            {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
            <input 
             value={lastName}
             onChange={event => setLastName(event.target.value)}
            type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a Last Name.
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Age</label>
        <div class="input-group has-validation">
            {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
            <input 
            value={age}
            onChange={event => setAge(event.target.value)}
            type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a Age.
            </div>
        </div>
    </div>
   
    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Address</label>
        <div class="input-group has-validation">
            {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
            <input 
             value={address}
             onChange={event => setAddress(event.target.value)}
            type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a Address.
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Select Gender</label>
        <select 
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
            <option selected disabled value="">Choose...</option>


            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
        </select>
    </div>
    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Phone Number</label>
        <div class="input-group has-validation">
            {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
            <input
             value={phoneNumber}
             onChange={event => setPhoneNumber(event.target.value)}
            type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a Phone Number.
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Username</label>
        <div class="input-group has-validation">
            {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
            <input 
             value={userName}
             onChange={event => setUserName(event.target.value)}
            type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a username.
            </div>
        </div>
    </div>
    {/* <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Password</label>
        <div class="input-group has-validation">
            <input 
            value={password}
            onChange={event => setPassword(event.target.value)}
            type="password" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a Password.
            </div>
        </div>
    </div> */}
    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Service Type</label>
        <div class="input-group has-validation">
            {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
            <input 
             value={service_type}
             onChange={event => setServiceType(event.target.value)}
            type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a Service Type.
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Email</label>
        <div class="input-group has-validation">
            {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
            <input 
            value={email}
            onChange={event => setEmail(event.target.value)}
            type="email" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a Email.
            </div>
        </div>

    </div>
    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Education Level</label>
        <div class="input-group has-validation">
            {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
            <input 
             value={education_level}
             onChange={event => setEducationLevel(event.target.value)}
            type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a Education Level.
            </div>
        </div>
    </div>
   

   
    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Certificate Released Date</label>
        <div class="input-group has-validation">
            {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
            <input 
             value={certificate_released_date}
             onChange={event => setCertificateReleasedDate(event.target.value)}
            type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a Certificate Released Date.
            </div>
        </div>
    </div>
{/* 
    <div class="col-md-12">
        <label for="validationServer03" class="form-label">Location</label>
        <input 
        
        
        type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
        <div id="validationServer03Feedback" class="invalid-feedback">
            Please provide a valid Location.
        </div>
    </div> */}

    {/* <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Certificate Type</label>
        <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">@</span>
            <input type="file" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a Certificate Type.
            </div>
        </div>
    </div>
    <hr />
    <span style={{ color: "gray", font: "bold" }}>Programs</span>
    <hr />

    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Choose Program (Option One)</label>
        <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">@</span>
            <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose a Program.
            </div>
        </div>
    </div>
    <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Choose Program (Option Two)</label>
        <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">@</span>
            <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose Aanother Program.
            </div>
        </div>
    </div> */}

    {/* <div class="col-md-4">
        <label for="validationServerUsername" class="form-label">Choose Program (Option Three)</label>
        <div class="input-group has-validation">
            <span class="input-group-text" id="inputGroupPrepend3">@</span>
            <input type="text" class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
            <div id="validationServerUsernameFeedback" class="invalid-feedback">
                Please choose Aanother Program.
            </div>
        </div>
    </div>
    <hr />
    <span style={{ color: "gray", font: "bold" }}>Location</span>
    <hr /> */}
{/* 
    <div class="col-md-12">
        <label for="validationServer03" class="form-label">Location</label>
        <input type="text" class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
        <div id="validationServer03Feedback" class="invalid-feedback">
            Please provide a valid Location.
        </div>
    </div> */}



    <div class="col-12">
        <button
         onClick={handleSubmit}
        
        style={{ backgroundColor: "blue", width: "100%", cursor: "pointer" }} class="btn btn-primary" type="submit">Submit form</button>
    </div>
</form>
</div>
        

                    {/* end form */}
                </Modal.Body>
                <Modal.Footer>
                    {/* <Button  >
                        Submit
                    </Button> */}
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default UpdateTeacher;