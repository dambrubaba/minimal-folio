"use client";
import React from "react";
import ProjectCard from "./ProjectCard";
import DirectoryBoilerplateImg from "../../public/directory-boilerplate.png";
import ScreenPostImg from "../../public/screenpost.png";
import PrankPeImg from "../../public/prankpe.png";
import AumMeditationImg from "../../public/aukaram.png";

const ProjectSection = () => {
  const projectData = [
    {
      id: "01",
      imageUrl: DirectoryBoilerplateImg,
      projectData: {
        title: "Directory Boilerplate",
        desc: "A modern directory website template",
        tag: "Web Application",
        tech: "Next.js, TypeScript, Tailwind",
        link: "https://directory-boilerplate-ai-agents.vercel.app/",
      },
    },
    {
      id: "02",
      imageUrl: ScreenPostImg,
      projectData: {
        title: "ScreenPost",
        desc: "Create beautiful screenshots for social media",
        tag: "Web Application",
        tech: "React, Lucide, Tailwind",
        link: "https://screenpost.vercel.app/",
      },
    },
    {
      id: "03",
      imageUrl: PrankPeImg,
      projectData: {
        title: "PrankPe",
        desc: "Generate fun prank payment screenshots",
        tag: "Web Application",
        tech: "Next.js, TypeScript, Shadcn UI",
        link: "https://prankpe.online/",
      },
    },
    {
      id: "04",
      imageUrl: AumMeditationImg,
      projectData: {
        title: "Aumkaram",
        desc: "A peaceful meditation and mindfulness app",
        tag: "Web Application",
        tech: "React, Next.js, Tailwind, Shadcn UI",
        link: "https://aumkaram.vercel.app/",
      },
    },
  ];

  return (
    <div className="px-8 pb-8">
      <div>
        <p className="font-bold">Projects</p>
      </div>
      <div className="py-6 grid grid-cols-1 sm:grid-cols-2 gap-x-14 gap-y-6">
        {projectData.map((project) => {
          return <ProjectCard data={project} key={project.id} />;
        })}
      </div>
    </div>
  );
};

export default ProjectSection;
