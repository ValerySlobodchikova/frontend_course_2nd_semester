import React, {useState} from 'react';
import styles from '../index.module.sass'
import {LButton} from '../../../pages/EcoMarketPage/MainComponent/LongButtonComponent/LongButton';
import {goToAuthBase, goToAuthPartners, goToRegisterInputCode} from "../../../../store/authModalSlice";
import {useDispatch} from "react-redux";


interface Props {
    refOverlay: React.RefObject<HTMLDivElement>
    refCross: React.RefObject<HTMLDivElement>
}

export const RegisterModal = ({refOverlay, refCross}: Props) => {
    const dispatch = useDispatch()
    const [inputText, setInputText] = useState('');
    return (
        <div className={styles.overlay} ref={refOverlay}>
            <div className={styles.smallModal}>
                <div className={styles.topBlock}>
                    <span className={styles.header}>Регистрация</span>
                    <div className={styles.crossBtn} ref={refCross}></div>
                </div>
                <div className={styles.form}>
                    <input onChange={(e) => {
                        setInputText(e.target.value);
                    }} className={styles.input} type="text" placeholder="Телефон" id="phone"/>
                </div>
                <LButton onClick={() => dispatch(goToRegisterInputCode(inputText))} className={styles.signIn}
                         colorTheme="green">Получить код</LButton>
                <div className={styles.bottomBlock}>
                    <button onClick={() => dispatch(goToAuthBase())} className={styles.textBtn}>Я уже
                        зарегистировался(-ась)
                    </button>
                </div>
                <LButton onClick={() => dispatch(goToAuthPartners())} className={styles.signIn} colorTheme="gray">Вход
                    для партнеров</LButton>
            </div>
        </div>)
}
