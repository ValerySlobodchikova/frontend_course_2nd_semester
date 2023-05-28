import React from 'react';
import styles from './Card.module.sass';
import {NavLink} from "react-router-dom";
import {Icon} from "../../../components/ui/Icon";

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
                        <Icon icon="buttonArrow"/>
                    </NavLink>
                </div>
                <img className={styles.bgImg} src={props.backgroundImg} alt="banner"/>

            </div>
    )
}