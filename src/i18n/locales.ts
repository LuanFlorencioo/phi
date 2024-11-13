export const locales = [
	"en", // English (default locale)
	"pt", // Portuguese
	"fr", // French
	"es", // Espanish
	"dt", // German
	"it", // Italian
	"nl", // Dutch
	"jp", // Japanese
] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";
