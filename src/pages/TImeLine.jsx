import React from "react";
import style from "../css/timeline.module.css";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import 'react-tabs/style/react-tabs.css';
import ScreamButton from "../component/Button";


const MainContainer = () =>{
  return(
    <>
      <article className={style.MainContainer}>
        <Tabs variant='soft-rounde'>
          <TabList  className={style.tabList}>
            <Tab><p>すべてのさけび</p></Tab>
            <Tab><p>フォロワーのさけび</p></Tab>
            <Tab><p>自分のさけび</p></Tab>
          </TabList>
            <TabPanels>
              <TabPanel >
                <h3 className={style.tabPanel}>AllScreamer</h3>
              </TabPanel>
              <TabPanel >
                <h3 className={style.tabPanel}>FollwerScreamer</h3>
              </TabPanel>
              <TabPanel >
                <h3 className={style.tabPanel}>MyScreamer</h3>
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
    <div className={style.formWrapper}>
              <form action="POST">
                <h3>UserName</h3>
                <div className="Userdata">
    
                </div>
                <textarea className="Scream_text" name="Scream_text" ></textarea>
                
                <ScreamButton>Scream</ScreamButton>
         
              </form>
    </div>
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