import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';
import "../../../index.css";

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		children: { control: 'text', description: 'Button label text' },
		disabled: { control: 'boolean', description: 'Disables the button' },
		onClick: { action: 'clicked' },
	},
	tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
	args: {
		children: 'Click Me',
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				story: 'Default enabled button that can be clicked.',
			},
		},
	},
};

export const Disabled: Story = {
	args: {
		children: 'Cannot Click',
		disabled: true,
	},
	parameters: {
		docs: {
			description: {
				story: 'Button in a disabled state; user cannot interact with it.',
			},
		},
	},
};

export const LongText: Story = {
	args: {
		children:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
		disabled: false,
	},
	parameters: {
		docs: {
			description: {
				story: 'Button with very long text to demonstrate text wrapping and height scaling.',
			},
		},
	},
};
