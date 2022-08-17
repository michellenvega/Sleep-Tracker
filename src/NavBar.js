import {Link, useMatch, useResolvedPath} from "react-router-dom"
import { LoggedContext } from './App';
import {UserContext} from './App';
import { useContext } from 'react';

function NavBar() {
  const [context, setContext] = useContext(LoggedContext);
  const [UserInfo, setuserinfo] = useContext(UserContext)

  let access = false
  if(context == "true")
    access = true

  // log out
  function Logout(){
    setContext("false")
    let Users = {
    firstName: "",
    lastName: "",
    email: "",
    userID: 0
    }
    setuserinfo(Users)
  }

  
  return (
    <nav className="nav">
      {/* site title */}
      <Link to="/" className='site-title'>home page</Link>
      {/* list of nav items */}
      <ul>
      {!access && 
        <Customlink to="/auth">Login/Sign-up</Customlink>
      }
      {access && <div>
        <Customlink to="/entries">Sleep Entries</Customlink>
        <Customlink to="/loginstatus">Account</Customlink>
        <li>
        <Link id="custom" onClick={Logout} to="/">Log Out</Link>
        </li>
        </div>}
      </ul>
    </nav>
  );
}

export default NavBar;


function Customlink( {to, children,...props} ) {
  const resPath = useResolvedPath(to)
  const isActive = useMatch({path: resPath.pathname, end: true})

return(
    <li className={ isActive ? "active" : ""}>
      <Link to= {to} {...props}> {children} </Link>
    </li>
)
}