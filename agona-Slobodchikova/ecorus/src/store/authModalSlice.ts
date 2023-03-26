import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum ActiveModal {
    Null,
    AuthBase,
    Register,
    RegisterInputCode,
    AuthPartners
}

export type AuthModalState = {
    activeModal: ActiveModal
    addition?: string | null
}

const initialState: AuthModalState = {
    activeModal: ActiveModal.Null
}

export const authModalSlice = createSlice({
    name: 'authModal',
    initialState,
    reducers: {
        goToAuthBase: (state) => {
            state.activeModal = ActiveModal.AuthBase
        },
        goToRegister: (state) => {
            state.activeModal = ActiveModal.Register
        },
        goToRegisterInputCode: (state, action: PayloadAction<string>) => {
            state.activeModal = ActiveModal.RegisterInputCode
            state.addition = action.payload
        },
        goToAuthPartners: (state) => {
            state.activeModal = ActiveModal.AuthPartners
        }
    }
})

export const {goToAuthBase, goToRegister, goToRegisterInputCode, goToAuthPartners} = authModalSlice.actions;