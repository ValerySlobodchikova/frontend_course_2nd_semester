import React, {useState} from 'react';
import styles from './Header.module.sass';
import logo from "../../assets/ecorusLogo.svg";
import locIcon from "../../assets/locIcon.svg";
import currencyIcon from "../../assets/currencyIcon.svg";
import avatar from "../../assets/avatar.svg";
import {NavLink} from "react-router-dom";
import cn from 'classnames'
import {AuthModal} from '../Modals/AuthModal';
import signIn from "../../assets/signIn.svg"


export const Header = () => {
    const [visible, setVisible] = useState(false)

    return (
        <header className={styles.header}>
            <div className={styles.leftNav}>
                <img className={styles.logo} src={logo} alt="logo of ecorus"/>
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
                        <img src={locIcon} alt="icon"/>
                        <p>Казань</p>
                    </a>
                </div>
                <div>
                    <a className={styles.rightNavItem} href="">
                        <img src={currencyIcon} alt="icon of currency"/>
                        <p className={styles.balance}>1000</p>
                    </a>
                </div>
                <div>
                    <AuthModal visible={visible} onClose={() => setVisible(false)}></AuthModal>
                    <NavLink to="/profile" className={styles.rightNavItem}>
                        <img src={avatar} alt="profile avatar"/>
                        <p>Алексей</p>
                    </NavLink>

                </div>
                <button onClick={() => setVisible(true)}>
                    <div className={styles.signInBtn}>
                        <img className={styles.signInImg} src={signIn} alt=""/>
                        <span>Войти</span>
                    </div>
                </button>
            </nav>
        </header>
    );
};