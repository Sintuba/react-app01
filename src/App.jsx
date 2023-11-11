import React from "react";

import { BrowserRouter,Router,Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SignIn from "./pages/SignIn";
import Default from "./pages/Default";

function AppContainer({children}){
  return <ChakraProvider>{children}</ChakraProvider>
}

const App = () => {

  return (
    <>
  <BrowserRouter >

          <Default />

  </BrowserRouter>


    </>

  );
};

export default App;
