import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

export const Land=()=> {
    return <>
    <h1>WELCOME TO THE BAZAR</h1>
    <br />
    <h2>You have the following categories to shop.
    </h2>
    <br /><br /><br />
    <Link to={"/electro"}><Button variant="contained" color="success">ELECTRONICS</Button></Link> <br /><br />
    <Link to={"/cloth"}><Button variant="contained" color="success">CLOTHINGS</Button></Link> <br /><br />
    <Link to={"/gros"}><Button variant="contained" color="success">ACCESSORIES</Button></Link> <br />
  </>
}

// export default land