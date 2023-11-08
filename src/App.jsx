import Header from "./Header";
import SignIn from "./Sign_in";
import { BrowserRouter,Link,Switch,Route, Routes } from "react-router-dom";
import SignUp from "./signup_page";

const App = () => {
  return (
    <>
      <Header />
  
        <BrowserRouter>
          <Routes>
            <Route exact path="/" Component={SignIn} />
            <Route exact path="/singup" Component={SignUp} />
            
          </Routes>
        </BrowserRouter>

    </>
  
  );
}

export default App;
