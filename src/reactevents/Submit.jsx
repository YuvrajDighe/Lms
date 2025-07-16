import React from "react";
import { Link } from "react-router-dom";

function Submit() {
  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen">
      <h1 className="text-4xl font-bold mb-4">onSubmit Event in React</h1>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/Change"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/Blur"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
         next <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onSubmit */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onSubmit Event?</h2>
        <p>
          The <span className="text-red-500 font-bold">onSubmit</span> event in React is triggered when a form is submitted. It allows you to handle form data, prevent page reload, and run custom logic like form validation, API calls, or state updates.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<form onSubmit={handleSubmit}>
  <input type="text" />
  <button type="submit">Submit</button>
</form>`}
        </pre>
      </section>

      {/* When to use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Handling form submission without reloading the page</li>
          <li>Sending form data to an API</li>
          <li>Validating form fields before sending data</li>
          <li>Updating local state with submitted data</li>
        </ul>
      </section>

      {/* Importance */}
      <div className="text-white mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onSubmit Event</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>It replaces traditional HTML form submission behavior</li>
          <li>Gives full control over what happens after a user submits</li>
          <li>Improves performance by avoiding unnecessary page reloads</li>
          <li>Essential for working with controlled forms in React</li>
        </ul>
      </div>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function SubmitExample() {
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Your name" />
      <button type="submit">Submit</button>
    </form>
  );
}`}
        </pre>
      </section>

      {/* Arrow vs Named Function */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">➡️ Arrow Function vs Named Function</h2>
        <p>
          For small logic, arrow functions can be used inline, but named functions make your form code cleaner and easier to manage.
        </p>
        <pre className="bg-black p-4 rounded text-sm overflow-auto mt-2">
{`// Inline arrow function
<form onSubmit={(e) => {
  e.preventDefault();
  console.log("Submitted");
}}>

// Named function
function handleSubmit(e) {
  e.preventDefault();
  console.log("Submitted");
}
<form onSubmit={handleSubmit}>`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Always call <code>e.preventDefault()</code> to stop full page reload</li>
          <li>Use controlled components for managing form input</li>
          <li>Validate input before submitting</li>
          <li>Keep form logic separate from JSX</li>
        </ul>
      </section>

      {/* Real-World Use Case */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>User registration and login forms</li>
          <li>Search and filter forms</li>
          <li>Contact forms and feedback submissions</li>
          <li>Newsletter signup and profile update forms</li>
        </ul>
      </section>

      {/* Navigation Bottom */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/Change"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/Blur"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default Submit;
