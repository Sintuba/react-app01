import React from "react";
import { BrowserRouter,Router,Routes,Route } from "react-router-dom";
import Header from "../component/Header";

import SignIn from "./SignIn";
import SignUp from "./signup_page";
import TimeLine from "./TimeLine";
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