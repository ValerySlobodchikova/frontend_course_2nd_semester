import React, {useState} from 'react';
import styles from '../index.module.sass'
import {LButton, Theme} from '../../../LongButtonComponent';
import {goToAuthBase, goToAuthPartners, goToRegisterInputCode} from "../../../../../store/authModalSlice";
import {useDispatch} from "react-redux";

export const AuthWithSmsModal = () => {
    const dispatch = useDispatch()
    const [inputText, setInputText] = useState('');
    return (

        <div className={styles.modal}>
            <div className={styles.form}>
                <input onChange={(e) => {
                    setInputText(e.target.value);
                }} className={styles.input} type="text" placeholder="Телефон" id="phone"/>
            </div>
            <LButton onClick={() => dispatch(goToRegisterInputCode(inputText))} width={384} height={56}
                     theme={Theme.GREEN}>Получить код</LButton>
            <div className={styles.bottomBlock}>
                <button onClick={() => dispatch(goToAuthBase())} className={styles.textBtn}>Войти по логину и паролю
                </button>
            </div>
            <LButton onClick={() => dispatch(goToAuthPartners())} width={384} height={56} theme={Theme.GRAY}>Вход
                для партнеров</LButton>
        </div>
    )
}
