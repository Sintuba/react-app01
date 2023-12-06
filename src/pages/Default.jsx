import React, {useContext} from "react";
import { Router,Routes,Route,Navigate} from "react-router-dom";
import { Box } from "@chakra-ui/react";
//pages
import SignIn from "./SignIn";
import SignUp from "./Signup";
import TimeLine from "./TImeLine";
import Setting from "./Setting";
import Profile from "./Profile";
import NoMatch from "./NoMatch";
//pages
import Header02 from "../component/Header02";
import Header01 from "../component/Header";
import { useAuth } from "../AuthContext";//認証フックをインポート



const Default = () => {
  const {isAuthenticated} = useAuth();

  console.log(isAuthenticated);
    return (
      <>   
      
      {isAuthenticated ? <Header02 />:<Header01  /> }   
      <Box zIndex={"-1"} position={"relative"} top={"60px"}>
        <Routes>

          {isAuthenticated ? (
            <>
              <Route path={'/'} element={<TimeLine />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="*" element={<NoMatch />} />
            </>
          ):(
            <>
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="*" element={<Navigate to="/signin" />} />
            </>

          )}
        </Routes>
   

      </Box>
    </>
    );
  };

  export default Default;