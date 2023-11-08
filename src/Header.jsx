import style from "./css/header.module.css";
import { Link,useNavigate,Route,Routes} from "react-router-dom";

const Header = () => {

    const navigation = useNavigate();

    return(
        <>
        <header>
            <h1 >Screamer</h1>
            <nav className={style.navi}>
                <ul className={style.navi__list}>
                    <li onClick={()=>navigation('/')} className={style.navi__list__item}><a className={style.navi__list__item_link} href="#" >タイムライン</a></li>
                    <li className={style.navi__list__item}><a className={style.navi__list__item_link} href="#" >プロフィール</a></li>
                    <li className={style.navi__list__item}><a className={style.navi__list__item_link} href="#" >設定</a></li>
                    <li className={style.navi__list__item}><a className={style.navi__list__item_link} href="#" >ログアウト</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
};

export default Header;