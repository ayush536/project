

import React from 'react'
import { getData } from '../Choices/Action'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Sorting } from '../Sorting/Sorting';
import { Link } from 'react-router-dom'
import TipsAndUpdatesRoundedIcon from '@mui/icons-material/TipsAndUpdatesRounded';
import './Clothing.css'

export const Clothing=()=> {
  let  {data}  = useSelector((state) => state.ChoiceData)
  const { accessToken } = useSelector((state) => state.Auth)
  console.log(accessToken, "access")
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getData({ headers: {"Authorization" : `Bearer ${accessToken}`} }))
  },[dispatch, accessToken])
  // const navigate = useNavigate()
  // { headers: {"Authorization" : `Bearer ${token}`} }
  const [searchTerm, setSearchTerm] = useState("");
  const [arr, setArr] = useState([])
  // console.log(data)

  const [change, setChange] = useState(false);
  const handleSort = (sort, value) =>{
    if(sort === 'asc' && value==='title'){
      arr.sort((a,b)=> {
        if(a.title>b.title){
          return 1;
        } else {
          return -1;
        }
      })
      setChange(!change)
    }
    if(sort === 'desc' && value==='title'){
      arr.sort((a,b)=> {
        if(a.title<b.title){
          return 1;
        } else {
          return -1;
        }
      })
      setChange(!change)

    }
    if(sort === 'asc' && value==='price'){
      arr.sort((a,b)=> a.price-b.price)
      setChange(!change)
    }
    if(sort === 'desc' && value==='price'){
      arr.sort((a,b)=> b.price-a.price)
      setChange(!change)

    }
  }//here the sorting logic code is ending. 
  
  useEffect(()=>{setArr(data.filter((e)=> e.category.category==="clothing"))}, [data])

  function Filter(inp) { 
    setArr([...data.filter((e)=>{
      return e.title.startsWith(inp)
    })])//filter code ends here. 
    
   }
  return <>
    <h1>Electronics <TipsAndUpdatesRoundedIcon /> </h1>
    <TextField
    type="text"
    label="Search..."
    variant="standard"
        color="warning"
        focused
    onChange={(event)=>{
      setSearchTerm(event.target.value);
    }}
    />
    <Button variant="outlined" size="large" onClick={()=> Filter(searchTerm)}>Search</Button>
    <Sorting handleSort={handleSort} />
    <div className='container'>
    {arr.map((e)=>  //mapping is taking place over here. 
    <div>
      <Link to={`/productdetails/${e.id}`} className='text-link'>
            <Card sx={{ maxWidth: 350 }} className='man'>
        <CardMedia
          component="img"
          height="150"
          image={e.image}
          alt=""
        />
        <CardContent>
          <Typography gutterBottom variant="h5" height={"71px"} margin={"5px"} overflow={'hidden'} component="div">
            {e.title}
          </Typography>
          <Typography gutterBottom variant="h6" color="text.primary" component="div">
            {e.category.category}
          </Typography>
          <Typography variant="body1" height={"100px"} overflow={'hidden'} color="text.secondary">
            Price: {e.price} only.
          </Typography>
          <Typography variant="body1" height={"100px"} overflow={'hidden'} color="text.secondary">
            {e.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Add To Cart</Button>
          <Button size="small">Add To Wishlist</Button>
        </CardActions>
      </Card>
      </Link>
        </div>
    )}
    </div>
    <Link to={"/cloth"}><Button variant="contained">CLOTHINGS</Button></Link> <br /><br />
    <Link to={"/gros"}><Button variant="contained">ACCESSORIES</Button></Link> <br />
  </>
}