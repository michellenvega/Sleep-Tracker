import {useState} from "react";
import {Link} from "react-router-dom"
import { UserContext} from '../../App';
import { useContext } from 'react';
import Axios from 'axios';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button'





function AddNew() {
    // info for entry
    const [startmonth, setStartmonth] = useState("1")
    const [startday, setStartday] = useState("1")
    const [starthour, setStarthour] = useState("00")
    const [startmin, setStartmin] = useState("00")

    const [endmonth, setEndmonth] = useState("1")
    const [endday, setEndday] = useState("1")
    const [endhour, setEndhour] = useState("00")
    const [endmin, setEndmin] = useState("00")

    const [UserInfo, setuser] = useContext(UserContext)
    const [status, setStatus] = useState(false)

    function addEntry() {
        Axios.post('https://sleep-trackers.herokuapp.com/addnewentry', {
            userID: UserInfo.userID, 
            startTime: "2022-" + startmonth + "-" + startday + " " + starthour + ":" + startmin + ":00",
            endTime: "2022-" + endmonth + "-" + endday + " " + endhour + ":" + endmin + ":00"
            }
            )
            .then((res) => { 
                if(res){
                console.log(res)
                setStatus(true)
                }
      })
    }
    
        const handlestartmonth = (event) => {
            setStartmonth(event.target.value);
        };
        const handlestartday = (event) => {
            setStartday(event.target.value);
        };
        const handlestarthour = (event) => {
            setStarthour(event.target.value);
        };
        const handlestartmin = (event) => {
            setStartmin(event.target.value);
        };

        const handleendmonth = (event) => {
            setEndmonth(event.target.value);
        };
        const handleendday = (event) => {
            setEndday(event.target.value);
        };
        const handleendhour = (event) => {
            setEndhour(event.target.value);
        };
        const handleendmin = (event) => {
            setEndmin(event.target.value);
        };

    return ( <div className="center">
        <h1>add new entry</h1>
        <h3>Start:</h3>
      
        <label>
        Date  <br></br>
        <select value={startmonth} onChange={handlestartmonth}>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
           /  
        <select value={startday} onChange={handlestartday}>
        <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <br></br><br></br>
        Time  <br></br>
        <select value={starthour} onChange={handlestarthour}>
        <option value="00">0</option>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
        </select>
        :
        <select value={startmin} onChange={handlestartmin}>
          <option value="00">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
        </label>
   
        <h3>End:</h3>

       <label>
      Date  <br></br>
        <select value={endmonth} onChange={handleendmonth}>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
           /  
        <select value={endday} onChange={handleendday}>
        <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
          <option value="24">24</option>
          <option value="25">25</option>
          <option value="26">26</option>
          <option value="27">27</option>
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
        </select>
        <br></br><br></br>
        Time  <br></br>
        <select value={endhour} onChange={handleendhour}>
          <option value="00">0</option>
          <option value="01">1</option>
          <option value="02">2</option>
          <option value="03">3</option>
          <option value="04">4</option>
          <option value="05">5</option>
          <option value="06">6</option>
          <option value="07">7</option>
          <option value="08">8</option>
          <option value="09">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
          <option value="13">13</option>
          <option value="14">14</option>
          <option value="15">15</option>
          <option value="16">16</option>
          <option value="17">17</option>
          <option value="18">18</option>
          <option value="19">19</option>
          <option value="20">20</option>
          <option value="21">21</option>
          <option value="22">22</option>
          <option value="23">23</option>
        </select>
        :
        <select value={endmin} onChange={handleendmin}>
          <option value="00">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
        </label>
        <br></br><br></br>
        <Button variant="contained" onClick={addEntry}>Add</Button>
        {status &&       <Alert severity="success" maxWidth="sm">Entry has been added!</Alert>
}
        <br></br><br></br>
        <Button variant="outlined" >
        <Link to="/entries">Back to All Entries</Link>
        </Button>
        </div>
     );
}

export default AddNew;