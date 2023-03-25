import React, {useState} from 'react';
import { LButton } from '../../../EcoMarketPage/MainComponent/LongButtonComponent/LongButton';
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
                <LButton className={styles.button} colorTheme={"green"}>{props.buttonText}</LButton>
            </div>
            <img className={styles.bannerImg} src={props.backgroundImg} alt="image on banner"/>

        </div>

    )
}