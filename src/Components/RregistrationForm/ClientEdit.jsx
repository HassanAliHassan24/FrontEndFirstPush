import React from 'react'
import axios from 'axios'
import { useState } from 'react'
function ClientEdit() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [age, setAge] = useState('');
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [status, setStatus] = useState('');

    
    // const navigate = useNavigate();


   
        // const[formData, setFormData] = useState({
        //     firstName: '',
        //     lastName: '',
        //     age: '',
        //     userName: '',
        //     password: '',
        //     address: '',
        //     gender: '',
        //     email: '',
        //     phoneNumber: '',
        //     status: '' 
        // });

        // const handleChange = (event) => {
        //     setFormData({
        //          ...formData,
        //         [event.target.name]: event.target.value,
        //     });
        // };

        const handleSubmit = async (e) => {
            e.preventDefault();
            try{
                const endpoint = `http://localhost:9091/api/Client/updateClient/56`

                const response = await axios.put(endpoint,{
                    id:56,
                    firstName,
                    lastName,
                    age,
                    userName,
                    password,
                    address,
                    gender,
                    email,phoneNumber,
                    status
                });

                console.log(response.data);
            }catch(error) {
                console.error(error);
            }
        };
    



    return (
        <div>
            <h3 style={{ textAlign: "center", color: "blue" }}>CLIENT REGISTRATION FORM</h3>

            <form onSubmit={handleSubmit} class="row g-3">



                <div class="col-md-4">
                    <label for="validationServerUsername" class="form-label">First Name</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
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
                            onChange={(e) => setLastName(e.target.value)}
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
                            onChange={(e) => setAge(e.target.value)}
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
                            onChange={(e) => setUserName(e.target.value)}
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
                            onChange={(e) => setPassword(e.target.value)}
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
                            onChange={(e) => setAddress(e.target.value)}
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
                        onChange={(e) => setEmail(e.target.value)}
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
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            placeholder="PhoneNumber"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a Phone Number.
                        </div>
                    </div>
                </div>

                <div class="col-md-12">
                    <label for="validationServerUsername" class="form-label">Status</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <input
                            type="text"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            placeholder="Status"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a Status.
                        </div>
                    </div>
                </div>


                <div class="col-12">
                    <button
                        style={{ width: "100%", backgroundColor: "green" }}
                        class="btn btn-primary" type="submit">Submit form</button>

                </div>
            </form>
        </div>
    )
}

export default ClientEdit