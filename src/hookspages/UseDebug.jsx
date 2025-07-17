import React, { useSyncExternalStore, useDebugValue } from 'react';
import { Link } from "react-router-dom";
// Custom Hook: useOnlineStatus
function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );

  useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

// Main Component
function Debug() {
  const isOnline = useOnlineStatus();

  return (
    <div className="w-full p-6 font-sans min-h-screen bg-[#464859] text-white">
      {/* Top Navigation */}
      

      {/* Header */}
      <header className="mb-10">
        <h1 className="text-4xl font-bold mb-2">useDebugValue Hook</h1>
        <p className="text-gray-300">
          Add labels to custom hooks in React DevTools for better debugging
        </p>
      </header>
      <div className="flex justify-between mb-8">
         <Link
          to="/React/Context"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          <span className="mr-2">❮</span> Previous
        </Link>
        <Link
          to="/React/Layout"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Next <span className="ml-2">❯</span>
        </Link>
      </div>

      {/* Overview Section */}
      <section className="mb-10 bg-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <div className="space-y-4">
          <p className="text-gray-200">
            <code>useDebugValue</code> is a React Hook that lets you add a label to a custom Hook in React DevTools.
          </p>
          <div className="bg-blue-900/30 border-l-4 border-blue-500 p-4">
            <h3 className="font-medium text-blue-300 mb-2">When to use:</h3>
            <ul className="list-disc pl-5 text-gray-200 space-y-1">
              <li>Debugging complex custom hooks</li>
              <li>Shared library hooks</li>
              <li>Hooks with non-primitive return values</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Reference Section */}
      <section className="mb-10 bg-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full mr-3">1</span>
          Reference
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium text-gray-300 mb-2">Syntax</h3>
            <div className="bg-gray-800 rounded-md p-4">
              <pre className="text-gray-100 text-sm overflow-x-auto">
                {`useDebugValue(value, format?)`}
              </pre>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-300 mb-2">Parameters</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-600">
                <thead className="bg-gray-600">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-200">Parameter</th>
                    <th className="px-4 py-3 text-left text-sm font-medium text-gray-200">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-600 bg-gray-700">
                  <tr>
                    <td className="px-4 py-3 font-mono text-sm text-blue-300">value</td>
                    <td className="px-4 py-3 text-gray-200">The value you want to display in React DevTools</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-sm text-blue-300">format <span className="text-gray-400">(optional)</span></td>
                    <td className="px-4 py-3 text-gray-200">Formatting function for display</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-300 mb-2">Returns</h3>
            <p className="text-gray-200">
              <code>useDebugValue</code> does not return anything.
            </p>
          </div>
        </div>
      </section>

      {/* Usage Section */}
      <section className="mb-10 bg-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-green-500 rounded-full mr-3">2</span>
          Usage
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="font-medium text-gray-300 mb-3">Adding a label to a custom Hook</h3>
            <p className="text-gray-200 mb-4">
              Use <code>useDebugValue</code> to display readable values inside DevTools.
            </p>
            <div className="bg-gray-800 rounded-md p-4 mb-4">
              <pre className="text-gray-100 text-sm overflow-x-auto">
{`import { useDebugValue } from 'react';

function useOnlineStatus() {
  // ...
  useDebugValue(isOnline ? 'Online' : 'Offline');
  // ...
}`}
              </pre>
            </div>
            <div className="bg-gray-600 p-4 rounded-md border-l-4 border-green-500">
              <h4 className="font-medium text-gray-300 mb-2">Live Example</h4>
              <p className="text-gray-200">
                Current online status:{" "}
                <span className="font-bold text-green-400">
                  {isOnline ? "Online" : "Offline"}
                </span>
              </p>
              <p className="text-gray-400 text-sm mt-2">
                (Check React DevTools to see the debug value)
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-300 mb-3">Deferring formatting</h3>
            <p className="text-gray-200 mb-4">
              For expensive operations, you can pass a formatter function:
            </p>
            <div className="bg-gray-800 rounded-md p-4">
              <pre className="text-gray-100 text-sm overflow-x-auto">
{`useDebugValue(date, date => date.toDateString());`}
              </pre>
            </div>
            <div className="mt-4 p-4 bg-yellow-900/20 border-l-4 border-yellow-500">
              <h4 className="font-medium text-yellow-300 mb-2">Note</h4>
              <p className="text-gray-200">
                Only use <code>useDebugValue</code> in hooks where it adds value, like:
              </p>
              <ul className="list-disc pl-5 mt-2 text-gray-200 space-y-1">
                <li>Shared hooks</li>
                <li>Complex internal logic</li>
                <li>Hard-to-track behavior</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Complete Example */}
      <section className="mb-10 bg-gray-700 rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 flex items-center">
          <span className="inline-flex items-center justify-center w-8 h-8 bg-purple-500 rounded-full mr-3">3</span>
          Complete Example
        </h2>
        <div className="space-y-4">
          <p className="text-gray-200">
            Here's the full <code>useOnlineStatus</code> hook with debug label:
          </p>
          <div className="bg-gray-800 rounded-md p-4">
            <div className="text-gray-400 text-sm mb-2">useOnlineStatus.js</div>
            <pre className="text-gray-100 text-sm overflow-x-auto">
{`import { useSyncExternalStore, useDebugValue } from 'react';

export function useOnlineStatus() {
  const isOnline = useSyncExternalStore(
    subscribe,
    () => navigator.onLine,
    () => true
  );
  
  useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline;
}

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}`}
            </pre>
          </div>

          <div className="bg-gray-600 p-4 rounded-md">
            <h4 className="font-medium text-gray-300 mb-2">How it looks in DevTools:</h4>
            <div className="bg-black p-4 rounded font-mono text-sm">
              <div className="text-green-400">Hooks</div>
              <div className="ml-4 text-gray-300">
                <div>► State: <span className="text-blue-300">true</span></div>
                <div>► OnlineStatus: <span className="text-yellow-300">"Online"</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Navigation */}
      <div className="flex justify-between mt-8">
         <Link
          to="/React/Context"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          <span className="mr-2">❮</span> Previous
        </Link>
        <Link
          to="/React/Layout"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition-colors"
        >
          Next <span className="ml-2">❯</span>
        </Link>
      </div>
    </div>
  );
}

export default Debug;
