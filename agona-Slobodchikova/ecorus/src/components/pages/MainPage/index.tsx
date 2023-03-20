import React from 'react';
import {Slider} from "./SliderComponent";
import {SubPage} from "./SubPageComponent";
import styles from './index.module.sass';


export const MainPage = () => {
    return (
        <div className={styles.page}>

            <Slider/>
            <div className={styles.subpages}>
                <SubPage
                    header={"Пункты сбора"}
                    text={"Посмотри, где в твоем городе можно сдать вторсырье на переработку"}
                    backgroundImg={'/assets/map.svg'}
                    buttonLink={"/collection-points"}
                />
                <SubPage
                    header={"ЭкоМаркет"}
                    text={"Используй заработанные экокоины для покупки товаров из переработанных материалов "}
                    backgroundImg={'/assets/recycleclothes.svg'}
                    buttonLink={"/ecomarket"}
                />
            </div>
        </div>
    )
}