import style from './Select.module.css';
import { ErrorMessage, Field } from 'formik';

type SelectOption = {
	value: string;
	label: string;
};

interface SelectProps {
	label: string;
	name: string;
	options: SelectOption[];
}

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
