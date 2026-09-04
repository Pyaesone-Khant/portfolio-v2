"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
	const container = useRef<HTMLDivElement>(null);

	useGSAP(
		() => {
			// Title reveal
			gsap.from(".about-me-word", {
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

			// Content fade up
			gsap.from(".about-content-block", {
				scrollTrigger: {
					trigger: container.current,
					start: "top 70%",
				},
				y: 40,
				opacity: 0,
				duration: 0.8,
				stagger: 0.2,
				ease: "power3.out",
			});

			// Experience Timeline Line Draw
			gsap.fromTo(
				".experience-line",
				{ scaleY: 0 },
				{
					scaleY: 1,
					transformOrigin: "top center",
					ease: "none",
					scrollTrigger: {
						trigger: ".experience-container",
						start: "top 60%",
						end: "bottom 70%",
						scrub: 1,
					},
				},
			);

			// Experience Cards Animation
			const items = gsap.utils.toArray(".experience-item");
			items.forEach((item: any) => {
				const dot = item.querySelector(".experience-dot");
				const card = item.querySelector(".experience-card");

				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: item,
						start: "top 80%",
					},
				});

				tl.fromTo(
					dot,
					{ scale: 0, opacity: 0 },
					{
						scale: 1,
						opacity: 1,
						duration: 0.5,
						ease: "back.out(2)",
					},
				).fromTo(
					card,
					{ x: 50, opacity: 0 },
					{
						x: 0,
						opacity: 1,
						duration: 0.7,
						ease: "power3.out",
					},
					"-=0.3",
				);
			});
		},
		{ scope: container },
	);

	const title = "About Me";

	return (
		<section
			id="about-section"
			ref={container}
			className="w-full bg-black text-white relative py-32 min-h-dvh"
		>
			<div className="max-w-7xl mx-auto w-full px-4 md:px-12 flex flex-col lg:flex-row gap-16 md:gap-24">
				{/* Left Column: Sticky Title */}
				<div className="lg:sticky lg:top-32 w-full lg:w-[40%] flex flex-col z-10 h-fit">
					<h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight flex flex-wrap gap-x-3 md:gap-x-4 mb-8">
						{title.split(" ").map((word, i) => (
							<span
								key={i}
								className="overflow-hidden inline-flex pb-2"
							>
								<span className="about-me-word inline-block origin-bottom-left">
									{word}
								</span>
							</span>
						))}
					</h2>

					{/* Ambition & Goals */}
					<p className="text-xl md:text-2xl text-zinc-300 leading-relaxed font-light">
						My ultimate ambition is to architect software solutions
						that leave a lasting impact. In the short term, I&apos;m
						focused on mastering cloud-native ecosystems and
						AI-driven workflows. Long-term, I aim to lead
						engineering teams to build innovative platforms that
						solve complex, real-world problems at a global scale.
					</p>
				</div>

				{/* Right Column: Content */}
				<div className="w-full lg:w-[60%] flex flex-col gap-16 md:gap-24 pt-2">
					{/* Experience Timeline */}
					<div className="about-content-block flex flex-col gap-8">
						<h3 className="text-sm font-bold text-zinc-500 uppercase tracking-[0.2em]">
							Work Experience
						</h3>

						<div className="experience-container relative pl-8 md:pl-12 ml-4 pb-8 mt-4">
							{/* Animated Line */}
							<div className="experience-line absolute left-0 top-2 bottom-0 w-[2px] bg-gradient-to-b from-zinc-700 via-zinc-800 to-transparent z-0" />

							<div className="flex flex-col gap-16">
								{/* Item 1 */}
								<div className="experience-item relative group z-10">
									<div className="experience-dot absolute -left-[41px] md:-left-[57px] top-4 w-5 h-5 rounded-full bg-zinc-950 border-2 border-zinc-600 group-hover:border-white group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" />

									<div className="experience-card bg-zinc-900/20 hover:bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700 p-6 md:p-8 rounded-3xl transition-all duration-300 backdrop-blur-sm -mt-2">
										<h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
											Full Stack Developer
										</h4>
										<div className="flex flex-wrap items-center gap-3 mb-6">
											<a
												href="https://digitalbase.com.mm/"
												target="_blank"
												className="flex items-center gap-1 text-sm font-semibold px-4 py-1.5 bg-white/10 text-white rounded-full hover:bg-white hover:text-black transition-colors"
											>
												Digital Base
												<ArrowUpRight size={14} />
											</a>
											<span className="text-zinc-500 font-mono text-sm px-2">
												2025 - Present
											</span>
										</div>
										<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
											Architecting modern web and mobile
											applications using React, Next.js,
											and complex backend systems.
											Focusing on performance
											optimization, scalable
											infrastructure, and seamless user
											experiences.
										</p>
									</div>
								</div>

								{/* Item 2 */}
								<div className="experience-item relative group z-10">
									<div className="experience-dot absolute -left-[41px] md:-left-[57px] top-4 w-5 h-5 rounded-full bg-zinc-950 border-2 border-zinc-600 group-hover:border-white group-hover:scale-125 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0)] group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]" />

									<div className="experience-card bg-zinc-900/20 hover:bg-zinc-900/40 border border-zinc-800/50 hover:border-zinc-700 p-6 md:p-8 rounded-3xl transition-all duration-300 backdrop-blur-sm -mt-2">
										<h4 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-zinc-400 transition-all">
											React Developer
										</h4>
										<div className="flex flex-wrap items-center gap-3 mb-6">
											<span className="flex items-center gap-1 text-sm font-semibold px-4 py-1.5 bg-white/5 text-zinc-300 rounded-full border border-white/10">
												nexcode
											</span>
											<span className="text-zinc-500 font-mono text-sm px-2">
												2023 - 2025
											</span>
										</div>
										<p className="text-base md:text-lg text-zinc-400 font-light leading-relaxed">
											Collaborated directly with clients
											to deliver custom software
											solutions, ranging from E-Commerce
											platforms to administrative
											dashboards, handling both frontend
											UI and backend databases.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
