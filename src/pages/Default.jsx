import React from "react";
import { BrowserRouter,useNavigate,Router,Routes,Route } from "react-router-dom";
import Header from "../component/Header";
import "../css/default.module.css";
import SignIn from "./SignIn";
import SignUp from "./signup_page";
import TimeLine from "./TImeLine";
import Setting from "./Setting";
import Profile from "./Profile";
import NoMatch from "./NoMatch";


const Default = () => {

    return (
      <>


          <Header />
        

          <Routes>
                <Route path="/timeline" element={<TimeLine />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="*" element={<NoMatch />} />
          
          </Routes>
  
  
      </>
    
    );
  };

  export default Default;