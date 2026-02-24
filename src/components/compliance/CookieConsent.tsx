import style from './CookieConsent.module.css';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '@utils/cookies.ts';
import { Modal } from '@components/ui/Modal/Modal.tsx';
import { Formik, Form } from 'formik';
import { Input } from '@components/ui/Formik/Input/Input.tsx';
import { Button } from '@components/ui/Button/Button.tsx';

const EULA = 'https://github.com/simon-arch/cop-connect-4/blob/main/EULA.md';
const PRIVACY = 'https://github.com/simon-arch/cop-connect-4/blob/main/PRIVACY.md';
const GDPR = 'https://github.com/simon-arch/cop-connect-4/blob/main/GDPR.md';

/**
 * Represents the set of cookie and consent preferences for a user.
 * All fields correspond to a specific consent category, and `consentedAt`
 * records the timestamp when the user provided consent.
 * @category Interfaces
 */
export interface CookieFormValues {
	eula: boolean;
	privacy: boolean;
	personal: boolean;
	marketing: boolean;
	analytics: boolean;
	age: boolean;
	consentedAt: string;
}

/**
 * Props for the {@link CookieConsent} component.
 * @property onChange - Callback invoked whenever the user's consent changes.
 * If the user has not provided consent yet, `null` is passed.
 * @category Interfaces
 */
export interface CookieConsentProps {
	onChange: (values: CookieFormValues | null) => void;
}

/**
 * A modal component for handling user cookie and consent preferences.
 * Checks for an existing consent cookie and displays a modal if none is found
 * or if the cookie is invalid.
 * @remarks The consent choices are stored as a cookie named `"consent"` and
 * communicated back via the `onChange` callback.
 * @example
 * ```tsx
 * const handleConsentChange = (values: CookieFormValues | null) => {
 *    if (values) {
 *        console.log('User consented:', values);
 *    } else {
 *        console.log('Consent not yet given.');
 *    }
 * };
 * <CookieConsent onChange={handleConsentChange} />
 * ```
 * @category Consent
 */
export const CookieConsent = ({ onChange }: CookieConsentProps) => {
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		const consentCookie = getCookie('consent');
		if (!consentCookie) {
			setIsOpen(true);
			onChange(null);
			return;
		}
		try {
			const parsed = JSON.parse(consentCookie) as CookieFormValues;
			onChange(parsed);
		} catch {
			setIsOpen(true);
			onChange(null);
		}
	}, [onChange]);

	const initialValues: CookieFormValues = {
		eula: false,
		privacy: false,
		personal: false,
		marketing: false,
		analytics: false,
		age: false,
		consentedAt: '',
	};

	const finalizeConsent = (values: CookieFormValues) => {
		setCookie('consent', JSON.stringify(values));
		setIsOpen(false);
		onChange(values);
	};

	const handleSubmit = (values: CookieFormValues) => {
		finalizeConsent({
			...values,
			consentedAt: new Date().toISOString()}
		);
	};

	const acceptAll = () => {
		finalizeConsent({
			eula: true,
			privacy: true,
			personal: true,
			marketing: true,
			analytics: true,
			age: true,
			consentedAt: new Date().toISOString()
		});
	};

	const acceptRequiredOnly = () => {
		finalizeConsent({
			eula: true,
			privacy: true,
			personal: true,
			age: true,
			marketing: false,
			analytics: false,
			consentedAt: new Date().toISOString()
		});
	};

	if (!isOpen) return null;

	return (
		<Modal onClose={() => {}} showClose={false}>
			<h3 className={style.Center}>Connect 4 - User Agreement & Cookies</h3>

			<Formik initialValues={initialValues} onSubmit={handleSubmit}>
				{({ values }) => {
					const mandatorySelected =
						values.eula &&
						values.privacy &&
						values.personal &&
						values.age;
					return (
						<Form>
							<p className={style.Row}>
								<div>
									* I have read and understood the{' '}
									<a href={EULA}>
										End User License Agreement
									</a>
									.
								</div>
								<div>
									<Input name="eula" type="checkbox" />
								</div>
							</p>

							<p className={style.Row}>
								<div>
									* I have read and understood the{' '}
									<a href={PRIVACY}>Privacy Policy</a>.
								</div>
								<div>
									<Input name="privacy" type="checkbox" />
								</div>
							</p>

							<p className={style.Row}>
								<div>
									* I consent to the local collection and
									local use of my personal data as described
									in <a href={GDPR}>GDPR Specification</a>.
								</div>
								<div>
									<Input name="personal" type="checkbox" />
								</div>
							</p>

							<p className={style.Row}>
								* I confirm that I am 16 years or older, or that
								I have parent/guardian consent to use this site.
								<Input name="age" type="checkbox" />
							</p>

							<p className={style.Row}>
								I consent to receive marketing emails.
								<br />
								<b>[NOT IMPLEMENTED] [EDUCATIONAL PURPOSES]</b>
								<Input name="marketing" type="checkbox" />
							</p>

							<p className={style.Row}>
								I consent to anonymous analytics tracking.
								<br />
								<b>[NOT IMPLEMENTED] [EDUCATIONAL PURPOSES]</b>
								<Input name="analytics" type="checkbox" />
							</p>

							<div className={style.Buttons}>
								<Button
									type="submit"
									disabled={!mandatorySelected}
								>
									Accept Selected
								</Button>

								<Button
									type="button"
									onClick={acceptRequiredOnly}
								>
									Accept Required Only
								</Button>

								<Button type="button" onClick={acceptAll}>
									Accept All
								</Button>
							</div>
						</Form>
					);
				}}
			</Formik>
		</Modal>
	);
};
