const ToolsSection = () => {
  const tools = [
    {
      category: "Development",
      items: [
        { name: "VS Code", description: "Primary code editor", url: "https://code.visualstudio.com/" },
        { name: "Cursor", description: "AI code editor", url: "https://www.cursor.com/" },
        { name: "Vercel", description: "Web development platform", url: "https://vercel.com/" },
        { name: "Bolt.new", description: "AI code editor", url: "https://bolt.new/" },
        { name: "Clerk", description: "Authentication platform", url: "https://clerk.com/" },
        { name: "Convex", description: "Backend development platform", url: "https://www.convex.dev/" },
        { name: "Neon", description: "Database platform", url: "https://neon.tech/" },
        { name: "Supabase", description: "Database platform", url: "https://supabase.com/" },
        { name: "Firebase", description: "Backend development platform", url: "https://firebase.google.com/" },
        { name: "Auth-secret", description: "64-bit secret key generator", url: "https://generate-secret.vercel.app/" },
        { name: "Tavily", description: "AI search", url: "https://tavily.com/" },
        { name: "Expo", description: "App development platform", url: "https://expo.dev/" },
        { name: "OneCompiler", description: "Online code editor", url: "https://onecompiler.com/html" },
        { name: "Webflow", description: "Visual development platform", url: "https://webflow.com" },
        { name: "JSON Editor", description: "JSON data formatter", url: "https://jsoneditoronline.org" },
        { name: "v0.dev", description: "UI prototyping", url: "https://v0.dev" },
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
        { name: "NotebookLM", description: "AI writing", url: "https://notebooklm.com/" },
        { name: "Ragflow", description: "AI search", url: "https://ragflow.com/" },
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
        { name: "llamaocr", description: "OCR tool", url: "https://llamaocr.com" },
        { name: "SyntaxCV", description: "Resume builder", url: "https://syntaxcv.com" },
        { name: "Datastax", description: "Database platform", url: "https://accounts.datastax.com" },
      ]
    },
    {
      category: "Social & Others",
      items: [
        { name: "X (Twitter)", description: "Social media", url: "https://x.com" },
        { name: "Reddit", description: "Social platform", url: "https://www.reddit.com" },
        { name: "Vectorshift", description: "AI chatbot builder", url: "https://app.vectorshift.ai" },
        { name: "YouTube", description: "Video platform", url: "https://www.youtube.com/" }
      ]
    },
    {
      category: "Together AI Projects",
      items: [
        { name: "PicMenu", description: "Code", url: "https://www.picmenu.co/", codeUrl: "https://github.com/Nutlope/picMenu" },
        { name: "Llama-OCR", description: "Code", url: "https://llamaocr.com/", codeUrl: "https://github.com/Nutlope/llama-ocr" },
        { name: "LogoCreator", description: "Code", url: "https://www.logo-creator.io/", codeUrl: "https://github.com/Nutlope/logocreator" },
        { name: "Agent Recipes", description: "Code", url: "https://www.agentrecipes.com/", codeUrl: "https://www.agentrecipes.com/" },
        { name: "Code Arena", description: "Code", url: "https://www.llmcodearena.com/", codeUrl: "https://github.com/Nutlope/codearena" },
        { name: "LlamaCoder", description: "Code", url: "https://llamacoder.together.ai/", codeUrl: "https://github.com/nutlope/llamacoder" },
        { name: "BlinkShot", description: "Code", url: "https://www.blinkshot.io/", codeUrl: "https://github.com/Nutlope/blinkshot" },
        { name: "Product Description", description: "Code", url: "https://product-descriptions.vercel.app/", codeUrl: "https://github.com/Nutlope/description-generator" },
        { name: "TurboSeek", description: "Code", url: "https://www.turboseek.io/", codeUrl: "https://github.com/Nutlope/turboseek" },
        { name: "LlamaTutor", description: "Code", url: "https://llamatutor.together.ai/", codeUrl: "https://github.com/Nutlope/llamatutor" },
        { name: "PDFtoChat", description: "Code", url: "https://www.pdftochat.com/", codeUrl: "https://github.com/nutlope/pdftochat" },
        { name: "Napkins", description: "Code", url: "https://www.napkins.dev/", codeUrl: "https://github.com/nutlope/napkins" },
        { name: "TwitterBio", description: "Code", url: "https://www.twitterbio.io/", codeUrl: "https://github.com/Nutlope/twitterbio" },
        { name: "ExploreCareers", description: "Code", url: "https://www.explorecareers.io/", codeUrl: "https://github.com/Nutlope/ExploreCareers" },
        { name: "NotesGPT", description: "Code", url: "https://usenotesgpt.com/", codeUrl: "https://github.com/nutlope/notesgpt" }
      ]
    }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 space-y-8">
      {tools.map((section) => (
        <div key={section.category} className="space-y-4">
          <h3 className="font-medium text-black dark:text-zinc-100 text-lg sm:text-xl">
            {section.category}
          </h3>
          <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden overflow-x-auto">
            <table className="w-full min-w-full table-auto">
              <tbody>
                {section.items.map((tool, index) => (
                  <tr 
                    key={tool.name}
                    className={`
                      ${index !== section.items.length - 1 ? 'border-b border-zinc-200 dark:border-zinc-700' : ''}
                      hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors
                    `}
                  >
                    <td className="py-3 px-4 sm:px-6 w-1/3 sm:w-1/2">
                      <a 
                        href={tool.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm sm:text-base text-black dark:text-zinc-100 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                      >
                        {tool.name}
                      </a>
                    </td>
                    <td className="py-3 px-4 sm:px-6 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      {section.category === "Together AI Projects" ? (
                        <a
                          href={tool.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          {tool.description}
                        </a>
                      ) : (
                        tool.description
                      )}
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