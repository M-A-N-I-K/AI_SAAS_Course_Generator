import { getAuthSession } from "@/lib/auth";
import React from "react";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";

import ChatBox from "@/components/ChatBox";

type Props = {};

const CreatePage = async (props: Props) => {
	const session = await getAuthSession();
	if (!session?.user) {
		return redirect("/gallery");
	}

	return (
		<section className="flex flex-col items-start w-[800px] px-8 mx-auto my-16 sm:px-0">
			<div className="flex flex-col items-start max-w-20xl px-8 mx-auto my-16 sm:px-0">
				<h1 className="self-center text-xl font-bold text-center sm:text-6xl">
					Empower Your Learning Journey with DoubtBot
				</h1>
				<h2 className="self-center font-bold text-center mt-4">
					Where Curiosity Meets Clarity! Unleash the Power of Instant
					Knowledge, Always at Your Fingertips.
				</h2>
				<div className="self-center flex p-4 mt-5 border-none bg-secondary">
					<InfoIcon className="w-12 h-5 mr-3 text-blue-400" />
					<div>
						You can ask some questions related to Knowledge, Education,
						Coding etc. But avoid sharing personal information.
					</div>
				</div>
				<div className="self-center mt-3 bg-slate-800 p-3 w-[800px] rounded-md text-white text-center">
					<h2 className="text-xl">Ask Your Doubts from the DoubtBot</h2>
				</div>
				<div className="self-center mt-0 flex min-h-screen flex-col items-center justify-between ">
					<ChatBox />
				</div>
			</div>
		</section>
	);
};

export default CreatePage;
