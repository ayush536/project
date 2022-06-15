// import React from 'react'
// import "./Payment.css"
// import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';

// export const Payment=()=> {
//   function myFunctions() {
//     alert("Payment sucessfully done.")
// }
//   return<> 
//     <div className='box'>
//       <h2>Please Enter your Card Details <PaymentOutlinedIcon /> </h2>
//       <div className='boxleft'>
//         <div className='photo'>
//         </div><br />
//         <input type="text" className='in' placeholder="Card Owner's name*" /><br /><br />
        
//         <input type="number" className='in'placeholder='Card Number*'/><br /><br />
//         <input type="password"className='small' placeholder='Enter CVV*'/>
//         <input type="date" className='small' placeholder='Enter expiry date*'/><br /><br />
//         {/* <input type="submit" className='last'/> */}
//         <button onClick={()=>myFunctions()}>Confirm your Payment</button>
//       </div>
//       <br /><br />
//       <h3><i>Your order will dispatch after 48 hours of payment.</i></h3>
//       <h3>order trek id : <i>12RTY53sd88</i></h3>
//       {/* <div className='rightbox'></div> */}
//     </div>
    
//   </>
// }

import React, { useEffect } from 'react'
import "./Payment.css"
import PaymentOutlinedIcon from '@mui/icons-material/PaymentOutlined';
import { useState } from 'react';
 import { Link } from 'react-router-dom';


export const Payment=()=> {
  function myFunctions() {
    alert("Payment sucessfully done.")
}
const initialValues = { name:"", number:"", cv:"", date:"" }
const [formValues, setFormValues] = useState(initialValues)
const [formErrors, setFormErrors] = useState({});
const [isSubmit,setIsSubmit] = useState(false);

const handleChange=(e)=>{
  const {name,value} = e.target;
  setFormValues({...formValues,[name]:value})
};

const handleSubmit=(e)=>{
  e.preventDefault();
  setFormErrors(validate(formValues));
  setIsSubmit(true)
}

useEffect(()=>{
  console.log(formErrors);
  if(Object.keys(formErrors).length===0 && isSubmit){
    console.log(formValues)
  }
},[formErrors])

const validate = (values) =>{
  const errors = {};
  if(!values.name){
    errors.name = "Card holders name is required";
  }
  if(!values.number){
    errors.number = "Card number is required";
  }
  if(!values.cv){
    errors.cv = "CVV is required";
  }
  if(!values.date){
    errors.date = "Card expiry date is required";
  }
  return errors;
}
  return<> 

    <div className='box'>
    {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <h2 className="display">Data granted successfully</h2>
        
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
    <form onSubmit={handleSubmit}>
      <h2>Please Enter your Card Details <PaymentOutlinedIcon /> </h2>
      <div className='boxleft'>
        <div className='photo'>
        </div><br />

        <div>
        <input 
        type="text" 
        className='in'
        name="name"
        placeholder="Card Owner's name*"
        value={formValues.name}
        onChange={handleChange} 
        /><br /><br /></div>
        <p className="pa">{formErrors.name}</p>

        <div>   
        <input type="number"
        className='in'
        name='number'
        placeholder='Card Number*'
        value={formValues.number}
        onChange={handleChange}
        /><br /><br /></div>
        <p className="pa">{formErrors.number}</p>

        <div>  
        <input 
        type="password"
        className='small'
        name='cv' 
        placeholder='Enter CVV*'
        value={formValues.cv}
        onChange={handleChange}
        />
        </div>
        <p className="pa">{formErrors.cv}</p>

        <div>
        <input 
        type="date" 
        className='small' 
        name='date'
        placeholder='Enter expiry date*'
        value={formValues.date}
        onChange={handleChange}
        /><br /><br /></div>

        <p className="pa">{formErrors.date}</p>
        {/* <input type="submit" className='last'/> */}
        <button>Confirm</button>
        {/* {
          isSubmit ? <button onClick={()=>myFunctions()}>Confirm your Payment</button> : <h2>dobara kr</h2>
        } */}
      </div>
      <br /><br />
      
      </form>
      {
          Object.keys(formErrors).length === 0 && isSubmit ? 
          <Link to="/land"><button onClick={()=>myFunctions()}>Confirm your Payment</button></Link> : 
          <h2></h2>
        }
      <h3><i>Your order will dispatch after 48 hours of payment.</i></h3>
      <h3>order trek id : <i>12RTY53sd88</i></h3>
      {/* <div className='rightbox'></div> */}
    </div>
    
  </>
}

