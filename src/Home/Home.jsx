import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

export const Home=()=> {
  return <>
    <h1>WELCOME TO THE BAZAR</h1>
    <br />
    <h2>You have the following categories to shop.
    </h2>
    <br /><br /><br />
    <Button variant="contained" color="success">ELECTRONICS</Button> <br /><br />
    <Button variant="contained" color="success">CLOTHINGS</Button><br /><br />
    <Button variant="contained" color="success">ACCESSORIES</Button><br /> <br />
    <hr />
    <p> <i> <h3> Due to some of the company policies </h3> </i> </p>
    <p> <i> <h4> we request you to kindly log in first </h4> </i> </p> 
    <p><i> <h4>and enjoy your happy shopping.</h4> </i></p>
    {/* <Button variant="contained" color="danger">ELECTRONICS</Button> */}
     <Link to={"/login"}> <Button variant='contained'color='error'>LOGIN</Button> </Link>
  </>
}

// export default Home