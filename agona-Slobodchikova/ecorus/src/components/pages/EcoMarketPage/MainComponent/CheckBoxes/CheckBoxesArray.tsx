import React from 'react'
import {checkBoxInterface, CheckBox} from "./CheckBox";
import styles from './CheckBox.module.sass';

interface CheckBoxesArray {
    checkBoxesArray: Array<checkBoxInterface>
}

export const CheckBoxesArray = ({checkBoxesArray}: CheckBoxesArray) => {
    return (
        <div className={styles.arrayCheckBoxes}>
            {checkBoxesArray.map((checkbox: checkBoxInterface) => {
                return <CheckBox name={checkbox.name} key={checkbox.name}/>
            })
            }
        </div>
    )
}
