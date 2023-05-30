import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface ProfileInfo {
    balance: number | undefined
    email: string | undefined
    token: string
}

const initialState: ProfileInfo = {
    balance: 0,
    email: '',
    token: ''
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
        },
        getToken: ((state) => {
            state.token = window.localStorage.getItem('token') || state.token;
        }),
        setToken: (state, action) => {
            const token = action.payload;
            window.localStorage.setItem('token', token);
            state.token = token;
        }
    }
})

export const {setBalance, setEmail, getToken, setToken} = profileInfo.actions