
import React, { useState, useEffect } from 'react';
// import style from "../css/timeline.module.css";
import { VStack, Box,Fade, Text, Flex, Input, Button, CSSReset, FormControl, FormLabel, Heading, Slide,Show,Hide } from '@chakra-ui/react';
import {  Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

import ScreamButton from "../component/Button";


const MainContainer = ({ dummyData }) =>{

  return(
    <>
   
       <Flex align="center" flexDirection={"column-reverse"} justify="center" height="100vh">
  
            <VStack spacing={10} align="stretch">
              {dummyData.map((item) => (
                  <Box margin={"0 7vw"} w={"65vw"} key={item.id} p={50} borderWidth={1} borderRadius={8} boxShadow="lg">
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
  <Show above='850px' >
    <Box w={"25vw"} p={5} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Input
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
  {/* ハンバーガーメニュー */}
  <Hide above='850px'>
  <Box bottom={0} position={"fixed"} height={"5rem"} w={"100vw"} p={5} borderWidth={1} borderRadius={8} boxShadow="lg">
  <Flex>
        <Input
          placeholder="新しいメッセージを入力"
          value={newMessage}
          w={"100%"} h={"50%"}
          onChange={(e) => setNewMessage(e.target.value)}
          mb={3}
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

  useEffect(() => {
    // ダミーデータの初期化（実際にはデータベースからの取得に置き換える）
    const initialDummyMessages = [
     
    ];

    setDummyData(initialDummyMessages);
  }, []);
    return(
    <>
       <Flex>
            <SideContainer dummyData={dummyData} setDummyData={setDummyData} />
            <MainContainer dummyData={dummyData} />
            
       </Flex>
    </>
    );
};

export default TimeLine;