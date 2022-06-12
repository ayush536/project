import { configureStore } from '@reduxjs/toolkit'
import { ChoiceReducer } from '../Choices/Reduer'
import { authReducer } from "../Auth/reducer"

export const Store = configureStore({
    reducer: {
        ChoiceData: ChoiceReducer,
        Auth: authReducer
    }
})