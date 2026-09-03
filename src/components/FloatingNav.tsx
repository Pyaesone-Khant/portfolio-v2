"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { User, Briefcase, Mail, Home } from "lucide-react";
import { useRef } from "react";

export default function FloatingNav() {
	const navRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		// Animate in from bottom after a delay
		gsap.from(navRef.current, {
			y: 100,
			opacity: 0,
			duration: 1,
			ease: "power4.out",
			delay: 2, // Wait for hero animations
		});
	}, []);

	const scrollTo = (selector: string) => {
		const element = document.querySelector(selector);
		if (element) {
			// Using Lenis or native scroll
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	const navItems = [
		{ id: "hero", icon: Home, selector: "#hero-section" },
		{ id: "about", icon: User, selector: "#about-section" },
		{ id: "works", icon: Briefcase, selector: "#works-section" },
		{ id: "contact", icon: Mail, selector: "#footer-section" },
	];

	return (
		<div
			ref={navRef}
			className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 shadow-2xl"
		>
			{navItems.map((item) => {
				const Icon = item.icon;
				return (
					<button
						key={item.id}
						onClick={() => scrollTo(item.selector)}
						className="p-3 md:p-4 rounded-full text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all active:scale-95"
						aria-label={`Scroll to ${item.id}`}
					>
						<Icon size={20} strokeWidth={2} />
					</button>
				);
			})}
		</div>
	);
}
