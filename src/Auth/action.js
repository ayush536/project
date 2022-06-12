import axios from "axios"
import * as types from "./types"
const loginRequest = (payload) => ({ type: types.LOGIN_REQUEST, payload })
const loginSuccess = (payload) => ({ type: types.LOGIN_SUCCESS, payload })
const loginFail = (payload) => ({ type: types.LOGIN_FAILED, payload })

const signupRequest = (payload) => ({ type: types.SIGNUP_REQUEST, payload })
const signupSuccess = (payload) => ({ type: types.SIGNUP_SUCCESS, payload })
const signupFail = (payload) => ({ type: types.SIGNUP_FAILED, payload })




const signup = (name, email, password) => async (dispatch) => {
    dispatch(signupRequest({ msg: "loading" }))
    await axios.post("https://apnabazarapi.herokuapp.com/register", {
        name,
        email,
        password
    }).then((res) => {

        dispatch(signupSuccess())
        alert("Signup Successfull")
    }).catch((err) => {

        dispatch(signupFail({ msg: err.response.data }))
    })

}


const login = (email, password) => async (dispatch) => {
    try {
        dispatch(loginRequest({ msg: "Loading" }))
        await axios.post("https://apnabazarapi.herokuapp.com/login", {
            email,
            password
        }).then((res) => {
            localStorage.setItem("accessToken", res.data.token)
            localStorage.setItem("user", JSON.stringify(res.data.user))
            if(res.data.token){
                window.location.href = "/land"
            }
            dispatch(loginSuccess({ accessToken: res.data.token, user: res.data.user }))
        }).catch((err) => {
            console.log(err.response)

            dispatch(loginFail({ msg: err.response.data }))
            alert("Invalid Credentials")
        })

    } catch (err) {
        console.log(err)
    }
}

const logout = () => (dispatch) => {

    localStorage.removeItem("accessToken")
    localStorage.removeItem("user")
    dispatch({ type: types.LOGOUT })

}






export { login, signup, logout }