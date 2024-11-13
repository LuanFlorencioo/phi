import { LOCALES } from "@/i18n/locales";

export function isLocaleSupported(currentLocale: string): boolean {
	const isSupported = LOCALES.some(
		(localeSupported) => localeSupported === currentLocale,
	);

	return isSupported;
}
