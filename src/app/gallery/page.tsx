import GalleryCourseCard from "@/components/GalleryCourseCard";
import { prisma } from "@/lib/db";
import { BookOpenIcon, InfoIcon } from "lucide-react";
import React from "react";

type Props = {};

const GalleryPage = async (props: Props) => {
  const courses = await prisma.course.findMany({
    include: {
      units: {
        include: { chapters: true },
      },
    },
  });

  return (
    <div>
      <div className="flex p-4 mt-5 border-none bg-secondary">
        <BookOpenIcon className="w-12 h-12 mr-3 text-blue-400" />
        <div>
          Your AI-generated study resources will be conveniently accessible here
          for future reference, ensuring a seamless and effective learning
          experience.
        </div>
      </div>
      <div className="py-8 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
          {courses.map((course) => (
            <GalleryCourseCard course={course} key={course.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
