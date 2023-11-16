import { Text, Center, Container,Tabs,TabList,Tab,TabPanel, TabPanels, Box} from "@chakra-ui/react";

import React from "react";

const User = () => {
    return(
    <>
       <Box boxShadow={"2px 2px 10px black "}>
            <Text>User:</Text>
            
        </Box>
    </>);
}

const Profile = () =>{
    return(
        <>         
             
 
                <Box position={"relative"} top={"60px"} >

                    <User />

                <Tabs >
                    <TabList alignItems={"center"}>
                        <Tab>いいね</Tab>
                        <Tab>フォロー</Tab>
                        <Tab>フォロワー</Tab>
                    </TabList>
            

                <TabPanels>
                    <TabPanel>
                        <Box  >
                            いいね
                        </Box>
                    </TabPanel>
                    <TabPanel>
                        <Box>フォロー</Box>
                    </TabPanel>
                    <TabPanel>
                        <Box>フォロワー</Box>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            </Box>
        </>
    );
};


export default Profile;