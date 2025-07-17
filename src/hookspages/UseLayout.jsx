import React from "react";
import { useNavigate } from "react-router-dom";

function CodeBlock({ code }) {
  return (
    <div className="mt-5 text-white">
      <div className="p-4 rounded mb-8">
        <h2 className="text-xl font-bold mb-2"> Example</h2>
        <div className="bg-black text-white p-4 rounded">
          <pre className="overflow-x-auto">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

function Layout() {
  const navigate = useNavigate();

  const layoutExample = `import React, { useLayoutEffect, useRef, useState } from "react";

function LayoutExample() {
  const boxRef = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (boxRef.current) {
      setWidth(boxRef.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <div ref={boxRef} style={{ width: "300px", height: "100px", background: "lightblue" }}>
        Box
      </div>
      <p>Box width is {width}px</p>
    </div>
  );
}`

  return (
    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
      <h1 className="text-[40px]">useLayoutEffect in React</h1>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/React/Debug")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </button>
        <button
          onClick={() => navigate("/React/Imperative")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </button>
      </div>

      {/* Description */}
      <p className="mt-6 text-[18px]">
        The <code className="text-red-400">useLayoutEffect</code> hook runs synchronously after all DOM mutations but before the browser has painted.  
        It’s used when you need to measure the DOM or make layout changes before the user sees anything.
      </p>

      <h2 className="text-[30px] mt-6">What is useLayoutEffect?</h2>
      <p className="mt-3 text-[18px]">
        <code className="text-red-400">useLayoutEffect</code> is similar to <code className="text-red-400">useEffect</code>,  
        but it fires **before the browser paints** the screen.  
        It’s perfect for reading layout measurements (like width/height) or performing synchronous UI updates.
      </p>

      <h2 className="text-[30px] mt-6">Syntax</h2>
      <CodeBlock code={`useLayoutEffect(() => {
  // Your logic here
}, [dependencies]);`} />
      <p className="mt-3 text-[18px]">
        It works like <code className="text-red-400">useEffect</code>, but blocks the browser paint until it finishes.
      </p>

      <h2 className="text-[30px] mt-6">Example</h2>
      <CodeBlock code={layoutExample} />

      <h2 className="text-[30px] mt-6">useLayoutEffect – Interview Questions</h2>
      <div className="mt-4 space-y-4 text-[18px]">
        <div>
          <span className="font-bold">Q1: What is useLayoutEffect in React</span><br />
          A hook that runs after DOM updates but before the browser paint — useful for DOM measurements and layout adjustments.
        </div>

        <div>
          <span className="font-bold">Q2: What is the syntax of useLayoutEffect</span><br />
          It follows this format:
          <CodeBlock code={`useLayoutEffect(() => {
  // logic
}, [dependencies]);`} />
        </div>

        <div>
          <span className="font-bold">Q3: Why do we need useLayoutEffect</span><br />
          To perform DOM measurements or visual adjustments before the browser repaints the UI.
        </div>

        <div>
          <span className="font-bold">Q4: Difference between useEffect and useLayoutEffect</span><br />
          <ul className="list-disc ml-5">
            <li>useEffect runs after the paint — for side effects.</li>
            <li>useLayoutEffect runs before the paint — for layout adjustments.</li>
          </ul>
        </div>

        <div>
          <span className="font-bold">Q5: Is it good to always use useLayoutEffect?</span><br />
          No. It blocks rendering and can impact performance. Use only when layout changes are required.
        </div>

        <div>
          <span className="font-bold">Q6: Real-world use case of useLayoutEffect</span><br />
          Adjusting scroll positions, measuring element sizes, or preventing visual flickering.
        </div>
      </div>

      {/* Navigation Again */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => navigate("/React/UseState")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </button>
        <button
          onClick={() => navigate("/React/UseMemo")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </button>
      </div>
    </div>
  );
}

export default Layout;
