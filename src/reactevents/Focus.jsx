import React from "react";
import { Link } from "react-router-dom";

function Focus() {
  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">onFocus Event in React</h1>

          <div className="flex justify-between mt-6">
        <Link
          to="/React/Scroll"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/KeyUp"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
        next <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onFocus */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onFocus Event?</h2>
        <p>
          The <span className="text-red-500 font-bold">onFocus</span> event in React is triggered when a form input or element receives focus — for example, when a user clicks inside a text box. It's commonly used for input highlighting, real-time validation, or showing helper messages.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<input type="text" onFocus={handleFocus} />`}
        </pre>
        <p className="mt-2">Or use an inline arrow function:</p>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<input type="text" onFocus={() => console.log("Focused")} />`}
        </pre>
      </section>

      {/* When to use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To show helper text or tooltips</li>
          <li>To highlight the active field</li>
          <li>To perform live validation on focus</li>
          <li>To track which input is currently active</li>
        </ul>
      </section>

      {/* Importance */}
      <div className="text-white mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onFocus Event</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Improves UX by giving real-time feedback</li>
          <li>Helps guide the user through a form</li>
          <li>Essential for accessible and dynamic forms</li>
          <li>Pairs well with onBlur for full input control</li>
        </ul>
      </div>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function FocusExample() {
  const handleFocus = () => {
    alert("Input focused!");
  };

  return <input type="text" placeholder="Click here..." onFocus={handleFocus} />;
}`}
        </pre>
      </section>

      {/* Arrow vs Named Function */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">➡️ Arrow Function vs Named Function</h2>
        <p>
          Arrow functions are great for small, quick logic. Named functions make your code reusable and readable.
        </p>
        <pre className="bg-black p-4 rounded text-sm overflow-auto mt-2">
{`// Arrow function
<input onFocus={() => console.log("Focused")} />

// Named function
function handleFocus() {
  console.log("Focused");
}
<input onFocus={handleFocus} />`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Keep focus logic simple and clean</li>
          <li>Avoid triggering heavy logic inside onFocus</li>
          <li>Use CSS to visually show focus (e.g., outline, background)</li>
          <li>Combine with `onBlur` for full form interaction control</li>
        </ul>
      </section>

      {/* Real-World Use Cases */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Show instructions or placeholder help on focus</li>
          <li>Highlight active form field</li>
          <li>Track user field interaction for analytics</li>
          <li>Trigger animations or UI effects when input is focused</li>
        </ul>
      </section>

      {/* Navigation Bottom */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/Scroll"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/KeyUp"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
        next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default Focus;
