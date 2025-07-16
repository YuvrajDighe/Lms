import React from "react";
import { Link } from "react-router-dom";

function Scroll() {
  return (
    <div className="p-9 bg-[#464859] text-white min-h-screen overflow-y-auto">
      <h1 className="text-4xl font-bold mb-4">onScroll Event in React</h1>

      {/* Navigation */}
         <div className="flex justify-between mt-6">
        <Link
          to="/React/Blur"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/Focus"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
         next <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* What is onScroll */}
      <section className="mb-6 mt-10">
        <h2 className="text-xl font-semibold mb-2">📌 What is onScroll Event?</h2>
        <p>
          The <span className="text-red-500 font-bold">onScroll</span> event in React is triggered when an element is scrolled. It's useful for detecting scroll position, lazy loading content, triggering animations, or infinite scrolling.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🛠️ Syntax</h2>
        <pre className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 rounded text-sm overflow-auto">
{`<div onScroll={handleScroll} style={{ overflowY: 'scroll', height: '200px' }}>
  {/* Content here */}
</div>`}
        </pre>
      </section>

      {/* When to use */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">✅ When to Use</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Implementing infinite scroll</li>
          <li>Triggering animations based on scroll position</li>
          <li>Loading content dynamically as user scrolls</li>
          <li>Showing scroll-to-top buttons</li>
        </ul>
      </section>

      {/* Importance */}
      <div className="text-white mb-6">
        <h2 className="text-xl font-semibold mb-2">⭐ Importance of onScroll Event</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Improves UX with dynamic content loading</li>
          <li>Enables performance optimizations like lazy loading</li>
          <li>Essential for responsive single-page applications</li>
          <li>Helps track user activity and behavior on long pages</li>
        </ul>
      </div>

      {/* Basic Example */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">⚙️ Basic Example</h2>
        <pre className="bg-black p-4 rounded text-sm overflow-auto">
{`function ScrollExample() {
  const handleScroll = (e) => {
    console.log("Scrolled to:", e.target.scrollTop);
  };

  return (
    <div
      onScroll={handleScroll}
      style={{ height: "200px", overflowY: "scroll", background: "#333" }}
    >
      <div style={{ height: "800px", padding: "1rem", color: "white" }}>
        Scroll this box to trigger onScroll event.
      </div>
    </div>
  );
}`}
        </pre>
      </section>

      {/* Arrow vs Named Function */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">➡️ Arrow Function vs Named Function</h2>
        <p>Use named functions for larger logic blocks and cleaner components.</p>
        <pre className="bg-black p-4 rounded text-sm overflow-auto mt-2">
{`// Inline arrow function
<div onScroll={(e) => console.log(e.target.scrollTop)} />

// Named function
function handleScroll(e) {
  console.log(e.target.scrollTop);
}
<div onScroll={handleScroll} />`}
        </pre>
      </section>

      {/* Best Practices */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">💡 Best Practices</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Throttle or debounce scroll handlers for performance</li>
          <li>Avoid unnecessary re-renders during scroll</li>
          <li>Use CSS `overflow` wisely to enable scroll detection</li>
          <li>Use `window.addEventListener` for full-page scroll if needed</li>
        </ul>
      </section>

      {/* Real-World Use Cases */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">🎯 Real-World Use Cases</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Infinite scrolling in social feeds</li>
          <li>Loading more items on scroll in product lists</li>
          <li>Scroll-based animations and parallax effects</li>
          <li>Analytics and tracking how far users scroll</li>
        </ul>
      </section>

      {/* Navigation Bottom */}
      <div className="flex justify-between mt-6">
        <Link
          to="/React/Blur"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/Focus"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
         next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default Scroll;
