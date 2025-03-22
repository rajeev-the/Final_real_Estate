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

const App = () => {

  return (
    <>
      <Routes>
        {/* Parent Route with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Nested Routes inside Layout */}
          <Route index element={<Home agent={true} />} /> {/* Default Home Page */}
          <Route path="home" element={<Home  agent={true} />} />
          <Route path="landlist" element={<LandList />} />
          <Route path='agents' element={<Agents/>} />
          <Route path='agents/:state' element={<StateAgenet/>} />
          <Route path='land/:id' element={<ViewLand/>} />
        </Route>
        
        <Route path="/login" >
          {/* Nested Routes inside Layout */}
          <Route index element={<Login />} /> {/* Default Home Page */}
          <Route path="agent" element={<LoginAgent />} />
          <Route path="user" element={<LoginUser />} />
        </Route>

        <Route path='/agent' element={<AgentLayout  />}>
        <Route index element={<Home agent={false} />} />
        <Route path="Land" element={<LandAdd/>} />
        <Route path="holding" element={<Holding/>} />
        


        </Route>



      </Routes>
    </>
  );
};

export default App;
