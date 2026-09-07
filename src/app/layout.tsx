import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://pyaesonekhant.fun"),
	title: {
		default: "Pyaesone Khant | Software Engineer",
		template: "%s | Pyaesone Khant",
	},
	description:
		"Product-focused Software Engineer architecting scalable web and mobile applications with React, Next.js, and cloud-native ecosystems.",
	keywords: [
		"Software Engineer",
		"Full Stack Developer",
		"React",
		"Next.js",
		"TypeScript",
		"Node.js",
		"AWS",
		"Frontend Architecture",
		"Pyaesone Khant",
	],
	authors: [{ name: "Pyaesone Khant" }],
	creator: "Pyaesone Khant",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "/",
		title: "Pyaesone Khant | Software Engineer",
		description:
			"Product-focused Software Engineer architecting scalable web and mobile applications.",
		siteName: "Pyaesone Khant Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Pyaesone Khant | Software Engineer",
		description:
			"Product-focused Software Engineer architecting scalable web and mobile applications.",
	},
	icons: {
		icon: "/logos/PK3.svg",
	},
};

import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html lang="en" className={`${geistMono.variable} h-full antialiased`}>
			<body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
				<CustomCursor />
				<SmoothScroll>{children}</SmoothScroll>
			</body>
		</html>
	);
}
