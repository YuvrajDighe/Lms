import React, { useState } from "react";
import { Link } from "react-router-dom";

function Reducer() {
  const [copied, setCopied] = useState(false);

  const reducerCode = `import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

export default Counter;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(reducerCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-9 bg-[#464859] text-white text-lg">
      <div className="max-w-4x4">
        <h1 className="text-[40px] font-bold mb-6">React <span className="text-red-400">useReducer</span> Hook</h1>

        {/* NAV BUTTONS */}
        <div className="flex justify-between mt-6 mb-10">
          <Link to="/React/Memo" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded">
            <span className="mr-2">❮</span> Previous
          </Link>
          <Link to="/React/Callback" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded">
            Next <span className="ml-2">❯</span>
          </Link>
        </div>

        {/* INTRODUCTION */}
        <section className="mb-8 mt-5 pt-4">
          <h2 className="text-[30px] font-semibold mb-4">What is useReducer</h2>
          <p className="mb-2">The <code>useReducer</code> Hook is similar to <code>useState</code>, but it is useful for complex state logic.</p>
          <p className="mb-2">It gives better control while managing state.</p>
          <p className="mb-2">If you have multiple related states or logic, <code>useReducer</code> is a better choice.</p>
        </section>

        {/* SYNTAX */}
        <section className="mb-8 mt-5 pt-4">
          <h2 className="text-[30px] font-semibold mb-4">Syntax</h2>
         <p className=" mb-2">The useReducer Hook accepts two arguments.</p>

          <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 text-sm">
            <pre>
           <code>
  const [state, dispatch] = useReducer(
  <span className="text-red-500 font-semibold "> reducerFunction </span>,
  <span className="text-red-500 font-semibold"> initialState </span>);
</code>
            </pre>
          </div>
          <p className="mt-2">The <code>reducerFunction</code> takes current state and action, and returns a new state.</p>
        </section>

{/* SHORT NOTES */}
        <section className="mb-8 mt-5 pt-4">
          <h2 className="text-[30px] font-semibold mb-4">Why useReducer?</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Better for complex state logic</li>
            <li>Organized state management</li>
            <li>Works great with multiple sub-values</li>
            <li>Good for Redux-like flow</li>
          </ul>
        </section>

        {/* EXAMPLE */}
        <section className="mb-8 mt-5 pt-4">
          <h2 className="text-[30px] font-semibold mb-4">Example: Counter</h2>
          <div className="bg-black p-4 rounded-md text-sm relative overflow-x-auto">
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <pre>
              <code>{reducerCode}</code>
            </pre>
          </div>
        </section>

        {/* EXPLANATION */}
<section className="mb-8 mt-5 pt-4">
  <h2 className="text-[30px] font-semibold mb-4">Explanation</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li><strong>initialState:</strong> Default count value.</li>
    <li><strong>Reducer:</strong> Controls how count changes.</li>
    <li><strong>useReducer:</strong> Returns state and dispatch function.</li>
    <li><strong>Dispatch:</strong> Used to send actions like 'increment' or 'decrement'.</li>
    <li><strong>JSX:</strong> Shows the count and buttons to change it.</li>
  </ul>
</section>

        {/* NAV BUTTONS BOTTOM */}
        <div className="flex justify-between mt-6">
          <Link to="/React/Memo" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded">
            <span className="mr-2">❮</span> Previous
          </Link>
          <Link to="/React/Callback" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded">
            Next <span className="ml-2">❯</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Reducer;
