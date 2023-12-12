import { Text, Center, Container,Tabs,TabList,Tab,TabPanel, TabPanels, Box} from "@chakra-ui/react";
import React,{useState,useEffect} from "react";
import { useAuth } from "../AuthContext";




const User = () => {
    const[userName,setUserName] = useState("");
    // let {user} = useAuth();
    
 
    return(
    <>
       <Box  >
            <Text>User:{userName}</Text>
            
        </Box>
    </>);
}

const Follow = () =>{
    return(
        <>
           <Box>フォロー</Box>
        </>
    );
};
const Follower = () =>{
    return(
        <>
             <Box>フォロワー</Box>
        </>
    );
};

const Profile = () =>{
    return(
        <>         
            

        <Box  position={"relative"}  >
            <Box textAlign={"center"}>
                 <User />
            </Box>
           

            <Tabs >
                <TabList alignItems={"center"}>
                    <Tab>フォロー</Tab>
                    <Tab>フォロワー</Tab>
                </TabList>
        

                <TabPanels>
                    <TabPanel>
                        <Follow />
                    </TabPanel>
                    <TabPanel>
                        <Follower />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
        </>
    );
};


export default Profile;