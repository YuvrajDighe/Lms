import React from "react";
import { Link } from "react-router-dom";

function Drag() {
  const handleDrag = (e) => {
    console.log("Dragging...", e.clientX, e.clientY);
  };

  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">onDrag Event in React</h1>

         <div className="flex justify-between mt-6">
        <Link
          to="/React/OnInput"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>
        <Link
          to="/React/Drop"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
     next<span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onDrag */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onDrag Event?</h2>
        <p>
          The <span className="text-red-500 font-bold">onDrag</span> event in React is triggered continuously while an element is being dragged. It is typically used with <code>draggable="true"</code> elements and helps in implementing drag-and-drop features.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<div draggable="true" onDrag={handleDrag}>Drag Me</div>`}
        </pre>
        <p className="mt-2">Or inline function:</p>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<div draggable="true" onDrag={(e) => console.log(e.clientX, e.clientY)}>Drag Me</div>`}
        </pre>
      </section>

      {/* When to Use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Creating custom drag-and-drop UIs</li>
          <li>Dragging elements between containers</li>
          <li>Tracking mouse position during drag</li>
          <li>Building file upload interfaces</li>
        </ul>
      </section>

      {/* Importance */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onDrag</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Key part of drag-and-drop functionality</li>
          <li>Used with other events like onDragStart, onDrop</li>
          <li>Great for interactive UIs like kanban boards</li>
          <li>Allows real-time position tracking</li>
        </ul>
      </section>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function DragExample() {
  const handleDrag = (e) => {
    console.log("Dragging at:", e.clientX, e.clientY);
  };

  return (
    <div
      draggable="true"
      onDrag={handleDrag}
      style={{
        width: "200px",
        height: "100px",
        backgroundColor: "#333",
        color: "white",
        textAlign: "center",
        lineHeight: "100px",
        borderRadius: "8px",
        cursor: "grab",
      }}
    >
      Drag Me
    </div>
  );
}`}
        </pre>
      </section>

      {/* Arrow vs Named Function */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">➡️ Arrow Function vs Named Function</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto mt-2">
{`// Inline Arrow Function
<div draggable="true" onDrag={(e) => console.log(e.clientX)} />

// Named Function
function handleDrag(e) {
  console.log(e.clientX);
}
<div draggable="true" onDrag={handleDrag} />`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Always set <code>draggable="true"</code> on drag targets</li>
          <li>Combine with <code>onDragStart</code> and <code>onDrop</code> for full flow</li>
          <li>Minimize logic inside onDrag to avoid lag</li>
          <li>Use state for live position feedback</li>
        </ul>
      </section>

      {/* Real-World Use Cases */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>File upload areas (drag files to drop zone)</li>
          <li>Kanban boards (e.g. Trello drag cards)</li>
          <li>Reordering lists and items</li>
          <li>Custom graphic editors or dashboards</li>
        </ul>
      </section>

      {/* Bottom Navigation */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/OnInput"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>
        <Link
          to="/React/Drop"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
     next<span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default Drag;
