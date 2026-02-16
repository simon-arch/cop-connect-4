import style from './Button.module.css';
import type { ButtonHTMLAttributes } from 'react';

/**
 * A reusable, styled button component that wraps the standard HTML button.
 * @remarks The component inherits all standard HTML button attributes and
 * should be used as a drop-in replacement for `<button>`
 * to support provided CSS modules.
 * @param props - Supports all standard {@link ButtonHTMLAttributes}.
 * @example
 * ```tsx
 * <Button onClick={() => console.log('Clicked.')} disabled={loading}>
 *     Play Again
 * </Button>
 * ```
 * @category UI
 */
export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button {...props} className={style.button}>
			{props.children}
		</button>
	);
};
