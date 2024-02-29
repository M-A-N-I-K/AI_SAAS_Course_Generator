import { getAuthSession } from "@/lib/auth";
import React from "react";
import { redirect } from "next/navigation";
import { InfoIcon } from "lucide-react";
import CreateCourseForm from "@/components/CreateCourseForm";
// import { checkSubscription } from "@/lib/subscription";

type Props = {};

const CreatePage = async (props: Props) => {
	const session = await getAuthSession();
	if (!session?.user) {
		return redirect("/gallery");
	}
	//   const isPro = await checkSubscription();
	return (
		<section className="flex flex-col items-start w-[800px] px-8 mx-auto my-16 sm:px-0">
			<div className="flex flex-col items-start max-w-20xl px-8 mx-auto my-16 sm:px-0">
				<h1 className="self-center text-xl font-bold text-center sm:text-6xl">
					Craft Your Knowledge Journey:
				</h1>
				<h2 className=" self-center font-bold text-center mt-4">
					Your Courses, Your Way.
				</h2>
				<div className="flex p-4 mt-5 border-none bg-secondary">
					<InfoIcon className="w-12 h-12 mr-3 text-blue-400" />
					<div>
						Enter in a course or subject title, or what you want to learn
						about. Then enter a list of units, which are the specifics you
						want to learn. And our AI assistant will generate a course for
						you! HAPPY LEARNING!
					</div>
				</div>

				<CreateCourseForm />
			</div>
		</section>
	);
};

export default CreatePage;
