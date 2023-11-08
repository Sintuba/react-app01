import React from "react";
import { Routes,Route } from "react-router-dom";
import Header from "../component/Header";

import SignIn from "./pages/SignIn";
import SignUp from "./pages/signup_page";
import TimeLine from "./pages/TImeLine";

import Setting from "./Setting";
import Profile from "./Profile";

const Default = () => {
    return (
      <>

        <Header />
        <Routes>
              <Route path="/timeline" element={<TimeLine />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/signin" element={<SignIn />} />
              
        </Routes>
  
  
  
      </>
    
    );
  };

  export default Default;