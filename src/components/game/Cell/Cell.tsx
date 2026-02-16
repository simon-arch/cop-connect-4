import style from './Cell.module.css';
import type { CellOwner } from '@contracts/cellOwner.ts';
import { useGameSettingsStore } from '@stores/useGameSettingsStore.tsx';

/**
 * Props for the {@link Cell} component.
 * @category Interfaces
 */
export interface CellProps {
	/** The player who occupies this specific cell.
	 * @remarks If `null`, the cell is rendered empty.
	 */
	owner: CellOwner;
}

/**
 * Renders a single slot on the Connect 4 board.
 * @remarks Applies styles based on the current owner.
 * @param props - The component props defined in {@link CellProps}.
 * @example
 * ```tsx
 * <Cell owner="P1" />
 * ```
 * @category Components
 */
export function Cell({ owner }: CellProps) {
	const {
		settings: { playAnimations },
	} = useGameSettingsStore();
	return (
		<div
			className={`${style.cell} ${playAnimations && style.animated} ${owner && style[owner]}`}
		/>
	);
}
