/**
 * Formats a numeric time value into a two-digit string.
 * @param val - The number to be padded.
 * @returns A string representation of the number, padded to at least 2 characters with '0'.
 * @example
 * ```tsx
 * padTime(9);  // Returns "09"
 * padTime(12); // Returns "12"
 * ```
 * @category Utilities
 */
export const padTime = (val: number) => val.toString().padStart(2, '0');
