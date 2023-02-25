import React from 'react';
import styles from './FilterButton.module.sass';

interface fButton {
    text: string
}

export const FilterButton = ({text}: fButton) => {
    return (
        <button className={styles.filterButton}>
            {text}
        </button>
    );
}