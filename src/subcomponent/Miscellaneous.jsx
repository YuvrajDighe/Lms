import React from "react";
import { useNavigate } from "react-router-dom";
 
function CodeBlock({ code }) {
  return (
    <div className="mt-5 text-black">
      <div className="bg-gray-100 p-4 rounded mb-8">
        <h2 className="text-xl font-bold mb-2">Example</h2>
        <div className="bg-white p-4 rounded border border-gray-300">
          <pre className="overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}
 
function Miscellaneous() {
  const navigate = useNavigate();
 
  const folderStructure = `src/
├── components/         // Reusable UI components (Button, Card, etc.)
├── pages/              // Page-level components (Home, About, etc.)
├── layout/             // Layout wrappers like Sidebar, Navbar
├── assets/             // Images, fonts, static files
├── hooks/              // Custom React hooks
├── context/            // React Context providers
├── services/           // API calls or external services
├── utils/              // Helper functions
├── styles/             // CSS/SCSS or Tailwind files
├── App.jsx             // Root component
└── main.jsx            // Entry point`;
 
  const reusableComponent = `function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}
 
// Usage:
<Button label="Submit" onClick={handleSubmit} />
<Button label="Cancel" onClick={handleCancel} />`;
 
  const performanceTip = `const MemoizedComponent = React.memo(MyComponent);
 
// Using useCallback
const handleClick = useCallback(() => {
  console.log("Clicked!");
}, []);`;
 
  const devTools = `// Steps:
1. Install React Developer Tools extension from Chrome/Firefox store.
2. Open DevTools.
3. Use the ⚛️ Components tab to inspect the React tree.
4. Use the Profiler tab to detect performance bottlenecks.`;
 
  return (
    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
      <h1 className="text-[40px]">Miscellaneous React Concepts</h1>
 
      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/React/BundlersBuild")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </button>
        {/* <button
          onClick={() => navigate("/React")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </button> */}
      </div>
 
      <section className="mt-8">
        <h2 className="text-[30px]">1. Folder/File Structure</h2>
        <p className="mt-3 text-[18px]">
          A good folder structure improves code organization, scalability, and collaboration.
        </p>
        <CodeBlock code={folderStructure} />
      </section>
 
      <section className="mt-8">
        <h2 className="text-[30px]">2. Component Reusability</h2>
        <p className="mt-3 text-[18px]">
          Reusable components save time and reduce bugs. Use <strong>props</strong> to make them dynamic and decoupled from logic.
        </p>
        <CodeBlock code={reusableComponent} />
      </section>
 
      <section className="mt-8">
        <h2 className="text-[30px]">3. Performance Tips</h2>
        <p className="mt-3 text-[18px]">
          Optimize React performance using memoization, lazy loading, and minimizing unnecessary renders.
        </p>
        <CodeBlock code={performanceTip} />
      </section>
 
      <section className="mt-8">
        <h2 className="text-[30px]">4. React Developer Tools</h2>
        <p className="mt-3 text-[18px]">
          React DevTools lets you inspect components, view props/state, and profile rendering performance.
        </p>
        <CodeBlock code={devTools} />
      </section>
 
      {/* Bottom Navigation */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => navigate("/React/BundlersBuild")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </button>
        {/* <button
          onClick={() => navigate("/React")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </button> */}
      </div>
    </div>
  );
}
 
export default Miscellaneous;
 
 