import React from "react";
import { Link } from "react-router-dom";

function Blur() {
  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen">
      <h1 className="text-4xl font-bold ">onBlur Event in React</h1>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/Submit"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/scroll"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
        next <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onBlur */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onBlur Event?</h2>
        <p>
          The <span className="text-red-500 font-bold">onBlur</span> event in React is triggered when an input field (or any focusable element) **loses focus**. It's commonly used for input validation, formatting, or checking values once the user finishes editing a field.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<input type="text" onBlur={handleBlur} />`}
        </pre>
        <p className="mt-2">Or use an inline arrow function:</p>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<input type="text" onBlur={(e) => console.log("Blurred:", e.target.value)} />`}
        </pre>
      </section>

      {/* When to use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To validate form fields after user exits the input</li>
          <li>To format user input (e.g. capitalize names)</li>
          <li>To mark touched fields for UX feedback</li>
          <li>To hide dropdowns or tooltips when user clicks away</li>
        </ul>
      </section>

      {/* Importance */}
      <div className="text-white mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onBlur Event</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Improves user experience by validating only after input ends</li>
          <li>Helps avoid constant validation while typing (less distracting)</li>
          <li>Great for "lazy validation" or final formatting</li>
          <li>Common in form libraries like Formik and React Hook Form</li>
        </ul>
      </div>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function BlurExample() {
  const handleBlur = (e) => {
    alert("Input lost focus: " + e.target.value);
  };

  return <input type="text" placeholder="Type something..." onBlur={handleBlur} />;
}`}
        </pre>
      </section>

      {/* Arrow vs Named Function */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">➡️ Arrow Function vs Named Function</h2>
        <p>Use arrow functions for quick tasks, but named functions help keep your logic reusable and clean.</p>
        <pre className="bg-black p-4 rounded text-sm overflow-auto mt-2">
{`// Arrow Function
<input onBlur={(e) => console.log("Blurred:", e.target.value)} />

// Named Function
function handleBlur(e) {
  console.log("Blurred:", e.target.value);
}
<input onBlur={handleBlur} />`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Always validate only when input is blurred (not while typing)</li>
          <li>Keep validation logic separate from the render function</li>
          <li>Show error messages only after blur to reduce noise</li>
          <li>Use onFocus with onBlur for better UX if needed</li>
        </ul>
      </section>

      {/* Real-World Use Cases */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Validating email or phone number fields</li>
          <li>Auto-formatting credit card inputs</li>
          <li>Marking fields as "touched" for form validation UX</li>
          <li>Closing dropdowns or calendars when focus is lost</li>
        </ul>
      </section>

      <div className="flex justify-between mt-6">
        <Link
          to="/React/Submit"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/scroll"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
        next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default Blur;
