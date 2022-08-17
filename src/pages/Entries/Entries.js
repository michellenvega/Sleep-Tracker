import {Link} from "react-router-dom"
import {useState} from "react";
import { UserContext} from '../../App';
import { useContext } from 'react';
import Axios from 'axios';
import { Table, Body, Row, Cell, Header, HeaderRow, HeaderCell } from '@table-library/react-table-library/table';
import { useRowSelect,SelectClickTypes } from '@table-library/react-table-library/select';
import MaterialCheckbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';


function Entries() {
  const [load, setLoad] = useState(false)
  const [UserInfo, setuser] = useContext(UserContext)
  const [list, setList] = useState([{User: 1}])
  const [deleted, setdelete] = useState(false)

  function callAPI() {
    Axios.post('https://sleep-trackers.herokuapp.com/getallentries', {
      userID: UserInfo.userID }
      ).then((res) => { 
        setList(res.data.result)
        setLoad(true)
      })
  }

  function deleterow() {
   for(var i = 0; i <= select.state.ids.length; i++)
    Axios.post('https://sleep-trackers.herokuapp.com/deleteentry', {
      userID: UserInfo.userID ,
      identry: select.state.ids[i],
     }
      ).then((res) => { 
        setList([{User: 1}])
        console.log(res)
        setdelete(true)
        setLoad(false)
       callAPI()
      })
      
  }

  const data = { nodes: list };
 const [selectstatus, setstatus] = useState(true)
  const select = useRowSelect(data, {onChange: onSelectChange, clickType: SelectClickTypes.ButtonClick});

  function onSelectChange(action, state) {
    console.log(action, state);
    if (select.state.ids.length === 0)
      setstatus(true)
      else
      setstatus(false)
  }

    return (
      <div>
        <h1>ENTRIES</h1>
        <Button variant="outlined" >
        <Link id ="addnew" to="/entries/addnew">Add New Entry</Link> </Button>
        <br></br><br></br>

        {!load &&           
        <Button variant="outlined" onClick={callAPI}>
        View all entries
          </Button> }
     {load &&
     <div className="center ">
          <Button variant="outlined" startIcon={<DeleteIcon />} disabled = {selectstatus}
          onClick={ () => {
            deleterow();
          }}>
            Delete
          </Button> <br></br>
      <Table data={data} select={select}>
        {(tableList) => (
          <>
            <Header>
              <HeaderRow className="headd">
                <HeaderCell>Select</HeaderCell>
                <HeaderCell>Start</HeaderCell>
                <HeaderCell>End</HeaderCell>
              </HeaderRow>

            </Header>
            <Body >
              {tableList.map((item) => (
                <Row key={item.identry} item={item} className="rows">
                <Cell stiff>
                  <MaterialCheckbox
                    size="small"
                    checked={select.state.ids.includes(
                      item.identry
                    )}
                    onChange={() =>{
                      select.fns.onToggleById(item.identry);
                       }
                    }
                  />
                </Cell>                  
                <Cell>{item.Start}</Cell>
                  <Cell>{item.End}</Cell>
                </Row>
              ))}
            </Body>
          </>
        )}
      </Table>     
      {     deleted&&  (
       <Alert  classname="alerts" severity="success" maxWidth="sm">Selected entries have been deleted! Please refresh the page.</Alert>
       )
} </div>
}





      </div>
    );
  }
  
  export default Entries;
  