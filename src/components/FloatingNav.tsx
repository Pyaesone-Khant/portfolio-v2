"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { User, Briefcase, Mail, Home } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
	{ id: "hero", icon: Home, selector: "#hero-section" },
	{ id: "about", icon: User, selector: "#about-section" },
	{ id: "works", icon: Briefcase, selector: "#works-section" },
	{ id: "contact", icon: Mail, selector: "#footer-section" },
];

export default function FloatingNav() {
	const navRef = useRef<HTMLDivElement>(null);
	const [activeId, setActiveId] = useState("hero");

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

	useEffect(() => {

		const observerOptions = {
			root: null,
			rootMargin: "-45% 0px -45% 0px", // Trigger when section is near the vertical center
			threshold: 0,
		};

		const handleIntersect = (entries: IntersectionObserverEntry[]) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					// Find which nav item corresponds to this intersecting element
					const match = navItems.find((item) => item.selector.substring(1) === entry.target.id);
					if (match) {
						setActiveId(match.id);
					}
				}
			});
		};

		const observer = new IntersectionObserver(handleIntersect, observerOptions);

		navItems.forEach((item) => {
			const element = document.querySelector(item.selector);
			if (element) {
				observer.observe(element);
			}
		});

		return () => {
			observer.disconnect();
		};
	}, []);

	const scrollTo = (selector: string) => {
		const element = document.querySelector(selector);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<div
			ref={navRef}
			className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 p-2 rounded-full bg-zinc-900/80 backdrop-blur-xl border border-zinc-700/50 shadow-2xl"
		>
			{navItems.map((item) => {
				const Icon = item.icon;
				const isActive = activeId === item.id;
				return (
					<button
						key={item.id}
						onClick={() => scrollTo(item.selector)}
						className={cn(
							"p-3 md:p-4 rounded-full transition-all active:scale-95 duration-300",
							isActive
								? "bg-white text-black shadow-lg"
								: "text-zinc-400 hover:text-white hover:bg-zinc-800"
						)}
						aria-label={`Scroll to ${item.id}`}
					>
						<Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
					</button>
				);
			})}
		</div>
	);
}
