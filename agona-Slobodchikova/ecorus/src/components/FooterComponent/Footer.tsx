import React from 'react';
import styles from './Footer.module.sass';



export const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.contactBlock}>
                <img src="/assets/Mail.svg" alt="mail icon"/>
                <p>info@ecorus.ru</p>
            </div>
            <div className={styles.contactBlock}>
                <img src="/assets/Call.svg" alt="call icon"/>
                <p>+7 (800) 880-88-88</p>
            </div>
        </footer>
    );
};