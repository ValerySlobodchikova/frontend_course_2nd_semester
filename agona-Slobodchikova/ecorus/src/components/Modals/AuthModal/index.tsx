import React, {useRef} from 'react';
import {useModalClose} from "../../../hooks/useModalClose";
import {Portal} from "../../Portal";
import {AuthBaseModal} from "./AuthBaseModal";
import {RootState} from "../../../store";
import {useSelector} from "react-redux"
import {ActiveModal} from "../../../store/authModalSlice";
import {RegisterModal} from './RegisterModal';
import {RegisterInputCodeModal} from "./RegisterInputCodeModal";
import {AuthPartnersModal} from "./AuthPartnersModal";

interface Props {
    visible: boolean
    onClose: () => void
}

export const AuthModal = ({visible, onClose}: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const refCross = useRef<HTMLDivElement>(null)
    useModalClose(ref, () => onClose())
    useModalClose(refCross, () => onClose())

    const activeModal = useSelector((state: RootState) => state.authModal.activeModal)
    return (
        <>
            {visible &&
                <Portal>
                    {activeModal === ActiveModal.AuthBase && (<AuthBaseModal refOverlay={ref} refCross={refCross}/>)}
                    {activeModal === ActiveModal.Register && (<RegisterModal refOverlay={ref} refCross={refCross}/>)}
                    {activeModal === ActiveModal.RegisterInputCode && (<RegisterInputCodeModal refOverlay={ref} refCross={refCross}/>)}
                    {activeModal === ActiveModal.AuthPartners && (<AuthPartnersModal refOverlay={ref} refCross={refCross}/>)}
                </Portal>}

        </>
    )
}
