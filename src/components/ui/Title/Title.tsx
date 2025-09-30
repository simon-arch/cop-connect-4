import style from './Title.module.css';
import type { HTMLAttributes } from 'react';

export const Title = (props: HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h1 {...props} className={style.title}>
			{props.children}
		</h1>
	);
};
