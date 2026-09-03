"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { Globe, ArrowUpRight, Library, BookOpen, MonitorPlay } from "lucide-react";

const projects = [
	{
		title: "Dhamma Aung Lan",
		description:
			"A high-performance cross-platform Admin Panel for Web and Desktop using React and Electron.",
		tags: ["React", "Electron", "TanStack Query"],
		color: "from-orange-500/20 to-transparent border-orange-500/20 hover:border-orange-500/50",
		logo: MonitorPlay,
		url: "#", 
	},
	{
		title: "Rangoon Success Academy",
		description:
			"An SEO-first educational platform optimized for Core Web Vitals and organic growth.",
		tags: ["Next.js", "SSR", "Tailwind"],
		color: "from-blue-500/20 to-transparent border-blue-500/20 hover:border-blue-500/50",
		logo: BookOpen,
		url: "#",
	},
	{
		title: "SarPhat Publishing",
		description:
			"Lightning-fast publishing platform handling high-volume content with strategic SEO tuning.",
		tags: ["Next.js", "Zustand", "SEO"],
		color: "from-purple-500/20 to-transparent border-purple-500/20 hover:border-purple-500/50",
		logo: Library,
		url: "#",
	},
	{
		title: "Panora Bookshop",
		description:
			"Revitalized e-commerce experience with RTK Query for streamlined server-state synchronization.",
		tags: ["Next.js", "RTK Query", "E-commerce"],
		color: "from-emerald-500/20 to-transparent border-emerald-500/20 hover:border-emerald-500/50",
		logo: Globe,
		url: "#",
	},
];

export default function SelectedWorks() {
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollWrapperRef = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			const wrapper = scrollWrapperRef.current;
			if (!wrapper) return;

			// Calculate the total distance to scroll
			// Scroll distance = total width of wrapper - viewport width
			
			gsap.to(wrapper, {
				x: () => -(wrapper.scrollWidth - window.innerWidth),
				ease: "none",
				scrollTrigger: {
					trigger: containerRef.current,
					pin: true,
					scrub: 1,
					end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
          invalidateOnRefresh: true, // Recalculates on resize
				},
			});
		},
		{ scope: containerRef },
	);

	return (
		<section
			ref={containerRef}
			className="h-screen w-full overflow-hidden bg-zinc-950 text-white relative flex flex-col justify-center"
		>
			{/* Header aligned with the max-w-7xl of other components */}
			<div className="absolute top-12 left-0 right-0 w-full z-10 pointer-events-none">
				<div className="max-w-7xl mx-auto w-full px-4 md:px-12">
					<h2 className="text-4xl md:text-6xl font-bold tracking-tighter mix-blend-difference">
						Selected Works
					</h2>
				</div>
			</div>

			<div
				ref={scrollWrapperRef}
				// Padding left calculation to perfectly align the first card with max-w-7xl mx-auto px-12
				className="flex h-[65vh] w-max pl-4 md:pl-12 lg:pl-[calc((100vw-80rem)/2+3rem)] pr-[50vw]"
			>
				{projects.map((project, index) => {
					const Icon = project.logo;
					return (
						<div
							key={index}
							className="project-card w-[90vw] md:w-[50vw] max-w-3xl h-full flex-shrink-0 flex items-center p-4 mr-8 md:mr-16"
						>
							<a
								href={project.url}
								target="_blank"
								rel="noopener noreferrer"
								className={`group relative w-full h-full rounded-[2.5rem] border bg-gradient-to-br bg-zinc-900/50 p-8 md:p-12 flex flex-col justify-between overflow-hidden backdrop-blur-md transition-all duration-500 hover:-translate-y-2 ${project.color}`}
							>
								{/* Animated Background Blob */}
								<div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-full blur-3xl pointer-events-none" />

								{/* Top section: Title and Floating Icon */}
								<div className="flex justify-between items-start">
									<div>
										<h3 className="text-3xl md:text-5xl font-semibold mb-6 tracking-tight">
											{project.title}
										</h3>
										<p className="text-lg md:text-xl text-zinc-400 max-w-md leading-relaxed group-hover:text-zinc-300 transition-colors">
											{project.description}
										</p>
									</div>
									
									<div className="p-4 rounded-full bg-zinc-800/50 border border-zinc-700/50 group-hover:scale-110 group-hover:bg-zinc-100 group-hover:text-zinc-900 transition-all duration-500">
										<Icon size={32} strokeWidth={1.5} />
									</div>
								</div>

								{/* Bottom section: Tags and Link Arrow */}
								<div className="flex flex-wrap items-center justify-between gap-4 mt-8">
									<div className="flex flex-wrap gap-2">
										{project.tags.map((tag) => (
											<span
												key={tag}
												className="px-4 py-1.5 rounded-full bg-zinc-800/50 text-sm font-medium border border-zinc-700/50 text-zinc-300"
											>
												{tag}
											</span>
										))}
									</div>

									<div className="flex items-center gap-2 text-sm font-medium opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
										<span className="uppercase tracking-widest text-zinc-400">View Site</span>
										<div className="p-2 rounded-full bg-white text-black">
											<ArrowUpRight size={16} strokeWidth={2} />
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
