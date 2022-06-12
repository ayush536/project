// import React from 'react'
import "./ProductDetails.css";
import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AddCartFunc } from "../Choices/Action";
import { getSingleData } from "../Choices/Action";

export const ProductDetailsPage = () => {
  const { accessToken, user } = useSelector((state) => state.Auth);
  console.log(accessToken, "access");
  const [obj, setObj] = useState({});
  // const [count, setCount] = useState(0)

  // const { data } = useSelector(state => state.ChoiceData)
  const [qty, setQty] = useState(1);
  let { id } = useParams();
  id = +id;
  const { singleData } = useSelector((state) => state.ChoiceData);
  // console.log("SingleData: ", singleData)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getSingleData({ headers: { Authorization: `Bearer ${accessToken}` }}, id)
    );
    setObj(singleData[0])
  }, []);
  useEffect(() => {
    setQty({ qty: 1 });
  }, [dispatch, accessToken]);
  const config = { headers: { Authorization: `Bearer ${accessToken}` }}
  // console.log("Object: ", obj)
  function AddToCart(){
    dispatch(AddCartFunc({id : id, cartId : singleData[0]._id, qty : qty}, config))
    console.log("Object:  ", singleData[0]._id)
  }

  return (
    <>
    {
      singleData.map((e)=>
      <div className="bookContainer">
      <img className="card-img" src={singleData[0].image} alt="#" height={"210px"} width={"380px"} />
      <h2 className="title">{singleData[0].title}</h2>
      <div className="description"><strong>Description: </strong> {singleData[0].desc}</div> <br />
      <div className="price"><strong>Price:</strong> ₹{singleData[0].price}</div>
      <div className="isbnNumber"><strong>product No.</strong> {singleData[0].id}</div>
    </div>)
    }
    {/* <Button variant="contained" onClick={() => } color="success" >ADD tO CART</Button> */}
    <Button variant="contained" onClick={() => AddToCart()} color="success" >ADD tO CART</Button>

    <Link to={"/cart"}><br /><br />
      <Button variant="contained" color="success">CART</Button></Link>
    </>
  );
};
