import style from './Modal.module.css';
import type { ReactNode, ReactPortal } from 'react';
import { createPortal } from 'react-dom';

/**
 * Props for the {@link Modal} component.
 * @category Interfaces
 * */
export interface ModalProps {
	/** The content to be displayed inside the modal window. */
	children: ReactNode;

	/** Callback function triggered when the close button is clicked. */
	onClose: () => void;
}

/**
 * A layout component that renders content in a portal overlay.
 * @example
 * ```tsx
 * <Modal onClose={() => setIsOpen(false)}>
 *    <h2>Game Over!</h2>
 *    <p>Player 1 Wins!</p>
 * </Modal>
 * ```
 * @category UI
 */
export const Modal = ({ children, onClose }: ModalProps): ReactPortal | null => {
	const root = document.getElementById('portal-root');
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
