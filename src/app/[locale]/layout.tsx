import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { fonts } from "@/fonts";
import { isSupportedLocale } from "@/utils/is-supported-locale";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";
import "./../globals.css";

export const metadata: Metadata = {
	title: "Phi",
	description: "Blog about philosophy",
};

type RootLayoutProps = {
	children: React.ReactNode;
	params: { locale: string };
};

export default async function RootLayout({
	children,
	params,
}: RootLayoutProps) {
	const { locale } = params;

	if (!isSupportedLocale(locale)) notFound();

	const messages = await getMessages();

	return (
		<html lang={locale} suppressHydrationWarning>
			<body className={fonts}>
				<NextIntlClientProvider messages={messages}>
					<ThemeProvider>{children}</ThemeProvider>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
