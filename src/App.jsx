import Header from "./Header";
import SignIn from "./Sign_in";
import SignUp from "./signup_page";
import { BrowserRouter,Link,Switch,Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Header />
      <main>
      <SignUp />
      
          <Routes>
            <Route  path="/" component={SignIn} />
            <Route  path="/signup" component={SignUp} />
          </Routes>
        
    </main>
</BrowserRouter>
    </>
  
  );
}

export default App;
