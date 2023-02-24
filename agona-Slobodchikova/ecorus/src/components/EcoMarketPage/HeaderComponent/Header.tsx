import React from 'react';
import styles from './Header.module.sass';
import logo from "../../../assets/ecorusLogo.svg";
import locIcon from "../../../assets/locIcon.svg";
import currencyIcon from "../../../assets/currencyIcon.svg";
import avatar from "../../../assets/avatar.svg";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.leftNav}>
                <img className={styles.logo} src={logo} alt="logo of ecorus"/>
                <nav className={styles.navBar}>
                    <a href="">Главная</a>
                    <a href="">Пункты сбора</a>
                    <a href="">ЭкоМаркет</a>
                    <a href="">О свервисе</a>
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
                    <a className={styles.rightNavItem} href="">
                        <img src={avatar} alt="profile avatar"/>
                        <p>Алексей</p>
                    </a>
                </div>
            </nav>
        </header>
    );
};