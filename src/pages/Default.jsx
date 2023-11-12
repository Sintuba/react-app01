import React from "react";
import { BrowserRouter,useNavigate,Router,Routes,Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Header from "../component/Header";
import SignIn from "./SignIn";
import SignUp from "./signup_page";
import TimeLine from "./TImeLine";
import Setting from "./Setting";
import Profile from "./Profile";
import NoMatch from "./NoMatch";
import Header02 from "../component/Header02";
import { PhoneIcon } from "@chakra-ui/icons";


const Default = () => {

    return (
      <>

      <Header02  />

      <Box zIndex={"-1"} position={"relative"} top={"60px"}>

        <Routes>
              
        <Route path="/timeline" element={<TimeLine />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<NoMatch />} />
        </Routes>
   

      </Box>
    </>
    );
  };

  export default Default;