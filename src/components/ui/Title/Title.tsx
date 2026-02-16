import style from './Title.module.css';
import type { HTMLAttributes } from 'react';

/**
 * A standardized heading component.
 * @remarks The component wraps a `<h1>` and applies the
 * primary title styling. Accepts all standard HTML heading attributes.
 * @param props - Supports all standard {@link HTMLAttributes} for a heading element.
 * @example
 * ```tsx
 * <Title id="main-heading">Connect 4</Title>
 * ```
 * @category UI
 */
export const Title = (props: HTMLAttributes<HTMLHeadingElement>) => {
	return (
		<h1 {...props} className={style.title}>
			{props.children}
		</h1>
	);
};
