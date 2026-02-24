import '@src/index.css';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form, Formik } from 'formik';
import { Input, type InputProps } from './Input';
import { Button } from '@components/ui/Button/Button.tsx';

/**
 * @ignore
 * A reusable, Formik-wrapped input field component.
 *
 * The component standardizes the layout and behavior of form inputs.
 *
 * Uses built-in Formik `<Field>` and `<ErrorMessage>` components for
 * automatic form state handling and validation feedback.
 *
 * #### Remarks
 * - Renders a `<label>` properly linked via `htmlFor`.
 * - Wraps a Formik `<Field>` for state syncing.
 * - Displays validation messages using `<ErrorMessage>`.
 *
 * #### Example
 * ```tsx
 * <Formik initialValues={{ nickname: '' }} onSubmit={...}>
 *   <Input label="Player Nickname" name="nickname" type="text" />
 * </Formik>
 * ```
 */

const meta: Meta<typeof Input> = {
	title: 'UI/Input',
	component: Input,
	argTypes: {
		label: {
			control: 'text',
			description: 'The text displayed as the label for the input field.',
		},
		name: {
			control: 'text',
			description: 'The unique identifier for the field.',
		},
		type: {
			control: 'select',
			options: ['text', 'number', 'password', 'email'],
			description: 'The HTML input type.',
		},
	},
	tags: ['autodocs'],
};

/**
 * @ignore
 */
export default meta;

type Story = StoryObj<InputProps>;

const FormWrapper = (args: InputProps) => (
	<Formik initialValues={args} onSubmit={() => {}}>
		<Input {...args} />
	</Formik>
);

/**
 * @ignore
 */
export const Default: Story = {
	render: (args) => FormWrapper(args),
	parameters: {
		docs: {
			description: {
				story: 'Standard text input with Formik wrapper.',
			},
		},
	},
};

Default.args = {
	label: 'Username',
	name: 'username',
	type: 'text',
};

/**
 * @ignore
 */
export const Password: Story = {
	render: (args) => FormWrapper(args),
	parameters: {
		docs: {
			description: {
				story: 'Password input with masked characters.',
			},
		},
	},
};

Password.args = {
	label: 'Password',
	name: 'password',
	type: 'password',
};

/**
 * @ignore
 */
export const Email: Story = {
	render: (args) => FormWrapper(args),
	parameters: {
		docs: {
			description: {
				story: 'Email input demonstrating validated Formik field.',
			},
		},
	},
};

Email.args = {
	label: 'Email',
	name: 'email',
	type: 'email',
};

const initialValues = {
	username: '',
	password: '',
	email: '',
};

const validate = (values: typeof initialValues) => {
	const errors: Record<string, string> = {};
	if (!values.username) errors.username = 'Required';
	if (!values.password) errors.password = 'Required';
	if (!values.email) {
		errors.email = 'Required';
	} else if (!values.email.includes('@') || !values.email.includes('.')) {
		errors.email = 'Invalid email address';
	}
	return errors;
};

/**
 * @ignore
 */
export const InputForm: Story = {
	render: () => (
		<Formik
			initialValues={initialValues}
			validate={validate}
			onSubmit={(values) => alert(JSON.stringify(values))}
		>
			<Form>
				<Input label="Username" name="username" type="text" />
				<Input label="Password" name="password" type="password" />
				<Input label="Email" name="email" type="email" />
				<Button type="submit">Submit</Button>
			</Form>
		</Formik>
	),
	parameters: {
		docs: {
			description: {
				story: 'Complete form using multiple Input components and Formik wrapper. Demonstrates validation and form submission.',
			},
		},
	},
};

InputForm.argTypes = {
	label: {
		table: { disable: true }
	},
	type: {
		table: { disable: true }
	},
	name: {
		table: { disable: true }
	},
};

