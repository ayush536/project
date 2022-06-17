import React from "react";
import { useEffect, useState } from "react";
import { useDispatch , useSelector} from "react-redux";
// import { useSelector } from "react-redux";
// import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import DeleteIcon from '@mui/icons-material/Delete';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import axios from "axios";
import { getCart } from "../Choices/Action";
export const Cart = () => {
  const [arr, setArr] = useState([]);
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

  function handleDelete(id) {
    // let obj = arr[id];
    axios
      .delete(`https://apnabazarapi.herokuapp.com/cart/${id}`, { headers: {"Authorization" : `Bearer ${accessToken}`} })
      .then(({ data }) => console.log("Deleted Successfully"));
  }
  // console.log("Total: ",arr.reduce((e, sum)=> return sum += e.price * e.qty ))

  function myFunctionss() {
    alert("Item removed from cart.")
}
  return (
    <>
    <h1>Cart <ShoppingCartRoundedIcon /> </h1>
      <Link to={"/electro"}><Button  color="success" >ELECTRONICS</Button></Link> 
    <Link to={"/cloth"}><Button v color="success" >CLOTHINGS</Button></Link> 
    <Link to={"/gros"}><Button  color="success">ACCESSORIES</Button></Link> 
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
              <TableCell
                style={{ fontWeight: "bold", color: "rgb(237,230,219)" }}
                align="right"
              >
                delete{" "}
              </TableCell>
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
                  <button onClick={() => handleCount(e._id, e.qty =  1 + e.qty)}> + </button>
                   {e.qty}
                  <button onClick={() => handleCount(e._id, e.qty = -1 + e.qty)}> - </button>
                </TableCell>
                <TableCell align="right" onClick={() => handleDelete(e._id)} onClickCapture={()=>myFunctionss()} >
                  <DeleteIcon />
                </TableCell>
                <TableCell align="right">
                  {Math.floor(e.cartId.price * e.qty)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <h3>Total: {Math.floor(cart.reduce((total, item)=>total+(item.cartId.price*item.qty),0))}</h3>
      </TableContainer>
      <Link to={"/checkout"}><Button variant="contained" color="success">CHECKOUT</Button></Link>
      
    </>
  );
};

// // // // export default Cart
