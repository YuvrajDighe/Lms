import React, { useState } from "react";
import { Link } from "react-router-dom";

function MouseLeave() {
  const [message, setMessage] = useState("Hover over the box");

  const handleMouseEnter = () => {
    setMessage("Mouse is inside the box!");
  };

  const handleMouseLeave = () => {
    setMessage("Mouse has left the box!");
  };

  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">onMouseLeave Event in React</h1>
   <div className="flex justify-between mt-6">
        <Link
          to="/React/MouseEnter"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>
        <Link
          to="/React/ReactRouter"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
        next <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onMouseLeave */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onMouseLeave?</h2>
        <p>
          The <span className="text-red-500 font-bold">onMouseLeave</span> event in React is triggered when the mouse pointer leaves the boundary of an element. It's commonly used to reset hover-based effects or UI feedback.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<div onMouseLeave={handleMouseLeave}>Hover Me</div>`}
        </pre>
        <p className="mt-2">Inline version:</p>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<div onMouseLeave={() => alert("Mouse left!")}>Hover Me</div>`}
        </pre>
      </section>

      {/* When to Use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To remove hover effects</li>
          <li>To hide tooltips or dropdowns</li>
          <li>To reset UI messages when user leaves an area</li>
          <li>To stop animations or highlight effects</li>
        </ul>
      </section>

      {/* Importance */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onMouseLeave</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Helps clean up hover-based UI feedback</li>
          <li>Prevents UI elements from remaining active after user moves away</li>
          <li>Works better than onMouseOut (doesn’t trigger when entering child elements)</li>
        </ul>
      </section>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function MouseLeaveExample() {
  const [message, setMessage] = useState("Hover over the box");

  const handleMouseEnter = () => {
    setMessage("Mouse is inside the box!");
  };

  const handleMouseLeave = () => {
    setMessage("Mouse has left the box!");
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <p>{message}</p>
    </div>
  );
}`}
        </pre>
      </section>

      {/* Live Output Box */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎬 Live Output</h2>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="mt-4 w-64 h-24 flex items-center justify-center bg-purple-600 rounded shadow-md transition duration-300"
        >
          <p className="text-lg">{message}</p>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use together with <code>onMouseEnter</code> for full control</li>
          <li>Keep hover effects minimal and smooth</li>
          <li>Avoid triggering expensive operations on leave</li>
          <li>Consider accessibility for non-mouse users</li>
        </ul>
      </section>

      {/* Real-World Use Cases */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Hide tooltips when user moves away</li>
          <li>Collapse dropdowns or popovers</li>
          <li>Remove highlight effects from charts or maps</li>
          <li>Restore default messages or instructions</li>
        </ul>
      </section>

      {/* Bottom Navigation */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/MouseEnter"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>
        <Link
          to="/React/ReactRouter"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
        next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default MouseLeave;
