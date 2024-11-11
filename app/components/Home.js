"use client";
import React from "react";
import Button from "./Button";
import { LuDownload } from "react-icons/lu";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";
import Link from "next/link";
import "dotenv/config";

const Home = () => {
  const handleDownload = () => {
    const ResumePdfUrl = process.env.NEXT_PUBLIC_HOSTNAME + "/Latest-CV.pdf";

    const link = document.createElement("a");
    link.href = ResumePdfUrl;
    link.download = "Latest-CV.pdf";
    link.click();
  };

  return (
    <div>
      <div className="px-8 pb-12 h-full flex flex-col">
        <div>
          <div>
            <p className="font-bold">Damburudhar</p>
            <p className="opacity-70">Full-stack Developer</p>
            <p className="opacity-70">India</p>
          </div>
        </div>
        <div className="pt-12 w-5/6">
          <p className="font-bold">Building Useful Apps with Modern Tools</p>
          <div className="py-4 flex flex-col gap-2 text-muted-foreground tracking-wide">
            <p>
              A <span className="text-foreground font-mono font-semibold">full-stack developer</span>{" "}
              passionate about building useful apps mostly using{" "}
              <span className="text-foreground font-mono font-semibold">
                no-code tools
              </span>{" "}
              and putting them out for public use. Check them out in the{" "}
              <a href="#projects" className="text-foreground font-mono font-semibold">
                Projects section
              </a>
              .
            </p>
            <p>
              Currently building two{" "}
              <span className="text-foreground font-mono font-semibold">
                SaaS products
              </span>{" "}
              in the{" "}
              <span className="text-foreground font-mono font-semibold">
                AI space
              </span>{" "}
              and will be launching them soon. Very active on{" "}
              <span className="text-foreground font-mono font-semibold">
                Twitter
              </span>
              .
            </p>
            <p>
              I also write about my learnings and experiences. Check them out in the{" "}
              <a href="#writings" className="text-foreground font-mono font-semibold">
                Writings section
              </a>
              .
            </p>
            <p>Currently saving up to buy a <span className="text-foreground font-mono font-semibold">Mac Mini M4</span></p>
          </div>
          <div className="pt-3 flex gap-4">
            <Button
              onClick={handleDownload}
              text={"Resume"}
              bold={true}
              highlight={true}
              icon={<LuDownload />}
            />
            <div className="flex gap-2">
              <Link
                href="mailto:dambrureddy321@gmail.com"
                className="bg-accent hover:pr-16 group flex items-center p-2 rounded-full transition-all duration-300 relative"
              >
                <MdAlternateEmail className="group-hover:mr-2" />
                <span className="absolute left-9 opacity-0 group-hover:opacity-100 transition-opacity text-sm whitespace-nowrap">
                  Email
                </span>
              </Link>
              <Link
                href="https://twitter.com/scionofshiv"
                target="_blank"
                className="bg-accent hover:pr-16 group flex items-center p-2 rounded-full transition-all duration-300 relative"
              >
                <FaInstagram className="group-hover:mr-2" />
                <span className="absolute left-9 opacity-0 group-hover:opacity-100 transition-opacity text-sm whitespace-nowrap">
                  Twitter
                </span>
              </Link>
              <Link
                href="https://github.com/dambrubaba"
                target="_blank"
                className="bg-accent hover:pr-16 group flex items-center p-2 rounded-full transition-all duration-300 relative"
              >
                <FaGithub className="group-hover:mr-2" />
                <span className="absolute left-9 opacity-0 group-hover:opacity-100 transition-opacity text-sm whitespace-nowrap">
                  GitHub
                </span>
              </Link>
              <Link
                href="https://www.buymeacoffee.com/damburudhar"
                target="_blank"
                className="bg-accent hover:pr-32 group flex items-center p-2 rounded-full transition-all duration-300 relative"
              >
                <SiBuymeacoffee className="group-hover:mr-2" />
                <span className="absolute left-9 opacity-0 group-hover:opacity-100 transition-opacity text-sm whitespace-nowrap">
                  Buy me a coffee
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
