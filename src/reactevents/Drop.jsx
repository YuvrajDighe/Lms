import React from "react";
import { Link } from "react-router-dom";

function Drop() {
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    alert("Dropped: " + data);
  };

  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow drop
  };

  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">onDrop Event in React</h1>

       <div className="flex justify-between mt-6">
        <Link
          to="/React/Drag"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>
        <Link
          to="/React/MouseEnter"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
        next <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onDrop */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onDrop Event?</h2>
        <p>
          The <span className="text-red-500 font-bold">onDrop</span> event in React is triggered when a draggable element is dropped into a valid drop target. It is typically used in drag-and-drop interactions to complete the drop action and handle data transfer.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<div onDrop={handleDrop} onDragOver={handleDragOver}>Drop here</div>`}
        </pre>
        <p className="mt-2">⚠️ You must include <code>onDragOver</code> and call <code>e.preventDefault()</code> to allow dropping.</p>
      </section>

      {/* When to Use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Handling file uploads via drag-and-drop</li>
          <li>Moving elements between containers</li>
          <li>Building custom UI drag-and-drop workflows</li>
          <li>Capturing dropped data for processing</li>
        </ul>
      </section>

      {/* Importance */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onDrop</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Completes drag-and-drop functionality</li>
          <li>Used with onDragStart and onDragOver</li>
          <li>Supports file drop zones and layout reordering</li>
          <li>Can carry and transfer custom data between elements</li>
        </ul>
      </section>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function DropExample() {
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/plain");
    alert("Dropped: " + data);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div
        draggable="true"
        onDragStart={(e) => e.dataTransfer.setData("text/plain", "React Block")}
        className="bg-blue-500 p-4 w-40 text-center rounded cursor-grab"
      >
        Drag Me
      </div>

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        className="bg-gray-800 mt-6 p-6 rounded h-32 flex items-center justify-center border-2 border-dashed border-white"
      >
        Drop Here
      </div>
    </>
  );
}`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Always include <code>onDragOver</code> with <code>e.preventDefault()</code></li>
          <li>Use <code>e.dataTransfer</code> to transfer data between elements</li>
          <li>Style the drop zone to guide the user</li>
          <li>Handle different data types gracefully (text, files, etc.)</li>
        </ul>
      </section>

      {/* Real-World Use Cases */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Uploading files via drag-and-drop</li>
          <li>Organizing cards in Kanban boards</li>
          <li>Dragging widgets into dashboards</li>
          <li>Custom form builders or layout editors</li>
        </ul>
      </section>

      {/* Bottom Navigation */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/Drag"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>
        <Link
          to="/React/MouseEnter"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
        next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default Drop;
