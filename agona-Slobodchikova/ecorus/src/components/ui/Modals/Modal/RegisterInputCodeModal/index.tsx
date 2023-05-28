import React from 'react';
import styles from '../index.module.sass'
import {LButton, Theme} from '../../../LongButtonComponent';
import {goToAuthBase, goToAuthPartners} from "../../../../../store/authModalSlice";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../../store";

export const RegisterInputCodeModal = () => {
    const dispatch = useDispatch()
    const phoneNumber = useSelector((state: RootState) => state.authModal.addition)
    return (

        <div className={styles.modal}>
            <div className={styles.formCode}>
                <div className={styles.message}>
                    <p>Введите код отправленный вам на телефон</p>
                    <p className={styles.phone}>{phoneNumber}</p>
                </div>
                <input className={styles.input} type="text" placeholder="Код"/>
            </div>
            <LButton onClick={() => dispatch(goToAuthBase())} width={384} height={56}
                     theme={Theme.GREEN}>Отправить</LButton>
            <div className={styles.bottomBlock}>
                <button onClick={() => dispatch(goToAuthBase())} className={styles.textBtn}>Не получил(-а) код
                </button>
            </div>
            <LButton onClick={() => dispatch(goToAuthPartners())} width={384} height={56} theme={Theme.GRAY}>Вход
                для партнеров</LButton>
        </div>
    )
}
