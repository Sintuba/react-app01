import React from "react";
import { BrowserRouter  } from "react-router-dom";
import { Box, ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./AuthContext";
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

  <BrowserRouter basename="/">
   <AuthProvider>

      <AppContainer >
        <Default  />
      </AppContainer>
      
   </AuthProvider>

    </BrowserRouter>

</>

  );
};

export default App;
