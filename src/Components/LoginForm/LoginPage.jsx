import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Image5 from '../Image/book.png'
import AuthContext from '../../Context/AuthProvider'
import './Login.css';
import { useContext } from 'react';
import axios from 'axios';
import react, { useState } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import Registration2 from '../RregistrationForm/Registration2';
import Main from '../MainInteface/Main';


function LoginPage() {
   
    
    
    
      const token = "QWRtaW46QWRtaW4xMjM="
    
    
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
    <div style={{marginLeft:"30rem",marginTop:"3rem"}} >
        
      <marquee behavior="" direction="left">
         <h3 style={{textAlign:"center",marginLeft:"-30rem",marginBottom:"45px",color:"red"}}>Log in with your Account to continue !!</h3>
         </marquee> 
         <div >
              <div class="login-form" >
               

                {/* {message && <div>{message}</div>} */}
                {/* {loginSuccess && <h5> <p style={{color:"green"}} >{loginSuccess}</p></h5>} */}
                <form style={{padding:"2%",boxShadow: "0 7px 25px 0 rgb(0, 0, 0)"}} onSubmit={handleSubmit}>
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
                
                  <img src={Image5} alt="" />
                  <div>
                    <h2>LOGIN PAGE</h2>
                    <p>LOGIN HERE</p>
                  </div>
                  <div>
                    <input style={{width:"93%"}}
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Username or Email"
                      required
                    />
                  </div>

                  <div>
                    <input style={{width:"93%"}}
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div>
                    <span>Forgot Password ?</span>
                    <a href="" style={{color:"red"}}> Click here to reset</a>
                  </div>

                  <div>
                    <button style={{width:"93%"}} className='shadow-lg ' type='submit' >
                      
                      LOG IN
                      </button>

                      <div>
                    <span>Don't have an account ?</span>
                    <Link to="/Registration2" element={Registration2}>
                        <a href="" style={{color:"blue"}}> Sig nUp </a>
                        </Link>

                  </div>
                  <div>
                    <span>Back</span>
                    <Link to="/Main" element={Main}>
                        <a href="" style={{color:"blue"}}> Home Page </a>
                        </Link>

                  </div>
                    
                  </div>
                  {errorMessage && <div className="alert alert-danger" role="alertdialog"
                 style={{ color: "red", border: "1px solid red",width:"100%" }}>
                    {errorMessage}</div>}
                </form>
               
               
                {/* {loginError && <p style={{color:"red"}} >{loginError}</p>} */}
              </div>
            </div>
    </div>
  )
}

export default LoginPage