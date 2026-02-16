/**
 * Represents a duration timestamp broken down into human-readable time units.
 * @remarks Used for tracking total game time.
 * @category Interfaces
 */
export interface date {
	/** The number of full days elapsed. */
	days: number;

	/** The number of hours elapsed. */
	hours: number;

	/** The number of minutes elapsed. */
	minutes: number;

	/** The number of seconds elapsed. */
	seconds: number;
}
