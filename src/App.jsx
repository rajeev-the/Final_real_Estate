import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Layout';
import LandList from './Pages/LandList';
import Login from './Pages/Login';
import LoginAgent from './Pages/Agent_page/LoginAgent';
import LoginUser from './Pages/LoginUser';
import Agents from './Pages/Agent_page/Agents';
import StateAgenet from './Pages/Agent_page/StateAgenet';
import AgentLayout from './Pages/Agent_page/AgentLayout';
import LandAdd from './Pages/Agent_page/LandAdd';
import Holding from './Pages/Agent_page/Holding';
import ViewLand from './Pages/ViewLand';
import SignupAgent from './Pages/Agent_page/SignupAgent';
import SignupUser from './Pages/SignupUser';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import {AppProvider } from "./Context/Poperty_context"
import LandAgent from './Pages/LandAgent';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {

  return (
    <>
      {/* ToastContainer should be here at the top level */}
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        {/* Parent Route with Layout */}
       
        <Route path="/" element={ <Layout /> }>
      
          {/* Nested Routes inside Layout */}
          <Route index element={<AppProvider>  <Home agent={true} />  </AppProvider>} /> {/* Default Home Page */}
         <Route path="home" element={   <AppProvider>  <Home  agent={true} />    </AppProvider>   }/>
          <Route path="landlist" element={<LandList />} />
          <Route path='agents' element={<Agents/>} />
          <Route path='contact' element={<ContactUs margin={100} />} />
          <Route path='about' element={<AboutUs/>} />
          <Route path='landagent/:id' element={<LandAgent/>} />
          <Route path='agents/:state' element={<StateAgenet/>} />
          <Route path='land/:id' element={<AppProvider> <ViewLand/>  </AppProvider>} />
        
        </Route>
    
        
        <Route path="/login" >
          {/* Nested Routes inside Layout */}
          <Route index element={<Login />} /> {/* Default Home Page */}
          <Route path="agent" element={<LoginAgent />} />
          <Route path="user" element={  <LoginUser />  } />
        </Route>

        <Route path="/signup" >
          {/* Nested Routes inside Layout */}
       
          <Route path="agent" element={<SignupAgent />} />
          <Route path="user" element={    <SignupUser /> } />
        </Route>

        <Route path='/agent' element={<AgentLayout  />}>
        <Route index element={ <AppProvider>  <Home agent={false} /> </AppProvider> }  />
        <Route path="land" element={<LandAdd/>} />
        <Route path="holding" element={<Holding/>} />
        <Route path="contact" element={<ContactUs margin={20}/>} />
        <Route path='land/:id' element={<AppProvider> <ViewLand/>  </AppProvider>} />
        


        </Route>



      </Routes>
    </>
  );
};

export default App;
