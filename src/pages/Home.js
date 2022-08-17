import {UserContext} from '../App';
import { useContext } from 'react';


function Home() {
  const [UserInfo, setuser] = useContext(UserContext)

    return (
      <div>
        <h1>HOME</h1>
        <p>Name: {UserInfo.firstName} {UserInfo.lastName}</p>
        <p>Email: {UserInfo.email}</p>
      </div>
    );
  }
  
  export default Home;
  