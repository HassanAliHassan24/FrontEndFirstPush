import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Modal, ButtonToolbar } from 'rsuite';

export const UpdateUser = ({ uId }) => {
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
    
    const Navigate = useNavigate();


    // Fetch
    const fetchDataUpdate = async () => {
        try {


            const headers = {
                Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
              };

            const response = await axios.get(`http://localhost:9093/api/User/getById/${uId}`,{headers});
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setAge(response.data.age);
            setUserName(response.data.userName);
            setAddress(response.data.address);
            setGender(response.data.gender);
            setEmail(response.data.email);
            setPhoneNumber(response.data.phoneNumber);
           
            
           
        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataUpdate();
    }, [uId]);
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
           
        };
      

        try {

            const headers = {
                Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
              };
            // Send the PUT request to the correct API URL
            const response = await axios.put(`http://localhost:9093/api/User/updateUser/${uId}`, formData,  {headers});

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
            <h3 style={{ textAlign: "center", color: "blue" }}>UPDATE USER</h3>
           

            <form style={{ overflow: "auto", scrollBehavior: "smooth", height: "auto" }} onSubmit={handleSubmit} class="row g-3">



                <div class="col-md-4">
                    <label for="validationServerUsername" class="form-label">First Name</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <input
                            type="text"
                            value={firstName}
                            onChange={event => setFirstName(event.target.value)}
                            placeholder="FirstName"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
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
                            type="text"
                            value={lastName}
                            onChange={event => setLastName(event.target.value)}
                            placeholder="LastName"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
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
                            type="number    "
                            value={age}
                            onChange={event => setAge(event.target.value)}
                            placeholder="Age"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a Age.
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationServerUsername" class="form-label">Username</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <input
                            type="text"
                            value={userName}
                            onChange={event => setUserName(event.target.value)}
                            placeholder="UserName"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a username.
                        </div>
                    </div>
                </div>
               
                <div class="col-md-4">
                    <label for="validationServerUsername" class="form-label">Address</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <input
                            type="text"
                            value={address}
                            onChange={event => setAddress(event.target.value)}
                            placeholder="Address"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
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
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div class="col-md-4">
                    <label for="validationServer03" class="form-label">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        placeholder="Email"
                        class="form-control is-invalid" id="validationServer03" aria-describedby="validationServer03Feedback" required />
                    <div id="validationServer03Feedback" class="invalid-feedback">
                        Please provide a your Email.
                    </div>
                </div>
                <div class="col-md-8">
                    <label for="validationServerUsername" class="form-label">Phone Number</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <input
                            type="number"
                            value={phoneNumber}
                            onChange={event => setPhoneNumber(event.target.value)}
                            placeholder="PhoneNumber"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a Phone Number.
                        </div>
                    </div>
                </div>


                {/* <div class="col-md-12">
                    <label for="validationServerUsername" class="form-label">Select Role</label>
                    <select
                        value={roles}
                        onChange={(e) => setRoles(e.target.value)}
                        class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                        <option selected disabled value="">Choose...</option>


                        <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                        <option value="client">ROLE_CLIENT</option>
                        <option value="teacher">ROLE_TEACHER</option>
                    </select>
                </div> */}

                

                


                <div class="col-12">
                    <button
                             onClick={handleSubmit}



                        style={{ width: "100%", backgroundColor: "blue" }}
                        class="btn btn-primary" type="submit"

                       
                    >
                       Submit                       

                    </button>


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

export default UpdateUser;