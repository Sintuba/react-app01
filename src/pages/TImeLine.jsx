import React, { useState, useEffect,useContext } from 'react';
import { VStack, Box,useToast, Fade,Stack, useMediaQuery, Text, Icon,Flex, Input, Button, Textarea, Show, Hide, Alert } from '@chakra-ui/react';
import axios from 'axios';
import {motion,isVaildMotionProp} from 'framer-motion';
import { useParams } from 'react-router-dom';
import { useAuth } from '../AuthContext';//{}は分割代入
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

/*
likedフィールドを完全に取り除き、user_idとscream_idの組み合わせの存在自体が
「いいね」されていることを示すようにする。この場合、レコードが存在する＝「いいね」されている
レコードが存在しない＝「いいね」されていない、となる。

実装例:

「いいね」: user_idとscream_idの組み合わせでレコードを作成。
「いいね」の解除: 対応するレコードを削除。
この方法はデータモデルをさらにシンプルにし、クエリの実行速度を向上させる可能性があります。

効率的なデータ管理のための他のアプローチ
インデックスの使用: user_idとscream_idにインデックスを設定して
、検索と更新のパフォーマンスを向上させる。

キャッシュの導入: 頻繁にアクセスされるデータ（例えば、特定の投稿に対する総いいね数）をキャッシュし、
データベースへのアクセスを減らす。

非同期処理: いいねの状態の更新を非同期で行い、ユーザーインターフェースの応答性を保つ。
*/ 

const MessageItem = ({ item }) => {
  const {userId} = useAuth();
  const toast = useToast();
  const [isLike,isLikeState] = useState(false);
  console.log(isLike);
  //今後likecountはデータベース上のscreamテーブルに
  //保存し数値を取得して表示する。
  //投稿に対しユーザー毎に一いいねできそれをlikeテーブルにbooleanで保存し
  //ユーザーがすでに言い値しているかの判定を行う。
  const [count,setCount] = useState(0);
  console.log(item,item.profile,item.username);

  const toggleLike = async () =>{
  
    try{
      if(isLike){
          setCount(count - 1);
          isLikeState(false);

        }else{
          setCount(count + 1);
          isLikeState(true);

        }
        
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/screams/:userId/likes`,
        {
          isLike:isLike,
          useId:userId
        });
    }catch(error){
      isLikeState(false);
      setCount(0);
      toast({
        title: '通信に失敗しました。',
        description: "エラー",
        status: 'error',
        duration: 2500,
        isClosable: true,
      });
    }


  };

  return(
    <Fade transition={{ exit: { delay: .15 }, enter: { duration: 2 } }} in={true}>
    <Box justifyContent={"center"} margin={"0 1vw"}  w={"70vw"} p={"1rem"} borderWidth={1} borderRadius={8} boxShadow="lg">
      <Text padding={".2rem"} fontSize="lg">{item.name}</Text>
      <Text mt={2}>{item.content}</Text>
      {/* <Stack  m={"1rem "} > */}
        <Flex m={".5rem 0 0"} justifyContent={"flex-end"} cursor={"pointer"}>
          <Icon mr={" .3rem"} onClick={toggleLike}  textAlign={"right"}  as={isLike ? AiFillHeart:AiOutlineHeart} fontSize={"1.4rem"} color={isLike ? "red.400":"" }/>
          <Text>{count}</Text>
        </Flex>
      {/* </Stack> */}
    </Box>
  </Fade>
  );

  };

const MainContainer = ({ Data = [] }) => {
//ユーザーが投稿したメッセージを取得して表示する
  return(
    <Flex justifyContent={"center"} flexDirection={"column-reverse"}>
      <VStack flexDirection={"column"} spacing={5} align="stretch">
        {Data.map(item => <MessageItem key={item.id} item={item} />)}
      </VStack>
    </Flex>
  );
  };

const SideContainer = ({ fetchData }) => {
  const {userId} = useAuth();
  //ユーザー投稿フォーム
  const [newMessage, setNewMessage] = useState('');

  const handleAddMessage = async () => {
    
    try {
      //デプロイする際には.envにて環境変数を使用してpost送信先URLを変更する
      await axios.post(`${process.env.REACT_APP_API_URL}/screams/${userId}`, { 
        // userId:userId, 
        content: newMessage });
      setNewMessage('');
      fetchData();
    } catch (error) {
      console.error('エラー:', error);
    }
  };

  return (
    <>
      <Show above='875px'>
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
      <Hide above='875px'>
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

  const [isSmallerThan875] = useMediaQuery('(min-width: 875px)');
  const justifyContent = isSmallerThan875 ? 'flex-end' : 'center';
  const [data,setData] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  
  const fetchData = async () => {

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/screams`);
     
      setData(response.data); // 取得した投稿に関するデータをStateにセット
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
