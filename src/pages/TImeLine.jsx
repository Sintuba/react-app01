import React from "react";
// import style from "../css/timeline.module.css";
import {Box,Button,Center, Flex,Tabs, TabList, TabPanels, Tab, TabPanel, Container } from '@chakra-ui/react';
import {  Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import ScreamButton from "../component/Button";


const MainContainer = () =>{
  return(
    <>
 <Box zIndex={100} width={"100vw"}  >
        <Container h={"100VH"} >
          <Flex>
            <Box bg={"red"} h={400} w={100}>test</Box>
            <Box bg={"red"} h="400" w={100}>test</Box>
          </Flex>
          <ScreamButton label={"click"} />
        </Container>
       
 </Box>
    </>
  );
     
};
const SideContainer = () =>{
  
  return(
    <>

    </>
  );
}

const TimeLine = () => {
    return(
    <>
          <MainContainer />
          <SideContainer />
    </>
    );
};

export default TimeLine;