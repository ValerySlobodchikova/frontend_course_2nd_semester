import React from 'react';
import styles from './Footer.module.sass';
import {Icon} from "../ui/Icon";



export const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.contactBlock}>
                <Icon icon="Mail"/>
                <p>info@ecorus.ru</p>
            </div>
            <div className={styles.contactBlock}>
                <Icon icon="Call"/>
                <p>+7 (800) 880-88-88</p>
            </div>
        </footer>
    );
};