import React from 'react';
import styles from './index.module.sass';
import {FilterButton} from "../../components/ui/FilterButtonComponent/FilterButton";
import {LButton, Theme} from "../../components/ui/LongButtonComponent";
import {CheckBoxesArray} from '../../components/ui/CheckBoxes/CheckBoxesArray'
import {ProductArray} from './ProductComponent/ProductArray'


const genderArray = [{name: "Мужской"}, {name: "Женский"}]
const typeOfProductArray = [{name: "Выбрать все"}, {name: "Одежда"}, {name: "Обувь"}, {name: "Аксессуары"}]
const brandArray = [{name: "Выбрать все"}, {name: "H&M"}, {name: "P&B"}, {name: "Adidas"}, {name: "Nike"}, {name: "Reebok"}]

const productArray = [
    {name: 'Nike Air Max 2021', cost: 1000, type: 'Мужская обувь', brand: 'NIKE', img: '/assets/products/nikeAirMax2021.png'},
    {name: 'Nike Air Max 90 Premium', cost: 750, type: 'Мужская обувь', brand: 'NIKE', img: '/assets/products/nikeAirMax90Premium.png'},
    {name: 'Adidas Alphabounce RC', cost: 1200, type: 'Мужская обувь', brand: 'Adidas', img: '/assets/products/adidasAlphabounceRC.png'},
    {name: 'Nike Air Max 2021', cost: 1000, type: 'Мужская обувь', brand: 'H&M', img: '/assets/products/hoodyNikeAirMax2021.png'},
    {name: 'Nike Air Force 1 Low', cost: 2100, type: 'Мужская обувь', brand: 'NIKE', img: '/assets/products/nikeAirForce1Low.png'}
]
export const EcoMarketPage = () => {
    return (
        <main className={styles.main}>
            <div className={styles.headPart}>
                <h1 className={styles.pageHeader}>ЭкоМаркет</h1>
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
                    <LButton theme={Theme.GRAY}>Сбросить фильтры</LButton>
                </div>

                <ProductArray productArray={productArray}/>

            </div>
        </main>
    );
};