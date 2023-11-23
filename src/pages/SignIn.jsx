import React from "react";

import {Text,Flex,CSSReset,Box,Heading,FormControl,FormLabel,Input,Center,Button } from "@chakra-ui/react";
import axios from 'axios';
import {useForm} from 'react-hook-form';
import { NavLink,Link,Routes,Route,useNavigate} from "react-router-dom";
import SignUp from "./Signup";


const SignIn = () =>{

    
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
                <form >
                    <FormControl mt={4}>
                        <FormLabel fontWeight={"1rem"}>ユーザー名</FormLabel>
                        <Input type="text" placeholder="ユーザー名" />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>パスワード</FormLabel>
                        <Input type="password" placeholder="パスワード" />
                    </FormControl>
              
                    <Center>
                        <Button onClick={""}  color={"white"} bg="#84DF4C" mt={4} type="submit">
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