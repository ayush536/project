// import React from 'react'

// export const Registration=()=> {
//   return (
//     <div>Registration</div>
//   )
// }

// // export default Registration
import React from 'react'
import './Registration.css'
import TextField from '@mui/material/TextField'
import { signup } from "../Auth/action"
import { useDispatch } from "react-redux"
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import Button from '@mui/material/Button';
import AppRegistrationRoundedIcon from '@mui/icons-material/AppRegistrationRounded';
// import { Link } from 'react-router-dom'

export const Registration=()=> {

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [inputs, setInputs] = useState({

      name: "",
      email: "",
      password: ""

  })

  const handleChange = (e) => {

    const { name, value } = e.target
    setInputs({ ...inputs, [name]: value })

}

const handleSubmit = () => {

  dispatch(signup(inputs.name, inputs.email, inputs.password))
}


  return <>
    <h2> <i> Welcome to our family, please register first to expore!!</i> <AppRegistrationRoundedIcon /> </h2>
    <div className='loginBox'>
      <img 
      src="https://imgs.search.brave.com/QFSHV1yTJwWdO8_FYakpHApdlROSlCCc1bPy4O-2-w8/rs:fit:713:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC55/X3BxYWNvLVBwTm10/WENVVFFiZEl3SGFF/NyZwaWQ9QXBp"
      alt="#"
      className='loginlogo'
       />
       <div className='inner'> 
       {/* <input type="text" /><br /> */}


       <TextField
        helperText="Please enter yor name "
        id="demo-helper-text-misaligned"
        onChange={handleChange}
        name="name"
        value={inputs.name}
        label="Username"
       /><br/>


       <TextField
        helperText="Please enter your e mail"
        // id="demo-helper-text-misaligned"
        label="E-mail"
        // type={"password"}
        color="warning"
        onChange={handleChange} 
        name="email"
        value={inputs.email}
       />


       <TextField
        helperText="Please enter your password"
        id="demo-helper-text-misaligned"
        label="password"
        color='secondary'
        type={"password"}
        onChange={handleChange} 
        name="password"
        value={inputs.pass}
       /><br/>


       <button onClick={handleSubmit}>Register</button><br />
       <Button variant="contained" color="primary" onClick={() => { navigate("/login") }}  >Click here to Login </Button >
       {/* <Link>
       <p><i>new here? pleaser do registration first.</i></p>
       </Link> */}
       
       {/* <p>New here? please do registration first. <a href="/register">Click here.</a></p> */}
       </div>
       
    </div>
  </>
}

// export default Login