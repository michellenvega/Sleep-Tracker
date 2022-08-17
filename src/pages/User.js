import { useContext } from 'react';
import {LoggedContext} from '../App';
import {UserContext} from '../App';
import Card from '@mui/material/Card';


function User() {
    const [context, setContext] = useContext(LoggedContext);
    const [UserInfo, setuser] = useContext(UserContext)

    // reassign info
    const name = String(UserInfo.firstName) + ' ' + String(UserInfo.lastName)

    return (
      <div>
        <h1>Account Information</h1>
        <Card variant="outlined">
        <p>Connected to server: {context}</p>
        <p>Name: {name}</p>
        <p>Email: {UserInfo.email}</p>
        </Card>
      </div>
    );
  }
  
  export default User;
  