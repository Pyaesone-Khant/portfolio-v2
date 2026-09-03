"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import { Mail, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
	const containerRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLHeadingElement>(null);

	useGSAP(() => {
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
	}, { scope: containerRef });

	return (
		<footer
			ref={containerRef}
			id="footer-section"
			className="relative min-h-[80vh] flex flex-col items-center justify-between bg-black text-white overflow-hidden pt-32 pb-8 rounded-t-[3rem] border-t border-zinc-800/50"
		>
			<div className="max-w-7xl w-full px-4 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 z-10">
				<div>
					<h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
						Ready to build <br />
						<span className="text-zinc-500">something innovative?</span>
					</h2>
					<p className="text-xl text-zinc-400 max-w-md">
						I'm always open to discussing frontend architecture, creative coding, or partnership opportunities.
					</p>
				</div>
				
				<div className="flex flex-col sm:flex-row items-start md:items-end gap-4 w-full md:w-auto">
					<MagneticButton 
            href="mailto:pyaesonekhant.dev@gmail.com"
            className="w-full sm:w-auto bg-white text-black hover:bg-zinc-200 border-none px-6 py-4 md:px-8 md:py-5 text-base font-semibold rounded-full group shadow-2xl shadow-white/10"
          >
						<div className="flex items-center justify-center gap-3 w-full">
							<Mail className="group-hover:scale-110 transition-transform" size={20} /> 
							<span>Email Me</span>
						</div>
					</MagneticButton>
					
					<MagneticButton 
            href="/Pyaesone-Khant-CV.pdf" 
            download="Pyaesone-Khant-CV.pdf"
            className="w-full sm:w-auto bg-transparent border-zinc-700 hover:border-white hover:bg-white hover:text-black text-zinc-300 px-6 py-4 md:px-8 md:py-5 text-base font-semibold rounded-full group"
          >
						<div className="flex items-center justify-center gap-2 w-full">
							<Download size={20} className="group-hover:-translate-y-1 transition-transform" /> 
							<span>Download CV</span>
						</div>
					</MagneticButton>
				</div>
			</div>

			<div className="w-full mt-24 z-10">
				<div className="w-full border-t border-zinc-800" />
				<div className="max-w-7xl mx-auto px-4 md:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
					<p className="text-zinc-500 text-sm">
						© {new Date().getFullYear()} Pyaesone Khant. All rights reserved.
					</p>
					
					<div className="flex items-center gap-8">
						<a 
							href="https://linkedin.com/in/pyaesonekhant" 
							target="_blank" 
							rel="noopener noreferrer"
							className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
						>
							<div className="p-2 bg-zinc-900 rounded-full group-hover:bg-blue-600 transition-colors">
								<FaLinkedin size={18} />
							</div>
							<span className="text-sm font-medium">LinkedIn</span>
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
							<span className="text-sm font-medium">GitHub</span>
						</a>
					</div>
				</div>
			</div>

			{/* Massive background text */}
			<div className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none opacity-[0.02] select-none mix-blend-screen">
				<h1 ref={textRef} className="text-[18vw] font-black leading-none tracking-tighter whitespace-nowrap">
					PYAESONE KHANT
				</h1>
			</div>
		</footer>
	);
}
