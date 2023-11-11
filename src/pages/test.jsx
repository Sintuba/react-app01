import React from "react";
import { ChakraProvider,Flex, Box, Heading, Input,Textarea,Button, Text, VStack , Container } from "@chakra-ui/react";

const Test = () => {
    return(

        <Flex minH="100vh" direction="row">
<Box width="800px" p={8} borderWidth={1} borderRadius={8} boxShadow="lg">
  <Heading mb={4}>投稿一覧</Heading>
  {/* 投稿の表示部分 */}
  <VStack spacing={4}>
    <Box  borderWidth={1} p={4} borderRadius={8}>
    <Heading fontSize="lg">投稿のタイトル</Heading>
    <p>投稿の内容がここに表示されます。</p>
    </Box>
    {/* 他の投稿も同様に表示 */}
  </VStack>

  {/* 投稿用フォーム */}
  <Box mt={8}>
    <Heading mb={4}>新規投稿</Heading>
    <form>
      <VStack spacing={4}>
        <Textarea placeholder="投稿内容" />
        <Button colorScheme="teal" type="submit">
          投稿する
        </Button>
      </VStack>
    </form>
  </Box>
</Box>
</Flex>


    );
};

export default Test;