/**
 * Sets a cookie with a specified name, value, and expiration in days.
 *
 * @param name - The name of the cookie.
 * @param value - The value to store in the cookie.
 * @param days - Number of days until the cookie expires (default is 365).
 *
 * @example
 * ```tsx
 * setCookie('username', 'JohnDoe'); // Sets a cookie that expires in 365 days
 * setCookie('theme', 'dark', 30);   // Sets a cookie that expires in 30 days
 * ```
 * @category Utilities
 */
export const setCookie = (name: string, value: string, days = 365) => {
	const expires = new Date(
		Date.now() + days * 24 * 60 * 60 * 1000,
	).toUTCString();
	document.cookie = `${name}=${value}; expires=${expires}; path=/; SameSite=Lax`;
};

/**
 * Retrieves the value of a cookie by its name.
 *
 * @param name - The name of the cookie to retrieve.
 * @returns The decoded value of the cookie if found, or `null` if the cookie does not exist.
 *
 * @example
 * ```tsx
 * getCookie('username'); // Returns username if said cookie exists
 * ```
 * @category Utilities
 */
export const getCookie = (name: string): string | null => {
	const cookies = document.cookie.split(';');
	for (const cookie of cookies) {
		const [key, value] = cookie.split('=');
		if (key.trim() === name) {
			return decodeURIComponent(value);
		}
	}
	return null;
};
