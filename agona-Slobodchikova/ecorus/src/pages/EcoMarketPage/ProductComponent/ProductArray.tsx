import React from 'react';
import {productInterface, Product} from "./Product";
import styles from './Product.module.sass';
import {LButton, Theme} from "../../../components/ui/LongButtonComponent";

interface ProductArrayInterface {
    productArray: Array<productInterface>
}

export const ProductArray = ({productArray}: ProductArrayInterface) => {
    return (
        <div className={styles.arrayProduct}>
            <div className={styles.balanceCard}>
                <div className={styles.textBalanceCard}>
                    <div className={styles.balanceInf}>
                        <p>На вашем балансе</p>
                        <img className={styles.currency} src="/assets/currencyIcon.svg" alt="currency"/>
                        <p className={styles.balance}>200</p>
                    </div>
                    <p className={styles.saleMessage}>Вы можете поменять их на скидку 200 руб.</p>
                </div>
                <LButton theme={Theme.GREEN}>Получить промокод</LButton>
            </div>

            {productArray.map((product: productInterface) => {
                return <Product
                    key={product.img}
                    name={product.name}
                    cost={product.cost}
                    brand={product.brand}
                    type={product.type}
                    img={product.img}/>
            })
            }
        </div>
    )
}