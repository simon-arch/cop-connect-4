import '../../../index.css';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Modal, type ModalProps } from './Modal';
import { useState, useEffect } from 'react';

const meta: Meta<typeof Modal> = {
	title: 'UI/Modal',
	component: Modal,
	tags: ['autodocs'],
};

// TODO: finish modal

export default meta;
type Story = StoryObj<typeof Modal>;

const Wrapper = (args: ModalProps) => {
	const [isOpen, setIsOpen] = useState(false);
	const [portal, setPortal] = useState<HTMLElement | null>(null);

	useEffect(() => {
		let root = document.getElementById('portal-root');
		if (!root) {
			root = document.createElement('div');
			root.id = 'portal-root';
			document.body.appendChild(root);
		}
		setPortal(root);
		return () => root?.remove();
	}, []);
	
	if (!portal) return null;

	const handleClose = () => {
		setIsOpen(false);
		args.onClose?.();
	};

	return (
		<>
			<button onClick={() => setIsOpen(true)}>Open Modal</button>
			{isOpen && <Modal {...args} onClose={handleClose} />}
		</>
	);
};

export const Default: Story = {
	render: () => (
		<Wrapper onClose={() => {}}>
			<h2>Game Over!</h2>
			<p>Player 1 Wins!</p>
		</Wrapper>
	),
};
