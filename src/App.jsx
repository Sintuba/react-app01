import React from "react";
import { BrowserRouter,useNavigate,Route, Routes } from "react-router-dom";
import { ChakarProvider } from "@chakra-ui/react";

import Default from "./pages/Default";

function AppContainer(children){
  return <ChakarProvider>{children}</ChakarProvider>
}

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
