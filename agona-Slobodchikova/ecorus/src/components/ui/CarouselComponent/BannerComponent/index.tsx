import React from 'react';
import {LButton, Theme} from '../../LongButtonComponent';
import styles from './index.module.sass';

export interface bannerInterface {
    header: string
    text: string
    backgroundColor: string
    backgroundImg: string
    buttonText: string
}

export const Banner = (props: bannerInterface) => {
    return (

        <div className={styles.bannerContainer} style={{backgroundColor: props.backgroundColor}}>
            <div className={styles.leftBlock}>
                <p className={styles.header}>{props.header}</p>
                <p className={styles.text}>{props.text}</p>
                <div className={styles.buttonWrapper}><LButton theme={Theme.GREEN}>{props.buttonText}</LButton></div>
            </div>
            <img className={styles.bannerImg} src={props.backgroundImg} alt="banner"/>

        </div>

    )
}