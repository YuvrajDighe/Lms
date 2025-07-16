import React from "react";
import { Link } from "react-router-dom";

function OnInput() {
  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">onInput Event in React</h1>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/DoubleClick"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/Drag"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
         next <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onInput */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onInput Event?</h2>
        <p>
          The <span className="text-red-500 font-bold">onInput</span> event in React is triggered whenever the value of an input, textarea, or content-editable element is changed. Unlike <code>onChange</code>, which fires on blur or enter, <code>onInput</code> fires instantly with each keystroke or input change.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<input type="text" onInput={handleInput} />`}
        </pre>
        <p className="mt-2">Or use an inline function:</p>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<input onInput={(e) => console.log(e.target.value)} />`}
        </pre>
      </section>

      {/* When to Use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Live updating UI based on user input</li>
          <li>Search-as-you-type features</li>
          <li>Form validation as user types</li>
          <li>Character counting or auto-formatting</li>
        </ul>
      </section>

      {/* Importance */}
      <div className="text-white mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onInput</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Gives instant feedback on user input</li>
          <li>Provides better UX than onChange for live data entry</li>
          <li>Used in building rich interactive forms</li>
          <li>Triggers every time input changes — even by copy/paste</li>
        </ul>
      </div>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function InputExample() {
  const handleInput = (e) => {
    console.log("Current Value:", e.target.value);
  };

  return (
    <input type="text" placeholder="Type here..." onInput={handleInput} />
  );
}`}
        </pre>
      </section>

      {/* Arrow vs Named Function */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">➡️ Arrow Function vs Named Function</h2>
        <p>
          Use inline functions for short tasks. Use named functions when logic is more complex or reused.
        </p>
        <pre className="bg-black p-4 rounded text-sm overflow-auto mt-2">
{`// Inline arrow function
<input onInput={(e) => console.log(e.target.value)} />

// Named function
function handleInput(e) {
  console.log(e.target.value);
}
<input onInput={handleInput} />`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use with debounce for performance in real-time search</li>
          <li>Validate input as user types</li>
          <li>Avoid heavy logic inside onInput handler</li>
          <li>Keep UX fast and responsive</li>
        </ul>
      </section>

      {/* Real-World Use Cases */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Instant search results</li>
          <li>Live form validation</li>
          <li>Dynamic filtering in tables/lists</li>
          <li>Real-time character count displays</li>
        </ul>
      </section>

    <div className="flex justify-between mt-6">
        <Link
          to="/React/DoubleClick"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/Drag"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
         next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default OnInput;
