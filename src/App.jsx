import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Layout from './Layout';
import LandList from './Pages/LandList';
import Login from './Pages/Login';
import LoginAgent from './Pages/LoginAgent';
import LoginUser from './Pages/LoginUser';

const App = () => {
  return (
    <>
      <Routes>
        {/* Parent Route with Layout */}
        <Route path="/" element={<Layout />}>
          {/* Nested Routes inside Layout */}
          <Route index element={<Home />} /> {/* Default Home Page */}
          <Route path="home" element={<Home />} />
          <Route path="landlist" element={<LandList />} />
        </Route>
        
        <Route path="/login" >
          {/* Nested Routes inside Layout */}
          <Route index element={<Login />} /> {/* Default Home Page */}
          <Route path="agent" element={<LoginAgent />} />
          <Route path="user" element={<LoginUser />} />
        </Route>



      </Routes>
    </>
  );
};

export default App;
