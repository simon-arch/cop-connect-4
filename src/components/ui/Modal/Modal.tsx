import style from './Modal.module.css';
import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
	children: ReactNode;
	onClose: () => void;
}

const root = document.getElementById('portal-root');

export const Modal = ({ children, onClose }: ModalProps) => {
	if (!root) return null;

	return createPortal(
		<div className={style.Overlay}>
			<div className={style.Content} onClick={(e) => e.stopPropagation()}>
				<button className={style.Button} onClick={onClose}>
					✖
				</button>
				{children}
			</div>
		</div>,
		root,
	);
};
