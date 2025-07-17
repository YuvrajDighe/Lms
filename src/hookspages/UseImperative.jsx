import React from "react";
import { useNavigate } from "react-router-dom";

function Imperative() {
  const navigate = useNavigate();

  return (
    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
      {/* Navigation Top */}
     

      <h1 className="text-[40px] mb-6">useImperativeHandle in React – Notes</h1>

       <div className="flex justify-between mb-6">
        <button
          onClick={() => navigate('/React/Layout')}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </button>
        <button
          onClick={() => navigate('/React/PropsIntro')}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </button>
      </div>

      <h2 className="text-[30px] mt-6">✅ What is useImperativeHandle?</h2>
      <p className="mt-3 text-[18px]">
        <code className="text-red-400">useImperativeHandle</code> is a React Hook used with <code className="text-red-400">forwardRef</code> to allow a child component to expose custom methods or properties to its parent via a <code>ref</code>.<br /><br />
        By default, a ref exposes a DOM node or component instance. <code>useImperativeHandle</code> customizes what gets exposed when the parent uses a ref.
      </p>

      <h2 className="text-[30px] mt-6">✅ Why is it used?</h2>
      <ul className="list-disc ml-6 mt-3 text-[18px]">
        <li>You want to limit or control what’s exposed from the child.</li>
        <li>You need the parent to call functions inside a child (e.g., focus an input, trigger animation, reset form).</li>
        <li>You want to prevent exposing internal implementation (e.g., full DOM node).</li>
      </ul>

      <h2 className="text-[30px] mt-6">✅ Syntax</h2>
      <pre className="bg-black text-white p-4 rounded mt-3 overflow-x-auto">
        <code>{`useImperativeHandle(ref, () => ({
  // custom methods or values
  focusInput: () => {},
  clear: () => {},
}), [dependencies]);`}</code>
      </pre>
      <p className="mt-3 text-[18px]">
        <strong>ref:</strong> A reference passed from the parent.<br />
        <strong>Returns:</strong> An object with custom functions/values to expose.<br />
        <strong>[dependencies]:</strong> Optional array to control when the memoized object should be updated.
      </p>

      <h2 className="text-[30px] mt-6">✅ How it Works</h2>
      <ul className="list-disc ml-6 mt-3 text-[18px]">
        <li>Wrap the child component with <code>forwardRef</code>.</li>
        <li>Inside the child, use <code>useImperativeHandle</code> to return the object you want to expose.</li>
        <li>In the parent, access methods via <code>ref.current</code>.</li>
      </ul>

      <h2 className="text-[30px] mt-6">✅ Example: Focus an Input from Parent</h2>
      <h3 className="text-[24px] mt-4">Child.js</h3>
      <pre className="bg-black text-white p-4 rounded overflow-x-auto">
        <code>{`import React, { useRef, forwardRef, useImperativeHandle } from 'react';

const InputBox = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
  }));

  return <input ref={inputRef} placeholder="Enter something..." />;
});

export default InputBox;`}</code>
      </pre>

      <h3 className="text-[24px] mt-4">Parent.js</h3>
      <pre className="bg-black text-white p-4 rounded overflow-x-auto">
        <code>{`import React, { useRef } from 'react';
import InputBox from './Child';

function App() {
  const childRef = useRef();

  const handleClick = () => {
    childRef.current.focusInput(); // Call method from child
  };

  return (
    <div>
      <InputBox ref={childRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default App;`}</code>
      </pre>

      <h2 className="text-[30px] mt-6">✅ Real-world Use Cases</h2>
      <ul className="list-disc ml-6 mt-3 text-[18px]">
        <li>Focusing or selecting input fields.</li>
        <li>Triggering animations or transitions.</li>
        <li>Resetting internal form states.</li>
        <li>Creating reusable library components with controlled external access.</li>
      </ul>

      {/* Navigation Bottom */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => navigate('/React/Layout')}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </button>
        {/* <button
          onClick={() => navigate('/React/ComponentRendering')}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </button> */}
      </div>
    </div>
  );
}

export default Imperative;
