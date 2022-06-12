import * as types from "./types"


const initialState = {
    accessToken: localStorage.getItem("accessToken"),
    loading: false,
    errorMsg: "",
    user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {}
}
export const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case (types.LOGIN_REQUEST):
            return { ...state, loading: true, isRegister: false }
        case (types.LOGIN_SUCCESS):
            return { ...state, loading: false, accessToken: action.payload.accessToken, user: action.payload.user }
        case (types.LOGIN_FAILED):
            return { ...state, loading: false, errMsg: action.payload.msg }
        case (types.SIGNUP_REQUEST):
            return { ...state, loading: true, isRegister: false }
        case (types.SIGNUP_SUCCESS):
            return { ...state, loading: false, isRegister: true }
        case (types.SIGNUP_FAILED):
            return { ...state, loading: false, errMsg: action.payload.msg, isRegister: false }
        case (types.LOGOUT):
            return { initialState, accessToken: null }


        default:
            return state

    }

}

// export default authReducer