import React from 'react';
import styles from './index.module.sass';
import {Banner} from "./BannerComponent";



export const Slider = () => {
    return (
        <div className={styles.container}>
            <Banner
                text={"Сдай макулатуру или старую одежду и получи скидку на покупку товаров из переработанных материалов"}
                header={"Сделаем мир чище"}
                backgroundColor={"#B3EDC8"}
                backgroundImg={'/assets/recycleBanner.svg'}
                buttonText={"Условия сервиса"}
            />
        </div>
    )
}