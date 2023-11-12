import React from "react";
import { BrowserRouter,Router,Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import SignIn from "./pages/SignIn";
import Default from "./pages/Default";
import Fonts from "./theme/Fonts";
import theme from "./theme/Theme01";

function AppContainer({children}){

  return (
    // themeをインポート
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}

const App = () => {

  return (
<>
  <BrowserRouter >
    <AppContainer >
      <Default />
    </AppContainer>
  </BrowserRouter>
</>

  );
};

export default App;
