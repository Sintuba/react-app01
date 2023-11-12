'use client'
// react-icons↓
import { IoPersonCircleOutline } from "react-icons/io5";
import {BiDoorOpen} from "react-icons/bi"; import{BsCardText} from "react-icons/bs";import{LiaToolsSolid} from "react-icons/lia"
// react-icons↑
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
  Divider,
  Container,
  Show, Hide,
  Fade, ScaleFade, Slide, SlideFade, Collapse //transition
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, PhoneIcon, SettingsIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import { Component } from 'react';

const NaviList = ()=> {
  return(
    <>
              
              <Text 
              textDecoration="none" 
              as={NavLink} to="timeline"
              fontSize="1rem"
              fontWeight={"bolder"}
              textShadow={".2px 1px black"}
              color={"white"}
              margin={"0 .9rem"}
              ><Flex><Box  m={".8rem 1rem"} justifyContent={"center"}><BsCardText fontSize={"2rem"} /></Box>タイムライン</Flex></Text>
           
              <Text 
              textDecoration="none" 
              as={NavLink} 
              to="profile" 
              fontSize="1rem"
              fontWeight={"bolder"}
              textShadow={".2px 1px black"}
              color={"white"}
              margin={"0 .9rem"}
              ><Flex>
                  <Box m={".7rem 1rem"} justifyContent={"center"}>
                    <IoPersonCircleOutline   fontSize={"2rem"} />
                  </Box>プロフィール
                </Flex></Text>

              <Text 
              
                textDecoration="none" 
                as={NavLink} 
                to="setting" 
                fontSize="1rem"
                fontWeight={"bolder"}
                textShadow={".2px 1px black"}
                color={"white"}
                margin={"0 .9rem"}
              ><Flex><Box  m={".8rem 1rem"} justifyContent={"center"}><LiaToolsSolid fontSize={"2rem"} /></Box>設定</Flex></Text>

              <Text 
                textDecoration="none" 
                as={NavLink} 
                fontSize="1rem"
                fontWeight={"bolder"}
                textShadow={".2px 1px black"}
                color={"white"}
                margin={"0 .9rem"}
              ><Flex><Box  m={".8rem 1rem"}justifyContent={"center"}><BiDoorOpen fontSize={"2rem"} /></Box>ログアウト</Flex></Text>
        
    </>
  );
}

const Logo = () =>{
  return(
    <>
              <Heading mr={"2rem"} mt={"2"} textShadow={"2.5px 3.3px  black"} fontSize="2rem">Screamer</Heading>

    </>
  );
};




const Header02 = () => {
  const {isOpen,onOpen,onClose} = useDisclosure();
  const HamButton = () =>{
    return(
      <>
                <IconButton onClick={onOpen} m={"0 .4rem"} fontSize={"2.5rem"} bg={"#84DF4C"} top={2} aria-label='Search database' icon={<HamburgerIcon/>}/>
             
      </> 
    );
  }
  const CloseButton = () =>{
    return(
      <>
                <IconButton onClick={onClose} m={"0 .4rem"} fontSize={"2.5rem"} bg={"#84DF4C"} top={2} aria-label='Search database' icon={<HamburgerIcon/>}/>

      </>
    );
  }
  return(
<>
      {/* ヘッダー */}
      <Box onClick={onOpen}  zIndex={"11"} top={"0"} position={"fixed"} boxShadow={"1px 2px 5px black"} width={"100%"} height={"60px"}  bg={"#84DF4C"}>
        <Flex color={"white"} justifyContent={"space-around"}>
        <Logo />
        
          <Box  lineHeight={"60px"}>
            {/* ヘッダー内のナビのリンクをメディアクエリでShow,Hideで切り替えrow,column */}
            <Show above='840px' >
                <Flex  justifyContent={"space-evenly"}>
                  <NaviList />
                </Flex>
            </Show>
            {/* ハンバーガーメニュー */}
            <Hide above='840px'>
              <Flex position={"relative"}  justifyContent={"space-between"}>
                <HamButton />
              </Flex>
            </Hide>

            </Box>
        </Flex>
      </Box>
      <Slide direction='top'  in={isOpen}>
                <Box onClick={onClose}  position={"relative"} zIndex={"1"}  minW={"400px"}  textAlign={"center"} h="100vh" w="100%" bg={"#84DF4C"} >
                      
                      <Flex justifyContent={"center"} flexDirection={"column"}>
                      <Flex ml={"6.5rem"}>
                          <Logo  />
                          <CloseButton  />
                      </Flex>
                        <NaviList  onClick={onOpen} />   
                      </Flex>
                </Box>
                  </Slide>
</>
  );
};

export default Header02;