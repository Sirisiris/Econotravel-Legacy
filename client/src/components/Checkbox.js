import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export default function Checkboxes() {
  return (
    <div>
      <Checkbox {...label} defaultChecked color='success' sx={{borderRadius:"50%", display:"flex"}}/>
      <Checkbox {...label} defaultChecked color='success'/>
      <Checkbox {...label} defaultChecked color='success'/>
      
       
    </div>
  );
}