import { locales } from "@/i18n/locales";

export function isSupportedLocale(currentLocale: string): boolean {
	const isSupported = locales.some(
		(localeSupported) => localeSupported === currentLocale,
	);

	return isSupported;
}
