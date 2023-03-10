import React from 'react';
import styles from './CheckBox.module.sass';
import checkmark from "../../../../../assets/checkmark.svg";

export interface checkBoxInterface {
    name: string
}

export const CheckBox = ({name}: checkBoxInterface) => {
    return (
        <label className={styles.label}>
            <div className={styles.wrapper}>
                <input type="checkbox" className={styles.checkbox}/>
                <div className={styles.checkmark}>
                    <img className={styles.checkmarkImg} src={checkmark} alt="checkmark"/>
                </div>
                <span>{name}</span>
            </div>
        </label>
    )
}