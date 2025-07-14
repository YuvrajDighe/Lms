import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';


function RunExample({ code }) {
  return (
    <div className="border rounded-md mt-4">
      <LiveProvider code={code} noInline>
        <div className="grid md:grid-cols-2 gap-4 p-4">
          <div className="bg-gray-800 text-white text-sm rounded p-2">
            <LiveEditor className="min-h-[200px]" />
          </div>
          <div className="border p-4 rounded">
            <LivePreview />
          </div>
        </div>
        <LiveError className="text-red-500 font-mono p-2" />
      </LiveProvider>
    </div>
  );
}

function StateManagement() {
  const whatIsState = `
function App() {
  const [message, setMessage] = React.useState("Hello, World!");

  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("You clicked the button!")}>\n        Change Message
      </button>
    </div>
  );
}
render(<App />);`;

  const useStateExample = `
function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
      <button onClick={() => setCount(0)}>🔁 Reset</button>
    </div>
  );
}
render(<Counter />);`;

  const propsExample = `
function App() {
  const [name, setName] = React.useState("Rushikesh");

  return (
    <div>
      <h1>Parent Component</h1>
      <Child name={name} />
    </div>
  );
}

function Child({ name }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Hi, {name}! 👋</p>
    </div>
  );
}
render(<App />);`;

  const liftingExample = `
function App() {
  const [name, setName] = React.useState("");

  return (
    <div>
      <h1>Lifting State Up Example</h1>
      <NameInput name={name} setName={setName} />
      <NameDisplay name={name} />
    </div>
  );
}

function NameInput({ name, setName }) {
  return (
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Enter your name"
    />
  );
}

function NameDisplay({ name }) {
  return <p>Hello, {name || "Stranger"}!</p>;
}
render(<App />);`;

  return (
    <div className="bg-[#464859] min-h-screen text-white" >
      <header className=" py-4 px-6 ">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">State Management Tutorial</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto p-6 ">
        <div className="w-full flex justify-between">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">previous</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Next</button>
        </div><br />
        <section className="bg-green-50 border border-green-200 p-6 rounded mb-8 text-black">
          <h2 className="text-xl font-semibold text-green-700 mb-2">Learn State Management</h2>
          <p className="mb-2">
            This React tutorial will teach you how to manage state using <code>useState</code>, props,
            and how to lift state up between components.
          </p>
          <button className="mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            Start learning now »
          </button>
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-teal-600 mt-8">1. What is State?</h3>
          <p className="mt-2">
            State in React is an object that holds dynamic data for a component.
            It controls how a component behaves and renders based on data that can change over time.
          </p>
          <RunExample code={whatIsState} />
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-teal-600 mt-8">2. useState Hook</h3>
          <p className="mt-2">
            The <code>useState</code> hook lets you add state to functional components.
            It returns the current state value and a function to update it.
          </p>
          <RunExample code={useStateExample} />
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-teal-600 mt-8">3. State vs Props</h3>
          <p className="mt-2">
            <strong>State:</strong> is used for internal data within a component. It is mutable and controlled inside the component.<br />
            <strong>Props:</strong> are read-only values passed from parent to child to make components reusable.
          </p>
          <RunExample code={propsExample} />
        </section>

        <section>
          <h3 className="text-2xl font-semibold text-teal-600 mt-8">4. Lifting State Up</h3>
          <p className="mt-2">
            Lifting state up is the process of moving shared state to the closest common ancestor of components
            that need to access it. This helps synchronize the data across components.
          </p>
          <RunExample code={liftingExample} /><br />
          <div className="w-full flex justify-between">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">previous</button>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Next</button>
        </div>
        </section>
      </main>
    </div>
  );
}

export default StateManagement;
