import React from "react";
import { BrowserRouter,useNavigate,Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Default from "./pages/Default";



function AppContainer(children){
  return <ChakraProvider>{children}</ChakraProvider>
}

const App = () => {
 
  return (
    <>
  <BrowserRouter>
      {/* <ChakraProvider> */}
          <Default />
      {/* </ChakraProvider> */}
    

  </BrowserRouter>


    </>

  );
};

export default App;
