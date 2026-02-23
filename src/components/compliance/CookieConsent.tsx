import style from './CookieConsent.module.css';
import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '@utils/cookies.ts';
import { Modal } from '@components/ui/Modal/Modal.tsx';
import { Formik, Form } from 'formik';
import { Input } from '@components/ui/Formik/Input/Input.tsx';
import { Button } from '@components/ui/Button/Button.tsx';

export interface CookieFormValues {
	eula: boolean;
	privacy: boolean;
	personal: boolean;
	marketing: boolean;
	analytics: boolean;
	age: boolean;
	consentedAt: string;
}

export interface CookieConsentProps {
	onChange: (values: CookieFormValues | null) => void;
}

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
		finalizeConsent(values);
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
								* I have read and understood the End User
								License Agreement.
								<Input name="eula" type="checkbox" />
							</p>

							<p className={style.Row}>
								* I have read and understood the Privacy
								Policy.
								<Input name="privacy" type="checkbox" />
							</p>

							<p className={style.Row}>
								* I consent to the local collection and local use
								of my personal data as described in resources above.
								<Input name="personal" type="checkbox" />
							</p>

							<p className={style.Row}>
								* I confirm that I am 16 years or older, or
								that I have parent/guardian consent to use
								this site.
								<Input name="age" type="checkbox" />
							</p>

							<p className={style.Row}>
								I consent to receive marketing emails.
								<br />
								<b>
									[NOT IMPLEMENTED] [EDUCATIONAL PURPOSES]
								</b>
								<Input name="marketing" type="checkbox" />
							</p>

							<p className={style.Row}>
								I consent to anonymous analytics tracking.
								<br />
								<b>
									[NOT IMPLEMENTED] [EDUCATIONAL PURPOSES]
								</b>
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
