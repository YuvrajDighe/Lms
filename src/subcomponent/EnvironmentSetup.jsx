import React, { useState } from "react";
import { Copy } from "lucide-react";

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
      className="absolute top-2 right-2 text-blue-600 hover:text-blue-800 text-xs flex items-center gap-1 bg-white px-2 py-1 rounded shadow"
    >
      <Copy size={14} />
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}

function SetupBlock({ type, title, desc, code }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">
      <p className="text-sm text-gray-500 mb-1">
        🏷️ <span className="font-medium">{type}</span>
      </p>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">🔹 {title}</h2>
      <div className="text-gray-700 whitespace-pre-line">
        {desc.split("\n").map((line, i) => (
          <p key={i}>
            {line.includes("https://") ? (
              <>
                {line.split("https://").map((part, index, array) =>
                  index < array.length - 1 ? (
                    <>
                      {part}
                      <a
                        href={`https://${array[index + 1].split(" ")[0]}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        https://{array[index + 1].split(" ")[0]}
                      </a>{" "}
                      {array[index + 1].slice(
                        array[index + 1].split(" ")[0].length
                      )}
                    </>
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
      <div className="relative mt-4">
        <CopyButton text={code} />
        <pre className="bg-gray-100 text-sm p-3 rounded overflow-x-auto whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    </div>
  );
}

export default function EnvironmentSetup() {
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
      title: "Create a React Project",
      desc: `Create React App (CRA) helps to set up a ready-to-use React project with one command.

Steps:
1. Use npx to run CRA
2. Go to your project folder
3. Start the dev server:`,
      code: `npx create-react-app my-app\ncd my-app\nnpm start`,
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
- npm install create-react-app (installs it)
- npx create-react-app my-app (runs it directly)`,
      code: `npm install create-react-app\nnpx create-react-app my-app`,
    },
    {
      type: "Run",
      title: "Run the React App",
      desc: `Start the development server and open the project in the browser. Default URL: http://localhost:3000`,
      code: `cd my-app\nnpm start`,
    },
    {
      type: "Folder Structure",
      title: "CRA Project Structure Explained",
      
      desc: `my-app/
│
├── node_modules/        → All installed libraries
│
├── public/              → Public files (index.html, favicon)
│   └── index.html       → Root HTML file where React renders
│
├── src/                 → All React code here
│   ├── App.js           → Main App component
│   ├── index.js         → Starting point (entry file)
│   └── ...              → Other components/files
│
├── package.json         → Project info + dependencies
├── .gitignore           → Files to ignore in Git
└── README.md            → Project description
`,
    },
    {
      type: "File",
      title: "package.json Overview",
      desc: `This file holds info about your React project:
- Project name/version
- Dependencies
- Scripts (start, build, test)

Here's an example:`,
      code: `{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.2.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  }
}`,
    },
  ];

  return (
<div
  className="min-h-screen bg-gray-100"
  style={{ backgroundColor: "#464859" }}
>
  <div
    className="max-w-screen-md pl-[9%]"
  >
    <h1 className="text-4xl pt-10 pb-10 font-bold text-white ">
      ⚙️ React Environment Setup
    </h1>

    {topics.map((item, index) => (
      <SetupBlock
        key={index}
        type={item.type}
        title={item.title}
        desc={item.desc}
        code={item.code}
      />
    ))}
  </div>
</div>

  );
}
