
import React, { useState, useEffect } from 'react';
// import style from "../css/timeline.module.css";
import {Box,Text,VStack,Center, Flex,Tabs, TabList, TabPanels, Tab, Container, CSSReset, FormControl, FormLabel, Input, Button, Heading } from '@chakra-ui/react';
import {  Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import ScreamButton from "../component/Button";


const MainContainer = () =>{
  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    // ダミーデータの取得（実際にはデータベースからの取得に置き換える）
    const fetchData = async () => {
      // ここで実際のデータベースからのデータ取得を行う
      // 今はダミーデータを使用している
      const dummyMessages = [
        { id: 1, username: 'User1', message: 'This is a dummy messageThis is a dummy messageThis is a dummy message 1.' },
        { id: 2, username: 'User2', message:  'This is a dummy messageThis is a dummy messageThis is a dummy messageThis is a dummy messageThis is a dummy message 2.' },
        { id: 3, username: 'User3', message:  'This is a dummy messageThis is a dummy messageThis is a dummy messageThis is a dummy messageThis is a dummy message 2.' },
        { id: 1, username: 'User1', message:  'This is a dummy messageThis is a dummy messageThis is a dummy messageThis is a dummy messageThis is a dummy message 2.' },
        { id: 1, username: 'User1', message:  'This is a dummy messageThis is a dummy messageThis is a dummy messageThis is a dummy messageThis is a dummy message 2.' },
        { id: 2, username: 'User2', message:  'This is a dummy messageThis is a dummy messageThis is a dummy messageThis is a dummy messageThis is a dummy message 2.' },
      ];

      setDummyData(dummyMessages);
    };

    fetchData();
  }, []);
  return(
    <>
    <CSSReset />
      <Flex align="center" justify="center" height="100vh">
        <VStack spacing={10} align="stretch">
          {dummyData.map((item) => (
            <Box w={"65vw"} key={item.id} p={50} borderWidth={1} borderRadius={8} boxShadow="lg">
              <Text fontSize="lg">{item.username}</Text>
              <Text mt={2}>{item.message}</Text>
            </Box>
          ))}
        </VStack>
      </Flex>
    </>
  );
     
};
const SideContainer = () =>{
  
  return(
    <>
      <Box w={"25vw"}>d</Box>
    </>
  );
}

const TimeLine = () => {
    return(
    <>
       <Flex>
            <SideContainer />
            <MainContainer />
            
       </Flex>
    </>
    );
};

export default TimeLine;