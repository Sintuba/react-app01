'use client'
// react-icons↓
import { IoPersonCircleOutline } from "react-icons/io5";
import {BiDoorOpen} from "react-icons/bi"; import{BsCardText} from "react-icons/bs";
import{LiaToolsSolid} from "react-icons/lia";import{AiOutlineClose}from"react-icons/ai";
// react-icons↑
import {
  Box,
  Flex,
  Center,
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
  Fade, ScaleFade, Slide, SlideFade, Collapse, //transition
  useBoolean
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, PhoneIcon, SettingsIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';
import React,{useContext} from 'react';

const NaviList = ()=> {

  return(
    <>
              
              <Text 
              textDecoration="none" 
              as={NavLink} to={'/'}
              fontSize=".9rem"
              fontWeight={"bolder"}
              textShadow={".2px 1px black"}
              color={"white"}
              margin={"0 .9rem"}
              ><Flex alignItems={"center"}><Box  m={".8rem 1rem"} justifyContent={"center"}><BsCardText fontSize={"1.8rem"} /></Box>タイムライン</Flex></Text>
           
              <Text 
              textDecoration="none" 
              as={NavLink} 
              to="profile" 
              fontSize=".9rem"
              fontWeight={"bolder"}
              textShadow={".2px 1px black"}
              color={"white"}
              margin={"0 .9rem"}
              ><Flex alignItems={"center"}>
                  <Box m={".7rem 1rem"} justifyContent={"center"}>
                    <IoPersonCircleOutline   fontSize={"1.8rem"} />
                  </Box>プロフィール
                </Flex ></Text>

              <Text 
              
                textDecoration="none" 
                as={NavLink} 
                to="setting" 
                fontSize=".9rem"
                fontWeight={"bolder"}
                textShadow={".2px 1px black"}
                color={"white"}
                margin={"0 .9rem"}
              ><Flex alignItems={"center"}><Box  m={".8rem 1rem"} justifyContent={"center"}><LiaToolsSolid fontSize={"1.8rem"} /></Box>設定</Flex></Text>

              <Text 
                textDecoration="none" 
                as={NavLink} 
                fontSize=".9rem"
                fontWeight={"bolder"}
                textShadow={".2px 1px black"}
                color={"white"}
                margin={"0 .9rem"}
              ><Flex alignItems={"center"}><Box  m={".8rem 1rem"}justifyContent={"center"}><BiDoorOpen fontSize={"1.8rem"} /></Box>ログアウト</Flex></Text>
        
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
  // const [flag,setFlag] = useBoolean();
  const {isOpen,onOpen,onClose,onToggle} = useDisclosure(false);
  const HamButton = () =>{
    return(
      <>
                <IconButton onMouseEnter={isOpen.toggle} onClick={onToggle} m={"0 .4rem"} fontSize={"2.5rem"} bg={"#84DF4C"} top={2} aria-label='Search database' icon={isOpen ? <AiOutlineClose color={"white"}/>:<HamburgerIcon color={"white"}/>}/>
      </> 
    );
  }

  return(
<>
      {/* ヘッダー */}
      <Box  zIndex={"11"} top={"0"} position={"fixed"} boxShadow={"1px 2px 5px black"} width={"100%"} height={"60px"}  bg={"#84DF4C"}>
        <Flex color={"white"} justifyContent={"space-around"}>
        <Logo />
        
          <Box   lineHeight={"60px"}>
            {/* ヘッダー内のナビのリンクをメディアクエリでShow,Hideで切り替えrow,column */}
            <Show above='860px' >
                <Flex  justifyContent={"space-evenly"}>
                  <NaviList />
                </Flex>
            </Show>
            {/* ハンバーガーメニュー */}
            <Hide above='860px'>
              <Flex position={"relative"}  justifyContent={"space-between"}>
                <HamButton />
                {/* <ChageButton   /> */}

              </Flex>
            </Hide>

            </Box>
        </Flex>
      </Box>
    
        <Slide  direction='top'   in={isOpen} transition={{exit: {delay: .15}, enter: {duration: 0.6}}}>
                  <Center onResize={onClose}  onClick={onClose}  position={"relative"} zIndex={"1"}   textAlign={"center"} h="100vh" w="100%" bg={"#84DF4C"} >
                        
                        <Flex  justifyContent={"center"} flexDirection={"column"}>
                          <NaviList   onClick={onOpen} />   
                        </Flex>
                  </Center>
        </Slide>
  
</>
  );
};

export default Header02;