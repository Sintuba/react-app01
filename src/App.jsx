import React from "react";
import { Route, Routes } from "react-router";

import Header from "./component/Header";

import Default from "./pages/pages/Default";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signup_page";
import TimeLine from "./pages/TImeLine";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";
import { BrowserRouter,Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <>


      <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<Default />} />
      </Routes>



    </>
  
  );
};

export default App;
