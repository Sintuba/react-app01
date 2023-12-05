import React, { useState } from "react";
import axios from "axios";
import { Link, NavLink,useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';//フォームの状態管理とバリデーションを管理するライブラリ
import {Box,useToast,Badge,Text,CSSReset,Flex,Heading,FormErrorMessage,FormControl,FormLabel,Input,Button, Center, FormHelperText } from "@chakra-ui/react";
function Signup  () {
    const Navigate = useNavigate();
    const toast = useToast();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [input,setInput] = useState('');//フォーム内のインプットの状態を管理
    const isError = input === '';
    const handleInputChange = (e) =>setInput(e.target.value);

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
        description: "アカウントが正常に作成されました。",
        status: 'success',
        duration: 2900,
        isClosable: true,
      });
     
    } catch (error) {
      // 登録失敗のToastを表示
      toast({
        title: 'アカウントの登録に失敗しました。',
        description: "エラーが発生しました。",
        status: 'error',
        duration: 2900,
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
                    <FormControl isInvalid={errors.name} mt={4}>
                        <FormLabel   fontWeight={"1rem"}><Badge mr={".25rem"}  color={"white"} bg={"green"}>必須</Badge>ユーザー名</FormLabel>
                        <Input
                         {...register("name",{
                          required:"ユーザー名を入力してください",
                          maxLength:{
                            value:20,
                            message:"ユーザー名は20文字以内で入力してください"
                          },
                          minLength:{
                            value:1,
                            message:"入力は必須です。"
                          },
                        })} 
                          type="text"
                          onChange={(e) => {setUsername(e.target.value);handleInputChange(e);}}
                          value={username} 
                          placeholder="ユーザー名" 
                        
                        />
                       < FormErrorMessage>
                        {errors.name && errors.name.message}
                       </FormErrorMessage>
                    </FormControl>

                    <FormControl isInvalid={errors.password} mt={4}>
                    <FormLabel  fontWeight={"1rem"}><Badge mr={".25rem"} color={"white"} bg={"green"}>必須</Badge>パスワード</FormLabel>
                        <Input 
                          {...register("password", { 
                            required: "パスワードは必須です",
                            maxLength:{
                              value:20,
                              message:"パスワードは２０文字以内で入力してください"
                            },
                            minLength:{
                              value:4,
                              message:"パスワードは４文字以上で入力して下さい"
                            },
                            pattern:{
                              value:/^\d+$/,
                              message:"パスワードは数字のみを使用してください"
                            }
                          })}
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