"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function FloatingLogo() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			// Show the logo if scrolled past 80% of the viewport (past the hero text)
			if (window.scrollY > window.innerHeight * 0.8) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll();

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			className={cn(
				"fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out flex items-start pt-6 md:pt-8 pointer-events-none",
				isVisible ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
			)}
		>
			<div className="w-full max-w-7xl mx-auto px-4 md:px-12 pointer-events-auto">
				<a
					href="#hero-section"
					onClick={(e) => {
						e.preventDefault();
						document.querySelector("#hero-section")?.scrollIntoView({ behavior: "smooth" });
					}}
					className="inline-flex items-center justify-center px-5 py-2 md:px-6 md:py-3 rounded-full bg-zinc-900/60 backdrop-blur-xl border border-zinc-700/50 hover:bg-zinc-800/80 transition-all shadow-xl"
				>
					<span className="text-lg md:text-xl font-bold tracking-tighter animate-basic-color">
						Pyaesone Khant
					</span>
				</a>
			</div>
		</div>
	);
}
