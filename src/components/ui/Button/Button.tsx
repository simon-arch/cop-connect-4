import style from './Button.module.css';
import type {ButtonHTMLAttributes} from 'react';

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button {...props} className={style.button}>
            {props.children}
        </button>
    );
};