"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
	{
		title: "Dhamma Aung Lan Admin",
		description:
			"A comprehensive administrative panel engineered for cross-platform compatibility across Web and native Desktop environments. By bridging these ecosystems, the platform provides seamless content management and operational control. The architecture leverages AI-native workflows to automate complex data-fetching logic and rapidly prototype intuitive UI components, resulting in significantly accelerated delivery cycles.",
		tags: [
			"React",
			"Electron",
			"TanStack Query",
			"Cross-Platform",
			"Rust",
			"NFC",
		],
		color: "from-orange-500/20 to-transparent border-orange-500/20 hover:border-orange-500/50",
		logoUrl: "/logos/dhamha_aung_lan_logo.png",
		url: "https://admin.dhammaaunglan.com",
	},
	{
		title: "Rangoon Success Academy",
		description:
			"A premier e-learning platform designed to empower professionals and entrepreneurs with expert-led sales and marketing strategies. Architected from the ground up with an SEO-first philosophy using Server-Side Rendering. This strategic technical approach drives significant organic traffic growth while maintaining optimized Core Web Vitals to ensure a flawless, fast learning experience.",
		tags: [
			"Next.js",
			"SSR",
			"SEO Optimization",
			"E-Learning",
			"Core Web Vitals",
		],
		color: "from-blue-500/20 to-transparent border-blue-500/20 hover:border-blue-500/50",
		logoUrl: "/logos/rangoon_success_academy.png",
		url: "https://rangoonsuccessacademy.com/",
	},
	{
		title: "SarPhat Publishing",
		description:
			"A vibrant social reading and online publishing platform connecting writers with a massive reader base. Navigating complex application states, the platform allows authors to seamlessly publish and monetize their work. Strategic technical SEO audits and performance tuning ensure lightning-fast load times and maximum discoverability for an ever-growing library of high-volume literary content.",
		tags: ["Next.js", "Zustand", "XState", "SWR", "Technical SEO"],
		color: "from-purple-500/20 to-transparent border-purple-500/20 hover:border-purple-500/50",
		logoUrl: "/logos/sarphat.png",
		url: "https://www.sarphat.com/",
	},
	{
		title: "Panora Myanmar",
		description:
			"A comprehensive 24/7 online bookstore and publishing house operating as a unified application. The platform categorizes a vast inventory of books, providing users with detailed previews. The e-commerce experience was completely revitalized using advanced state management to drastically reduce client-side overhead and streamline server-state synchronization, resulting in a highly responsive shopping environment.",
		tags: [
			"Next.js",
			"RTK Query",
			"E-Commerce",
			"Performance Optimization",
		],
		color: "from-emerald-500/20 to-transparent border-emerald-500/20 hover:border-emerald-500/50",
		logoUrl: "/logos/panora.svg",
		url: "https://www.panoramyanmar.com/",
	},
];

export default function SelectedWorks() {
	const container = useRef<HTMLDivElement>(null);
	const title = "Recent Works";

	useGSAP(() => {
		gsap.from(".works-word", {
			scrollTrigger: {
				trigger: container.current,
				start: "top 80%",
			},
			y: "120%",
			opacity: 0,
			rotationZ: 10,
			duration: 0.8,
			stagger: 0.1,
			ease: "power4.out",
		});
	}, { scope: container });

	return (
		<section
			ref={container}
			id="works-section"
			className="min-h-screen w-full bg-black text-white relative py-24 md:py-32 z-10"
		>
			<div className="max-w-7xl mx-auto w-full px-4 md:px-12 mb-16 md:mb-24">
				<h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight flex flex-wrap gap-x-3 md:gap-x-4">
					{title.split(" ").map((word, i) => (
						<span key={i} className="overflow-hidden inline-flex pb-2">
							<span className="works-word inline-block origin-bottom-left">
								{word}
							</span>
						</span>
					))}
				</h2>
			</div>

			{/* Added massive pb-[70vh] so the sticky stack persists on screen before footer scrolls in */}
			<div className="w-full max-w-7xl mx-auto px-4 md:px-12 pb-[70vh] relative">
				{projects.map((project, index) => {
					return (
						<div
							key={index}
							className="project-card sticky w-full mb-12 md:mb-24"
							style={{ 
								top: `calc(15vh + ${index * 40}px)`, 
								zIndex: index + 1 
							}}
						>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className={`group relative w-full rounded-[2.5rem] md:rounded-[3rem] border bg-linear-to-br bg-zinc-900 p-8 md:p-12 lg:p-16 flex flex-col md:flex-row justify-between gap-8 overflow-hidden backdrop-blur-2xl shadow-2xl transition-all duration-500 hover:-translate-y-2 ${project.color}`}
							>
								{/* Content Left */}
								<div className="flex-1 flex flex-col justify-between z-10">
									<div>
										<h3 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
											{project.title}
										</h3>
										<p className="text-base md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
											{project.description}
										</p>
									</div>

									<div className="flex flex-wrap gap-2 md:gap-3 mt-12 md:mt-16">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="px-4 py-2 rounded-full bg-zinc-800/80 text-xs md:text-sm font-medium border border-zinc-700/50 text-zinc-300 backdrop-blur-md"
											>
												{tag}
											</span>
										))}
									</div>
								</div>

								{/* Content Right (Logo & CTA) */}
								<div className="flex flex-col items-start md:items-end justify-between z-10 gap-8">
									<div className="relative size-24 md:size-32 shrink-0 rounded-3xl overflow-hidden bg-zinc-800 border border-zinc-700/50 group-hover:scale-110 group-hover:border-zinc-500/50 transition-all duration-500 flex items-center justify-center p-4 shadow-xl">
										<Image
											src={project.logoUrl}
											alt={`${project.title} logo`}
											width={120}
											height={120}
											className="object-contain"
										/>
									</div>

									<div className="flex items-center gap-3 text-sm font-medium opacity-100 md:opacity-0 md:-translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-500">
										<span className="uppercase tracking-widest text-zinc-300 font-bold">
											Visit Platform
										</span>
										<div className="p-3 rounded-full bg-white text-black shadow-lg group-hover:scale-110 transition-transform">
											<ArrowUpRight size={20} strokeWidth={2.5} />
										</div>
									</div>
								</div>

								{/* Massive Background Glow */}
								<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white opacity-0 md:group-hover:opacity-[0.03] transition-opacity duration-700 rounded-full blur-[100px] pointer-events-none" />
							</a>
						</div>
					);
				})}
			</div>
		</section>
	);
}
