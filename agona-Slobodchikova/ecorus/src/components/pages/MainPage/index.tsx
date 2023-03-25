import React from 'react';
import {Card} from "./Card";
import styles from './index.module.sass';
import {Carousel} from "./СarouselComponent";


export const MainPage = () => {
    return (
        <div className={styles.page}>
            <Carousel/>
            <div className={styles.cards}>
                <Card
                    header="Пункты сбора"
                    text="Посмотри, где в твоем городе можно сдать вторсырье на переработку"
                    backgroundImg='/assets/map.svg'
                    buttonLink="/collection-points"
                />
                <Card
                    header="ЭкоМаркет"
                    text="Используй заработанные экокоины для покупки товаров из переработанных материалов "
                    backgroundImg='/assets/recycleclothes.svg'
                    buttonLink="/ecomarket"
                />
            </div>
        </div>
    )
}