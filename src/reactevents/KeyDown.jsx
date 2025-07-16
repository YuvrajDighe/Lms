import React from "react";
import { Link } from "react-router-dom";

function KeyDown() {
  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">onKeyDown Event in React</h1>
 <div className="flex justify-between mt-6">
        <Link
          to="/React/KeyUp"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/DoubleClick"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
         next <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onKeyDown */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onKeyDown Event?</h2>
        <p>
          The <span className="text-red-500 font-bold">onKeyDown</span> event in React is triggered when the user presses a key on the keyboard. It fires immediately as the key is pressed down, before it is released. This is useful for handling shortcuts, capturing real-time keystrokes, or preventing unwanted characters.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<input type="text" onKeyDown={handleKeyDown} />`}
        </pre>
        <p className="mt-2">Or use an inline arrow function:</p>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<input type="text" onKeyDown={(e) => console.log(e.key)} />`}
        </pre>
      </section>

      {/* When to use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Handling keyboard shortcuts (e.g. Ctrl + S)</li>
          <li>Preventing specific keys (like Enter)</li>
          <li>Capturing real-time keystroke input</li>
          <li>Validating input characters before they appear</li>
        </ul>
      </section>

      {/* Importance */}
      <div className="text-white mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onKeyDown</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Allows immediate reaction to user key input</li>
          <li>Supports accessibility and shortcut control</li>
          <li>Used for key-based navigation or games</li>
          <li>Works well with onKeyUp and onKeyPress</li>
        </ul>
      </div>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function KeyDownExample() {
  const handleKeyDown = (e) => {
    alert("You pressed: " + e.key);
  };

  return <input type="text" placeholder="Type here..." onKeyDown={handleKeyDown} />;
}`}
        </pre>
      </section>

      {/* Arrow vs Named Function */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">➡️ Arrow Function vs Named Function</h2>
        <p>
          Use inline arrow functions for short logic and named functions for cleaner structure and reuse.
        </p>
        <pre className="bg-black p-4 rounded text-sm overflow-auto mt-2">
{`// Inline arrow function
<input onKeyDown={(e) => console.log(e.key)} />

// Named function
function handleKeyDown(e) {
  console.log(e.key);
}
<input onKeyDown={handleKeyDown} />`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use event.key for readability (e.g., "Enter", "Escape")</li>
          <li>Don’t block default behavior unless necessary</li>
          <li>Combine with modifier keys (e.g., e.ctrlKey, e.shiftKey)</li>
          <li>Debounce actions if handling input continuously</li>
        </ul>
      </section>

      {/* Real-World Use Cases */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Form validation while typing</li>
          <li>Keyboard shortcuts (Ctrl + Z, Ctrl + Enter)</li>
          <li>Navigation in dropdowns or modals</li>
          <li>Game controls using arrow keys or WASD</li>
        </ul>
      </section>

      {/* Navigation Bottom */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/KeyUp"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/DoubleClick"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
         next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default KeyDown;
