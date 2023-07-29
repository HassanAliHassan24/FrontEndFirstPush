import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Client from '../AdminPannel/Client';


function AddProgram() {
    const [program_name, setProgram_name] = useState('');
    const [duration, setDuration] = useState('');
    const [prerequisite, setPrerequisite] = useState('');
  
    

    

    // const navigate = useNavigate();



    const handleSubmit = (event) => {
        event.preventDefault();
        setProgram_name('');
        setDuration('');
        setPrerequisite('');
        

        const requestData = {
            program_name: program_name,
            duration: duration,
            prerequisite: prerequisite,
            
        };

       const headers = {
        Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
       }


        axios.post('http://localhost:9093/api/Program/add', requestData,{headers})
        

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



                <div class="col-md-6">
                    <label for="validationServerUsername" class="form-label">Program Name</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <input
                            type="text"
                            value={program_name}
                            onChange={event => setProgram_name(event.target.value)}
                            placeholder="Program Name"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a Program Name.
                        </div>
                    </div>
                </div>
                
                <div class="col-md-6">
                    <label for="validationServerUsername" class="form-label">Duration</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <input
                            type="text"
                            value={duration}
                            onChange={event => setDuration(event.target.value)}
                            placeholder="Duration"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a Duration.
                        </div>
                    </div>
                </div>
                <div class="col-md-12">
                    <label for="validationServerUsername" class="form-label">Prerequisite</label>
                    <div class="input-group has-validation">
                        {/* <span class="input-group-text" id="inputGroupPrepend3">@</span> */}
                        <textarea style={{height:"100px",textAlign:"center"}}
                            type="text"
                            value={prerequisite}
                            onChange={event => setPrerequisite(event.target.value)}
                            placeholder="Prerequisite"
                            class="form-control is-invalid" id="validationServerUsername" aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback" required />
                        <div id="validationServerUsernameFeedback" class="invalid-feedback">
                            Please choose a Prerequisite.
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

export default AddProgram