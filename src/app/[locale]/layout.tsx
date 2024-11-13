import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { fonts } from "@/fonts";
import { isLocaleSupported } from "@/utils/is-locale-supported";
import { ThemeProvider } from "next-themes";
import "./../globals.css";

export const metadata: Metadata = {
	title: "Phi",
	description: "Blog about philosophy",
};

export default async function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	if (!isLocaleSupported(locale)) notFound();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={fonts}>
				<ThemeProvider>{children}</ThemeProvider>
			</body>
		</html>
	);
}
