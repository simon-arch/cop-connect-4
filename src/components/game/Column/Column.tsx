import style from './Column.module.css';
import { Cell } from '@components/game/Cell/Cell.tsx';
import { useGrid } from '@hooks/useGrid.tsx';
import type { CellOwner } from '@contracts/cellOwner.ts';
import { useGameSettingsStore } from '@stores/useGameSettingsStore.tsx';
import { usePlayerStore } from '@stores/usePlayerStore.tsx';

/**
 * Props for the {@link Column} component.
 * @category Interfaces
 */
export interface ColumnProps {
	/** The horizontal index of this column. */
	index: number;

	/** The current discs present in this column, from bottom to top. */
	cells: CellOwner[];
}

/**
 * Represents a vertical column within the Connect 4 board.
 * @remarks The component handles click events
 * to drop a disc using {@link useGrid}.
 * @param props - The component props defined in {@link ColumnProps}.
 * @category Components
 */
export function Column(props: ColumnProps) {
	const { append, ended } = useGrid();
	const {
		settings: { gridRows },
	} = useGameSettingsStore();
	const { player } = usePlayerStore();

	const cells = [...props.cells];
	while (cells.length < gridRows) cells.push(null);
	const reversed = [...cells].reverse();

	const onClick = () => {
		append(props.index, player);
	};

	const playable = !ended && !reversed.every((cell) => cell !== null);

	return (
		<div
			className={`${style.column} ${playable && style.playable} ${player && style[player]}`}
			onClick={onClick}
		>
			{reversed.map((cell: CellOwner, row: number) => (
				<Cell owner={cell} key={row.toString()} />
			))}
		</div>
	);
}
