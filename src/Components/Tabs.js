import React from 'react';
import { Button } from '@material-ui/core';


const Tabs = (props) => (
  
  <ul className='country_info'>
   <li>
     <Button fullWidth={true} onClick={props.getCountryNews}> 
     JAPAN
     </Button>
  </li>

   <li>
       <Button fullWidth={true} onClick={props.getCountryNews}>
       CANADA
       </Button>
    </li>

   <li> 
      <Button fullWidth={true} variant="contained" color="primary" className={props.button} onClick={props.getNews}>
      Search Results
      </Button>
    </li>

    <li>  
      <Button fullWidth={true} onClick={props.getCountryNews}> 
      AUSTRALIA
      </Button>
    </li>

   <li>  
      <Button fullWidth={true} onClick={props.getCountryNews}>
      UNITED KINGDOM
      </Button>
     </li>

  </ul>
)

export default Tabs
