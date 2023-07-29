import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Client from '../AdminPannel/Client';


function UserRegistration() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [roles, setRoles] = useState('');

    const [successMessage, setSuccessMessage] = useState('');
    const [usernameExistMessage, setUsernameExistMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();
        setFirstName('');
        setLastName('');
        setAge('');
        setUserName('');
        setPassword('');
        setAddress('');
        setGender('');
        setEmail('');
        setPhoneNumber('');
        setRoles('');

        const requestData = {
            firstName: firstName,
            lastName: lastName,
            age: age,
            userName: userName,
            password: password,
            address: address,
            gender: gender,
            email: email,
            phoneNumber: phoneNumber,
            roles: roles
        };

        const headers = {
            Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
        }





        axios.post('http://localhost:9093/api/User/add', requestData, { headers })


            .then(response => {
                setIsLoading(false);
                setSuccessMessage('User registered successfully.');
                setUsernameExistMessage('');
                setErrorMessage('');
                console.log(response.data);
                navigate("/Total")
            })
            .catch(error => {
                setIsLoading(false);
                if (error.response && error.response.status === 409) {
                    setUsernameExistMessage('Username already exists. Please choose a different username.');
                    setSuccessMessage('');
                    setErrorMessage('');
                } else {
                    setErrorMessage('Failed to register user. Please try again.');
                    setSuccessMessage('');
                    setUsernameExistMessage('');
                }
                console.error(error);
            });
    };




    return (
        <div>
            <h3 style={{ textAlign: "center", color: "blue" }}>USER REGISTRATION FORM</h3>
            {/* success message */}
            {successMessage && 
            <div className="alert alert-success" role="alert" style={{border:"1px"}}>{successMessage}
            
            </div>}

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
                    <label for="validationServerUsername" class="form-label">Password</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <input
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            placeholder="Password"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a Password.
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
                <div class="col-md-4">
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


                <div class="col-md-12">
                    <label for="validationServerUsername" class="form-label">Select Role</label>
                    <select
                        value={roles}
                        onChange={(e) => setRoles(e.target.value)}
                        class="form-select is-invalid" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                        <option selected disabled value="">Choose...</option>


                        <option value="ROLE_ADMIN">ROLE_ADMIN</option>
                        {/* <option value="client">ROLE_CLIENT</option>
                        <option value="teacher">ROLE_TEACHER</option> */}
                    </select>
                </div>

                

                {/* username exist message */}
                {usernameExistMessage && <div className="alert alert-danger" role="alert">{usernameExistMessage}</div>}

                {/* error message */}
                {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}




                <div class="col-12">
                    <button


                        style={{ width: "100%", backgroundColor: "blue" }}
                        class="btn btn-primary" type="submit"

                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                        ) : (
                            'Submit form'
                        )}
                        

                    </button>


                </div>
            </form>
        </div>
    )
}

export default UserRegistration