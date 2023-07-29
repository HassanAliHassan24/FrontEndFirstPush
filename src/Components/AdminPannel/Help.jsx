import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../MainInteface/UserInterface/Sidebar'
import Topbar from '../MainInteface/UserInterface/Topbar'
import ClientView from '../RregistrationForm/ClientView'
import View from '../RregistrationForm/View'
import ClientPopup from './ClientPoup'


function Help() {

  const[client, setClient] = useState({
       

        firstName: "",
        lastName: "",
        age: "",
        userName: "",
        password: "",
        address: "",
        gender: "",
        email: "",
        phoneNumber: "",
  })
  const {id} = useParams();
  const{firstName, lastName, age, userName, password, address,gender, email, phoneNumber, status} =client;
  useEffect(() => {
    loadClient()
  }, []);

  const loadClient = async () => {
    const fetch = await axios.get(`http://localhost:9091/api/Client/getById/${id}`)
    setClient(fetch.data)
  }
  return (
    <>
    <div className="cover-dashboard">
    
     <Topbar/>
     <Sidebar/>
     
     <div className="main-part">
       <>
       <div>
            <h3 style={{ textAlign: "center", color: "blue" }}>CLIENT REGISTRATION FORM</h3>

            <form class="row g-3">



                <div class="col-md-4">
                    <label for="validationServerUsername" class="form-label">First Name</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <input
                            type="text"
                            value={firstName}
                            // onChange={event => setFirstName(event.target.value)}
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
                            // onChange={event => setLastName(event.target.value)}
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
                            // onChange={event => setAge(event.target.value)}
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
                            // onChange={event => setUserName(event.target.value)}
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
                            // onChange={event => setPassword(event.target.value)}
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
                            // onChange={event => setAddress(event.target.value)}
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
                        // onChange={(e) => setGender(e.target.value)}
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
                        // onChange={event => setEmail(event.target.value)}
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
                            // onChange={event => setPhoneNumber(event.target.value)}
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
                            // onChange={event => setStatus(event.target.value)}
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
                        class="btn btn-primary" type="submit">Submit form
                       
                        </button>
                        
                </div>
            </form>
        </div>
       </>
      </div>
      
    </div>      
  </>
  )
}

export default Help