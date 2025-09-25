import style from './Title.module.css';
import type { HTMLAttributes } from 'react';

const Title = (props: HTMLAttributes<HTMLHeadingElement>) => {
    return (
        <h1 {...props} className={style.title}>
            {props.children}
        </h1>
    );
};

export default Title;