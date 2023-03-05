import React, {useRef} from 'react';
import styles from './index.module.sass'
import {useModalClose} from "../../../hooks/useModalClose";
import {Portal} from "../../Portal";
import {LButton} from '../../pages/EcoMarketPage/MainComponent/LongButtonComponent/LongButton';

interface Props {
    visible: boolean
    onClose: () => void
}

export const AuthModal = ({visible, onClose}: Props) => {
    const ref = useRef<HTMLDivElement>(null)
    const refCross = useRef<HTMLDivElement>(null)
    useModalClose(ref, () => onClose())
    useModalClose(refCross, () => onClose())
    return (
        <>
            {visible &&
                <Portal>
                    <div className={styles.overlay} ref={ref}>
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
                                <button className={styles.textBtn}>Войти с помощью смс</button>
                                <button className={styles.textBtn}>Регистрация</button>
                            </div>
                            <LButton className={styles.signIn} colorTheme="gray">Вход для партнеров</LButton>
                        </div>
                    </div>
                </Portal>}

        </>
    )
}