"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Download, Mail } from "lucide-react";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import MagneticButton from "./MagneticButton";

export default function Footer() {
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);

	useGSAP(
		() => {
			gsap.from(textRef.current, {
				scrollTrigger: {
					trigger: containerRef.current,
					start: "top 80%",
					end: "bottom bottom",
					scrub: 1,
				},
				y: 100,
				opacity: 0,
				scale: 0.9,
				ease: "power3.out",
			});
		},
		{ scope: containerRef },
	);

	return (
		<footer
			ref={containerRef}
			id="footer-section"
			className="relative min-h-[80vh] flex flex-col items-center justify-between bg-black text-white overflow-hidden pt-32 pb-8 rounded-t-[3rem] border-t border-zinc-800/50 z-20"
		>
			<div className="max-w-7xl w-full px-4 md:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 z-10">
				<div className="flex-1">
					<h2 className="footer-stagger text-5xl lg:text-7xl font-extrabold tracking-tight mb-6">
						Ready to build <br />
						<span className="text-zinc-500">
							something innovative?
						</span>
					</h2>
					<p className="footer-stagger text-xl text-zinc-400 max-w-md">
						I&apos;m always open to discussing software
						architecture, creative coding, or partnership
						opportunities.
					</p>
				</div>

				<div className="footer-stagger flex flex-col sm:flex-row items-start lg:items-end gap-4 w-full lg:w-auto">
					<MagneticButton
						href="mailto:pyaesonekhant.dev@gmail.com"
						className="w-full sm:w-auto bg-white text-black hover:bg-transparent px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-bold tracking-wide rounded-full group shadow-2xl shadow-white/10 transition-all duration-200"
					>
						<div className="flex items-center justify-center gap-3 w-full">
							<Mail
								className="group-hover:scale-110 transition-transform"
								size={20}
							/>
							<span>Email Me</span>
						</div>
					</MagneticButton>

					<MagneticButton
						href="/Pyaesone-Khant-CV.pdf"
						download="Pyaesone-Khant-CV.pdf"
						className="w-full sm:w-auto bg-transparent border-zinc-700 hover:border-white hover:bg-white hover:text-black text-zinc-300 px-6 py-4 md:px-8 md:py-5 text-base md:text-lg font-bold tracking-wide rounded-full group"
					>
						<div className="flex items-center justify-center gap-2 w-full">
							<Download
								size={20}
								className="group-hover:-translate-y-1 transition-transform"
							/>
							<span>Download CV</span>
						</div>
					</MagneticButton>
				</div>
			</div>

			<div className="w-full mt-24 z-10">
				<div className="w-full border-t border-zinc-800" />
				<div className="max-w-7xl mx-auto px-4 md:px-12 pt-8 pb-32 md:pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-zinc-500 text-sm font-medium tracking-wide">
						© {new Date().getFullYear()} Pyaesone Khant. All rights
						reserved.
					</p>

					<div className="flex items-center gap-8">
						<a
							href="https://linkedin.com/in/pyaesone-khant"
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
						>
							<div className="p-2 bg-zinc-900 rounded-full group-hover:bg-blue-600 transition-colors">
								<FaLinkedin size={18} />
							</div>
							<span className="text-sm font-bold tracking-wide">
								LinkedIn
							</span>
						</a>
						<a
							href="https://github.com/Pyaesone-Khant"
							target="_blank"
							rel="noopener noreferrer"
							className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
						>
							<div className="p-2 bg-zinc-900 rounded-full group-hover:bg-zinc-700 transition-colors">
								<FaGithub size={18} />
							</div>
							<span className="text-sm font-bold tracking-wide">
								GitHub
							</span>
						</a>
					</div>
				</div>
			</div>

			{/* Massive background text */}
			<div className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none mix-blend-screen">
				<h1
					ref={textRef}
					className="text-[18vw] font-black leading-none tracking-tight whitespace-nowrap"
				>
					PYAESONE KHANT
				</h1>
			</div>
		</footer>
	);
}
