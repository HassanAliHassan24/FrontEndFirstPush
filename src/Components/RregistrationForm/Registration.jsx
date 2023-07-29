import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import RegistratioTab from '../RregistrationForm/RegistratioTab';

const Registration = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button style={{ marginRight: '5px',height:'35px' }} className="bg-info text-light"  variant="outlined"  onClick={() => setOpen(true)}>
        SIGN UP
      </Button>
      <Modal style={{marginTop:"60px", marginBottom:"150px"}}
        title=""
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
        // height={250}
        
        
      >
        <RegistratioTab/>
      </Modal>
    </>
  );
};

export default Registration;





 {/* <Button style={{ marginRight: '5px' }} className='bton text-light bg-info text-light outline-light' variant="outlined" onClick={handleClickOpen}>
                SIGN UP
            </Button>  */}