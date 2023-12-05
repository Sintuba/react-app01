import React, { useState, useEffect,useContext } from 'react';
import { VStack, Box, Fade, useMediaQuery, Text, Flex, Input, Button, Textarea, Show, Hide } from '@chakra-ui/react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';
const MessageItem = ({ item }) => {
  const userId = useAuth();
  console.log(item,item.profile,item.username);
  return(
    <Fade transition={{ exit: { delay: .15 }, enter: { duration: 0.9 } }} in={true}>
    <Box justifyContent={"center"} margin={"0 1vw"} h={"22vh"} w={"70vw"} p={"1rem"} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Text padding={".2rem"} fontSize="lg">{item.name}</Text>
      <Text mt={2}>{item.content}</Text>
    </Box>
  </Fade>
  );

  };

const MainContainer = ({ Data = [] }) => {
//ユーザーが投稿したメッセージを取得して表示する
  return(
    <Flex justifyContent={"center"} flexDirection={"column-reverse"}>
      <VStack flexDirection={"column-reverse"} spacing={5} align="stretch">
        {Data.map(item => <MessageItem key={item.id} item={item} />)}
      </VStack>
    </Flex>
  );
  };

const SideContainer = ({ fetchData }) => {
  //ユーザー投稿フォーム
  const [newMessage, setNewMessage] = useState('');

  const handleAddMessage = async () => {
    try {
      //デプロイする際には.envにて環境変数を使用してpost送信先URLを変更する
      await axios.post(`${process.env.REACT_APP_API_URL}/screams`, { 
        userId:0, 
        content: newMessage });
      setNewMessage('');
      fetchData();
    } catch (error) {
      console.error('エラー:', error);
    }
  };

  return (
    <>
      <Show above='860px'>
      <Box bg={"white"} position={"fixed"} left={0} h={"100vh"}  w={"25vw"} p={5} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Textarea
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
      <Hide above='860px'>
      <Box  bg={"white"}  bottom={0} position={"fixed"} height={"4rem"} w={"100vw"} p={5} borderWidth={1} borderRadius={8} boxShadow="lg">
  <Flex alignItems={"flex-end"} justifyContent={"center"} >
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
};

const TimeLine = () => {

  const [isSmallerThan860] = useMediaQuery('(min-width: 860px)');
  const justifyContent = isSmallerThan860 ? 'flex-end' : 'center';
  const [data,setData] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  
  const fetchData = async () => {

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/screams`);
     
      setData(response.data); // 取得したデータをStateにセット
    } catch (error) {
      console.error('エラー:', error);
    }
  };

  useEffect(() => {
    fetchData(); // コンポーネントのマウント時およびreloadDataが変更されたときに実行
  }, [reloadData]);



  return (
    <>
      <Flex justifyContent={justifyContent}>
        <SideContainer fetchData={fetchData} />
        <Box pt={"55px"} pb={"67px"}>
          <MainContainer Data={data} />
        </Box>
      </Flex>
    </>
  );
};

export default TimeLine;
