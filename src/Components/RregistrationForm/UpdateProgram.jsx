import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Modal, ButtonToolbar } from 'rsuite';

export const UpdateProgram = ({ programId }) => {
    const [open, setOpen] = React.useState(false);
    const [size, setSize] = React.useState();
    const handleOpen = value => {
        setSize(value);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

    const [program_name, setProgram_name] = useState('');
    const [duration, setDuration] = useState('');
    const [prerequisite, setPrerequisite] = useState('');
    const Navigate = useNavigate();


    // Fetch
    const fetchDataUpdate = async () => {
        try {


            const headers = {
                Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
            };

            const response = await axios.get(`http://localhost:9093/api/Program/getById/${programId}`, { headers });
            setProgram_name(response.data.program_name);
            setDuration(response.data.duration);
            setPrerequisite(response.data.prerequisite);




        } catch (error) {
            console.log('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchDataUpdate();
    }, [programId]);
    // End of Fetch



    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare the form data
        const formData = {
            program_name: program_name,
            duration: duration,
            prerequisite: prerequisite,

        };


        try {

            const headers = {
                Authorization: `Basic QWRtaW46QWRtaW4xMjM=`,
            };
            // Send the PUT request to the correct API URL
            const response = await axios.put(`http://localhost:9093/api/Program/updateProgram/${programId}`, formData, { headers });

            // Handle the response
            console.log(response.data);
            setProgram_name('');
            setDuration('');
            setPrerequisite('');




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
                        <h3 style={{ textAlign: "center", color: "blue" }}>UPDATE PROGRAM</h3>

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
                                    <textarea style={{ height: "100px", textAlign: "center" }}
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

export default UpdateProgram;