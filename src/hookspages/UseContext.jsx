import { Link } from "react-router-dom";
export default function UseContextPage() {
  return (
    <div className="p-9" style={{ backgroundColor: "#464859", color: "white",  fontFamily: "Arial" }}>
      <h1 className="text-4xl font-bold ">React useContext Hook</h1>

    <div className="flex justify-between mb-6    mt-6">
        <Link
          to="/React/Callback"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/Debug"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </Link>
      </div>

      
     
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">What is useContext?</h2>
        <p>
        <code>useContext</code>  is a React Hook that allows you to access values from a Context in any child component.
It helps avoid passing props manually through every level of the component tree.
You use it with createContext() and a Context.Provider.
It's commonly used for global data like user info or app settings.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Why do we use useContext? </h2>
        <p>
        We use <code>useContext</code> to avoid prop drilling — passing props manually through multiple components.
It allows us to access shared or global data (like user, theme, or language) directly in any component.
<code>useContext</code> works with <code>Context.Provider</code> and makes state management cleaner.
It's simple and built-in, so no external library is needed.</p>
      </section>

    <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">React Context</h2>
        <p>
          React Context is a way to manage state globally.
          It can be used together with the <code>useContext</code> Hook to share state between deeply nested components more easily than with <code>useState</code> alone.
        </p>
      </section>

     
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">The Problem</h2>
        <p>
          State should be held by the highest parent component that requires access to the state.
          To illustrate, we have many nested components. The component at the top and bottom can access the state, but the components in between do not.
          To fix this without Context, we will need to pass the state as "props" through each nested component. This is known as "prop drilling".
        </p>
      </section>

     
      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Example:</h2>
        <pre style={{ backgroundColor: "black", color: "white", padding: "20px", borderRadius: "10px", overflowX: "auto" }}>
{`import React, { useContext, useState } from 'react';

const UserContext = React.createContext();

function Component1() {
  const [user, setUser] = useState("Samir");
  return (
    <UserContext.Provider value={user}>
      <h1>{\`Hello \${user}!\`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return <Component3 />;
}

function Component3() {
  return <Component4 />;
}

function Component4() {
  const user = useContext(UserContext);
  return <h2>{\`User from context: \${user}\`}</h2>;
}

export default Component1;`}
        </pre>
        <button className="bg-blue-600 text-white mt-4 px-4 py-2 rounded">Run Example</button>
      </section>

      
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">The Solution</h2>
        <p>The solution is to create context.</p>
      </section>

     
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Create Context</h3>
        <p>To create context, you must import <code>createContext</code> and initialize it:</p>
        <pre style={{ backgroundColor: "black", color: "white", padding: "20px", borderRadius: "10px", overflowX: "auto" }}>
{`import { useState, createContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();`}
        </pre>
      </section>

      
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Context Provider</h3>
        <p>Wrap child components in the Context Provider and supply the state value.</p>
        <pre style={{ backgroundColor: "black", color: "white", padding: "20px", borderRadius: "10px", overflowX: "auto" }}>
{`function Component1() {
  const [user, setUser] = useState("Hello all!");

  return (
    <UserContext.Provider value={user}>
      <h1>{\`Hello \${user}!\`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}`}
        </pre>
      </section>

      
      <section className="mb-6">
        <h3 className="text-xl font-semibold mb-2">Use the useContext Hook</h3>
        <p>To use the Context in a child component, import <code>useContext</code> and access the context:</p>
        <pre style={{ backgroundColor: "black", color: "white", padding: "20px", borderRadius: "10px", overflowX: "auto" }}>
{`import { useState, createContext, useContext } from "react";`}
        </pre>

        <pre style={{ backgroundColor: "black", color: "white", padding: "20px", borderRadius: "10px", overflowX: "auto" }}>
{`function Component5() {
  const user = useContext(UserContext);

  return (
    <>
      <h3>Component5</h3>
      <h4>{\`Hello \${user} again!\`}</h4>
    </>
  );
}`}
        </pre>
      </section>

     
      <section className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Full Example</h2>
        <p>Here is the full example using React Context:</p>
        <pre style={{ backgroundColor: "black", color: "white", padding: "20px", borderRadius: "10px", overflowX: "auto" }}>
{`import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";

const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Hello All!");

  return (
    <UserContext.Provider value={user}>
      <h1>{\`Hello \${user}!\`}</h1>
      <Component2 />
    </UserContext.Provider>
  );
}

function Component2() {
  return <Component3 />;
}

function Component3() {
  return <Component4 />;
}

function Component4() {
  return <Component5 />;
}

function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Component 5</h2>
      <p>{\`Hello again \${user}!\`}</p>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Component1 />);`}
        </pre>

        <div className="flex justify-between mt-6">
        <Link
          to="/React/Callback"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/Debug"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </Link>
      </div>
      </section>
    </div>
  );
}
