import React, {useEffect, useState} from 'react';
import styles from './Header.module.sass';
import {NavLink} from "react-router-dom";
import cn from 'classnames'
import {Modal} from '../Modals/Modal';
import {useDispatch, useSelector} from "react-redux";
import {goToAuthBase} from "../../store/authModalSlice";
import {Icon} from "../ui/Icon";
import {RootState} from "../../store";
import {useGetProfileQuery} from "../../store/auth";
import {setBalance, setEmail} from "../../store/profileInfo";


export const Header = () => {
    const [visible, setVisible] = useState(false)
    const dispatch = useDispatch()

    const profileInfo = {
        balance: useSelector((state: RootState) => state.profileInfo.balance),
        email: useSelector((state: RootState) => state.profileInfo.email)
    }

    const token = localStorage.getItem('token')

    const {data} = useGetProfileQuery(null, {
        skip: !token
    })
    useEffect(() => {
        if (data) {
            setVisible(false)
        }
    })

    function setProfileInfo(balance: number | undefined, email: string | undefined) {
        dispatch(setBalance(balance))
        dispatch(setEmail(email))
    }

    useEffect(() => setProfileInfo(data?.balance, data?.email))

    return (
        <header className={styles.header}>
            <div className={styles.leftNav}>
                <img className={styles.logo} src="/assets/ecorusLogo.svg" alt="logo of ecorus"/>
                <nav className={styles.navBar}>
                    <NavLink to="/"
                             className={({isActive}) => cn(styles.link, isActive && styles.activeLink)}>Главная</NavLink>
                    <NavLink to="/collection-points"
                             className={({isActive}) => cn(styles.link, isActive && styles.activeLink)}>Пункты
                        сбора</NavLink>
                    <NavLink to="/ecomarket"
                             className={({isActive}) => cn(styles.link, isActive && styles.activeLink)}>ЭкоМаркет</NavLink>
                    <NavLink to="/about-service"
                             className={({isActive}) => cn(styles.link, isActive && styles.activeLink)}>О
                        сервисе</NavLink>
                </nav>
            </div>
            <nav className={styles.navBar}>
                <div className={styles.locationGroup}>
                    <a className={styles.rightNavItem} href="">
                        <Icon icon="locIcon"/>
                        <p>Казань</p>
                    </a>
                </div>
                {!(profileInfo.email === '' || profileInfo.email === undefined || false) &&
                    <div className={styles.profileInfo}>
                        <div>
                            <a className={styles.rightNavItem} href="">
                                <img src="/assets/currencyIcon.svg" alt="icon of currency"/>
                                <p className={styles.balance}>{profileInfo.balance}</p>
                            </a>
                        </div>

                        <div>

                            <NavLink to="/profile" className={styles.rightNavItem}>
                                <img src="/assets/avatar.svg" alt="profile avatar"/>
                                <p>{profileInfo.email}</p>
                            </NavLink>

                        </div>
                    </div>}
                <Modal visible={visible} onClose={() => setVisible(false)}></Modal>
                {!(profileInfo.email) &&
                    <button onClick={() => {
                        setVisible(true);
                        dispatch(goToAuthBase())
                    }}>
                        <div className={styles.signInBtn}>
                            <Icon icon="signIn"/>
                            <span>Войти</span>
                        </div>
                    </button>}
            </nav>
        </header>
    );
};