/**
 * Represents persistent profile and statistics of a player.
 * @remarks This data is used in the leaderboard.
 * @category Interfaces
 */
export interface UserData {
	/** The name chosen by the user. */
	nickname: string;

	/** The cumulative time spent in gameplay measured in seconds. */
	playtime: number;

	/** The total count of matches where user emerges as the winner. */
	wins: number;

	/**
	 * The total number of matches completed.
	 * @remarks Including wins, losses, and draws.
	 * */
	games: number;
}
