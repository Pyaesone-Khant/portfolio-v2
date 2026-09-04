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
	const trackRef = useRef<HTMLDivElement>(null);

	useGSAP(() => {
		// 4 sets total. We animate from 0 to -50% (or -50% to 0).
		// This perfectly shifts the container by exactly 2 sets, creating a seamless infinite loop.
		const duration = speed === "fast" ? 10 : speed === "slow" ? 25 : 15;

		const tween = gsap.fromTo(
			trackRef.current,
			{ xPercent: reverse ? -50 : 0 },
			{
				xPercent: reverse ? 0 : -50,
				ease: "none",
				duration: duration,
				repeat: -1,
			},
		);

		const el = containerRef.current;
		if (!el) return;

		const pause = () => tween.pause();
		const play = () => tween.play();

		el.addEventListener("mouseenter", pause);
		el.addEventListener("mouseleave", play);
		el.addEventListener("touchstart", pause);
		el.addEventListener("touchend", play);

		return () => {
			el.removeEventListener("mouseenter", pause);
			el.removeEventListener("mouseleave", play);
			el.removeEventListener("touchstart", pause);
			el.removeEventListener("touchend", play);
		};
	}, [speed, reverse]);

	const renderSet = () => (
		<div className="flex items-center gap-10 px-5 shrink-0">
			{items.map((item, idx) => (
				<div
					key={idx}
					className="relative flex flex-col items-center justify-center group cursor-pointer w-16 h-16"
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
			<div
				ref={trackRef}
				className={cn("flex w-max min-w-full items-center")}
			>
				{/* We render 4 sets so it spans ultra-wide monitors easily and loops flawlessly */}
				{renderSet()}
				{renderSet()}
				{renderSet()}
				{renderSet()}
			</div>
		</div>
	);
}
