import '../../../index.css';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from './Button';

/**
 * A reusable, styled button component that wraps the native HTML `<button>`.
 *
 * The component is fully compatible with standard HTML button attributes,
 * making it a drop-in replacement.
 *
 * Uses baked in CSS modules to provide consistent styling across the app.
 *
 * #### Remarks
 * Supports all native button props like `onClick`, `disabled`, `type`, etc.
 *
 * #### Example
 * ```tsx
 * <Button onClick={() => console.log('Clicked!')} disabled={loading}>
 *   Play Again
 * </Button>
 * ```
 */

const meta: Meta<typeof Button> = {
	title: 'UI/Button',
	component: Button,
	argTypes: {
		children: {
			control: 'text',
			description:
				'The text displayed inside the button.'
		},
		disabled: {
			control: 'boolean',
			description:
				'When true, the button is not clickable and appears visually disabled.',
		},
		onClick: {
			action: 'clicked',
			description:
				'Function that gets called when the button is clicked.',
		},
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
