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

function Memo() {
  const navigate = useNavigate();

  const memoExample = `import React, { useMemo, useState } from "react";

function ExpensiveComponent({ num }) {
  const [count, setCount] = useState(0);

  const factorial = useMemo(() => {
    console.log("Calculating factorial...");
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }, [num]);

  return (
    <div>
      <h2>Factorial of {num} is {factorial}</h2>
      <button onClick={() => setCount(count + 1)}>Re-render ({count})</button>
    </div>
  );
}`;

  return (
    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
      <h1 className="text-4xl font-bold">useMemo in React</h1>

      {/* Navigation */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => navigate("/React/Effect")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </button>
        <button
          onClick={() => navigate("/React/Reducer")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </button>
      </div>

      {/* Description */}
      <p className="mt-6 text-[18px]">
        The <code className="text-red-400">useMemo</code> hook is used to optimize performance by memoizing the result of expensive computations. It recalculates only when its dependencies change.
      </p>

      <h2 className="text-[30px] mt-6">What is useMemo?</h2>
      <p className="mt-3 text-[18px]">
        useMemo is a performance optimization hook in React that allows you to memoize the result of an expensive computation. Instead of recalculating the result on every render, useMemo stores (memoizes) the output of the function and only recalculates it when one of its dependencies changes.
        This hook helps reduce unnecessary CPU-intensive operations like sorting, filtering, or looping through large datasets. It's particularly useful when passing derived values to child components that depend on heavy logic. Without useMemo, these computations would happen on every render, even when not required.
      </p>

      <h2 className="text-[30px] mt-6">Syntax</h2>
      <CodeBlock code={`const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);`} />
      <p className="mt-3 text-[18px]">
        The first argument is a function that returns the value you want to memoize. The second argument is an array of dependencies. React will recompute the value only when one of the dependencies changes. If no dependency changes, the previously memoized result is returned. This behavior is similar to useEffect, but useMemo is for returning values, not performing side effects.
      </p>

      <h2 className="text-[30px] mt-6">Example</h2>
      <CodeBlock code={memoExample} />

      <h2 className="text-[30px] mt-6">useMemo – Interview Questions</h2>
      <div className="mt-4 space-y-4 text-[18px]">
        <div>
          <span className="font-bold">Q1: What is useMemo in React</span><br />
          useMemo is a React hook that helps you cache the result of a computation so it only re-runs when its dependencies change.
        </div>

        <div>
          <span className="font-bold">Q2: What is the syntax of useMemo</span><br />
          It follows this format:
          <CodeBlock code={`const result = useMemo(() => computeValue(), [dependencies]);`} />
        </div>

        <div>
          <span className="font-bold">Q3: Why do we need useMemo</span><br />
          To avoid repeating costly calculations on every render and enhance performance.
        </div>

        <div>
          <span className="font-bold">Q4: Difference between useMemo and useCallback</span><br />
          <ul className="list-disc ml-5">
            <li>useMemo returns a memoized value.</li>
            <li>useCallback returns a memoized function.</li>
          </ul>
        </div>

        <div>
          <span className="font-bold">Q5: Difference between useMemo and useEffect</span><br />
          <ul className="list-disc ml-5">
            <li>useMemo is used to cache values during render.</li>
            <li>useEffect runs side effects after the DOM has updated.</li>
          </ul>
        </div>

        <div>
          <span className="font-bold">Q6: What happens with empty dependency array</span><br />
          It behaves like a constant—the function is called once and never re-runs again unless the component unmounts and remounts.
        </div>

        <div>
          <span className="font-bold">Q7: Can useMemo be overused</span><br />
          Yes, it can introduce overhead if used where it's not needed. Only use it for expensive computations.
        </div>

        <div>
          <span className="font-bold">Q8: Real-world use case of useMemo</span><br />
          A common real-world use case is in e-commerce applications where you display a product list that can be filtered or sorted.
          <CodeBlock code={`const filteredProducts = useMemo(() => {
  return products.filter(product => product.category === selectedCategory);
}, [products, selectedCategory]);`} />
        </div>
      </div>

      {/* Navigation Again */}
      <div className="flex justify-between mt-10">
        <button
          onClick={() => navigate("/React/Layout")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </button>
        <button
          onClick={() => navigate("/React/Reducer")}
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </button>
      </div>
    </div>
  );
}

export default Memo;
