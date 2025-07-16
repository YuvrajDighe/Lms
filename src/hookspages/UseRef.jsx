import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ReactUseRefPage = () => {
  const [copyMessage, setCopyMessage] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage("Copied!");
      setTimeout(() => setCopyMessage(""), 2000);
    });
  };

  const focusExample = `import React, { useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}`;

  return (
    <div className="min-h-screen bg-[#1e293b] text-white p-10 font-sans">
      <h1 className="text-4xl font-bold mb-6">React useRef Hook</h1>

      {/* Navigation */}
      <div className="flex justify-between mb-8">
        <Link
          to=""
          className="flex items-center bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          <ChevronLeft size={18} className="mr-2" />
          Previous
        </Link>
        <Link
          to="/React/useMemo"
          className="flex items-center bg-green-600 hover:bg-green-700 px-4 py-2 rounded"
        >
          Next
          <ChevronRight size={18} className="ml-2" />
        </Link>
      </div>

      {/* What is useRef */}
      <h2 className="text-2xl font-semibold mb-4">What is useRef?</h2>
      <p className="mb-4">
        <code>useRef</code> is a React hook used to create a reference to a DOM element or to store
        any mutable value that does not cause re-renders when changed.
      </p>

      {/* Syntax */}
      <h2 className="text-xl font-semibold mb-2">🧠 Syntax:</h2>
      <pre className="bg-black p-4 rounded mb-6 overflow-x-auto">
        <code>const ref = useRef(initialValue);</code>
      </pre>

      {/* Why useRef */}
      <h2 className="text-xl font-semibold mb-2">🔧 Why use useRef?</h2>
      <ul className="list-disc ml-6 mb-6 space-y-1">
        <li>Access DOM elements directly (like focus input)</li>
        <li>Store values that don’t need re-rendering</li>
        <li>Track previous state values</li>
        <li>Improve performance and avoid unnecessary re-renders</li>
      </ul>
        <h2 className="text-xl font-semibold mb-2">🕒 When to use useRef?</h2>
      <ul className="list-disc ml-6 mb-6 space-y-1">
        <li>When you need to interact with DOM elements (e.g., focus, scroll, play media)</li>
        <li>When you want to keep a mutable value that doesn't trigger re-render</li>
        <li>When you want to keep track of render counts or previous props/state values</li>
        <li>When using setInterval, setTimeout, or storing references across renders</li>
      </ul>

      {/* Rules */}
      <h2 className="text-xl font-semibold mb-2">📌 Rules of useRef</h2>
      <ul className="list-disc ml-6 mb-6 space-y-1">
        <li>Must be called inside a functional component</li>
        <li>Does not cause a re-render when updated</li>
        <li>Value is stored in <code>ref.current</code></li>
      </ul>

      {/* Example 1: Focus input */}
      <div className="bg-black rounded-md p-4 mb-6 shadow relative">
        <button
          onClick={() => copyToClipboard(focusExample)}
          className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-xs px-2 py-1 rounded"
        >
          Copy
        </button>
        <div className="text-lg font-bold mb-2 text-white">
          Example: Focus Input Field
        </div>
        <pre className="text-sm whitespace-pre-wrap font-mono text-white">
          <code>{focusExample}</code>
        </pre>
      </div>

      {/* Summary */}
      <h2 className="text-xl font-semibold mb-2">📝 Summary</h2>
      <ul className="list-disc ml-6 mb-6 space-y-1">
        <li><code>useRef</code> is perfect for storing values without triggering re-renders</li>
        <li>Useful for DOM access, timers, or persistent values</li>
        <li>Common in forms, animations, and performance optimization</li>
      </ul>

      {/* Toast */}
      {copyMessage && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-green-600 px-4 py-2 rounded shadow">
          {copyMessage}
        </div>
      )}
    </div>
  );
};

export default ReactUseRefPage;
