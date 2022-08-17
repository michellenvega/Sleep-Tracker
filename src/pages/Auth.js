import { useState ,  useContext } from "react";
import Axios from 'axios';
import {LoggedContext} from '../App';
import {UserContext} from '../App';

function Auth() {
  // context
  const [context, setContext] = useContext(LoggedContext);
  const [User, setUser] = useContext(UserContext);


  // sign up details
    const [emailReg, setemailReg] = useState("");
    const [passReg, setpassReg] = useState("");
    const [firstNameReg, setfirstNameReg] = useState("");
    const [lastNameReg, setlastNameReg] = useState("");

  // log in details
    const [emailLog, setemailLog] = useState("");
    const [passLog, setpassLog] = useState("");

  //creation status
  const [createsStatus, setcreatesStatus] = useState("");
  const [Creates, setCreates] = useState(false); // to change vis of message

  // REGISTER
  function register() {
    setCreates(true)
    setcreatesStatus("")
    Axios.post('https://sleep-trackers.herokuapp.com/register', {
      First: firstNameReg,
      Last: lastNameReg, 
      Email: emailReg, 
      Pass: passReg }). then((res) => {
        if(res.data.message){
        setcreatesStatus(res.data.message)}
        
      })
  }

  //login status!
  const [LoginStatus, setLoginStatus] = useState("");
  const [Logins, setLogins] = useState(false); // to change vis of message

  

  // user details
  const [userName, setuserName] = useState("");
  // LOGIN
  function login() {
    setLogins(true);
    setLoginStatus("");
    Axios.post('https://sleep-trackers.herokuapp.com/login', {
      email: emailLog, 
      pass: passLog })
      .then((res) => { 
        if(res.data.message){
        setLoginStatus(res.data.message);
        setuserName('Welcome, ' + res.data.result[0].firstName + ' ' +res.data.result[0].lastName)
        setContext("true")
        getInfo(emailLog)
        }
      })
  }

  // get user info
  function getInfo(emailL){
    Axios.post('https://sleep-trackers.herokuapp.com/userinfo', {
      email: emailL})
      .then((res) => { 
        if(res.data){
          let UserInfo = {
            firstName: res.data.result[0].firstName,
            lastName: res.data.result[0].lastName,
            email: res.data.result[0].email,
            userID: res.data.result[0].idUsers
          }
          setUser(UserInfo)
        
        }
      })
  }


  // hide and show cards
  const [createVis, setcreateVis] = useState(false);
  const [logVis, setlogVis] = useState(true);
  function toggleVis ()  {
    setcreateVis(!createVis);
    setlogVis(!logVis);
  }


  
    return (

      <div>
       {/* SIGN UP */}
       {createVis && 
       <div className="register" id="registerCard">
        <h1>create your account</h1>
        <h3>You are one step closer to tracking just how many sheep you can count in your sleep.</h3>
       
        <div className="info">
        {/* first name, last name, email, password */}
        <input type="text" placeholder="First Name" 
        onChange={ (k) =>{
          setfirstNameReg(k.target.value);
        }
        }
        ></input>
        <input type="text" placeholder="Last Name"
        onChange={ (k) =>{
          setlastNameReg(k.target.value);
        }
        }></input>
        <input type="email" placeholder="Email"
        onChange={ (k) =>{
          setemailReg(k.target.value);
        }
        }></input>
        <input type="password" placeholder="Password"
        onChange={ (k) =>{
          setpassReg(k.target.value);
        }
        }></input>
        <button onClick={register}>Register</button>
        </div>
        <br></br>
        <button id="switchtoLog" onClick={ toggleVis }>Log into your account</button>
        {Creates && <h2>{createsStatus}</h2>}
       </div>

      }
       {/* LOG IN */}
       {logVis && 
       <div className="login" id="loginCard">
        <h1>log into your account</h1>
        <div className="info">
        {/* email, password */}
        <input type="email" placeholder="Email"
        onChange={ (k) =>{
          setemailLog(k.target.value);
        }}
        ></input>
        <input type="password" placeholder="Password"
         onChange={ (k) =>{
          setpassLog(k.target.value);
        }}
        ></input>
        <button onClick={login}>Login</button>
        </div>
        <br></br>
        {!Logins && 
        <button id="switchtoCreate" 
        onClick={ toggleVis }
        >Don't have an account? </button>
        }
        {Logins &&<div>
      <h1>{ LoginStatus }</h1>
      <h2>{userName}</h2>
      </div>}
       </div>}
      </div>
    );
  }
  
  export default Auth;

  