"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

						<div className="flex flex-col gap-12 border-l border-zinc-800 pl-6 md:pl-8 ml-2">
							<div className="relative">
								<div className="absolute -left-8.25 md:-left-10.25 top-1.5 w-4 h-4 rounded-full bg-zinc-800 border-2 border-black" />
								<h4 className="text-2xl font-bold text-white mb-1">
									Full Stack Developer
								</h4>
								<p className="text-zinc-500 mb-4 font-mono text-sm">
									2025 - Present
								</p>
								<p className="text-lg text-zinc-400 font-light">
									Architecting modern web and mobile
									applications using React, Next.js, and
									complex backend systems. Focusing on
									performance optimization, scalable
									infrastructure, and seamless user
									experiences.
								</p>
							</div>

							<div className="relative">
								<div className="absolute -left-8.25 md:-left-10.25 top-1.5 w-4 h-4 rounded-full bg-zinc-800 border-2 border-black" />
								<h4 className="text-2xl font-bold text-white mb-1">
									React Developer
								</h4>
								<p className="text-zinc-500 mb-4 font-mono text-sm">
									2023 - 2025
								</p>
								<p className="text-lg text-zinc-400 font-light">
									Collaborated directly with clients to
									deliver custom software solutions, ranging
									from E-Commerce platforms to administrative
									dashboards, handling both frontend UI and
									backend databases.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
