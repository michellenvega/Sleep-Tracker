import { useState ,  createContext } from "react";
import './App.css';
import NavBar from './NavBar'
import Auth from './pages/Auth'
import Entries from './pages/Entries/Entries'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"
import User from './pages/User'
import AddNew from "./pages/Entries/AddNew";


export const LoggedContext = createContext();
export const UserContext = createContext();


function App() {

//notify authentication
const [AuthStatus, setAuthStatus] = useState("false");
const UserInfo = {
  firstName: "",
  lastName: "",
  email: "",
  userID: 0
}

const [userinfo, setuserinfo] = useState(UserInfo);

let access = false
if(AuthStatus == "true")
  access = true

  return (
    <div className="App">
  <UserContext.Provider value={[userinfo, setuserinfo]}>
    <LoggedContext.Provider value={[AuthStatus, setAuthStatus]}>
      <NavBar />
    <div className='container'>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/auth" element= {<Auth />} />
        {access && 
        <Route path="/entries" element= {<Entries /> } />}
        {access &&
        <Route path="/loginstatus" element= {<User />} />}
        <Route path="/entries/addnew" element ={<AddNew />} />

      </Routes>
    </div>
    </LoggedContext.Provider>
    </UserContext.Provider>
    </div>
  );
}

export default App;
