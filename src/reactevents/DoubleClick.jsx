import React from "react";
import { Link } from "react-router-dom";

function DoubleClick() {
  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">onDoubleClick Event in React</h1>

         <div className="flex justify-between mt-6">
        <Link
          to="/React/KeyDown"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/OnInput"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
     next  <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onDoubleClick */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onDoubleClick Event?</h2>
        <p>
          The <span className="text-red-500 font-bold">onDoubleClick</span> event in React fires when an element is clicked twice in quick succession. It's often used to trigger special actions like editing, zooming, or expanding UI elements.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<div onDoubleClick={handleDoubleClick}>Double Click Me</div>`}
        </pre>
        <p className="mt-2">Or use an inline arrow function:</p>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<div onDoubleClick={() => alert("Double clicked!")} >Double Click Me</div>`}
        </pre>
      </section>

      {/* When to use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To trigger editing (like renaming a file)</li>
          <li>To zoom into images or map views</li>
          <li>To expand/collapse content areas</li>
          <li>To distinguish between single and double-click actions</li>
        </ul>
      </section>

      {/* Importance */}
      <div className="text-white mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onDoubleClick</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Enables richer and intuitive user interactions</li>
          <li>Common pattern in desktop-style interfaces</li>
          <li>Can be used to reduce accidental clicks</li>
          <li>Adds depth to event handling beyond basic clicks</li>
        </ul>
      </div>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function DoubleClickExample() {
  const handleDoubleClick = () => {
    alert("You double clicked!");
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      style={{ padding: "20px", backgroundColor: "#333", color: "white", cursor: "pointer" }}
    >
      Double Click this box
    </div>
  );
}`}
        </pre>
      </section>

      {/* Arrow vs Named Function */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">➡️ Arrow Function vs Named Function</h2>
        <p>
          Arrow functions are fine for quick logic. Named functions are reusable and cleaner for larger actions.
        </p>
        <pre className="bg-black p-4 rounded text-sm overflow-auto mt-2">
{`// Inline Arrow Function
<div onDoubleClick={() => console.log("Double Clicked")} />

// Named Function
function handleDoubleClick() {
  console.log("Double Clicked");
}
<div onDoubleClick={handleDoubleClick} />`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use only when double-click behavior is expected by users</li>
          <li>Don’t rely on double click as the only interaction</li>
          <li>Provide visual feedback on double click</li>
          <li>Use `onClick` for simpler tasks; reserve `onDoubleClick` for secondary actions</li>
        </ul>
      </section>

      {/* Real-World Use Cases */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Renaming a file (like in file explorer)</li>
          <li>Expanding/collapsing content boxes</li>
          <li>Triggering advanced settings or editor modes</li>
          <li>Zooming into a photo or chart</li>
        </ul>
      </section>

      {/* Navigation Bottom */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/KeyDown"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/OnInput"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
     next  <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default DoubleClick;
