import React from "react";
import style from "../css/signin.module.css";
import { Link,Routes,Route} from "react-router-dom";
import SignUp from "./signup_page";
const SignIn = () =>{

    return(
    <>
         <main>
                <div className={style.signIn}>
                    <div className={style.formWrapper}>
                        <h2 className={style.form__title}>サインイン</h2>
        
                        <div className={style.form}>
                            <div className="form__name">
                                <label htmlFor="name">
                                    <p className={style.name_text}>Username</p>
                                    <input type="text" name="name" placeholder="ユーザ名を入力して下さい" />
                                </label>
                            </div>
                            <div className="form__pass">
                                <label htmlFor="pass">
                                    <p className={style.pass_text}>Password</p>
                                    <input type="password" name="pass" placeholder="パスワードを入力して下さい" />
                                </label>
                            </div>
    
                                <div className="form__submit">
                                    <p><input type="button" value="サインイン" /></p>
                                </div>
                                <Link to="/signup">
                                    新規登録
                                </Link>
                                <Routes>
                                    <Route exact path="/singup" component={SignUp}/>
                                </Routes>
    
                         </div>
                    </div>
                </div>
         </main>
    </>
    );
}

export default SignIn;