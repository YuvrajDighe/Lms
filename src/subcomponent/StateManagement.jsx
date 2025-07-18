import React from "react";
import { useNavigate } from "react-router-dom";

function CodeBlock({ code }) {
  return (
    <div className="mt-5 text-white">
      <div className="p-4 rounded mb-8">
        <h2 className="text-xl font-bold mb-2">Example</h2>
        <div className="bg-black text-white p-4 rounded">
          <pre className="overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}


export function StateManagement() {
  const navigate = useNavigate();

  const whatIsState = `function App() {
  const [message, setMessage] = React.useState("Hello, World!");
  return (
    <div>
      <h1>{message}</h1>
      <button onClick={() => setMessage("You clicked the button!")}>
        Change Message
      </button>
    </div>
  );
}`;

  const useStateExample = `function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
      <button onClick={() => setCount(0)}>🔁 Reset</button>
    </div>
  );
}`;

  const propsExample = `function App() {
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
}`;

  const liftingExample = `function App() {
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
}`;

  return (
    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
      <h1 className="text-4xl font-bold">State Management</h1>

      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/React/ReactComponent")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </button>
        <button
          onClick={() => navigate("/React/ReactClass")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </button>
      </div>

      <p className="mt-6 text-[18px] text-white">
        This React tutorial will teach you how to manage state using <code className="text-red-500">useState</code>, props, and how to lift state up between components.
      </p>

      <h2 className="text-[30px] mt-6 text-white">1. What is State?</h2>
      <p className="mt-3 text-[18px] text-white">
        In React, <strong>state</strong> is a built-in object that stores property values that belong to a component. When the state changes, the component re-renders to reflect the changes in the UI. You can think of state as the "memory" of your component—it tracks data that changes over time like form inputs, toggles, etc.
      </p>
      <CodeBlock code={whatIsState} />

      <h2 className="text-[30px] mt-6 text-white">2. useState Hook</h2>
      <p className="mt-3 text-[18px] text-white">
        The <code className="text-red-500">useState</code> hook is a function provided by React that allows you to add state to functional components. It returns an array with two elements: the current state value, and a function to update that value. Each time the setter function is called, the component re-renders with the new state.
      </p>
      <CodeBlock code={useStateExample} />

      <h2 className="text-[30px] mt-6 text-white">3. State vs Props</h2>
      <p className="mt-3 text-[18px] text-white">
        <strong>State:</strong> is used to manage data <strong>inside</strong> a component. It's <strong>local</strong>, <strong>mutable</strong>, and only visible to the component that owns it.<br />
        <strong>Props:</strong> are used to pass data <strong>from a parent to a child</strong> component. Props are <strong>read-only</strong>, making child components reusable and controlled by the parent.
      </p>
      <CodeBlock code={propsExample} />

      <h2 className="text-[30px] mt-6 text-white">4. Lifting State Up</h2>
      <p className="mt-3 text-[18px] text-white">
        Sometimes, multiple components need to share the same state. Instead of duplicating it, you can "lift the state up" to their <strong>common parent component</strong>. This parent then passes the state and its updater function to the children via props, ensuring synchronized data across components.
      </p>
      <CodeBlock code={liftingExample} />

      <div className="flex justify-between mt-10">
        <button
          onClick={() => navigate("/React/ReactComponent")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </button>
        <button
          onClick={() => navigate("/React/ReactClass")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </button>
      </div>
    </div>
  );
}

export default StateManagement;
