import React, { useState } from "react";
import { Link } from "react-router-dom";

function MouseEnter() {
  const [message, setMessage] = useState("Hover over the box");

  const handleMouseEnter = () => {
    setMessage("Mouse is inside the box!");
  };

  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">onMouseEnter Event in React</h1>

          {/* Bottom Navigation */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/Drop"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>
        <Link
          to="/React/MouseLeave"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
         next <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onMouseEnter */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onMouseEnter?</h2>
        <p>
          The <span className="text-red-500 font-bold">onMouseEnter</span> event in React is triggered when the mouse pointer enters the boundary of an element. Unlike <code>onMouseOver</code>, it doesn't fire when moving over child elements.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<div onMouseEnter={handleMouseEnter}>Hover Me</div>`}
        </pre>
        <p className="mt-2">Or use an inline arrow function:</p>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<div onMouseEnter={() => alert("Mouse entered!")}>Hover Me</div>`}
        </pre>
      </section>

      {/* When to Use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To show tooltips or hints on hover</li>
          <li>To highlight UI components</li>
          <li>To show dropdown menus</li>
          <li>To trigger animations or effects</li>
        </ul>
      </section>

      {/* Importance */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onMouseEnter</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Improves interactivity and user experience</li>
          <li>Used in hover-based UI logic</li>
          <li>Doesn’t bubble like <code>onMouseOver</code></li>
          <li>Ideal for triggering UI changes cleanly</li>
        </ul>
      </section>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function MouseEnterExample() {
  const [message, setMessage] = useState("Hover over the box");

  const handleMouseEnter = () => {
    setMessage("Mouse is inside the box!");
  };

  return (
    <div onMouseEnter={handleMouseEnter}>
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
          className="mt-4 w-64 h-24 flex items-center justify-center bg-blue-600 rounded shadow-md transition duration-300"
        >
          <p className="text-lg">{message}</p>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use for user-friendly hover effects</li>
          <li>Combine with <code>onMouseLeave</code> to reset state</li>
          <li>Avoid heavy logic inside the handler</li>
          <li>Make UI feedback instant and visible</li>
        </ul>
      </section>

      {/* Real-World Use Cases */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Showing tooltips on hover</li>
          <li>Expanding menus or dropdowns</li>
          <li>Highlighting elements in a dashboard</li>
          <li>Triggering visual transitions</li>
        </ul>
      </section>

      {/* Bottom Navigation */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/Drop"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>
        <Link
          to="/React/MouseLeave"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
         next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default MouseEnter;
