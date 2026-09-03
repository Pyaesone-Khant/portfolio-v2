"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { cn } from "@/lib/utils";

export default function FloatingLogo() {
	const logoRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		if (!logoRef.current) return;

		// Set initial state
		gsap.set(logoRef.current, { y: -50, opacity: 0, autoAlpha: 0 });

		gsap.to(logoRef.current, {
			scrollTrigger: {
				trigger: "#hero-section",
				start: "bottom 20%", // Show when you've scrolled past 80% of the hero section
				toggleActions: "play none none reverse",
			},
			y: 0,
			opacity: 1,
			autoAlpha: 1,
			duration: 0.5,
			ease: "power3.out",
		});
	}, []);

	return (
		<div
			ref={logoRef}
			className="fixed top-0 left-0 w-full z-50 flex items-start pt-6 md:pt-8 pointer-events-none invisible"
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
