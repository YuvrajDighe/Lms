import React, { useState } from "react";

function State() {
  const [copiedSyntax, setCopiedSyntax] = useState(false);
  const [copiedExample, setCopiedExample] = useState(false);
   const [copiedName, setCopiedName] = useState(false);
  const [copiedToggle, setCopiedToggle] = useState(false);

  const code2 = `const [variable, setVariable] = useState(initialValue);`;

  const code = `import React, { useState } from "react";
  
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Number: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default Counter;`;

  const handleCopySyntax = () => {
    navigator.clipboard.writeText(code2);
    setCopiedSyntax(true);
    setTimeout(() => setCopiedSyntax(false), 2000);
  };

  const handleCopyExample = () => {
    navigator.clipboard.writeText(code);
    setCopiedExample(true);
    setTimeout(() => setCopiedExample(false), 2000);
  };

  const codeNameChange = `import React, { useState } from "react";

function NameChange() {
  const [name, setName] = useState("Anis");

  return (
    <div>
      <h1>Name: {name}</h1>
      <button onClick={() => setName("Sayyed")}>
        Change Name
      </button>
    </div>
  );
}

export default NameChange;`;

  const codeToggle = `import React, { useState } from "react";

function Toggle() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      {isVisible && <p>This is visible</p>}
    </div>
  );
}

export default Toggle;`;

  const handleCopyName = () => {
    navigator.clipboard.writeText(codeNameChange);
    setCopiedName(true);
    setTimeout(() => setCopiedName(false), 2000);
  };

  const handleCopyToggle = () => {
    navigator.clipboard.writeText(codeToggle);
    setCopiedToggle(true);
    setTimeout(() => setCopiedToggle(false), 2000);
  }

  return (
    <div className="text-white p-6" style={{ backgroundColor: "#464859" }}>
      <div>
        <h1 className="text-[40px] mt-5">useState Hook :-</h1>

        <h2 className="text-[25px] mt-5">What is useState?</h2>
        <p className="text-[18px] mt-2 ml-2">
          • useState is a <strong>React Hook </strong> used to<strong> add state </strong>in Functional Components.
        </p>
        <p className="text-[18px] mt-2 ml-2">
          • It allows components to <strong>remember values</strong> and update them when needed.
        </p>
        <p className="text-[18px] mt-2 ml-2">
          • Imported from <strong>'react'</strong> library.
        </p>

        <h1 className="text-[30px] mt-5">🔑 Syntax</h1>

        <div className="bg-black p-4 rounded mt-4 relative">
          <button
            onClick={handleCopySyntax}
            className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm"
          >
            {copiedSyntax ? "Copied!" : "Copy"}
          </button>

          <pre>
            <code>{code2}</code>
          </pre>
        </div>

        <p className="text-[18px] mt-4 ml-2">
          ✅ <code>variable</code> → current value
        </p>
        <p className="text-[18px] mt-2 ml-2">
          ✅ <code>setVariable</code> → function to change value
        </p>
        <p className="text-[18px] mt-2 ml-2">
          ✅ <code>initialValue</code> → starting value of the state (number, string, boolean, array, object)
        </p>

        <h2 className="text-[25px] mt-5">📌 Example 1: Counter :-</h2>
        <p className="text-[18px] mt-2 ml-2">
          • Below is a small program to <strong>increase number by 1</strong> when we click a button.
        </p>

        <div className="bg-black p-4 rounded mt-4 relative">
          <button
            onClick={handleCopyExample}
            className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm"
          >
            {copiedExample ? "Copied!" : "Copy"}
          </button>

          <pre>
            <code>{code}</code>
          </pre>
        </div>

        <h2 className="text-[25px] mt-5">Explanation :-</h2>
        <p className="text-[18px] mt-2 ml-2">
          • <code>useState(0)</code> → starts with number 0.
        </p>
        <p className="text-[18px] mt-2 ml-2">
          • <code>count</code> → current value.
        </p>
        <p className="text-[18px] mt-2 ml-2">
          • <code>setCount</code> → function to change value.
        </p>
        <p className="text-[18px] mt-2 ml-2">
          • When we click <strong>Increase button</strong>, number goes up by 1.
        </p>

         <h1 className="text-[30px] mt-5">📌 Example 2: Change Name</h1>

      <div className="bg-black p-4 rounded mt-4 relative">
        <button
          onClick={handleCopyName}
          className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm"
        >
          {copiedName ? "Copied!" : "Copy"}
        </button>

        <pre>
          <code>{codeNameChange}</code>
        </pre>
      </div>

      <p className="text-[18px] mt-2 ml-2">✔️ Starts with Anis</p>
      <p className="text-[18px] mt-2 ml-2">✔️ Button click changes name to Sayyed</p>

      <h1 className="text-[30px] mt-10">📌 Example 3: Toggle Boolean</h1>

      <div className="bg-black p-4 rounded mt-4 relative">
        <button
          onClick={handleCopyToggle}
          className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm"
        >
          {copiedToggle ? "Copied!" : "Copy"}
        </button>

        <pre>
          <code>{codeToggle}</code>
        </pre>
      </div>

      <p className="text-[18px] mt-2 ml-2">✔️ Shows/hides text on button click</p>

      <h2 className="text-[25px] mt-10">💡 Points to Remember</h2>
      <p className="text-[18px] mt-2 ml-2">
        • useState returns an array with two values: current value and function to update it.
      </p>
      <p className="text-[18px] mt-2 ml-2">
        • Changing state causes the component to re-render with updated value.
      </p>
      <p className="text-[18px] mt-2 ml-2">
        • You can use useState multiple times in one component for different data.
      </p>
      <p className="text-[18px] mt-2 ml-2">• Initial value can be:</p>
      <p className="text-[18px] mt-2 ml-5">Number →  <span className="bg-gray-200 text-black px-1 rounded">useState(0)</span></p>
      <p className="text-[18px] mt-2 ml-5">String →  <span className="bg-gray-200 text-black px-1 rounded">useState("Hello")</span></p>
      <p className="text-[18px] mt-2 ml-5">Boolean →  <span className="bg-gray-200 text-black px-1 rounded">useState(true)</span></p>
      <p className="text-[18px] mt-2 ml-5">Array → <span className="bg-gray-200 text-black px-1 rounded">useState([])</span></p>
      <p className="text-[18px] mt-2 ml-5">Object → <span className="bg-gray-200 text-black px-1 rounded">useState({})</span></p>

      <h2 className="text-[25px] mt-10">🚀 When to use useState?</h2>
      <p className="text-[18px] mt-2 ml-2">
        • When you want to change data on screen without reloading the page.
      </p>
      <p className="text-[18px] mt-2 ml-2">
        • Examples: counters, input data, show/hide content, toggles, changing colors or themes.
      </p>

      <h2 className="text-[25px] mt-10">✨ Final Simple Definition</h2>
      <p className="text-[18px] mt-2 ml-2">
        • useState is like a small memory box inside your component which stores data and lets you change it when needed.
      </p>
      </div>
    </div>
  );
}

export default State;
