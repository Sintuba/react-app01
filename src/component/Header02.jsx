'use client'

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Text,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Heading,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';


const Header02 = () => {
  return(
<>
{/* 作成後mainは除く */}

    <Box   w="100%"h={"1000" } top="50px"display={"grid"} justifyItems={"center"} >
      <Box p={"0 2.5rem"} boxShadow={"1px 2px 5px black"} width={"100%"} height={"60px"}  bg={"#84DF4C"}>
        <Flex color={"white"} justifyContent={"space-around"}>
          <Heading mt={"2"} textShadow={"2px 2px  black"} fontSize="2rem">Screamer</Heading>

          <Box w={"40%"} lineHeight={"60px"}>
            <Flex  justifyContent={"space-evenly"}>

              <Text 
              textDecoration="none" 
              as={NavLink} to="timeline"
              fontSize=".9rem"
              fontWeight={"bolder"}
              textShadow={".2px 1px black"}
              color={"white"}
              >タイムライン</Text>

              <Text 
              textDecoration="none" 
              as={NavLink} 
              to="profile" 
              fontSize=".9rem"
              fontWeight={"bolder"}
              textShadow={".2px 1px black"}
              color={"white"}
              >プロフィール</Text>

              <Text 
                textDecoration="none" 
                as={NavLink} 
                to="setting" 
                fontSize=".9rem"
                fontWeight={"bolder"}
                textShadow={".2px 1px black"}
                color={"white"}
              >設定</Text>

              <Text 
                textDecoration="none" 
                as={NavLink} 
                fontSize=".9rem"
                fontWeight={"bolder"}
                textShadow={".2px 1px black"}
                color={"white"}
              >ログアウト</Text>

            </Flex>
          </Box>
        </Flex>
      </Box>
    </Box>

</>
  );
};

export default Header02;