import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface ProfileInfo {
    balance: number | undefined
    email: string | undefined
}

const initialState: ProfileInfo = {
    balance: 0,
    email: ''
}

export const profileInfo = createSlice({
    name: 'profileInfo',
    initialState,
    reducers: {
        setBalance: (state, action: PayloadAction<number | undefined>) => {
            state.balance = action.payload
        },
        setEmail: (state, action: PayloadAction<string | undefined>) => {
            state.email = action.payload
        }
    }
})

export const {setBalance, setEmail} = profileInfo.actions