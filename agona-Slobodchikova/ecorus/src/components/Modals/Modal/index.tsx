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
import styles from "./index.module.sass";
import {Icon} from "../../ui/Icon";
import {AuthWithSmsModal} from "./AuthWithSmsModal";

interface Props {
    visible: boolean
    onClose: () => void
}

export const ActiveModalTitle = {
    [ActiveModal.Null]: "",
    [ActiveModal.AuthBase]: "Вход",
    [ActiveModal.Register]: "Регистрация",
    [ActiveModal.AuthWithSms]: "Войти с помощью смс",
    [ActiveModal.RegisterInputCode]: "Ввести код",
    [ActiveModal.AuthPartners]: "Вход"
} as const

export const Modal = ({visible, onClose}: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const refCross = useRef<HTMLDivElement>(null)
    useModalClose(ref, () => onClose())
    useModalClose(refCross, () => onClose())

    const activeModal = useSelector((state: RootState) => state.authModal.activeModal)
    return (
        <>
            {visible &&
                <Portal>
                    <div className={styles.overlay} ref={ref}>
                        <div className={styles.modalContainer}>
                            <div className={styles.topBlock}>
                                <span className={styles.header}>{ActiveModalTitle[activeModal]}</span>
                                <button className={styles.crossBtn} onClick={onClose}><Icon icon="cross" size={32}/>
                                </button>
                            </div>
                            <div>
                                {activeModal === ActiveModal.AuthBase && (<AuthBaseModal/>)}
                                {activeModal === ActiveModal.Register && (<RegisterModal/>)}
                                {activeModal === ActiveModal.AuthWithSms && (<AuthWithSmsModal/>)}
                                {activeModal === ActiveModal.RegisterInputCode && (<RegisterInputCodeModal/>)}
                                {activeModal === ActiveModal.AuthPartners && (<AuthPartnersModal/>)}
                            </div>
                        </div>
                    </div>
                </Portal>}
        </>
    )
}
