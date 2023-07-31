import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Modal, ButtonToolbar } from 'rsuite';

export const UpdatePolicy = ({ policyId }) => {
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = value => {
        setSize(value);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const [policy_name, setPolicy_name] = useState('');
    const [policy_description, setPolicy_Description] = useState('');

    const Navigate = useNavigate();


    // Fetch
    const fetchDataUpdate = async () => {
        try {


            const headers = {
                Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
            };

            const response = await axios.get(`http://localhost:9093/api/Policy/getById/${policyId}`, { headers });
            setPolicy_name(response.data.policy_description);
            setPolicy_Description(response.data.policy_description);




        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataUpdate();
    }, [policyId]);
    // End of Fetch



    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare the form data
        const formData = {
            policy_name: policy_name,
            policy_description: policy_description

        };


        try {

            const headers = {
                Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
            };
            // Send the PUT request to the correct API URL
            const response = await axios.put(`http://localhost:9093/api/Policy/updatePolicy/${policyId}`, formData, { headers });

            // Handle the response
            console.log(response.data);
            setPolicy_name('');
            setPolicy_Description('');




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
                <span onClick={() => handleOpen('md')}>
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
                        <h3 style={{ textAlign: "center", color: "blue" }}>UPDATE POLICY</h3>

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
                                    <textarea style={{ height: "180px" }}
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
                                 onClick={handleSubmit}

                                    style={{ width: "100%", backgroundColor: "blue" }}
                                    class="btn btn-primary" type="submit">Submit form

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

export default UpdatePolicy;