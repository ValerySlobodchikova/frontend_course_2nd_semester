import React from 'react';
import styles from './Footer.module.sass';
import mail from "../../assets/Mail.svg";
import call from "../../assets/Call.svg";


export const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.contactBlock}>
                <img src={mail} alt="mail icon"/>
                <p>info@ecorus.ru</p>
            </div>
            <div className={styles.contactBlock}>
                <img src={call} alt="call icon"/>
                <p>+7 (800) 880-88-88</p>
            </div>
        </footer>
    );
};