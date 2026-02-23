import style from './Input.module.css';
import { ErrorMessage, Field } from 'formik';

/**
 * Props for the {@link Input} component.
 * @category Interfaces
 */
export interface InputProps {
	/** The text displayed as the label for the input field. */
	label?: string;

	/** The unique identifier for the field. */
	name: string;

	/** The HTML input type (e.g., 'text', 'number', 'password'). */
	type: string;

	/** Whether the input is disabled. */
	disabled?: boolean;
}

/**
 * A Formik-connected input field wrapper.\
 * The component standardizes layout for form inputs.
 * @remarks The component provides:
 * 1. A `<label>` linked via `htmlFor`.
 * 2. A Formik `<Field>` for state synchronization.
 * 3. An `<ErrorMessage>` container for validation failures.
 * @example
 * ```tsx
 * <Formik initialValues={{ nickname: '' }} onSubmit={...}>
 *     <Input label="Player Nickname" name="nickname" type="text" />
 * </Formik>
 * ```
 * @category UI
 */
export const Input = ({ label, name, type, disabled = false }: InputProps) => {
	return (
		<div className={style.Input}>
			{label &&
				<>
					<label htmlFor={name}>{label}</label>
					<br/>
				</>
			}
			<Field id={name} name={name} type={type} disabled={disabled} />
			<ErrorMessage name={name} component="div" />
		</div>
	);
};
