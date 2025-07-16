import React from "react";
import { Link } from "react-router-dom";

function KeyUp() {
  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">onKeyUp Event in React</h1>

     <div className="flex justify-between mt-6">
        <Link
          to="/React/Focus"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/KeyDown"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
        next <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onKeyUp */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onKeyUp Event?</h2>
        <p>
          The <span className="text-red-500 font-bold">onKeyUp</span> event in React is triggered when the user releases a key on the keyboard. It is commonly used for detecting which key was pressed and released, validating input, or triggering actions like search.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<input type="text" onKeyUp={handleKeyUp} />`}
        </pre>
        <p className="mt-2">Or use an inline arrow function:</p>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<input type="text" onKeyUp={(e) => console.log(e.key)} />`}
        </pre>
      </section>

      {/* When to use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Detect user typing for search input</li>
          <li>Capture and validate keyboard input</li>
          <li>Build keyboard shortcuts or hotkeys</li>
          <li>Track specific keys (like Enter, Escape, etc.)</li>
        </ul>
      </section>

      {/* Importance */}
      <div className="text-white mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onKeyUp Event</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Essential for keyboard-driven interactivity</li>
          <li>Helps in accessibility and UX improvements</li>
          <li>Useful for search, form validation, chat boxes, etc.</li>
          <li>Allows developers to react after a key is released</li>
        </ul>
      </div>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function KeyUpExample() {
  const handleKeyUp = (e) => {
    alert("You released: " + e.key);
  };

  return <input type="text" placeholder="Type something..." onKeyUp={handleKeyUp} />;
}`}
        </pre>
      </section>

      {/* Arrow vs Named Function */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">➡️ Arrow Function vs Named Function</h2>
        <p>
          Arrow functions work for quick logic. Named functions improve readability and separation of logic.
        </p>
        <pre className="bg-black p-4 rounded text-sm overflow-auto mt-2">
{`// Arrow Function
<input onKeyUp={(e) => console.log(e.key)} />

// Named Function
function handleKeyUp(e) {
  console.log(e.key);
}
<input onKeyUp={handleKeyUp} />`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use key codes like "Enter", "Escape" to control behavior</li>
          <li>Debounce input-heavy operations (like search)</li>
          <li>Keep key handling logic outside JSX</li>
          <li>Use `event.key` for readable key names</li>
        </ul>
      </section>

      {/* Real-World Use Cases */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Triggering search after typing</li>
          <li>Form submission on Enter key</li>
          <li>Detecting specific shortcut keys</li>
          <li>Creating live character counters</li>
        </ul>
      </section>

      {/* Navigation Bottom */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/Focus"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/KeyDown"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
        next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default KeyUp;
