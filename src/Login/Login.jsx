import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { login } from "../Auth/action"
import { useNavigate } from "react-router-dom"
// import Button from '@mui/material/Button';
import './Login.css'
import TextField from '@mui/material/TextField'

import LoginSharpIcon from '@mui/icons-material/LoginSharp';

export const Login=()=> {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {accessToken, user} = useSelector((state) => state.Auth);
  // console.log("State: ", state);


  const [input, setInput] = useState({
      email: "",
      password: ""
  })

  const handleChange = (e) => {
    let { name, value } = e.target
    setInput({ ...input, [name]: value })
}

const handleSubmit = () => {

  dispatch(login(input.email, input.password))
 

}

// useEffect(() => {
//   if (accessToken) {
//       navigate("/")
//   }
// }, [handleSubmit])


  return <>
    <h2> <i> Welcome back user, please login to move ahead!! </i> <LoginSharpIcon /></h2>
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
        label="Username"
       /><br/>


       <TextField
        helperText="Please enter your e mail"
        // id="demo-helper-text-misaligned"
        label="E-mail"
        // type={"password"}
        color="warning"
        onChange={(e) => { handleChange(e) }}
        name="email"

       />
       <TextField
        helperText="Please enter your password"
        id="demo-helper-text-misaligned"
        label="password"
        color='secondary'
        name="password"
        type={"password"}
        onChange={(e) => { handleChange(e) }}
       /><br/>


       <button onClick={handleSubmit}>Login</button><br />
       {/* <Link>
       <p><i>new here? pleaser do registration first.</i></p>
       </Link> */}
       
       <p onClick={() => { navigate("/register")}}>New here? please do registration first. Click here.</p>
       </div>
       
    </div>
  </>
}

// export default Login