import axios from 'axios';
import * as types from './Types'

const getDataReq = (payload) => ({ type: types.GET_DATA_REQ })
const getDataSuccess = (payload) => ({ type: types.GET_DATA_SUCCESS, payload})
const getDataFail = (payload) => ({ type: types.GET_DATA_FAIL, payload})
const getSingleDataReq = (payload) => ({ type: types.GET_SINGLE_DATA_REQ })
const getSingleDataSuccess = (payload) => ({ type: types.GET_SINGLE_DATA_SUCCESS, payload })
const getSingleDataFail = (payload) => ({ type: types.GET_SINGLE_DATA_FAIL, payload })
const addToCart = (item) => ({ type: types.ADD_TO_CART, payload:{product:item} })
const changeQty = (id,qty)=>({ type: types.CHANGE_QTY, payload:{id,qty}})
const removeFromCart = (id) => ({ type:types.REMOVE_FROM_CART, payload:{id:id}})
const getCartData =(payload)=>({type : types.GET_CART, payload})

const getData = (token) => (dispatch)=>{
    dispatch(getDataReq('Getting Data from your feed'))
    try{
        axios.get("https://apnabazarapi.herokuapp.com/product", token).then((res)=>{
            dispatch(getDataSuccess(res.data))
        }).catch((error)=>{
            dispatch(getDataFail(error))
        })
    }
    catch (error){console.log("Error to get data")}
}

const AddCartFunc = (obj, token)=>{
    axios.post("https://apnabazarapi.herokuapp.com/cart", obj, token).then(()=>{
        alert(`${obj.cartId.title} added to cart`)
    }).catch((err)=> console.log("Failed: Error to add product in cart"))
}
const getCart = (token)=>(dispatch)=>{
    axios.get("https://apnabazarapi.herokuapp.com/cart", token).then((res)=>{
        dispatch(getCartData(res.data))
    })
}


const getSingleData = (token, id) => (dispatch)=>{
    dispatch(getSingleDataReq("Getting single data"))
    try{
        axios.get(`https://apnabazarapi.herokuapp.com/product/${id}`, token).then((res)=>{
            dispatch(getSingleDataSuccess(res.data))
        }).catch((error)=>{
            dispatch(getSingleDataFail(error))
        })
    }catch (error) {

    }
}

export { removeFromCart,getSingleData, getData,addToCart,changeQty, AddCartFunc, getCart }