import React from 'react'
import {checkBox, CheckBox} from "./CheckBox";
import styles from './CheckBox.module.sass';

interface CheckBoxesArray {
    checkBoxesArray: Array<checkBox>
}

export const CheckBoxesArray = ({checkBoxesArray}: CheckBoxesArray) => {
    return (
        <div className={styles.arrayCheckBoxes}>
            {checkBoxesArray.map((checkbox: checkBox) => {
                return <CheckBox name={checkbox.name}/>
            })
            }
        </div>
    )
}