import '@src/index.css';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal, type ModalProps } from './Modal';
import { useState, useEffect } from 'react';
import { Button } from '@components/ui/Button/Button.tsx';

/**
 * A reusable portal-based modal component.
 *
 * The Modal renders its children into a DOM node outside
 * the main React tree using `createPortal`.
 *
 * #### Remarks
 * Requires a `#portal-root` element in the DOM.
 *
 * #### Example
 * ```tsx
 * <Modal onClose={() => setIsOpen(false)}>
 *   <h2>Game Over!</h2>
 *   <p>Player 1 Wins!</p>
 * </Modal>
 * ```
 */

const meta: Meta<typeof Modal> = {
	title: 'UI/Modal',
	component: Modal,
	tags: ['autodocs'],
	argTypes: {
		onClose: {
			action: 'closed',
			description: 'Callback fired when the modal is closed.',
			table: {
				category: 'Props',
			},
		},
		showClose: {
			description: 'Whether the close button is visible on the modal.',
			table: {
				category: 'Props',
				type: { summary: 'boolean' },
				defaultValue: { summary: 'false' },
			},
		},
		children: {
			description: 'Content rendered inside the modal window.',
			table: {
				category: 'Props',
			},
		},
		//@ts-expect-error declaration of additional demonstrational story arguments
		heading: {
			control: 'text',
			description: 'Title displayed at the top of the modal content.',
			table: {
				category: 'Story',
			},
		},
		message: {
			control: 'text',
			description: 'Primary descriptive text inside the modal.',
			table: {
				category: 'Story',
			},
		},
		openText: {
			control: 'text',
			description: 'Label for the modal button.',
			table: {
				category: 'Story',
			},
		},
		confirmText: {
			control: 'text',
			description: 'Label for the primary confirmation button.',
			table: {
				category: 'Story',
			},
		},
		cancelText: {
			control: 'text',
			description: 'Label for the secondary cancel button.',
			table: {
				category: 'Story',
			},
		},
		onConfirm: {
			action: 'confirmed',
			description:
				'Callback executed when the confirm button is pressed.',
			table: {
				category: 'Story',
			},
		},
		onCancel: {
			action: 'cancelled',
			description: 'Callback executed when the cancel button is pressed.',
			table: {
				category: 'Story',
			},
		},
	},
};

export default meta;
type ModalStoryProps = ModalProps & {
	heading?: string;
	message?: string;
	openText?: string;
	confirmText?: string;
	cancelText?: string;
	onConfirm?: () => void;
	onCancel?: () => void;
};

type Story = StoryObj<ModalStoryProps>;

const Wrapper = (args: ModalStoryProps) => {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		let root = document.getElementById('portal-root');
		if (!root) {
			root = document.createElement('div');
			root.id = 'portal-root';
			document.body.appendChild(root);
		}
		return () => {
			root?.remove();
		};
	}, []);

	const handleClose = () => {
		setIsOpen(false);
		args.onClose?.();
	};

	const handleConfirm = () => {
		args.onConfirm?.();
		handleClose();
	};

	const handleCancel = () => {
		args.onCancel?.();
		handleClose();
	};

	return (
		<>
			<Button onClick={() => setIsOpen(true)}>{args.openText}</Button>
			{isOpen && (
				<Modal onClose={handleClose} showClose={args.showClose}>
					<h2>{args.heading}</h2>
					<p>{args.message}</p>
					<p>{args.children}</p>
					<div>
						{args.confirmText && (
							<Button onClick={handleConfirm}>
								{args.confirmText}
							</Button>
						)}
						{args.cancelText && (
							<Button onClick={handleCancel}>
								{args.cancelText}
							</Button>
						)}
					</div>
				</Modal>
			)}
		</>
	);
};

export const Default: Story = {
	render: (args) => <Wrapper {...args} />,
	args: {
		heading: 'Game Over!',
		message: 'Player 1 Wins!',
		openText: 'Show Results',
		confirmText: 'Close',
		showClose: true
	},
	parameters: {
		docs: {
			description: {
				story: 'Basic modal with a single close button.',
			},
		},
	},
};

export const Deletion: Story = {
	render: (args) => <Wrapper {...args} />,
	args: {
		heading: 'Account Deletion',
		message:
			'Are you sure you want to delete your account?',
		openText: 'Delete Account',
		confirmText: 'Yes. Delete',
		cancelText: 'No. Cancel',
		children: 'This action cannot be undone!',
		showClose: false
	},
	parameters: {
		docs: {
			description: {
				story: 'Confirmation dialog to demonstrate cancel and confirm actions.',
			},
		},
	},
};