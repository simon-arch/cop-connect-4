import { bool, number, object, string } from 'yup';

export const settingsValidationSchema = object().shape({
	playAnimations: bool().required('Play Animations is required'),
	gridRows: number()
		.min(2, 'Grid Rows must be greater than 1')
		.max(20, 'Grid Rows must be equal or less than 20')
		.required('Grid Rows is required'),
	gridCols: number()
		.min(2, 'Grid Columns must be greater than 1')
		.max(20, 'Grid Columns must be equal or less than 20')
		.required('Grid Columns is required'),
	winSize: number()
		.min(2, 'Win Size must be greater than 1')
		.required('Win Size is required')
		.test(
			'winSizeCheck',
			'Win Size must be less than Grid Rows or Grid Columns',
			function (value) {
				const { gridRows, gridCols } = this.parent;
				if (value == null) return true;
				return value <= gridRows || value <= gridCols;
			},
		),
	initialPlayer: string()
		.oneOf(['P1', 'P2'], 'Select either P1 or P2')
		.required('Initial Player is required'),
	playerName1: string()
		.min(3, 'Player name must be 3 chars long')
		.max(3, 'Player name must be 3 chars long')
		.matches(/^[A-Za-z0-9]+$/, 'English letters and numbers only')
		.required('Player name is required'),
	playerName2: string()
		.min(3, 'Player name must be 3 chars long')
		.max(3, 'Player name must be 3 chars long')
		.matches(/^[A-Za-z0-9]+$/, 'English letters and numbers only')
		.required('Player name is required'),
});
