import React from 'react';
import styles from './CheckBox.module.sass';

export interface checkBoxInterface {
    name: string
}

export const CheckBox = ({name}: checkBoxInterface) => {
    return (
        <label className={styles.label}>
            <div className={styles.wrapper}>
                <input type="checkbox" className={styles.checkbox}/>
                <div className={styles.checkmark}>
                    <img className={styles.checkmarkImg} src="/assets/checkmark.svg" alt="checkmark"/>
                </div>
                <span>{name}</span>
            </div>
        </label>
    )
}