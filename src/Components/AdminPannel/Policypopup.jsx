import { Modal, ButtonToolbar, Button, Placeholder } from 'rsuite';
import React from 'react';
import CreatePolicy from '../RregistrationForm/CreatePolicy';



const Policypopup = () => {
  const [open, setOpen] = React.useState(false);
  const [size, setSize] = React.useState();
  const handleOpen = value => {
    setSize(value);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <ButtonToolbar>
        
      
    
        <Button style={{position:"absolute", top:"0.9rem",marginLeft:"55rem",backgroundColor:"darkblue",color:"white",width:"15%"}} size="md" onClick={() => handleOpen('md')}>
          Create Pilicy
        </Button>
       
      </ButtonToolbar>
      <Modal size={size} open={open} onClose={handleClose}>
        <Modal.Header>
          <Modal.Title>
            {/* <ClientEdit/> */}
            <CreatePolicy/>
          </Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>
          <Placeholder.Paragraph />
        </Modal.Body> */}
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Policypopup;