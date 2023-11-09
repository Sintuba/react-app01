import React from "react";
import style from "../css/timeline.module.css";
import {Tab,Tabs,TabList,TabPanel} from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import styled from "@emotion/styled";

import Button from "../component/Button";

const MainContainer = () =>{
  return(
    <>
      <article className={style.MainContainer}>
        <Tabs>
          <TabList>
            <Tab>すべてのさけび</Tab>
            <Tab>フォロワーのさけび</Tab>
            <Tab>自分のさけび</Tab>
          </TabList>
            <TabPanel>
              <h3>AllScreamer</h3>
            </TabPanel>
            <TabPanel>
              <h3>FollwerScreamer</h3>
            </TabPanel>
            <TabPanel>
              <h3>MyScreamer</h3>
            </TabPanel>
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
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <Button className={style.Button}/>
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