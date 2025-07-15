import React from "react";
import { Link } from "react-router-dom";

export function BundlersBuild() {
  return (
    <div className="p-9 bg-[#464859] text-white text-lg">
      <div className="max-w-4x4">
        <h1 className="text-[40px] font-bold mb-6">Bundlers & Build Tools</h1>

        {/* NAV BUTTONS */}
        <div className="flex justify-between mt-6 mb-10">
          <Link
            to="/React/Redux"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            <span className="mr-2">❮</span> Previous
          </Link>

          <Link
            to="/React/Miscellaneous"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Next <span className="ml-2">❯</span>
          </Link>
        </div>

        {/* 1. BUNDLERS */}
        <section className="mb-8 mt-5 pt-4">
          <h2 className="text-[30px] font-semibold mb-4">Bundlers & Build Tools</h2>
          <p className="mb-2">
            Bundlers and build tools are essential in modern React development to prepare code for the browser.
          </p>
          <p className="mb-2">
            <strong>Bundlers</strong> (like <code>Webpack</code>, <code>Vite</code>, <code>Parcel</code>) package all your files (JS, CSS, images) into optimized bundles.
          </p>
          <p className="mb-2">
            <strong>Build Tools</strong> like <code>Babel</code> and <code>ESLint</code> help in transpiling code, checking syntax, and improving performance during development.
          </p>
        </section>

        {/* 2. FOLDER STRUCTURE */}
        <section className="mb-8 mt-5 pt-4">
          <h2 className="text-[30px] font-semibold mb-4">Folder/File Structure</h2>
          <p className="mb-2">
            Organizing your project with a clear folder structure improves maintainability.
          </p>
          <p className="mb-2">Common structure includes:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><code>/components</code> - Reusable UI parts</li>
            <li><code>/pages</code> - Route-based files</li>
            <li><code>/assets</code> - Images, fonts, styles</li>
            <li><code>/utils</code> - Helper functions</li>
            <li><code>/services</code> - API calls</li>
          </ul>
        </section>

        {/* 3. COMPONENT REUSABILITY */}
        <section className="mb-8 mt-5 pt-4">
          <h2 className="text-[30px] font-semibold mb-4">Component Reusability</h2>
          <p className="mb-2">
            Creating reusable components helps in reducing code duplication.
          </p>
          <p className="mb-2">
            Pass different data to the same component using <code>props</code>.
          </p>
          <p className="mb-2">
            Example: A <code>&lt;Button /&gt;</code> component can be used across pages with different labels or styles.
          </p>
        </section>

        {/* 4. PERFORMANCE TIPS */}
        <section className="mb-8 mt-5 pt-4">
          <h2 className="text-[30px] font-semibold mb-4">Performance Tips</h2>
          <ul className="list-disc pl-5 space-y-1">
            <li>Use <code>React.memo</code> to prevent unnecessary re-renders</li>
            <li>Split code using <code>React.lazy</code> and <code>Suspense</code></li>
            <li>Keep components small and focused</li>
            <li>Avoid anonymous functions in render</li>
            <li>Minimize state and re-renders</li>
          </ul>
        </section>

        {/* 5. DEBUGGING */}
        <section className="mb-8 mt-5 pt-4">
          <h2 className="text-[30px] font-semibold mb-4">React Developer Tools for Debugging</h2>
          <p className="mb-2">
            React DevTools is a browser extension that allows you to inspect the React component tree.
          </p>
          <p className="mb-2">
            It helps in viewing component props, state, and performance insights.
          </p>
          <p>
            Download it from the Chrome Web Store or Firefox Add-ons site for better debugging experience.
          </p>
        </section>

        {/* BOTTOM NAV BUTTONS */}
        <div className="flex justify-between mt-6">
          <Link
            to="/React/Redux"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            <span className="mr-2">❮</span> Previous
          </Link>

          <Link
            to="/React/Miscellaneous"
            className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
          >
            Next <span className="ml-2">❯</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BundlersBuild;
