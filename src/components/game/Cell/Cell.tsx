import style from './Cell.module.css';
import type { CellOwner } from '@interfaces/cellOwner.ts';
import { useGameSettingsStore } from '@stores/useGameSettingsStore.tsx';

export interface CellProps {
	owner: CellOwner;
}

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
