import style from "../css/header.module.css";
import { Link, Route, Routes ,NavLink} from "react-router-dom";
// import SignIn from "../pages/Sign_in";
import  React, {useState} from 'react';

// import TimeLine from "../pages/TimeLine";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/signup_page";

const Navigation = () =>{
    return(
        <>
          <nav className={style.navi}>
                    <ul className={style.navi__list}>
                        <li className={style.navi__list__item}><NavLink style={({ isActive }) =>(isActive ? { fontSize:"x-large" } : undefined)} to="/timeline" className={style.navi__list__item_link}  >タイムライン</NavLink></li>
                        <li className={style.navi__list__item}><NavLink style={({ isActive }) => (isActive ? { fontSize:"x-large" } : undefined)} to="/profile" className={style.navi__list__item_link}  >プロフィール</NavLink></li>
                        <li className={style.navi__list__item}><NavLink style={({ isActive }) => (isActive ? { fontSize:"x-large" } : undefined)} to="/setting" className={style.navi__list__item_link}  >設定</NavLink></li>
                        <li className={style.navi__list__item}><NavLink  to="/signin" className={style.navi__list__item_link}  >ログアウト</NavLink></li>
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