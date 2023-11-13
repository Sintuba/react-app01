
import React, { useState, useEffect } from 'react';
// import style from "../css/timeline.module.css";
import { VStack,extendTheme , Box,Fade,useMediaQuery, Text, Flex, Input, Button, CSSReset, FormControl, FormLabel, Heading, Slide,Show,Hide } from '@chakra-ui/react';
import {  Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import ScreamButton from "../component/Button";


const MainContainer = ({ dummyData }) =>{

  return(
    <>
   
       <Flex >
  
            <VStack spacing={5} align="stretch">
              {dummyData.map((item) => (
                  <Box  justifyContent={"center"}  margin={"0 1vw"} h={"22vh"} w={"70vw"} key={item.id} p={0} borderWidth={1} borderRadius={8} boxShadow="lg">
                    <Text fontSize="lg">{item.username}</Text>
                    <Text mt={2}>{item.message}</Text>
                  </Box>
              ))}
            </VStack>
      </Flex>
   
    </>
  );
     
};
const SideContainer = ({ dummyData, setDummyData }) =>{
  const [newMessage, setNewMessage] = useState('');
  const handleAddMessage = () => {
    const newId = dummyData.length + 1;
    const newMessageData = { id: newId, username: 'User1', message: newMessage };
    setDummyData([...dummyData, newMessageData]);
    setNewMessage('');
  };
  return(
    <>
  <Show above='860px' >
    <Box bg={"white"} position={"fixed"} left={0} h={"100vh"}  w={"25vw"} p={5} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Input
      alignItems={"baseline"}
        placeholder="新しいメッセージを入力"
        value={newMessage}
        w={"100%"} h={"30%"}
        onChange={(e) => setNewMessage(e.target.value)}
        mb={3} 
      />
      <Button fontSize={".7rem"} width={"100%"} colorScheme="teal" onClick={handleAddMessage}>
        さけぶ
      </Button>
    </Box>
  </Show>
  {/* 投稿ブロック*/}
  <Hide above='860px'>
  <Box  bg={"white"}  bottom={0} position={"fixed"} height={"4rem"} w={"100vw"} p={5} borderWidth={1} borderRadius={8} boxShadow="lg">
  <Flex justifyContent={"center"} >
        <Input
        
          placeholder="新しいメッセージを入力"
          value={newMessage}
          w={"100%"} h={"60%"}
          onChange={(e) => setNewMessage(e.target.value)}
          mb={3} mr={3}
        />
        <Button fontSize={".7rem"} width={"6rem"} colorScheme="teal" onClick={handleAddMessage}>
          さけぶ
        </Button>
  </Flex>
    </Box>

  </Hide>

    </>
  );
}

const TimeLine = () => {
  const [dummyData,setDummyData] = useState([]);
  const [Smaller860] = useMediaQuery('(max-width:860px)');
  const justifyContent = Smaller860 ? 'center':'flex-end';
  console.log('Smaller860:', Smaller860);
console.log('justifyContent:', justifyContent);
  useEffect(() => {
    const initialDummyMessages = [
         // ダミーデータの初期化（今後データベースからの取得に置き換える）
    ];

    setDummyData(initialDummyMessages);
  }, []);
    return(
    <>
       <Flex  justifyContent={justifyContent}>
           
            <SideContainer dummyData={dummyData} setDummyData={setDummyData} />
          <Box pt={"55px"} pb={"60px"} >
              <MainContainer dummyData={dummyData} />
              
          </Box>
       </Flex>
    </>
    );
};

export default TimeLine;