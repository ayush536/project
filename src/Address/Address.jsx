import React from 'react'
import "./Address.css"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';

export const Address=()=> {
    function myFunction() {
        alert("Your details has been recorded.")
    }
  return <>
  <h2>PLEAASE FILL THE FOLLOWING FORM <LocalShippingIcon /> </h2> 
  <div className='main'>
  <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
        <h3>SHIPPING CREDENTIALS:</h3>
        <br />
      <TextField id="outlined-basic" label="Name" variant="standard" /><br /><br />
      <TextField id="standard-basic" label="E-mail" variant="standard" /><br /><br />
      <TextField id="standard-basic" label="Phone number" variant="standard" /><br /><br />
      <TextField id="standard-basic" label="Address line 1" variant="standard" />
      <TextField id="standard-basic" label="Address line 2" variant="standard" />
      {/* <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" /> */}
    </Box>
    <br />
    <Button variant="contained" color="success" onClick={()=>myFunction()}>Submit</Button><br /><br />
    <Link to="/payment"> <Button variant="contained" color="success">Proceed to payment gateway</Button></Link><br />
      {/* <h3>SHIPPING CREDENTIALS:</h3>
      <input type="text" /><br /><br />
      <input type="text" /><br /><br />
      <input type="text" /><br /><br />
      <input type="text" /><br /><br /> */}
  </div>
  </>
}

// export default Address