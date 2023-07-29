import Footer from './Components/Footer/Footer';
import './App.css';
import Navapp from './Components/Navbar/Navapp';

// import About from './Components/About/About';
// import Contact from './Components/Contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/MainInteface/Main';
import UserInterface from './Components/MainInteface/UserInterface/UserInterface';
import Dashboard from './Components/AdminPannel/Dashboard';
import Client from './Components/AdminPannel/Client';
import Teacher from './Components/AdminPannel/Teacher';
import Admin from './Components/AdminPannel/Admin';
import Total from './Components/AdminPannel/Total';
import Settings from './Components/AdminPannel/Settings';
import Help from './Components/AdminPannel/Help';
import ClientEdit from './Components/RregistrationForm/ClientEdit';
import Program from './Components/AdminPannel/Program';
import Policy from './Components/AdminPannel/Policy';
import RequireAuth from './Context/RequreAuth';
import LoginPage from './Components/LoginForm/LoginPage';
import Registration2 from './Components/RregistrationForm/Registration2';


// import OurTeam from './Components/OurTeam/OurTeam';
// import Service from './Components/Service/Service';


function App() {
  return (
    <div className="App">

     
    
      
        <Routes>


          <Route path="/" element={<Main/>}/>
          <Route path="/Main" element={<Main/>}/>
          <Route path="/Registration2" element={<Registration2/>}/>

          <Route path='/LoginPage' element={<LoginPage/>}/>


         <Route element={<RequireAuth/>}>
          <Route path="/UserInterface" element={<UserInterface/>}/>
          <Route path='/Dashboard' element={<Dashboard/>}/>
          <Route path='/Client' element={<Client/>}/>
          <Route path='/Teacher' element={<Teacher/>}/>
          <Route path='/Admin' element={<Admin/>}/>
          <Route path='/Total' element={<Total/>}/>
          <Route path='/Program' element={<Program/>}/>
          <Route path='/Policy' element={<Policy/>}/>
          <Route path='/Settings' element={<Settings/>}/>
          <Route path="/help/:id" element={<Help/>}/>
          <Route path='/ClientEdit' element={<ClientEdit/>}/>

          </Route>

          
          
          
          
          
        
        </Routes>
       
     


     
     
      

    </div>
  );
}

export default App;
