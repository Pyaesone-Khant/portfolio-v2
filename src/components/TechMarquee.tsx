"use client";

import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { IconType } from "react-icons";

export interface TechItem {
	name: string;
	icon: IconType;
}

interface TechMarqueeProps {
	items: TechItem[];
	className?: string;
	speed?: "fast" | "normal" | "slow";
	reverse?: boolean;
}

export default function TechMarquee({
	items,
	className,
	speed = "normal",
	reverse = false,
}: TechMarqueeProps) {
	const containerRef = useRef<HTMLDivElement>(null);
	const tweenRef = useRef<gsap.core.Tween | null>(null);

	useGSAP(
		() => {
			const duration = speed === "fast" ? 10 : speed === "slow" ? 25 : 15;

			// Animate both tracks simultaneously
			tweenRef.current = gsap.fromTo(
				".marquee-track",
				{
					xPercent: reverse ? -100 : 0,
				},
				{
					xPercent: reverse ? 0 : -100,
					repeat: -1,
					duration: duration,
					ease: "none",
				},
			);
		},
		{ scope: containerRef, dependencies: [reverse, speed] },
	);

	const handleMouseEnter = () => tweenRef.current?.pause();
	const handleMouseLeave = () => tweenRef.current?.play();

	const renderSet = (isClone: boolean) => (
		<div
			className="marquee-track flex items-center gap-10 px-5 shrink-0"
			aria-hidden={isClone}
		>
			{items.map((item, idx) => (
				<div
					key={idx}
					className="relative flex flex-col items-center justify-center group cursor-pointer w-16 h-16"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
				>
					<item.icon className="text-4xl text-zinc-500 group-hover:text-white transition-all duration-300 group-hover:scale-[1.3] group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.5)] z-10" />

					{/* Fancy Tooltip */}
					<div className="absolute -top-10 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none z-20">
						<span className="bg-white text-black text-[10px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap shadow-xl border border-zinc-200 uppercase tracking-widest">
							{item.name}
						</span>
						<div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
					</div>
				</div>
			))}
		</div>
	);

	return (
		<div
			ref={containerRef}
			className={cn(
				"relative flex w-full overflow-hidden mask-horizontal",
				className,
			)}
		>
			{/* We render 4 sets so it spans ultra-wide monitors easily and loops flawlessly */}
			{renderSet(false)}
			{renderSet(false)}
			{renderSet(false)}
			{renderSet(false)}
		</div>
	);
}
