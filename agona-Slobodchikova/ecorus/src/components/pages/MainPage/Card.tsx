import React, {useState} from 'react';
import styles from './Card.module.sass';
import {LButton} from "../EcoMarketPage/MainComponent/LongButtonComponent/LongButton";
import {NavLink} from "react-router-dom";

export interface CardInterface {
    header: string
    text: string
    backgroundImg: string
    buttonLink: string
}

export const Card = (props: CardInterface) => {
    return (

            <div className={styles.subPageContainer} >
                <div className={styles.leftBlock}>
                    <p className={styles.header}>{props.header}</p>
                    <p className={styles.text}>{props.text}</p>
                    <NavLink to={props.buttonLink} className={styles.button}>
                        <img src={'/assets/buttonArrow.svg'} alt=""/>
                    </NavLink>
                </div>
                <img className={styles.bgImg} src={props.backgroundImg} alt="image on banner"/>

            </div>
    )
}