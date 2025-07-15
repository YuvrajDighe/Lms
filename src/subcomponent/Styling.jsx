import React from 'react';

function StylingGuide() {
  return (
    <div className="w-full p-6 font-sans min-h-screen bg-[#464859] text-white">
      {/* Top Navigation */}
      <div className="flex justify-between mb-8">
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors">
          <span className="mr-2">❮</span> Previous
        </button>
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors">
          Next <span className="ml-2">❯</span>
        </button>
      </div>

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">React Styling Guide</h1>
        <p className="text-gray-300">Learn different ways to style your React components</p>
      </header>

      {/* Inline CSS Section */}
      <section className="mb-10 bg-gray-700 rounded-lg p-6 border-l-4 border-blue-500">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full mr-3">1</span>
          Inline CSS
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-300 mb-2">Description</h3>
            <p className="text-gray-200">Styles applied directly to elements using JavaScript objects with camelCase property names.</p>
          </div>

          <div>
            <h3 className="font-medium text-gray-300 mb-2">When to Use</h3>
            <ul className="list-disc pl-5 text-gray-200 space-y-1">
              <li>Quick prototyping</li>
              <li>Dynamic styles based on state</li>
              <li>Single-use styles</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-md p-4">
            <h4 className="text-gray-300 mb-2 font-mono text-sm">Example Code</h4>
            <pre className="text-gray-100 text-sm overflow-x-auto">
              {`<div style={{
  color: 'white',
  backgroundColor: '#3b82f6',
  padding: '1rem',
  borderRadius: '0.5rem'
}}>
  Inline styled element
</div>`}
            </pre>
          </div>

          <div className="p-4 text-white rounded-md" style={{
            backgroundColor: '#3b82f6',
            padding: '1rem',
            borderRadius: '0.5rem'
          }}>
            Live Inline CSS Example
          </div>
        </div>
      </section>

      {/* CSS Modules Section */}
      <section className="mb-10 bg-gray-700 rounded-lg p-6 border-l-4 border-green-500">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full mr-3">2</span>
          CSS Modules
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-300 mb-2">Description</h3>
            <p className="text-gray-200">Locally scoped CSS files that automatically generate unique class names.</p>
          </div>

          <div>
            <h3 className="font-medium text-gray-300 mb-2">When to Use</h3>
            <ul className="list-disc pl-5 text-gray-200 space-y-1">
              <li>Traditional CSS with scoping</li>
              <li>Team projects needing style isolation</li>
              <li>When you prefer writing regular CSS</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-md p-4">
            <h4 className="text-gray-300 mb-2 font-mono text-sm">Example Code</h4>
            <div className="text-gray-100 text-sm space-y-4">
              <div>
                <p className="font-mono text-gray-400">/* styles.module.css */</p>
                <pre className="overflow-x-auto mt-1">
{`.card {
  background: white;
  border-radius: 0.5rem;
  padding: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

.card:hover {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}`}</pre>
              </div>
              <div>
                <p className="font-mono text-gray-400">// Component.js</p>
                <pre className="overflow-x-auto mt-1">
{`import styles from './styles.module.css';

function Component() {
  return <div className={styles.card}>Content</div>;
}`}</pre>
              </div>
            </div>
          </div>

          <div className="bg-gray-600 p-4 rounded-md hover:shadow-md transition-shadow">
            CSS Modules Card Example (conceptual)
          </div>
        </div>
      </section>

      {/* Styled Components Section */}
      <section className="mb-10 bg-gray-700 rounded-lg p-6 border-l-4 border-purple-500">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full mr-3">3</span>
          Styled Components
        </h2>

        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-300 mb-2">Description</h3>
            <p className="text-gray-200">CSS-in-JS library that lets you write actual CSS in your JavaScript.</p>
          </div>

          <div>
            <h3 className="font-medium text-gray-300 mb-2">When to Use</h3>
            <ul className="list-disc pl-5 text-gray-200 space-y-1">
              <li>Dynamic styling with props</li>
              <li>Theming support needed</li>
              <li>When you want to colocate styles</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-md p-4">
            <h4 className="text-gray-300 mb-2 font-mono text-sm">Example Code</h4>
            <pre className="text-gray-100 text-sm overflow-x-auto">
{`import styled from 'styled-components';

const Button = styled.button\`
  background: \${props => props.primary ? '#4f46e5' : 'white'};
  color: \${props => props.primary ? 'white' : '#4f46e5'};
  padding: 0.75rem 1.5rem;
  border: 2px solid #4f46e5;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
\`;

// Usage:
<Button primary>Primary Button</Button>
<Button>Secondary Button</Button>`}
            </pre>
          </div>

          <div className="flex gap-4">
            <button className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-all hover:-translate-y-0.5 shadow hover:shadow-md">
              Primary Button (Concept)
            </button>
            <button className="px-6 py-2 bg-white text-indigo-600 border-2 border-indigo-600 rounded-md hover:bg-indigo-50 transition-all hover:-translate-y-0.5 shadow hover:shadow-md">
              Secondary Button (Concept)
            </button>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="mb-10 bg-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-6">Comparison Table</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-600">
            <thead className="bg-gray-600">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Scoping</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Dynamic Styles</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Performance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-600">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Inline CSS</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">Component</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">Excellent</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">Good</td>
              </tr>
              <tr className="bg-gray-600">
                <td className="px-6 py-4 whitespace-nowrap">CSS Modules</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">Component</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">Limited</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">Excellent</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Styled Components</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">Component</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">Excellent</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-300">Good (runtime overhead)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="flex justify-between mt-8">
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors">
          <span className="mr-2">❮</span> Previous
        </button>
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors">
          Next <span className="ml-2">❯</span>
        </button>
      </div>
    </div>
  );
}

export default StylingGuide;
