import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import Default from "./pages/Default";

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
