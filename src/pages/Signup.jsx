import React from "react";
// import style from "../css/signup.module.css"
import { Box,CSSReset,Flex,Heading,FormControl,FormLabel,Input,Button, Center } from "@chakra-ui/react";
const Signup = () =>{
    return(
        <>
                 <CSSReset />
      <Flex  align="center" justify="center" position={"relative"} top={"30px"} >
        {/* wrapper */}
        <Box  bg={"white"} borderRadius="8px" maxWidth="400px" borderWidth={1}  boxShadow="lg">
            <Box borderRadius="16px 16px 0 0"  bg={"#84DF4C"} textAlign="center">
                <Heading fontSize={"1.4rem"} textShadow={"1px 1px 5px black"} p={"20px 60px"} color={"white"}>サインアップ</Heading>
            </Box>
          {/* フォーム */}
            <Box p={"10"}>
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