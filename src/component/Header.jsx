import style from "../css/header.module.css";
import { Link, Route, Routes } from "react-router-dom";
// import SignIn from "../pages/Sign_in";
import  React, {useState} from 'react';

import TimeLine from "../pages/TimeLine";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/signup_page";

const Navigation = () =>{
    return(
        <>
          <nav className={style.navi}>
                    <ul className={style.navi__list}>
                        <li className={style.navi__list__item}><Link to="/timeline" className={style.navi__list__item_link}  >タイムライン</Link></li>
                        <li className={style.navi__list__item}><Link to="/profile" className={style.navi__list__item_link}  >プロフィール</Link></li>
                        <li className={style.navi__list__item}><Link to="/setting" className={style.navi__list__item_link}  >設定</Link></li>
                        <li className={style.navi__list__item}><Link to="/signin" className={style.navi__list__item_link}  >ログアウト</Link></li>
                    </ul>
                </nav>
        </>

    );
}

const Header = () => {
    return (
        <>
            <header className={style.header}>
                <h1 >Screamer</h1>
                <Navigation />
            </header>

        </>
    );
};

export default Header;