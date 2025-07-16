import React from "react";
import { Link } from "react-router-dom";

function Change() {
  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">onChange Event in React</h1>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/Click"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/Submit"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onChange */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onChange Event?</h2>
        <p>
          The <span className="text-red-500 font-bold">onChange</span> event in React is triggered whenever the value of an input element changes. It's commonly used in form handling to track user input in real-time.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<input type="text" onChange={handleChange} />`}
        </pre>
        <p className="mt-2">Or use an inline arrow function:</p>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<input type="text" onChange={(e) => console.log(e.target.value)} />`}
        </pre>
      </section>

      {/* When to use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Tracking user input in forms</li>
          <li>Live validation or feedback</li>
          <li>Storing form values in state</li>
          <li>Auto-suggestions, filtering, search inputs</li>
        </ul>
      </section>

      {/* Importance */}
      <div className="text-white mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onChange Event in React</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>It captures user input in real-time</li>
          <li>Allows you to sync input with React component state</li>
          <li>Essential for building controlled form components</li>
          <li>Helps in validation, dynamic forms, and interactivity</li>
        </ul>
      </div>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function InputExample() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
      <p>You typed: {value}</p>
    </div>
  );
}`}
        </pre>
      </section>

      {/* Arrow vs Named Function */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">➡️ Arrow Function vs Named Function</h2>
        <p>
          Inline functions are good for small tasks, but for cleaner logic and reusability, named functions are preferred.
        </p>
        <pre className="bg-black p-4 rounded text-sm overflow-auto mt-2">
{`// Inline arrow function
<input onChange={(e) => setValue(e.target.value)} />

// Named function
function handleChange(e) {
  setValue(e.target.value);
}
<input onChange={handleChange} />`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Always store input value in component state</li>
          <li>Use controlled components for predictable behavior</li>
          <li>Debounce or throttle for large inputs or filters</li>
          <li>Keep form inputs and logic cleanly separated</li>
        </ul>
      </section>

      {/* Real-World Use Case */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Live form validation</li>
          <li>Search bars and filters</li>
          <li>Custom dropdowns and range sliders</li>
          <li>Dynamic input fields in forms</li>
        </ul>
      </section>

      {/* Navigation Bottom */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/Click"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/Submit"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default Change;
