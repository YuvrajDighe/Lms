import React from "react";

function ReactIntro() {
  return (
    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
      <div>
        <h1 className="text-4xl font-bold text-white">React Introduction</h1>
        <div className="flex justify-between mt-6">
          <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            <span className="mr-2">❮</span> Previous
          </button>

          <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
            Next <span className="ml-2">❯</span>
          </button>
        </div>

        {/* What is React */}
        <div className="rounded-xl mt-4">
          <h1 className="text-2xl font-bold text-white mb-4">What is React?</h1>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>React is a <span className="font-semibold">front-end JavaScript library</span>.</li>
            <li>It is mainly used to build <span className="font-semibold">user interfaces for single-page applications (SPA)</span>.</li>
            <li>Developed by <span className="font-semibold">Facebook in 2013</span>.</li>
            <li>Uses <span className="font-semibold">Component-based architecture</span> and <span className="font-semibold">Virtual DOM</span> for fast rendering.</li>
          </ul>
        </div>

        {/* Why use React */}
        <div className="rounded-xl mt-8">
          <h1 className="text-2xl font-bold text-white mb-4">Why use React?</h1>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>React is easy to learn and simple to use.</li>
            <li>It is component-based, so code can be reused easily.</li>
            <li>React uses Virtual DOM for fast and efficient rendering.</li>
            <li>It is great for building single-page applications (SPA).</li>
          </ul>
        </div>

        {/* Features of React */}
        <div className="rounded-xl mt-8">
          <h1 className="text-2xl font-bold text-white mb-4">Features of React</h1>
          <ul className="list-disc list-inside space-y-2 text-white">
            <li>Component-Based – UI is built using reusable components.</li>
            <li>Virtual DOM – Fast rendering using virtual DOM.</li>
            <li>One-Way Data Binding – Data flows in one direction for better control.</li>
            <li>JSX Syntax – Write HTML inside JavaScript easily.</li>
            <li>Fast & Efficient – Improves performance of web apps.</li>
          </ul>
        </div>

        {/* React vs Angular vs Vue Comparison */}
        <div className="rounded-xl mt-8">
  <h1 className="text-2xl font-bold text-white mb-4">React vs Angular vs Vue (Simple)</h1>
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-200 border border-gray-300">
      <thead className="bg-green-600 text-white">
        <tr>
          <th className="px-3 py-2 border border-gray-300">Feature</th>
          <th className="px-3 py-2 border border-gray-300">React</th>
          <th className="px-3 py-2 border border-gray-300">Angular</th>
          <th className="px-3 py-2 border border-gray-300">Vue</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Author", "Facebook", "Google", "Evan You"],
          ["Type", "Library", "Framework", "Framework"],
          ["Data Binding", "One-Way", "Two-Way", "Both"],
          ["Performance", "Fast", "Slow", "Fast"],
          ["Best For", "SPA & UI", "Large Apps", "Small/Medium SPA"],
          ["Learning", "Easy", "Hard", "Very Easy"],
        ].map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-800 hover:bg-gray-700"}>
            {row.map((cell, idx) => (
              <td key={idx} className="px-3 py-2 border border-gray-300">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


      </div>
    </div>
  );
}

export default ReactIntro;
