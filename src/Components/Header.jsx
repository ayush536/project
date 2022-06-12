import React from 'react'
import "./Header.css"
// import Button from '@mui/material/Button'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom'

export const Header=()=> {
  return <>
    <div className='maincont'>
        <div className='left'>
            <Link to={"/"}>
            <div variant="contained" color="success" size="large" className='carticon'> <HomeIcon /> Home</div></Link>
        </div>
        <div className='center'>
            <h1 className='txt'>APNA BAZAR</h1>
        </div>
        <div className='right'>
            <Link to={"/cart"}>
        <div variant="contained" color="success" size="large" className='carticon'><ShoppingCartIcon />Cart</div></Link>
        </div>
    </div>
  </>
}

// export default Header