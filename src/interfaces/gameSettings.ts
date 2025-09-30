import type { CellOwner } from '@interfaces/cellOwner.ts';

export interface GameSettings {
	playAnimations: boolean;
	gridRows: number;
	gridCols: number;
	winSize: number;
	initialPlayer: Exclude<CellOwner, null>;
	playerName1: string;
	playerName2: string;
}
