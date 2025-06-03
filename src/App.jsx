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
import { AppProvider } from "./Context/Poperty_context"
import LandAgent from './Pages/LandAgent';
import { ToastContainer } from "react-toastify";
import { FilterProvider } from './Context/FilterContext';
import "react-toastify/dist/ReactToastify.css";
import SerachPage from './Pages/SerachPage';
import ScrollToTop from './componets/ScrollToTop';

import RERA from './Pages/RERA'

import Careers from './Pages/Careers';
import Terms from './componets/Terms';
import Filter from './componets/Filter';
import { ListFilterProvider } from './Context/ListFilter';
import BlogPage from './Pages/BlogPage';
import BlogDetails from './Pages/BlogDetails';
import SIPPage from './Pages/SIPPage';

const App = () => {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <AppProvider>
        <FilterProvider>
          <ListFilterProvider>
        <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Home routes */}
              <Route index element={<Home agent={true} />} />
              <Route path="home" element={<Home agent={true} />} />
              <Route path="landlist" element={<LandList />} />
              <Route path="agents" element={<Agents />} />
              <Route path="ContactUs" element={<ContactUs margin={100} />} />
              <Route path="AboutUs" element={<AboutUs />} />
              <Route path="landagent/:id" element={<LandAgent />} />
              <Route path="agents/:state" element={<StateAgenet />} />
              <Route path="blog" element={<BlogPage/>} />
              <Route path="sip" element={<SIPPage/>} />
               <Route path="rera" element={<RERA/>} />
                <Route path="blog/:id" element={<BlogDetails/>} />


              
          
              <Route path="land/:id" element={   <ViewLand /> } /> 

             
              <Route path="search" element={<SerachPage />} />
              <Route path="test" element={<Filter />} />
              <Route path="search/land/:id" element={<ViewLand />} />
              <Route path='terms' element={<Terms/>}/>
             
              <Route path='Careers'  element={<Careers/>}/>
            </Route>

            {/* Auth routes */}
            <Route path="/login">
              <Route index element={<Login />} />
              <Route path="agent" element={<LoginAgent />} />
              <Route path="user" element={<LoginUser />} />
            </Route>

            <Route path="/signup">
              <Route path="agent" element={<SignupAgent />} />
              <Route path="user" element={<SignupUser />} />
            </Route>

            {/* Agent routes */}
            <Route path="/agent" element={<AgentLayout />}>
              <Route index element={<Home agent={false} />} />
              <Route path="land" element={<LandAdd />} />
              <Route path="holding" element={<Holding />} />
              <Route path="contact" element={<ContactUs margin={20} />} />
              <Route path="holding/land/:id" element={<ViewLand />} />
            </Route>
          </Routes>
          </ListFilterProvider>
        </FilterProvider>
      </AppProvider>
    </>
  );
};

export default App;
