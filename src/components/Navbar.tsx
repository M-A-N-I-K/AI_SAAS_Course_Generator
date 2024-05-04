import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { FloatingNav } from "./ui/floating-navbar";
import {
	HomeIcon,
	UserIcon,
	LucideFileQuestion,
	GalleryHorizontal,
	CreativeCommonsIcon,
} from "lucide-react";

type Props = {};

const Navbar = async (props: Props) => {
	const session = await getAuthSession();

	// Define your navigation items
	const navItems = [
		{ name: "Skillverse", link: "/", icon: <HomeIcon /> },
		{ name: "Gallery", link: "/gallery", icon: <GalleryHorizontal /> },
		{ name: "Create Course", link: "/create", icon: <CreativeCommonsIcon /> },
		{ name: "DoubtBot", link: "/doubtbot", icon: <LucideFileQuestion /> },
	];

	return (
		<>
			<FloatingNav navItems={navItems}></FloatingNav>
			<div className="block fixed top-10 right-10 mx-auto border border-transparent  rounded-full dark:bg-black bg-white z-[5000] items-center justify-center space-x-4">
				{session?.user ? (
					<UserAccountNav user={session.user} />
				) : (
					<SignInButton />
				)}
			</div>
		</>
	);
};

export default Navbar;
