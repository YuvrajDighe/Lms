import { Link } from "react-router-dom";


export default function Hooks() {
  return (
    <div className="p-9" style={{ backgroundColor: "#464859", color: "white", fontFamily: "Arial" }}>
      <h1 className="text-3xl font-bold mb-4">React Hooks</h1>
      <div className="flex justify-between mt-6">
        <Link
          to="/React/ReactClass"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/PropsIntro"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </Link>
      </div>
      <div className="mb-6">
        <p className="mb-2">
          Hooks were added in React 16.8. They let you use state and other features without writing a class.
        </p>
        <p className="bg-yellow-200 text-black p-2 rounded">
          Although Hooks replace class components in many cases, they don’t completely remove them from React.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What is a Hooks ?</h2>
        <p>
          A Hook is a special function in React that lets you "hook into" React features like state, lifecycle, and context from functional components. Hooks were introduced in React version 16.8 to make functional components more powerful, so they can do everything that class components can do — but with simpler and cleaner code.

          Before hooks, only class components could manage state or use lifecycle methods (like componentDidMount). But now, with hooks like useState, useEffect, useContext, etc., you can manage state, run side effects, access context, and more — directly inside a functional component. <code>useState</code> is a Hook that lets you add React state to function components.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why Use Hooks ?</h2>
        <p>
          Hooks let you use state and lifecycle features in functional components,
          which were earlier only available in class components. They make code cleaner,
          shorter, and more reusable. With hooks, you can manage logic easily without using
          complex class syntax.



        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Example:</h2>
        <p className="mb-2">
          Here's a basic example using <code>useState</code> to handle input and display it live:
        </p>

        <div className="bg-gray-900 text-white p-4 rounded overflow-auto text-sm">
          <pre>
            {`import React, { useState } from "react";

function NameDisplay() {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>Hello, {name || "Stranger"}!</h3>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Enter your name" 
      />
    </div>
  );
}

export default NameDisplay;`}
          </pre>
        </div>

        <button className="mt-3 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
          Try It Yourself
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Hook Rules</h2>
        <ul className="list-disc list-inside">
          <li>Only call Hooks at the top level.</li>
          <li>Only call Hooks from React function components.</li>
          <li>Hooks should not be called inside loops, conditions, or nested functions.</li>
        </ul>
      </div>

      {/* 👇 New Section Added Here */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Types of Hooks</h2>
        <ul className="list-disc list-inside">
          <li><code>useState</code> – for managing state.</li>
          <li><code>useEffect</code> – for side effects (API calls, subscriptions).</li>
          <li><code>useContext</code> – for accessing context values.</li>
          <li><code>useRef</code> – for referencing DOM elements or values.</li>
          <li><code>useMemo</code> – for memoizing computations.</li>
          <li><code>useCallback</code> – for memoizing functions.</li>
          <li><code>useReducer</code> – for complex state logic.</li>
          <li><code>useLayoutEffect</code> – fires synchronously after DOM mutations.</li>
          <li><code>useImperativeHandle</code> – to customize instance value exposed by <code>ref</code>.</li>
          <li><code>useDebugValue</code> – for debugging custom hooks.</li>
        </ul>
      </div>
      {/* 👆 End of New Section */}

      <div className="bg-yellow-200 text-black p-2 rounded mb-6">
        You can’t use Hooks in class components.
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Custom Hooks</h2>
        <p>
          If you have logic that needs to be reused across components, you can build your own Hooks.
        </p>
      </div>
      <div className="flex justify-between mt-6">
        <Link
          to="/React/ReactClass"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/PropsIntro"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}
