import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum ActiveModal {
    Null,
    AuthBase,
    Register,
    AuthWithSms,
    RegisterInputCode,
    AuthPartners
}

export type ModalState = {
    activeModal: ActiveModal
    addition?: string | null
}

const initialState: ModalState = {
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
        goToAuthWithSms: (state) => {
            state.activeModal = ActiveModal.AuthWithSms
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

export const {goToAuthBase, goToRegister, goToRegisterInputCode, goToAuthPartners, goToAuthWithSms} = authModalSlice.actions;