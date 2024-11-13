import { useTranslations } from "next-intl";

export default function Home() {
	const t = useTranslations("Home");

	return (
		<main className="w-full min-h-screen flex flex-col justify-center items-center gap-8">
			<h1 className="font-display font-bold text-4xl">{t("title")}</h1>

			<p>{t("description")}</p>
		</main>
	);
}
