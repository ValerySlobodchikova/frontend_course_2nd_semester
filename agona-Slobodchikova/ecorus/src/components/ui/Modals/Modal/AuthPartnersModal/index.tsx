import React from 'react';
import styles from '../index.module.sass'
import {LButton, Theme} from '../../../LongButtonComponent';
import {goToAuthBase, goToAuthPartners} from "../../../../../store/authModalSlice";
import {useDispatch} from "react-redux";

export const AuthPartnersModal = () => {
    const dispatch = useDispatch()
    return (

        <div className={styles.modal}>
            <div className={styles.form}>
                <input className={styles.input} type="text" placeholder="Наименование организации"/>
                <input className={styles.input} type="text" placeholder="Email"/>
                <input className={styles.input} type="text" placeholder="Пароль"/>
            </div>
            <LButton width={384} height={56} theme={Theme.GREEN}>Получить код</LButton>
            <div className={styles.bottomBlock}>
                <button onClick={() => dispatch(goToAuthBase())} className={styles.textBtn}>Я уже
                    зарегистировался(-ась)
                </button>
            </div>
            <LButton onClick={() => dispatch(goToAuthPartners())} width={384} height={56} theme={Theme.GRAY}>Вход
                для партнеров</LButton>
        </div>
    )
}
