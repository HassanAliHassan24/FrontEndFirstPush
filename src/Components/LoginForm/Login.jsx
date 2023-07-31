import * as React from 'react';
// import { useHistory } from 'react-router-dom';
import react, { useState } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import './Login.css';
import Image5 from '../Image/book.png'
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../../Context/AuthProvider'
import UserInterface from '../MainInteface/UserInterface/UserInterface';
import { useContext } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import CircularProgress from '@mui/material/CircularProgress';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const token = "QWRtaW46QWRtaW4xMjM="


  // const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const { setAuth, auth } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);



    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      const response = await axios.post(
        'http://localhost:9093/auth/login',
        { userName: username, password: password },
        { headers: { 'Content-Type': 'application/json' } }



      );
      // localStorage.setItem('token', token);
      // localStorage.setItem('auth', auth);
      setUsername('');
      setPassword('');
      console.log(response.data);
      // console.log(JSON.stringify(response?.data))
      const role = response?.data?.roles
      const userName = response?.data?.userName

      setMessage('Login successful!');
      console.log(role)
      console.log(userName)
      navigate('/UserInterface')
      setAuth({ role, userName })
      // navigate('/UserInterface')
      setTimeout(() => {
        setMessage('');
      }, 3000);
      setLoading(false);



      // Handle the successful login response here (e.g., show success message, set user token in local storage, redirect to dashboard, etc.)
      console.log('Login successful!', response.data);

      navigate = '/UserInterface'

    } catch (error) {
      // Handle login error here (e.g., show error message, clear input fields, etc.)
      console.error('Login failed:', error.data);
      setLoading(false);
      setErrorMessage('Invalid username or password');
    } finally {
      // Set loading state to false after 2 to 5 seconds
      setTimeout(() => {
        setLoading(false);

      }, Math.floor(Math.random() * 3000) + 2000);
    }


  };





  return (
    <div >
      <Button style={{ marginLeft: '5px', height: '35px' }} className='bton text-light bg-info text-light outline-light' variant="outlined" onClick={handleClickOpen}>
        LOG IN
      </Button>
      <Dialog className='shadow'
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className='myform'></DialogTitle>
        <DialogContent className='myform'>
          <DialogContentText className='myform' id="alert-dialog-slide-description">
            <div>
              <div class="login-form">
                {loading ? (
                  <div className="spinner-container"
                    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <CircularProgress />
                  </div>
                ) : (
                  <React.Fragment>
                    {message && (
                      <div className="success-message">
                        {message}
                      </div>
                    )}
                    {/* {message && <div>{message}</div>} */}
                    {/* Rest of the JSX code */}
                  </React.Fragment>
                )}

                {/* {message && <div>{message}</div>} */}
                {/* {loginSuccess && <h5> <p style={{color:"green"}} >{loginSuccess}</p></h5>} */}
                <form onSubmit={handleSubmit}>
                  <img src={Image5} alt="" />
                  <div>
                    <h2>LOGIN PAGE</h2>
                    <p>LOGIN HERE</p>
                  </div>
                  <div>
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username or Email"
                      required
                    />
                  </div>

                  <div>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required

                    />

                   
                  </div>

                  <div>
                    <span>Forgot Password ?</span>
                    <a href=""> Click here to reset</a>
                  </div>

                  <div>
                    <button className='shadow-lg ' type='submit' >

                      LOG IN
                    </button>

                  </div>
                </form>
                {errorMessage && <div className="alert alert-danger" role="alertdialog" style={{ color: "red", border: "1px solid red" }}>{errorMessage}</div>}
                {/* {loginError && <p style={{color:"red"}} >{loginError}</p>} */}
              </div>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions className='myform'>
          <Button onClick={handleClose}>Cancel</Button>

        </DialogActions>
      </Dialog>
    </div>
  );
}