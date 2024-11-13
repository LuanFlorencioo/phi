export const LOCALES = [
	"en", // English
	"pt", // Portuguese
	"fr", // French
	"es", // Espanish
	"dt", // German
	"it", // Italian
	"nl", // Dutch
	"jp", // Japanese
] as const;

export type Locale = (typeof LOCALES)[number];

export const LOCALE_DEFAULT: Locale = "en";
