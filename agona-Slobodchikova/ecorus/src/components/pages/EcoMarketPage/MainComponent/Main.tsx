import React from 'react';
import styles from './Main.module.sass';
import {FilterButton} from "./FilterButtonComponent/FilterButton";
import {LButton} from "./LongButtonComponent/LongButton";
import {CheckBoxesArray} from './CheckBoxes/CheckBoxesArray'
import {ProductArray} from './ProductComponent/ProductArray'

import nikeAirMax2021 from '../../../../assets/products/nikeAirMax2021.png'
import nikeAirMax90Premium from '../../../../assets/products/nikeAirMax90Premium.png'
import adidasAlphabounceRC from '../../../../assets/products/adidasAlphabounceRC.png'
import hoodyNikeAirMax2021 from '../../../../assets/products/hoodyNikeAirMax2021.png'
import nikeAirForce1Low from '../../../../assets/products/nikeAirForce1Low.png'

const genderArray = [{name: "Мужской"}, {name: "Женский"}]
const typeOfProductArray = [{name: "Выбрать все"}, {name: "Одежда"}, {name: "Обувь"}, {name: "Аксессуары"}]
const brandArray = [{name: "Выбрать все"}, {name: "H&M"}, {name: "P&B"}, {name: "Adidas"}, {name: "Nike"}, {name: "Reebok"}]

const productArray = [
    {name: 'Nike Air Max 2021', cost: 1000, type: 'Мужская обувь', brand: 'NIKE', img: nikeAirMax2021},
    {name: 'Nike Air Max 90 Premium', cost: 750, type: 'Мужская обувь', brand: 'NIKE', img: nikeAirMax90Premium},
    {name: 'Adidas Alphabounce RC', cost: 1200, type: 'Мужская обувь', brand: 'Adidas', img: adidasAlphabounceRC},
    {name: 'Nike Air Max 2021', cost: 1000, type: 'Мужская обувь', brand: 'H&M', img: hoodyNikeAirMax2021},
    {name: 'Nike Air Force 1 Low', cost: 2100, type: 'Мужская обувь', brand: 'NIKE', img: nikeAirForce1Low}
]
export const Main = () => {
    return (
        <main className={styles.main}>
            <div className={styles.headPart}>
                <h1>ЭкоМаркет</h1>
                <div className={styles.filterButtons}>
                    <FilterButton text={"По популярности"}/>
                    <FilterButton text={"По цене"}/>
                    <FilterButton text={"По новизне"}/>
                </div>
            </div>
            <div className={styles.bodyPart}>
                <div className={styles.filterBlock}>
                    <div className={styles.filterCheckBox}>
                        <div className={styles.filterByTypeBlock}>
                            Пол
                            <CheckBoxesArray checkBoxesArray={genderArray}/>
                        </div>
                        <div className={styles.filterByTypeBlock}>
                            Тип товара
                            <CheckBoxesArray checkBoxesArray={typeOfProductArray}/>
                        </div>
                        <div className={styles.filterByTypeBlock}>
                            Брэнд
                            <CheckBoxesArray checkBoxesArray={brandArray}/>
                        </div>
                    </div>
                    <LButton colorTheme={"grey"}>Сбросить фильтры</LButton>
                </div>

                <ProductArray productArray={productArray}/>

            </div>
        </main>
    );
};