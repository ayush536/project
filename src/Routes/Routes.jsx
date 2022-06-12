import React from 'react'
import { Home } from '../Home/Home'
import { Electronics } from '../Electronics/Electronics'
import { Grocerry } from '../Groccery/Grocerry'
import { Clothing } from '../Clothing/Clothing'
import { ProductDetailsPage } from '../Productdetails.jsx/ProductDetailsPage'
import {Cart}  from '../Cart/Cart'
import { Payment } from '../Payment/Payment'
import { Header } from '../Components/Header'
import { Address } from '../Address/Address'
import { Checkout } from '../Checkout/Checkout'
import { Demo } from '../Demo/Demo'
import { Login } from '../Login/Login'
import { Registration } from '../Registration/Registration'
import { Land } from '../Land'
import { Routes, Route } from 'react-router-dom'


export const AllRoutes=()=> {
  return <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/electro' element={<Electronics />} />
        <Route path='/gros' element={<Grocerry />} />
        <Route path='/cloth' element={<Clothing />} />
        <Route path='/productdetails/:id' element={<ProductDetailsPage />} />
        <Route path='/cart' element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path='/payment' element={<Payment />} />
        <Route path='/address' element={<Address /> } />
        <Route path="/head" element={<Header />} />
        <Route path='/login' element={<Login />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/land' element={<Land />} />
    </Routes>
  </>
}

// export default AllRoutes