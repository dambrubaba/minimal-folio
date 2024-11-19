const ToolsSection = () => {
  const tools = [
    {
      category: "Development",
      items: [
        { name: "VS Code", description: "Primary code editor", url: "https://code.visualstudio.com/" },
        { name: "OneCompiler", description: "Online code editor", url: "https://onecompiler.com/html" },
        { name: "Webflow", description: "Visual development platform", url: "https://webflow.com" },
        { name: "JSON Editor", description: "JSON data formatter", url: "https://jsoneditoronline.org" },
        { name: "E2B", description: "AI development tools", url: "https://artifacts.e2b.dev/" },
        { name: "v0.dev", description: "UI prototyping", url: "https://v0.dev" },
        { name: "Glitch", description: "Web development platform", url: "https://glitch.com" },
        { name: "GitHub", description: "Code repository", url: "https://github.com/" },
        { name: "OpenAI", description: "AI development platform", url: "https://platform.openai.com/docs/overview" },
        { name: "Next.js", description: "React framework", url: "https://nextjs.org" },
        { name: "Tailwind CSS", description: "Styling framework", url: "https://tailwindcss.com" }
      ]
    },
    {
      category: "AI & Writing",
      items: [
        { name: "ChatGPT", description: "AI assistant", url: "https://chatgpt.com/" },
        { name: "Claude", description: "AI writing", url: "https://claude.ai" },
        { name: "Gemini", description: "AI chat", url: "https://gemini.google.com" },
        { name: "Gemini Pro", description: "AI experiments", url: "https://aistudio.google.com/app/prompts/new_chat" },
        { name: "Khoj", description: "AI search", url: "https://app.khoj.dev" },
        { name: "NotDiamond", description: "AI chat", url: "https://chat.notdiamond.ai/" },
        { name: "Rytr", description: "Content writing", url: "https://rytr.me/" },
        { name: "QuillBot", description: "Text summarizer", url: "https://quillbot.com/summarize" },
        { name: "Summarize.tech", description: "Video summarizer", url: "https://www.summarize.tech/" },
        { name: "Superpowered", description: "AI platform", url: "https://superpowered.ai" },
        { name: "Google Keep", description: "Note taking", url: "https://keep.google.com/" },
        { name: "Google Docs", description: "Document editing", url: "https://docs.google.com/" }
      ]
    },
    {
      category: "Design & Media",
      items: [
        { name: "Figma", description: "UI design", url: "https://figma.com" },
        { name: "Rotato", description: "Video editing", url: "https://video.rotato.app/" },
        { name: "Favicon.io", description: "Icon generator", url: "https://favicon.io/" },
        { name: "Minimox", description: "Logo design", url: "https://minimox.vercel.app/design" },
        { name: "Flixier", description: "Video editor", url: "https://flixier.com" },
        { name: "Boomy", description: "Music creation", url: "https://boomy.com" },
        { name: "Iconfinder", description: "Icon resources", url: "https://www.iconfinder.com" }
      ]
    },
    {
      category: "Utilities",
      items: [
        { name: "PDF24", description: "PDF tools", url: "https://tools.pdf24.org" },
        { name: "URLtoText", description: "Web content extractor", url: "https://urltotext.com/" },
        { name: "SaveWeb2ZIP", description: "Website archiver", url: "https://saveweb2zip.com/en" },
        { name: "TempMail", description: "Disposable email", url: "https://temp-mail.org" },
        { name: "Internxt Mail", description: "Temporary email", url: "https://internxt.com/temporary-email" },
        { name: "Receive SMS", description: "Temporary phone numbers", url: "https://receive-smss.com" },
        { name: "SyntaxCV", description: "Resume builder", url: "https://syntaxcv.com" },
        { name: "Datastax", description: "Database platform", url: "https://accounts.datastax.com" },
        { name: "OPSTRA", description: "Options strategy", url: "https://opstra.definedge.com" }
      ]
    },
    {
      category: "Social & Others",
      items: [
        { name: "X (Twitter)", description: "Social media", url: "https://x.com" },
        { name: "Reddit", description: "Social platform", url: "https://www.reddit.com" },
        { name: "Vectorshift", description: "AI chatbot builder", url: "https://app.vectorshift.ai" },
        { name: "IGNOU", description: "Education portal", url: "https://admission.ignou.ac.in" },
        { name: "AstroNidan", description: "Astrology tools", url: "https://web.astronidan.com" },
        { name: "YouTube", description: "Video platform", url: "https://www.youtube.com/" }
      ]
    }
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      {tools.map((section) => (
        <div key={section.category} className="space-y-4">
          <h3 className="font-medium text-black dark:text-zinc-100">
            {section.category}
          </h3>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {section.items.map((tool, index) => (
                  <tr 
                    key={tool.name}
                    className={`
                      ${index !== section.items.length - 1 ? 'border-b border-zinc-200 dark:border-zinc-700' : ''}
                    `}
                  >
                    <td className="py-2 px-4 w-1/2">
                      <a 
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                      >
                        {tool.name}
                      </a>
                    </td>
                    <td className="py-2 px-4 text-zinc-600 dark:text-zinc-400">
                      {tool.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ToolsSection; 