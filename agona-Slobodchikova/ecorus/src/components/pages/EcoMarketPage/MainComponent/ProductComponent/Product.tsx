import React from 'react';
import styles from './Product.module.sass';
import currency from '../../../../../assets/currencyIcon.svg'

export interface productInterface {
    name: string
    cost: number
    brand: string
    type: string
    img: string
}

export const Product = (props: productInterface) => {
    return (
        <div className={styles.productCard}>
            <img src={props.img} alt="picture of product"/>
            <div className={styles.brandTag}>
                {props.brand}
            </div>
            <div className={styles.textInformation}>
                <p className={styles.productName}>{props.name}</p>
                <p className={styles.productType}>{props.type}</p>
            </div>
            <div className={styles.productCost}>
                <img src={currency} alt="currency"/>
                <p>{props.cost}</p>
            </div>
        </div>
    )
}