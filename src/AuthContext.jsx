import React ,{createContext,useState,useContext,useEffect} from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{
    const storedUserId = localStorage.getItem('userId');//userIdをローカルストレージから取得しサインイン状態かの判定に使用する
    const [isAuthenticated,setIsAuthenticated] = useState(false);//サインイン状態を管理する
    const [userId,setUserId] = useState(null);//userIdの状態管理
    const [sessionId,setSessionId] = useState(localStorage.getItem("sessionId"));//セッションIDの状態管理


    useEffect(()=>{
        //ローカルストレージにuserIdがあればuserId（null）のステートににuserIdをセットする
        //その後isAuthenticatedステートをtrueに変更
        if(storedUserId){
            setUserId(storedUserId);
            setIsAuthenticated(true);
        }
    },[]);

    useEffect(() =>{
        //セッションを一定周期ごとに更新する。
        const interval = setInterval(() => {
            updateSessionId();//下記のインターバルを経て実行
        },1000*60*60*24*7 );
//1000*60*60*24*7
        return () => clearInterval(interval);
    },[]);

    const updateSessionId = () =>{ 
        //useEffectで設定した周期で実行され新しいセッションIDを作成しローカルストレージに上書きする
        const newSessionId = generateSessionId();
            setSessionId(newSessionId);
            localStorage.setItem("sessionId",newSessionId)
        
    };

    const generateSessionId = () =>{
        //セッションIDを生成
        return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
    
    };


    //signin,signout関数でisAuthenticatedの状態を更新しDefaultコンポーネントのRoutingを切り替える

    const signin = (newUserId) =>{
        //サインインの際にローカルストレージにuserId
        localStorage.setItem('userId',newUserId)
        setUserId(newUserId);
        setIsAuthenticated(true);
        updateSessionId();
    };

    const signout = () =>{
        //isAuthenticatedをfalseとし、ローカルストレージの情報を削除して
        //エクスポート先でサインイン画面にリダイレクトさせることでサインアウト
        setIsAuthenticated(false);
        setUserId(null);
        localStorage.removeItem('userId');
        localStorage.removeItem("sessionId");
    };

    return(
        //valueで指定したpropsを共有したいコンポーネントをラップする事でツリー内で使用可能
        //使用するコンポーネント内ではインポートをし、インスタンスを作成する必要がある。
        //ローカルストレージに保存されたuserIdがあればisAuthenticatedがtrueを返しユーザー認証される。
        <AuthContext.Provider value={{isAuthenticated,userId,sessionId,signin,signout}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
//インポート先DefaultコンポーネントでuseAuthフックを使用してisAuthenticatedの値を取得
//このisAuthenticatedの真偽値に基づいて条件付きレンダリングをし、承認されていなければサインアウト、サインアップの表示、承認されていればヘッダー、ルートの表示を行う。