import style from './Input.module.css';
import { ErrorMessage, Field } from 'formik';

interface InputProps {
	label: string;
	name: string;
	type: string;
}

export const Input = ({ label, name, type }: InputProps) => {
	return (
		<div className={style.Input}>
			<label htmlFor={name}>{label}</label>
			<br />
			<Field id={name} name={name} type={type} />
			<ErrorMessage name={name} component="div" />
		</div>
	);
};
