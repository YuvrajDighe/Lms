import { useState } from "react";

import { Link } from "react-router-dom";
function ReactRouter() {
  const CopyableCodeBlock = ({ code }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    };

    return (
      <div className="relative mb-4">
        <button
          onClick={handleCopy}
          className="absolute top-2 right-2 bg-gray-700 text-white text-xs px-2 py-1 rounded hover:bg-gray-600"
        >
          {copied ? "✅ Copied" : "📋 Copy"}
        </button>
        <pre className="bg-black p-4 rounded-md text-white font-mono text-sm overflow-x-auto whitespace-pre-wrap">
          {code}
        </pre>
      </div>
    );
  };

  return (
    <>
      <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
        <h1 className="text-4xl font-bold text-white">React Router</h1>

        <div className="flex justify-between mt-6">
          <Link to="/React/PropsIntro" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            <span className="mr-2">❮</span> Previous
          </Link>

           <Link to="/React/Styling"className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Next <span className="ml-2">❯</span>
          </Link>
        </div>

        {/* What is React Router - after buttons */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4 mt-5">What is React Router</h2>
          <p>
            React Router is a standard library for routing in React applications. It enables the navigation between different components without reloading the entire page, creating a single-page application (SPA) experience. Using React Router, developers can define multiple routes and map them to specific components, allowing the UI to change dynamically based on the URL. It supports nested routes, dynamic parameters, navigation links, programmatic navigation, and more, making it an essential tool for building modern web applications with React.
          </p>
        </div>

        {/* How to Use */}
        <div className=" mt-9 bg-[#464859] text-white rounded-md">
          <h1 className="text-3xl font-bold mb-6">How to use React Router</h1>

          {/* Step 1 */}
          <h2 className="text-2xl font-semibold mb-2">Step 1: Install React Router</h2>
          <CopyableCodeBlock code={`npm install react-router-dom`} />

          {/* Note Box after Step 1 */}
          <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-6">
            <p className="font-semibold">Note:</p>
            <p>This tutorial uses React Router v6.</p>
            <p>
              If you're upgrading from v5, you can use the <code>@latest</code> flag:
            </p>
            <div className="bg-gray-900 text-green-400 font-mono p-2 rounded inline-block mt-2">
              npm i -D react-router-dom@latest
            </div>
          </div>

          <p className="mb-6 text-[16px] leading-[24px]" style={{ fontFamily: "'Afacad', sans-serif" }}>
            First, you need to install the <code>react-router-dom</code> package using npm. This package allows you to add routing in your React app.
          </p>

          {/* Step 2 */}
          <h2 className="text-2xl font-semibold mb-2">Step 2: Set up Router in App.js</h2>
          <CopyableCodeBlock
            code={`// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}`}
          />
          <p className="mb-6 text-[16px] leading-[24px]" style={{ fontFamily: "'Afacad', sans-serif" }}>
            We wrap our entire app with <code>BrowserRouter</code>. Inside it, we use the <code>Routes</code> component to define each <code>Route</code>.
          </p>

          {/* Step 3 */}
          <h2 className="text-2xl font-semibold mb-2">Step 3: Create Components for Each Route</h2>
          <CopyableCodeBlock
            code={`// Home.js
function Home() {
  return <h2>Welcome to the Home Page</h2>;
}

// About.js
function About() {
  return <h2>About Us</h2>;
}`}
          />
          <p className="mb-6 text-[16px] leading-[24px]" style={{ fontFamily: "'Afacad', sans-serif" }}>
            These components will be rendered when user navigates to their corresponding route paths.
          </p>

          {/* Step 4 */}
          <h2 className="text-2xl font-semibold mb-2">Step 4: Add Navigation Using NavLink</h2>
          <CopyableCodeBlock
            code={`// Navbar.js
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ background: '#333', padding: '10px' }}>
      <NavLink to="/" style={{ color: 'white', marginRight: '10px' }}>
        Home
      </NavLink>
      <NavLink to="/about" style={{ color: 'white' }}>
        About
      </NavLink>
    </nav>
  );
}`}
          />
          <p className="mb-4 text-[16px] leading-[24px]" style={{ fontFamily: "'Afacad', sans-serif" }}>
            <code>NavLink</code> allows navigation between routes without page reload. It highlights the active link by default.
          </p>

          <p className="text-[15px] leading-[22px] italic text-gray-200" style={{ fontFamily: "'Afacad', sans-serif" }}>
            💡 Tip: Add this <code>Navbar</code> at the top of your layout inside <code>App.js</code> so it's visible on every page.
          </p>
        </div>

        
        <div className="flex justify-between mt-6">
          <Link to="/React/PropsIntro" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            <span className="mr-2">❮</span> Previous
          </Link>

           <Link to="/React/Styling"className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Next <span className="ml-2">❯</span>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ReactRouter;
