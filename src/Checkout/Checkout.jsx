import React from 'react'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { getCart } from "../Choices/Action";
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import axios from "axios";

export const Checkout=()=> {
    const [arr, setArr] = useState([]);
    // const [total, setTotal] = useState([])
    const {accessToken} = useSelector((state)=> state.Auth)
    const config = { headers: { Authorization: `Bearer ${accessToken}` }}
  
    // console.log("Config: ", accessToken)
    const {cart} = useSelector((state)=>state.ChoiceData)
    // const { id } = useParams();
    const [quantity , setQuantity] = useState(1)
    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(getCart(config))
    },[dispatch, accessToken])
    useEffect(()=>{
      setArr([...cart])
    },[])
    console.log("Array: ", cart)
  function handleCount(id, val) {
    
    
    // setQuantity(quantity + val)
      // arr.splice(id, 1);
      axios
        .patch(`https://apnabazarapi.herokuapp.com/cart/${id}`, {qty:val}, config)
        .then(({ data }) => {
          console.log(data)
          // arr.splice(id, 0, data);
          setArr([...arr]);
        });
        // arr.splice(id, 1);
        
        // console.log(`Id: ${id}, Value: ${val}`)
  }
    const { id } = useParams();
    // const dispatch = useDispatch();
    //yaahh se
  
    // useEffect(() => {
    //   getData();
    // }, [dispatch, id]);
  
    // useEffect(() => {
    //   getData();
    // }, []);
    
    // function getData() {
    //   axios
    //     .get("https://apnabazarapi.herokuapp.com/cart")
    //     .then(({ data }) => {
    //       setArr(data);
    //     })
    //     .catch((err) => console.log(err));
    // }
  return <>
    <h1>Checkout Page <ShoppingCartCheckoutRoundedIcon /> </h1>
    <h2>Thnakyou for trusting us, here is your order summary:</h2>
    <TableContainer
        component={Paper}
        style={{ width: "95%", margin: "auto", marginTop: "50px" }}
      >
        <Table
          style={{ cursor: "pointer" }}
          sx={{ minWidth: 650 }}
          aria-label="caption table"
        >
          <TableHead
            style={{
              background: "#417D7A",
              color: "white",
              fontWeight: "bold",
            }}
          >
            <TableRow>
              <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
              >
                Image
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
                align="right"
              >
                Title
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
                align="right"
              >
                Price
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
                align="right"
              >
                quantity
              </TableCell>
              {/* <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
                align="right"
              >
                delete{" "}
              </TableCell> */}
              <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
                align="right"
              >
                TOTAL
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map((e, index) => (
              <TableRow key={e.id}>
                <TableCell component="th" scope="row">
                  {/* {singleData.image} */}
                  <img
                    className="image"
                    src={e.cartId.image}
                    alt="#"
                    height={"150px"}
                    width={"200px"}
                  />
                  
                </TableCell>
                <TableCell align="right">{e.cartId.title}</TableCell>
                <TableCell align="right">{Math.floor(e.cartId.price)}</TableCell>
                <TableCell align="right">
                  {/* <button onClick={() => handleCount(index, 1)}>+</button> */}
                  {e.qty}
                  {/* <button onClick={() => handleCount(index, -1)}>-</button> */}
                </TableCell>
                {/* <TableCell align="right" onClick={() => handleDelete(index)}>
                  X
                </TableCell> */}
                <TableCell align="right">
                  {Math.floor(e.cartId.price * e.qty)}
                </TableCell>
              </TableRow>
            ))}
            <h2>Net Payable Amount: {Math.floor(cart.reduce((total, item)=>total+(item.cartId.price*item.qty),0))}</h2>
          </TableBody>
        </Table>
        <Link to={"/address"}><Button variant="contained" color="success">PROCEED AHEAD</Button></Link>
        <Link to={"/cart"}><br /><br />
    <Button variant="contained" color="success">EDIT TO YOUR CART</Button></Link>
      </TableContainer>
  </>
}

// export default Checkout