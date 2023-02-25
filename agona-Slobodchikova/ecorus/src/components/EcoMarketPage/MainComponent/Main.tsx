import React from 'react';
import styles from './Main.module.sass';
import {FilterButton} from "./FilterButtonComponent/FilterButton";
import {LButton} from "./LongButtonComponent/LongButton";
import {CheckBox} from './CheckBoxes/CheckBox';
import {CheckBoxesArray} from './CheckBoxes/CheckBoxesArray'

const genderArray = [{name: "Мужской"}, {name: "Женский"}]
const typeOfProductArray = [{name: "Выбрать все"}, {name: "Одежда"}, {name: "Обувь"}, {name: "Аксессуары"}]
const brandArray = [{name: "pupalupa"}, {name: "Выбрать все"}, {name: "H&M"}, {name: "P&B"}, {name: "Adidas"}, {name: "Nike"}, {name: "Reebok"}]

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


            </div>
        </main>
    );
};