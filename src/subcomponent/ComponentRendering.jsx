import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Greeting = ({ name }) => {
  console.log('🔁 Greeting component rendered');
  return <h2>Hello, {name}!</h2>;
};

const Message = React.memo(({ count }) => {
  console.log('🔁 Child component re-rendered');
  return <p className="text-[18px]">The current count is: <strong>{count}</strong></p>;
});

function ComponentRendering() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [name, setName] = useState("React");
  const navigate = useNavigate();

  console.log('🔁 Parent component rendered');

  return (
    <div className="p-9 text-white" style={{ backgroundColor: '#464859' }}>

      <h1 className="text-4xl mb-6">Component Rendering in React</h1>

       <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate('/React/ReactComponent')}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </button>
        <button
          onClick={() => navigate('/React/StateManegment')}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </button>
      </div>

      <h2 className="text-[30px] mt-6">✅ What is Component Rendering in React?</h2>
      <p className="mt-3 text-[18px]">
        Component rendering in React refers to the process by which React displays UI based on the component's logic and state.
        When you write JSX inside a React component, React takes that JSX, processes it into virtual DOM nodes, and finally renders
        those elements onto the real DOM. The rendering process is efficient due to the Virtual DOM mechanism, where only the parts of the UI that actually change get updated in the real DOM.
      </p>

      <h2 className="text-[30px] mt-6">✅ How Rendering Works</h2>
      <p className="mt-3 text-[18px]">
        <strong>Initial Render:</strong> When a React component is mounted for the first time, a virtual DOM is created based on the JSX provided. React then updates the actual DOM to match this virtual DOM.<br /><br />
        <strong>Re-render:</strong> Happens when:
        <ul className="list-disc ml-6">
          <li>props change</li>
          <li>state changes</li>
          <li>context updates</li>
        </ul>
        React compares the new virtual DOM with the previous one using a process called reconciliation. It finds the difference (called "diffing") and updates only those parts in the real DOM that changed.
      </p>

      <h2 className="text-[30px] mt-6">✅ Types of Rendering in React</h2>
      <ul className="list-disc ml-6 text-[18px] mt-3">
        <li><strong>Client-side Rendering (CSR):</strong> The entire UI is rendered in the browser after JavaScript loads.</li>
        <li><strong>Server-side Rendering (SSR):</strong> HTML is rendered on the server and sent to the browser. Used in frameworks like Next.js.</li>
        <li><strong>Static Site Generation (SSG):</strong> Pages are rendered at build time into static HTML files.</li>
        <li><strong>Incremental Static Regeneration (ISR):</strong> Combines static generation with runtime updates in frameworks like Next.js.</li>
      </ul>

      <h2 className="text-[30px] mt-6">✅ Example of React Component Rendering</h2>
      <div className="mt-3 text-[18px]">
        <p>This example shows how rendering works with both parent and child components. It also demonstrates memoization using <code>React.memo</code> to prevent unnecessary re-renders of child components unless props change.</p>

        <h3 className="text-[26px] mt-6 mb-2 font-semibold">🔸 Example Code:</h3>
        <div className="bg-black text-white rounded p-4 overflow-x-auto text-sm leading-relaxed">
          <pre>
            <code>
{`import React, { useState } from 'react';

const Message = React.memo(({ count }) => {
  return <p>The current count is: {count}</p>;
});

function ExampleComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <Message count={count} />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
}`}
            </code>
          </pre>
        </div>

        <Message count={count} />
        <button
          onClick={() => setCount(count + 1)}
          className="mt-3 mr-3 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
        >
          Increment Count
        </button>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="p-2 mt-3 rounded border border-gray-300 text-black"
        />
        <p className="mt-2">Typed Text: <strong>{text}</strong></p>
        <p className="mt-2 italic">Typing in the input will not re-render the <code>Message</code> component, but clicking the increment button will.</p>

        <div className="mt-10 p-6 border border-gray-300 rounded bg-[#33374d]">
          <h2 className="text-[26px] mb-2">🔹 Simple Rendering Example</h2>
          <Greeting name={name} />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="p-2 mt-2 rounded border text-black"
          />
          <p className="mt-2 text-[16px] italic">
            Every time you type, the parent re-renders and passes a new prop to the child.
          </p>
        </div>
      </div>

      <h2 className="text-[30px] mt-6">✅ How to Control Unnecessary Re-renders</h2>
      <ul className="list-disc ml-6 text-[18px] mt-3">
        <li>Use <code className="text-red-400">React.memo()</code> to prevent re-render if props didn’t change.</li>
        <li>Use <code className="text-red-400">useMemo()</code> or <code className="text-red-400">useCallback()</code> to memoize values/functions.</li>
        <li>Lift state up only when necessary to avoid triggering deep child updates.</li>
        <li>Avoid creating new object or function references unless needed inside render methods.</li>
        <li>Use the <code>key</code> prop efficiently when rendering lists.</li>
      </ul>

      <h2 className="text-[30px] mt-6">✅ Summary</h2>
      <p className="mt-3 text-[18px]">
        Rendering is the core mechanism of how React updates the UI. It ensures a highly responsive experience by updating only the parts of the DOM that have changed.<br />
        Through techniques like memoization and controlled updates, developers can optimize rendering and avoid unnecessary performance overhead.<br />
        Mastering rendering helps you write performant, scalable React applications that respond quickly to user interaction.
      </p>

      {/* Navigation */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => navigate('/React/ReactComponent')}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </button>
        <button
          onClick={() => navigate('/React/StateManegment')}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </button>
      </div>
    </div>
  );
}

export default ComponentRendering;
