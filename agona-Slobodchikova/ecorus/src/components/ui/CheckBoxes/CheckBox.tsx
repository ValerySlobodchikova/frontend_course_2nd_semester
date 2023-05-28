import React from 'react';
import styles from './CheckBox.module.sass';
import {Icon} from "../Icon";

export interface checkBoxInterface {
    name: string
}

export const CheckBox = ({name}: checkBoxInterface) => {
    return (
        <label className={styles.label}>
            <div className={styles.wrapper}>
                <input type="checkbox" className={styles.checkbox}/>
                <div className={styles.checkmark}>
                    <div className={styles.checkmarkImg}><Icon icon="checkmark" size={16}/></div>
                </div>
                <span>{name}</span>
            </div>
        </label>
    )
}