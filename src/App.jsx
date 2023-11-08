import React from "react";
import { Route, Routes } from "react-router";

import Header from "./component/Header";

import Default from "./pages/Default";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signup_page";
import TimeLine from "./pages/TImeLine";


const App = () => {
  return (
    <>

      <Header />
      <Routes>
            <Route path="/timeline" element={<TimeLine />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<SignIn />} />
      </Routes>



    </>
  
  );
}

export default App;
