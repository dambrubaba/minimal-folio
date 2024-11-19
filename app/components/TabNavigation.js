'use client';

import { useState } from "react";
import ProjectSection from "./ProjectSection";
import BlogSection from "./BlogSection";
import ToolsSection from "./ToolsSection";

export default function TabNavigation() {
  const [activeSection, setActiveSection] = useState('projects');

  return (
    <>
      <div className="px-8">
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-bold text-black dark:text-zinc-100">
            Work
          </h2>
          <nav className="flex gap-2">
            <button
              onClick={() => setActiveSection('projects')}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                activeSection === 'projects'
                  ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-zinc-100'
                  : 'text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveSection('writings')}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                activeSection === 'writings'
                  ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-zinc-100'
                  : 'text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100'
              }`}
            >
              Writings
            </button>
            <button
              onClick={() => setActiveSection('tools')}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                activeSection === 'tools'
                  ? 'bg-zinc-200 dark:bg-zinc-800 text-black dark:text-zinc-100'
                  : 'text-zinc-700 dark:text-zinc-400 hover:text-black dark:hover:text-zinc-100'
              }`}
            >
              Tools I Use
            </button>
          </nav>
        </div>
      </div>

      {activeSection === 'projects' && <ProjectSection />}
      {activeSection === 'writings' && <BlogSection />}
      {activeSection === 'tools' && <ToolsSection />}
    </>
  );
} 