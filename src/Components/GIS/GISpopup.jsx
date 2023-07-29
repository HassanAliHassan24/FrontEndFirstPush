import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import GISlocation from './GISlocation';

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button style={{width:"14%",backgroundColor:"orange"}} type="primary" onClick={() => setOpen(true)}>
        BOOK TEACHER
      </Button>
      <Modal
        title=""
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1500}
        
        
      >
        <GISlocation/>
      </Modal>
    </>
  );
};

export default App;
