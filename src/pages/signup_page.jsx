import React from "react";
// import style from "../css/signup.module.css"
import { Box,CSSReset,Flex,Heading,FormControl,FormLabel,Input,Button, Center } from "@chakra-ui/react";
const signup_page = () =>{
    return(
        <>
       <CSSReset />
      <Flex  align="center" justify="center" height="100vh">
        {/* wrapper */}
        <Box  bg={"white"} borderRadius="16px 16px 0 0" maxWidth="400px" borderWidth={1}  boxShadow="lg">
          <Box borderRadius="16px 16px 0 0"  bg={"#84DF4C"} textAlign="center">
            <Heading fontSize={"2rem"} p={"20px 60px"} color={"white"}>ユーザー登録</Heading>
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

export default signup_page;