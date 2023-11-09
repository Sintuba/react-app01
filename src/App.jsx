import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Header from "./component/Header";

import Default from "./pages/Default";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/signup_page";
import TimeLine from "./pages/TimeLine";
import Setting from "./pages/Setting";
import Profile from "./pages/Profile";


const App = () => {
  return (
    <>
  <BrowserRouter>
      <Default />
  </BrowserRouter>


    </>

  );
};

export default App;
