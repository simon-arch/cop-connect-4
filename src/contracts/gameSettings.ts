import type { CellOwner } from './cellOwner.ts';

/**
 * Configuration settings used to initialize and control the behavior of the Connect 4 game.
 * @category Interfaces
 */
export interface GameSettings {
	/** Determines if disc-dropping animations should be enabled. */
	playAnimations: boolean;

	/**
	 * The total number of horizontal rows in the game grid.
	 * @default 6
	 */
	gridRows: number;

	/**
	 * The total number of vertical columns in the game grid.
	 * @default 7
	 */
	gridCols: number;

	/**
	 * The number of consecutive tokens required in a line (horizontal, vertical, or diagonal) to win.
	 * @default 4
	 */
	winSize: number;

	/**
	 * Defines which player takes the first turn of the match.
	 * @default P1
	 */
	initialPlayer: Exclude<CellOwner, null>;

	/**
	 * The display name for Player 1.
	 * @default PL1
	 */
	playerName1: string;

	/**
	 * The display name for Player 2.
	 * @default PL2
	 */
	playerName2: string;
}
