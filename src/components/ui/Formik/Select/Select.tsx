import style from './Select.module.css';
import { ErrorMessage, Field } from 'formik';

/**
 * Represents an individual option within a {@link Select} dropdown.
 * @category Types
 * */
export type SelectOption = {
	/** The internal value used for state and logic. */
	value: string;

	/** The human-readable text displayed to the user in the dropdown. */
	label: string;
};

/**
 * Props for the {@link Select} component.
 * @category Interfaces
 * */
export interface SelectProps {
	/** The descriptive text displayed above the dropdown. */
	label: string;

	/** The unique identifier for the field. */
	name: string;

	/** The list of selectable options to populate the dropdown. */
	options: SelectOption[];
}

/**
 * A Formik-connected dropdown component.\
 * The component allows for selection of predefined values with built-in
 * error handling.
 * @remarks The component renders a standard HTML `<select>` element
 * wrapped in Formik's logic.
 * @param props - The component props defined in {@link SelectProps}.
 * @example
 * ```tsx
 * const options = [
 *    { value: 'P1', label: 'Player 1' },
 *    { value: 'P2', label: 'Player 2' }
 * ];
 * <Select label="Starting Player" name="initialPlayer" options={options} />
 * ```
 * @category UI
 */
export const Select = ({ label, name, options }: SelectProps) => {
	return (
		<div className={style.Select}>
			<label htmlFor={name}>{label}</label>
			<br />
			<Field as="select" id={name} name={name}>
				{options.map((o) => (
					<option key={o.value} value={o.value}>
						{o.label}
					</option>
				))}
			</Field>
			<ErrorMessage name={name} component="div" />
		</div>
	);
};
