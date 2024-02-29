import Link from "next/link";
import React from "react";
import SignInButton from "./SignInButton";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";
import { FloatingNav } from "./ui/floating-navbar";

type Props = {};

const Navbar = async (props: Props) => {
	const session = await getAuthSession();

	// Define your navigation items
	const navItems = [
		{ name: "Skillverse", link: "/" },
		{ name: "Gallery", link: "/gallery" },
		{ name: "Create Course", link: "/create" },
		{ name: "DoubtBot", link: "/doubtbot" },
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
