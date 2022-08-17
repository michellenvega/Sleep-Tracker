import {UserContext} from '../App';
import { useContext } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {useState} from "react";
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Home() {
  const [UserInfo, setuser] = useContext(UserContext)
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
    return (
      <div className='homecontent'>
        <h1>Track your sleeping habits!</h1>
        <p>Want to have a safe place to track how long you are sleeping each night? 
          Our sleep tracker will provide you with just what you need! </p>
          <br></br>
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} 
      sx={{color: '#253C78', border: '2px solid #2176AE',mb: 0.6}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            About
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>Need help tracking how long you're snoozing away?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Sleep Tracker is an easy and efficient way to document how many hours you're in dreamland each night!
            
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')} 
      sx={{color: '#253C78', border: '2px solid #2176AE', mb: 0.6}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>How to Get Started</Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Hurry! It's as easy as 1, 2, 3!
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Make an account, add an entry, view your entires, and delete any sleep time entries!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')} 
      sx={{color: '#253C78', border: '2px solid #2176AE', mb: 0.6}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Got another question?
          </Typography>

        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Contact me at michellenvega@ucla.edu for more assistance!
          </Typography>
        </AccordionDetails>
      </Accordion>
      

      <h4>Please be advised that this site is constantly being updated and maintained.
        <br></br>
        If there are any issues you would like to let me know about, feel free
        <br></br>
        to contact me at michellenvega@ucla.edu. Thank you!
      </h4>

      </div>
    );
  }
  
  export default Home;
  