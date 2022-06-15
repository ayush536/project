// import React from 'react'
// import "./Address.css"
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';
// import Button from "@mui/material/Button";
// import { Link } from 'react-router-dom';
// import LocalShippingIcon from '@mui/icons-material/LocalShipping';

// export const Address=()=> {
//     function myFunction() {
//         alert("Your details has been recorded.")
//     }
//   return <>
//   <h2>PLEAASE FILL THE FOLLOWING FORM <LocalShippingIcon /> </h2> 
//   <div className='main'>
//   <Box
//       component="form"
//       sx={{
//         '& > :not(style)': { m: 1, width: '25ch' },
//       }}
//       noValidate
//       autoComplete="off"
//     >
//         <h3>SHIPPING CREDENTIALS:</h3>
//         <br />
//       <TextField id="outlined-basic" label="Name" variant="standard" /><br /><br />
//       <TextField id="standard-basic" label="E-mail" variant="standard" /><br /><br />
//       <TextField id="standard-basic" label="Phone number" variant="standard" /><br /><br />
//       <TextField id="standard-basic" label="Address line 1" variant="standard" />
//       <TextField id="standard-basic" label="Address line 2" variant="standard" />
//       {/* <TextField id="filled-basic" label="Filled" variant="filled" />
//       <TextField id="standard-basic" label="Standard" variant="standard" /> */}
//     </Box>
//     <br />
//     <Button variant="contained" color="success" onClick={()=>myFunction()}>Submit</Button><br /><br />
//     <Link to="/payment"> <Button variant="contained" color="success">Proceed to payment gateway</Button></Link><br />
//       {/* <h3>SHIPPING CREDENTIALS:</h3>
//       <input type="text" /><br /><br />
//       <input type="text" /><br /><br />
//       <input type="text" /><br /><br />
//       <input type="text" /><br /><br /> */}
//   </div>
//   </>
// }

// // export default Address


import { useState, useEffect } from "react";
import { SearchOutlined } from '@mui/icons-material'
import  LocalShippingIcon  from '@mui/icons-material/LocalShipping';
import Button from "@mui/material/Button";
 import { Link } from 'react-router-dom';
// import "./App.css";
import "./Address.css"

export const Address=()=> {
  const initialValues = { username: "", email: "", Phone: "" , Address:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.Phone) {
      errors.Phone = "Phone is required";
    } else if (values.Phone.length !== 10) {
      errors.Phone = "Phone must be of 10 digits";
    } 

    if(!values.Address){
      errors.Address = "Address is required"
    }
    // else if (values.Phone.length > 10) {
    //   errors.Phone = "Phone cannot exceed more than 10 characters";
    // }
    return errors;
  };

  return (
    <div className="containerr">
        {/* <h1>PLEASE FILL THE FOLLOWING FORM <LocalShippingIcon /> </h1> */}
        <h2>Shipping crendentials <LocalShippingIcon />:</h2> 
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <h2 className="display">Data granted successfully</h2>
        
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Information</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            {/* <label>Username</label> */}
            <input
              type="text"
              className="bharo"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p className="pa">{formErrors.username}</p>
          <div className="field">
            {/* <label>Email</label> */}
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p className="pa">{formErrors.email}</p>
          <div className="field">
            {/* <label>Phone</label> */}
            <input
              type="number"
              name="Phone"
              placeholder="Phone number"
              value={formValues.Phone}
              onChange={handleChange}
            />
          </div>
          <p className="pa">{formErrors.Phone}</p>

          <div className="field">
            {/* <label>Address</label> */}
            <input
              type="text"
              name="Address"
              placeholder="Adress (line 1)"
              value={formValues.Address}
              onChange={handleChange}
            />
          </div>
          <p className="pa" >{formErrors.Address}</p>

          <button className="fluid ui button blue">Submit</button>
          {
            Object.keys(formErrors).length === 0 && isSubmit ? <Link to="/payment"><button >Proceed to payment gateway</button></Link>:
            
            <h2>Provide require things to move ahead.</h2>
          }
        </div> 
      </form>
    </div>
  );
}