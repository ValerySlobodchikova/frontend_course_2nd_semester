import React from 'react';
import styles from '../index.module.sass'
import {LButton} from '../../../pages/EcoMarketPage/MainComponent/LongButtonComponent/LongButton';
import {goToAuthPartners, goToRegister} from "../../../../store/authModalSlice";
import {useDispatch} from "react-redux";


interface Props {
    refOverlay: React.RefObject<HTMLDivElement>
    refCross: React.RefObject<HTMLDivElement>
}

export const AuthBaseModal = ({refOverlay, refCross}: Props) => {
    const dispatch = useDispatch()
    return (
        <div className={styles.overlay} ref={refOverlay}>
            <div className={styles.modal}>
                <div className={styles.topBlock}>
                    <span className={styles.header}>Вход</span>
                    <div className={styles.crossBtn} ref={refCross}></div>
                </div>
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
        </div>)
}
