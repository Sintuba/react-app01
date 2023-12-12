import { Text, Center, Container,Tabs,TabList,Tab,TabPanel, TabPanels, Box} from "@chakra-ui/react";
import React,{useState,useEffect} from "react";
import { useAuth } from "../AuthContext";




const User = () => {
    const[userName,setUserName] = useState("");
    let {user} = useAuth();
    
    useEffect(() =>{
        if(user && user.id){
             fetch('${process.env.REACT_APP_URL}/users')
        .then(response => response.json())
        .then(data => {
            if(data.length > 0){
                setUserName(data[0].name);
            }
        })
        .catch(error => console.error('Error',error));
        };
       
    },[user]);
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