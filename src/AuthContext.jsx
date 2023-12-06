import React ,{createContext,useState,useContext,useEffect} from 'react';
export const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{
    const storedUserId = localStorage.getItem('userId');
    const [isAuthenticated,setIsAuthenticated] = useState(false);
    const [userId,setUserId] = useState(null);
    const [sessionId,setSessionId] = useState(localStorage.getItem("sessionId"));


    useEffect(()=>{
        if(storedUserId){
            setUserId(storedUserId);
            setIsAuthenticated(true);
        }
    },[]);

    useEffect(() =>{
        const interval = setInterval(() => {
            updateSessionId();
        },1000*60*60*24*7 );
//1000*60*60*24*7
        return () => clearInterval(interval);
    },[]);

    const updateSessionId = () =>{ 
        const newSessionId = generateSessionId();
            setSessionId(newSessionId);
            localStorage.setItem("sessionId",newSessionId)
        
    };

    const generateSessionId = () =>{
        return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
    
    };


    //signin,signout関数でisAuthenticatedの状態を更新しDefaultコンポーネントのRoutingを切り替える

    const signin = (newUserId) =>{
        localStorage.setItem('userId',newUserId)
        setUserId(newUserId);
        setIsAuthenticated(true);
        updateSessionId();
    };

    const signout = () =>{
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
//この値に基づいて条件付きレンダリングをし、承認されていればヘッダー、ルートの表示を行う。