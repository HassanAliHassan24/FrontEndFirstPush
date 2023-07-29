import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Client from '../AdminPannel/Client';


function CreatePolicy() {
    const [policy_name, setPolicy_name] = useState('');
    const [policy_description, setPolicy_Description] = useState('');
    
  
    

    

    // const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();
        setPolicy_name('');
        setPolicy_Description('');
        

        const requestData = {
            policy_name: policy_name,
            policy_description: policy_description,
            
        };

       const headers = {
        Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
       }


        axios.post('http://localhost:9093/api/Policy/add', requestData,{headers})
        

            .then(response => {
                console.log("successfull added"); 

                console.log(response.data);
                // navigate("/Client")
            })
            .catch(error => {
                console.error(error);
            });
    };




    return (
        <div>
            <h3 style={{ textAlign: "center", color: "blue" }}>ADD PROGRAM</h3>

            <form style={{ overflow: "auto", scrollBehavior: "smooth", height: "auto" }} onSubmit={handleSubmit} class="row g-3">



                <div class="col-md-12">
                    <label for="validationServerUsername" class="form-label">Program Name</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <input
                            type="text"
                            value={policy_name}
                            onChange={event => setPolicy_name(event.target.value)}
                            placeholder="Policy Name"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a Policy Name.
                        </div>
                    </div>
                </div>
                
                <div class="col-md-12">
                    <label for="validationServerUsername" class="form-label">Policy Description</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <textarea style={{height:"180px"}}
                            type="text"
                            value={policy_description}
                            onChange={event => setPolicy_Description(event.target.value)}
                            placeholder="Policy Description"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a Policy Decription
                        </div>
                    </div>
                </div>
                             


                <div class="col-12">
                   <button


                        style={{ width: "100%", backgroundColor: "blue" }}
                        class="btn btn-primary" type="submit">Submit form
                       
                        </button>
                     
                        
                </div>
            </form>
        </div>
    )
}

export default CreatePolicy