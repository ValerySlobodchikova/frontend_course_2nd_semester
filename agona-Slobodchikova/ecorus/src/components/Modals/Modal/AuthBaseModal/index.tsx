import React from 'react';
import styles from '../index.module.sass'
import {LButton} from '../../../pages/EcoMarketPage/MainComponent/LongButtonComponent/LongButton';
import {goToAuthPartners, goToRegister} from "../../../../store/authModalSlice";
import {useDispatch} from "react-redux";

export const AuthBaseModal = () => {
    const dispatch = useDispatch()
    return (

        <div className={styles.modal}>
            <div className={styles.form}>
                <input className={styles.input} type="text" placeholder="Телефон"/>
                <input className={styles.input} type="text" placeholder="Пароль"/>
            </div>
            <LButton className={styles.signIn} colorTheme="green">Войти</LButton>
            <div className={styles.bottomBlock}>
                <button onClick={() => dispatch(goToRegister())} className={styles.textBtn}>Регистрация</button>
            </div>
            <LButton onClick={() => dispatch(goToAuthPartners())} className={styles.signIn} colorTheme="gray">Вход
                для партнеров</LButton>
        </div>
    )
}
