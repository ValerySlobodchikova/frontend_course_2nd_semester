import React, {useState} from 'react';
import styles from '../index.module.sass'
import {LButton} from '../../../pages/EcoMarketPage/MainComponent/LongButtonComponent/LongButton';
import {goToAuthBase, goToAuthPartners, goToRegisterInputCode} from "../../../../store/authModalSlice";
import {useDispatch} from "react-redux";

export const AuthWithSmsModal = () => {
    const dispatch = useDispatch()
    const [inputText, setInputText] = useState('');
    return (

        <div className={styles.smallModal}>
            <div className={styles.form}>
                <input onChange={(e) => {
                    setInputText(e.target.value);
                }} className={styles.input} type="text" placeholder="Телефон" id="phone"/>
            </div>
            <LButton onClick={() => dispatch(goToRegisterInputCode(inputText))} className={styles.signIn}
                     colorTheme="green">Получить код</LButton>
            <div className={styles.bottomBlock}>
                <button onClick={() => dispatch(goToAuthBase())} className={styles.textBtn}>Войти по логину и паролю
                </button>
            </div>
            <LButton onClick={() => dispatch(goToAuthPartners())} className={styles.signIn} colorTheme="gray">Вход
                для партнеров</LButton>
        </div>
    )
}
