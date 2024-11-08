import React from "react";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";

const ProjectCard = ({ data }) => {
  const { imageUrl, projectData } = data;
  
  return (
    <Link href={projectData.link} target="_blank">
      <div className="group cursor-pointer">
        <div className="relative w-full h-48 overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt={projectData.title}
            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
            placeholder="blur"
          />
        </div>
        <div className="pt-4">
          <div className="flex items-center justify-between">
            <p className="font-bold">{projectData.title}</p>
            <GoArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <p className="text-muted-foreground text-sm py-1">{projectData.desc}</p>
          <div className="flex items-center gap-2 pt-2">
            <span className="bg-accent px-2 py-1 rounded-md text-xs">
              {projectData.tag}
            </span>
            <span className="text-xs text-muted-foreground">
              {projectData.tech}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
