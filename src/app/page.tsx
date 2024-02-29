import React from "react";
import Link from "next/link";
import { HeroParallax } from "@/components/ui/hero-parallax";

const Page = () => {
	const products = [
		{
			title: "Optimized Learning Experience",
			link: "/",
			thumbnail: "/1.jpeg",
		},
		{
			title: "Ai driven Learning Experience",
			link: "/course",
			thumbnail: "/img3.png",
		},
		{
			title: "Doubtbot For doubts",
			link: "/doubtbot",
			thumbnail: "/img5.png",
		},
		{
			title: "Create Course on just few clicks",
			link: "/create",
			thumbnail: "/3.jpeg",
		},
		{
			title: "Optimized Learning Experience",
			link: "/",
			thumbnail: "/1.jpeg",
		},
		{
			title: "Ai driven Learning Experience",
			link: "/course",
			thumbnail: "/img3.png",
		},
		{
			title: "Doubtbot For doubts",
			link: "/doubtbot",
			thumbnail: "/img5.png",
		},
		{
			title: "Create Course on just few clicks",
			link: "/create",
			thumbnail: "/3.jpeg",
		},
		{
			title: "Optimized Learning Experience",
			link: "/",
			thumbnail: "/1.jpeg",
		},
		{
			title: "Ai driven Learning Experience",
			link: "/course",
			thumbnail: "/img3.png",
		},
		{
			title: "Doubtbot For doubts",
			link: "/doubtbot",
			thumbnail: "/img5.png",
		},
		{
			title: "Create Course on just few clicks",
			link: "/create",
			thumbnail: "/3.jpeg",
		},
	];
	return (
		<>
			<HeroParallax products={products} />

			<footer style={{ marginTop: "40px", fontStyle: "italic" }}>
				We are committed to offering excellence in higher learning! Thank
				you for choosing SkillVerse to elevate your academic journey. Start
				learning today!
			</footer>
		</>
	);
};

export default Page;
