"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

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
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollWrapperRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const wrapper = scrollWrapperRef.current;
			if (!wrapper) return;

			// Use matchMedia to only apply the horizontal scroll on desktop
			const mm = gsap.matchMedia();

			mm.add("(min-width: 768px)", () => {
				// Horizontal scroll animation
				gsap.to(wrapper, {
					x: () => -(wrapper.scrollWidth - window.innerWidth),
					ease: "none",
					scrollTrigger: {
						trigger: containerRef.current,
						pin: true,
						scrub: 1,
						end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
						invalidateOnRefresh: true,
					},
				});
			});

			mm.add("(max-width: 767px)", () => {
				// No GSAP scroll trigger for mobile to prevent layout jumping
			});

			return () => mm.revert();
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			id="works-section"
			className="min-h-screen md:h-screen w-full md:overflow-hidden bg-zinc-950 text-white relative flex flex-col justify-center py-32 md:py-0"
		>
			{/* Header aligned with the max-w-7xl of other components */}
			<div className="md:absolute md:top-12 left-0 right-0 w-full z-10 pointer-events-none mb-12 md:mb-0">
				<div className="max-w-7xl mx-auto w-full px-4 md:px-12">
					<h2 className="text-4xl md:text-6xl font-bold tracking-tighter mix-blend-difference">
						Recent Works
					</h2>
				</div>
			</div>

			<div
				ref={scrollWrapperRef}
				// Padding left calculation to perfectly align the first card with max-w-7xl mx-auto px-12
				className="flex flex-col md:flex-row md:h-[70vh] w-full md:w-max px-4 md:pl-12 lg:pl-[calc((100vw-80rem)/2+3rem)] md:pr-[50vw] gap-8 md:gap-0"
			>
				{projects.map((project, index) => {
					return (
						<div
							key={index}
							className="project-card w-full md:w-[65vw] lg:w-[50vw] max-w-3xl md:h-full shrink-0 flex items-center md:mr-12 lg:mr-16"
						>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className={`group relative w-full h-full rounded-[2.5rem] border bg-linear-to-br bg-zinc-900/50 p-6 md:p-10 flex flex-col justify-between overflow-hidden backdrop-blur-md transition-all duration-500 hover:-translate-y-2 ${project.color}`}
							>
								{/* Animated Background Blob */}
								<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-0 md:group-hover:opacity-5 transition-opacity duration-700 rounded-full blur-3xl pointer-events-none" />

								{/* Top section: Title and Floating Icon */}
								<div className="flex justify-between items-start gap-4">
									<div className="flex-1">
										<h3 className="text-2xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4 tracking-tight">
											{project.title}
										</h3>
										<p className="text-sm md:text-lg text-zinc-400 max-w-lg leading-relaxed md:group-hover:text-zinc-300 transition-colors">
											{project.description}
										</p>
									</div>

									<div className="relative md:size-20 size-16 aspect-square shrink-0 rounded-2xl overflow-hidden bg-zinc-800/50 border border-zinc-700/50 md:group-hover:scale-110 md:group-hover:border-zinc-500/50 transition-all duration-500 flex items-center justify-center p-1.5 hidden sm:flex">
										<Image
											src={project.logoUrl}
											alt={`${project.title} logo`}
											width={80}
											height={80}
											className="object-contain"
										/>
									</div>
								</div>

								{/* Bottom section: Tags and Link Arrow */}
								<div className="flex flex-col sm:flex-row items-start justify-between gap-6 mt-8">
									<div className="flex flex-wrap gap-2 flex-1">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-zinc-800/50 text-xs md:text-sm font-medium border border-zinc-700/50 text-zinc-300"
											>
												{tag}
											</span>
										))}
									</div>

									<div className="flex items-center gap-2 text-sm font-medium sm:opacity-0 sm:translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-500 w-full sm:w-auto justify-between sm:justify-start">
										<span className="uppercase tracking-widest text-zinc-400">
											View Site
										</span>
										<div className="p-2 rounded-full bg-white text-black">
											<ArrowUpRight
												size={16}
												strokeWidth={2}
											/>
										</div>
									</div>
								</div>
							</a>
						</div>
					);
				})}
			</div>
		</section>
	);
}
