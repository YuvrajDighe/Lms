import React, { useState } from "react";
import { Copy } from "lucide-react";
import { useNavigate } from "react-router-dom";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <button
      onClick={handleCopy}
      className="absolute top-1 right-1 sm:top-2 sm:right-2 text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1 bg-white px-2 py-1 rounded shadow"
    >
      <Copy size={14} />
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function SetupBlock({ type, title, desc, code }) {
  return (
    <div className="rounded-xl text-white shadow p-4 sm:p-6 bg-[#5a5c6b] mt-6">
      <p className="text-sm text-white/70 mb-1">
        🏷️ <span className="font-medium">{type}</span>
      </p>
      <h2 className="text-xl sm:text-2xl font-bold text-white mt-4 mb-4">
        {title}
      </h2>
      <div className="space-y-2 text-white/90 text-lg sm:text-base">
        {desc.split("\n").map((line, i) => (
          <p key={i}>
            {line.includes("https://") ? (
              <>
                {line.split("https://").map((part, index, array) =>
                  index < array.length - 1 ? (
                    <React.Fragment key={index}>
                      {part}
                      <a
                        href={`https://${array[index + 1].split(" ")[0]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline break-all"
                      >
                        https://{array[index + 1].split(" ")[0]}
                      </a>{" "}
                      {array[index + 1].slice(
                        array[index + 1].split(" ")[0].length
                      )}
                    </React.Fragment>
                  ) : (
                    part
                  )
                )}
              </>
            ) : (
              line
            )}
          </p>
        ))}
      </div>

      {code && (
        <div className="relative mt-4">
          <CopyButton text={code} />
          <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 text-sm p-3 rounded overflow-x-auto whitespace-pre-wrap">
            {code}
          </pre>
        </div>
      )}
    </div>
  );
}

export default function EnvironmentSetup() {
  const navigate = useNavigate();

 const topics = [
  {
    type: "Installation",
    title: "Install Node.js and npm",
    desc: `1. Visit https://nodejs.org
2. Download the LTS version
3. Install with default settings
4. Open terminal and check version:`,
    code: `node -v\nnpm -v`,
  },
  {
    type: "Command",
    title: "Create a Vite + React Project",
    desc: `Vite is a modern build tool that sets up a React project quickly with lightning-fast dev server and optimized builds.

Steps:
1. Use npm to initialize a Vite + React app
2. Go to your project folder
3. Install dependencies
4. Start the development server:`,
    code: `npm create vite@latest my-app -- --template react\ncd my-app\nnpm install\nnpm run dev`,
  },
  {
    type: "Command",
    title: "Install Libraries with npm",
    desc: `To use libraries in React, install them with npm. Example: Axios for API calls, Router for page navigation:`,
    code: `npm install axios\nnpm install react-router-dom`,
  },
  {
    type: "Concept",
    title: "npm vs npx",
    desc: `npm installs packages to your project. npx runs packages directly without installing globally.

Examples:
- npm install vite (installs it)
- npm create vite@latest my-app (runs Vite scaffolding directly)`,
    code: `npm install vite\nnpm create vite@latest my-app`,
  },
  {
    type: "Run",
    title: "Run the React App (Vite)",
    desc: `Start the Vite development server and open the project in the browser. Default URL: http://localhost:5173`,
    code: `cd my-app\nnpm run dev`,
  },
  {
    type: "Folder Structure",
    title: "Vite Project Structure Explained",
    desc: `my-app/
│
├── node_modules/        → All installed libraries
│
├── public/              → Public files (static assets)
│
├── src/                 → All React code here
│   ├── App.jsx          → Main App component
│   ├── main.jsx         → Entry point for React
│   └── ...              → Other components/files
│
├── index.html           → Root HTML template
├── package.json         → Project info + dependencies
├── vite.config.js       → Vite configuration file
└── README.md            → Project description`,
  },
  {
    type: "File",
    title: "package.json Overview",
    desc: `This file holds info about your Vite + React project:
- Project name/version
- Dependencies
- Scripts (dev, build, preview)

Here's an example:`,
    code: `{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "vite": "^5.0.0"
  }
}`,
  },
];


  return (
    <div className="min-h-screen bg-[#464859]  sm:px-9 p-9">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-4xl sm:text-4xl font-bold text-white pb-6 text-center sm:text-left">
          React Environment Setup
        </h1>

        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 mb-6">
          <button
            onClick={() => navigate("/React/ReactIntro")}
            className="w-full sm:w-auto flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            <span className="mr-2">❮</span> Previous
          </button>
          <button
            onClick={() => navigate("/React/Jsx")}
            className="w-full sm:w-auto flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Next <span className="ml-2">❯</span>
          </button>
        </div>

        {topics.map((item, index) => (
          <SetupBlock
            key={index}
            type={item.type}
            title={item.title}
            desc={item.desc}
            code={item.code}
          />
        ))}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 mt-6">
          <button
            onClick={() => navigate("/React/ReactIntro")}
            className="w-full sm:w-auto flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            <span className="mr-2">❮</span> Previous
          </button>
          <button
            onClick={() => navigate("/React/Jsx")}
            className="w-full sm:w-auto flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Next <span className="ml-2">❯</span>
          </button>
        </div>
      </div>
    </div>
  );
}

