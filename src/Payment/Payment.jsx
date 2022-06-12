import React from 'react'
import "./Payment.css"
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';

export const Payment=()=> {
  function myFunctions() {
    alert("Payment sucessfully done.")
}
  return<> 
    <div className='box'>
      <h2>Please Enter your Card Details <PaymentOutlinedIcon /> </h2>
      <div className='boxleft'>
        <div className='photo'>
        </div><br />
        <input type="text" className='in' placeholder="Card Owner's name*" /><br /><br />
        
        <input type="number" className='in'placeholder='Card Number*'/><br /><br />
        <input type="password"className='small' placeholder='Enter CVV*'/>
        <input type="date" className='small' placeholder='Enter expiry date*'/><br /><br />
        {/* <input type="submit" className='last'/> */}
        <button onClick={()=>myFunctions()}>Confirm your Payment</button>
      </div>
      <br /><br />
      <h3><i>Your order will dispatch after 48 hours of payment.</i></h3>
      <h3>order trek id : <i>12RTY53sd88</i></h3>
      {/* <div className='rightbox'></div> */}
    </div>
    
  </>
}

