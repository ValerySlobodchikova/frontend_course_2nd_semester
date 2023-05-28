import React, {ReactNode} from 'react';
import cn from 'classnames/bind'
import styles from './index.module.sass'


const cx = cn.bind(styles)

export enum Theme {
    GREEN,
    GRAY
}

export interface LButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    theme?: Theme
    width?: number
    height?: number
    children: ReactNode
    onClick?: () => void
}

export const LButton  = ({theme = Theme.GREEN, children, width, height, onClick}: LButtonProps) => {
    const sizeStyles = {
        height: height,
        width: width,
    }
    return (
        <button onClick={onClick} style={sizeStyles} className={cx(styles.LButton, sizeStyles, {
            LButtonGreen: theme === Theme.GREEN,
            LButtonGray: theme === Theme.GRAY
        })}>{children}</button>
    )
}
