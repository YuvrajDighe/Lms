import React from "react";
import { Link } from "react-router-dom";
function Click() {
  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen" >
      <h1 className="text-4xl font-bold mb-4"> onClick Event in React</h1>

        <div className="flex justify-between mt-6">
          <Link to="/React/EventHandling" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            <span className="mr-2">❮</span> Previous
          </Link>

           <Link to="/React/Change"className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Next <span className="ml-2">❯</span>
          </Link>
        </div>
      {/* What is onClick */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onClick Event?</h2>
        <p>
         The <span className="text-red-500 font-bold">onClick</span> event in React is a built-in event handler that is triggered when a user clicks on a specific element. It allows developers to execute custom logic — such as updating state, calling functions, or performing actions — in response to a click interaction.
         </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<button onClick={handleClick}>Click Me</button>`}
        </pre>
        <p className="mt-2">Or use an inline arrow function:</p>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<button onClick={() => alert("Clicked!")}>Click Me</button>`}
        </pre>
      </section>

      {/* When to use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To handle user interactions</li>
          <li>To submit forms</li>
          <li>To update UI on clicks</li>
          <li>To trigger API calls or state updates</li>
        </ul>
      </section>


      <div className=" text-white  mb-6">
  <h2 className="text-xl font-semibold mb-2">⭐ Importance of onClick Event in React</h2>
  <ul className="list-disc pl-5 space-y-1">
    <li>It enables interactivity in your UI by responding to user clicks.</li>
    <li>Used to trigger functions, update state, or manipulate DOM elements.</li>
    <li>Essential for handling user input without reloading the page.</li>
    <li>Plays a major role in building responsive and dynamic web apps.</li>
    <li>Helps in building custom components like buttons, modals, toggles, etc.</li>
  </ul>
</div>


      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function ClickExample() {
  const handleClick = () => {
    alert("Button Clicked!");
  };

  return <button onClick={handleClick}>Click Me</button>;
}`}
        </pre>
      </section>

      {/* Arrow Function vs Named Function */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">➡️ Arrow Function vs Named Function</h2>
        <p>Use arrow functions inline for simple logic, but prefer named functions for better readability and performance.</p>
        <pre className="bg-black p-4 rounded text-sm overflow-auto mt-2">
{`// Inline arrow function
<button onClick={() => console.log("Clicked")}>Click</button>

// Named function
function handleClick() {
  console.log("Clicked");
}
<button onClick={handleClick}>Click</button>`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Use named functions for better readability and performance</li>
          <li>Avoid complex logic inside JSX</li>
          <li>Keep components clean and focused</li>
          <li>Use semantic elements like &lt;button&gt; for actions</li>
        </ul>
      </section>

      {/* Real-World Use Case */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Opening and closing modals</li>
          <li>Triggering form submissions</li>
          <li>Like/dislike buttons in social media</li>
          <li>Toggling visibility (like dark mode, sidebar)</li>
        </ul>
      </section>

      
        <div className="flex justify-between mt-6">
          <Link to="/React/EventHandling" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            <span className="mr-2">❮</span> Previous
          </Link>

           <Link to="/React/Change"className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Next <span className="ml-2">❯</span>
          </Link>
        </div>
    </div>
  );
}

export default Click;
