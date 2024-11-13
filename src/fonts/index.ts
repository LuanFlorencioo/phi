import { GeistSans } from "geist/font/sans";
import { Tinos } from "next/font/google";

const tinosFont = Tinos({
	weight: ["400", "700"],
	subsets: ["latin", "greek"],
	variable: "--font-tinos",
});

const geistFont = GeistSans;

export const fonts: string = [tinosFont, geistFont]
	.map((font) => font.variable)
	.join(" ");
