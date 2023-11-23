import React, { useState } from "react";
import axios from "axios";
import { Link, NavLink,useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';//フォームの状態管理とバリデーションを管理するライブラリ
import {Box,useToast,Badge,Text,CSSReset,Flex,Heading,FormErrorMessage,FormControl,FormLabel,Input,Button, Center } from "@chakra-ui/react";
function Signup  () {
    const Navigate = useNavigate();
    const toast = useToast();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // React Hook Formの register ファンクションを使って、
    //各フィールドにバリデーションルールを追加 これをrequiredとして使用
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleSignUp = async () => {
    try {

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, {
        name:username,
        password:password
       
      });
   Navigate('/signin');
      // 登録成功のToastを表示
      toast({
        title: '登録成功',
        description: "あなたのアカウントが正常に作成されました。",
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
     
    } catch (error) {
      // 登録失敗のToastを表示
      toast({
        title: '登録失敗',
        description: "エラーが発生しました。",
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };
    return(
        <>
                 <CSSReset />
      <Flex  align="center" justify="center" position={"relative"} top={"30px"} >
        {/* wrapper */}
        <Box  bg={"white"} borderRadius="8px" maxWidth="400px" borderWidth={1}  boxShadow="lg">
        <Box borderRadius="8px 8px 0 0"  bg={"#84DF4C"} textAlign="center">
                <Heading fontSize={"1.3rem"} textShadow={"1px 1px 5px black"} p={"20px 60px"} color={"white"}>サインアップ</Heading>
            </Box>
          {/* フォーム */}
            <Box p={"10px 20px"}>
                <form onSubmit={handleSubmit(handleSignUp)}>
                    <FormControl mt={4}>
                        <FormLabel fontWeight={"1rem"}><Badge color={"white"} bg={"green"}>必須</Badge>ユーザー名</FormLabel>
                        <Input
                         {...register("name",{required:"ユーザー名を入力してください"})} 
                         type="text"
                          onChange={(e) => setUsername(e.target.value)}
                          value={username} 
                          placeholder="ユーザー名" 
                        />
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                    </FormControl>
                    <FormControl mt={4}>
                    <FormLabel fontWeight={"1rem"}><Badge color={"white"} bg={"green"}>必須</Badge>ユーザー名</FormLabel>

                        <FormLabel>パスワード</FormLabel>
                        <Input 
                          {...register("password", { required: "パスワードは必須です" })}
                          type="password" 
                          onChange={(e) => 
                          setPassword(e.target.value)} value={password}  
                          placeholder="パスワード" 
                         />

                    <FormErrorMessage>
                      {errors.password && errors.password.message}
                    </FormErrorMessage>
                    </FormControl>
                    <Center m={'1rem'}>
                    <Center>
                        <Text as={"span"}  fontSize={".9rem"}>
                        既に登録済みのかたはこちらから
                        <Link to={"/signin"}><Text color={"blue"} _hover={{color:"red"}} display={"inline"}>サインイン</Text></Link>
                        </Text>
                    </Center>
                    </Center>
                    <Center>
                        <Button  color={"white"} bg="#84DF4C" mt={4} type="submit">
                        登録
                        </Button>
                    </Center>
                </form>
            </Box>
        </Box>
      </Flex>
        </>
    );
}

export default Signup;