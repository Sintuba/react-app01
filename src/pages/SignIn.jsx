import React,{useState,useContext} from "react";
import {Text,Flex,useToast,CSSReset,Box,Heading,FormControl,FormLabel,Input,Center,Button } from "@chakra-ui/react";
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {AuthContext} from '../AuthContext';
import { NavLink,Link,Routes,Route,useNavigate} from "react-router-dom";


const SignIn = () =>{
    const {signin} = useContext(AuthContext);
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const Navigate = useNavigate();//リダイレクト先を指定する（サイン成功後にルーティングを行う）
    const toast = useToast();


    const handlePasswordChange = async (e) => {

            setPassword(e.target.value);

    };
    
    const handleSignIn = async () => {
       
        try{
            
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/signin`,{
                name:username,
                password:password
            });
            
            if (response.status >= 200 && response.status < 300) {
                //サインイン成功後status200のレスポンスが帰ってきたら
                //timelineコンポーネントにルーティング
                const userId = response.data.userId;
                signin(userId);
                console.log(`UserID:${userId}`);
                toast({
                    title: 'サインイン',
                    description: "正常にサインインされました。",
                    status: 'success',
                    duration: 2900,
                    isClosable: true,
                  });
                Navigate(`/`);
            }
         
        }catch(error){
            toast({
                title: 'サインインに失敗しました。',
                description: "エラーが発生しました。",
                status: 'error',
                duration: 2900,
                isClosable: true,
              });
        }
    }

    return(
    <>
               <CSSReset />
      <Flex  align="center" justify="center" position={"relative"} top={"30px"} >
        {/* wrapper */}
        <Box  bg={"white"} borderRadius="8px" maxWidth="400px" borderWidth={1}  boxShadow="lg">
            <Box borderRadius="8px 8px 0 0"  bg={"#84DF4C"} textAlign="center">
                <Heading fontSize={"1.3rem"} textShadow={"1px 1px 5px black"} p={"20px 60px"} color={"white"}>サインイン</Heading>
            </Box>
          {/* フォーム */}
            <Box p={"10px 20px"}>
                <form onSubmit={(e) =>{e.preventDefault(); handleSignIn();}}>
                    <FormControl mt={4}>
                        <FormLabel fontWeight={"1rem"}>ユーザー名</FormLabel>
                        <Input type="text" placeholder="ユーザー名" onChange={(e)=>setUsername(e.target.value)} />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>パスワード</FormLabel>
                        <Input type="password" placeholder="パスワード"onChange={handlePasswordChange} />
                    </FormControl>
              
                    <Center>
                        <Button color={"white"} bg="#84DF4C" mt={4} type="submit">
                        サインイン
                        </Button>
                    </Center>
                    <Center m={'1rem'}>
                    <Link as={NavLink} to={"/signup"} ><Text color={"blue"} _hover={{color:"red"}}>新規登録</Text></Link>
                    </Center>
                </form>
            </Box>
        </Box>
      </Flex>
    </>
    );
}

export default SignIn;