import React from "react";
import style from "../css/timeline.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import 'react-tabs/style/react-tabs.css';
import myButton from "../component/Button";


const MainContainer = () =>{
  return(
    <>
      <article className={style.MainContainer}>
        <Tabs variant='unstyled'>
          <TabList >
            <Tab selected={{color:"red"}}>すべてのさけび</Tab>
            <Tab>フォロワーのさけび</Tab>
            <Tab>自分のさけび</Tab>
          </TabList>
            <TabPanels>
              <TabPanel>
                <h3>AllScreamer</h3>
              </TabPanel>
              <TabPanel>
                <h3>FollwerScreamer</h3>
              </TabPanel>
              <TabPanel>
                <h3>MyScreamer</h3>
              </TabPanel>
            </TabPanels>
        </Tabs>
      

      </article>
    </>
  );
     
};
const SideContainer = () =>{
  return(
    <>
      <aside className={style.SideContainer}>
          <form action="POST">
            <h3>UserName</h3>
            <div className="Userdata">

            </div>
            <textarea className="Scream_text" name="Scream_text" id="" cols="30" rows="10"></textarea>
            <myButton  size='md'color={"white"} bg={"#84DF4C"}>Scream</myButton>
     
          </form>
      </aside>
    </>
  );
}

const TimeLine = () => {
    return(
    <>
      <main>
          <MainContainer />
          <SideContainer />
      </main>
    </>
    );
};

export default TimeLine;