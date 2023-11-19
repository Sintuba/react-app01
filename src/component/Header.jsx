import style from "../css/header.module.css";
import { Link, Route, Routes ,NavLink} from "react-router-dom";
import  React, {useState} from 'react';
import { Box,Flex,Show,Heading } from "@chakra-ui/react";
// import TimeLine from "../pages/TimeLine";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/Signup";

const Logo = () =>{
    return(
      <>
                <Heading mr={"2rem"} mt={"2"} textShadow={"2.5px 3.3px  black"} fontSize="2rem">Screamer</Heading>
  
      </>
    );
  };

const Header = () => {
    return (
        <>
   
        <Box  zIndex={"11"} top={"0"} position={"fixed"} boxShadow={"1px 2px 5px black"} width={"100%"} height={"60px"}  bg={"#84DF4C"}>
            <Flex color={"white"} justifyContent={"space-around"}>
            <Logo />

            </Flex>
        </Box>
    
        </>
    );
};

export default Header;