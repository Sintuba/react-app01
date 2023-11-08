import style from "../css/header.module.css";
import { Link,Route,Routes} from "react-router-dom";
// import SignIn from "../pages/Sign_in";

import TimeLine from "../pages/TImeLine";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/signup_page";
const Header = () => {


    return(
        <>
        <header>
            <h1 >Screamer</h1>
            <nav className={style.navi}>
                <ul className={style.navi__list}>
                    <li className={style.navi__list__item}><Link to="/" className={style.navi__list__item_link}  >タイムライン</Link></li>
                    <li className={style.navi__list__item}><Link to="/profile" className={style.navi__list__item_link}  >プロフィール</Link></li>
                    <li className={style.navi__list__item}><Link to="/setting" className={style.navi__list__item_link}  >設定</Link></li>
                    <li className={style.navi__list__item}><Link to="/signin" className={style.navi__list__item_link}  >ログアウト</Link></li>
                </ul>
            </nav>
        </header>

        {/* <Routes>
            <Route path="/" component={<TimeLine />} />
            <Route path="/signin" component={<SignIn />} />
        </Routes> */}
        </>
    );
};

export default Header;