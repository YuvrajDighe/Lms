import React from "react";
import { Link } from "react-router-dom";
function Jsx() {
  return (
    <div className="p-9 bg-[#464859] text-white text-lg">
      <div className="max-w-4x4">
        <h1 className="text-4xl font-bold">React JSX</h1>


        <div className="flex justify-between mt-6">
          <Link to="/React/EnvironmentSetup" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded">
            <span className="mr-2">❮</span> Previous
          </Link>

          <Link to="/React/ReactComponent" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded">
            Next <span className="ml-2">❯</span>
          </Link>
        </div>


        <section className="mb-8  mt-5 pt-4">
          <h2 className="text-[30px] font-semibold mb-2">What is JSX?</h2>
          <p className="mb-1">
            <strong>JSX</strong> stands for <strong>JavaScript XML</strong>.
          </p>
          <p>It is a JavaScript syntax extenstion.</p>
          <p className="mb-1">
            It allows you to write HTML-like code directly inside JavaScript (React).
          </p>
          <p>JSX makes it easier to write and add HTML in React.</p>
          <p>
            It am XML or HTML line syntax used by react  Js. This syntax is proceed into javascript calls of React Framework.
          </p>
        </section>
<section className="mb-8 mt-5 pt-4 ">
  <h2 className="text-[30px] font-semibold mb-2">JSX vs HTML</h2>

  <p className="mb-1">
    <strong><u>Attribute Naming:</u></strong><br />
    <strong>JSX:</strong> We use <code>className</code>,     <code className="text-red-600 font-bold">htmlFor</code>, and <code>onClick</code> using camelCase.
  </p>
  <p className="mb-1">
    <strong>HTML:</strong> We use <code>class</code>, <code>for</code>, and <code>onclick</code> in lowercase.
  </p>

  <p className="mb-1">
    <strong><u>Used In:</u></strong><br />
    <strong>JSX:</strong> JSX is used inside JavaScript (React).<br />
    <strong>HTML:</strong> HTML is used as a standalone markup language for web pages.
  </p>

  <p className="mb-1">
    <strong><u>Self-Closing Tags:</u></strong><br />
    <strong>JSX:</strong> Self-closing tags must end with a <code>/</code>, like <code>&lt;img /&gt;</code>.
  </p>
  <p>
    <strong>HTML:</strong> Self-closing tags can be written without the slash, like <code>&lt;    <code className="text-red-600 font-bold">img</code>&gt;</code>.
  </p>
</section>


<section className="mb-8 mt-5 pt-4 font-sans text-base">
  <h2 className="text-[30px] font-semibold mb-2">JSX Syntax and Rules</h2>

  <p className="mb-2">
    JSX has specific syntax and rules you must follow when writing components in React:
  </p>

  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Only One Root Element:</strong> JSX expressions must return a single root element. You can wrap multiple elements in a 
      <code className="text-red-600 font-bold">&lt;div&gt;</code> or React Fragment <code className="text-red-600 font-bold">&lt;&gt;&lt;/&gt;</code>.
    </li>
    <li>
      <strong>Use Curly Braces for Expressions:</strong> JavaScript expressions (like variables or functions) must be inside 
      <code className="text-red-600 font-bold">{`{}`}</code> when used in JSX.
    </li>
    <li>
      <strong>Attribute Naming:</strong> Use <code className="text-red-600 font-bold">className</code> instead of 
      <code className="text-red-600 font-bold">class</code>, and 
      <code className="text-red-600 font-bold">htmlFor</code> instead of 
      <code className="text-red-600 font-bold">for</code>.
    </li>
    <li>
      <strong>Self-Closing Tags:</strong> Tags like 
      <code className="text-red-600 font-bold">img</code>, 
      <code className="text-red-600 font-bold">input</code>, etc., must be written as 
      <code className="text-red-600 font-bold">&lt;img /&gt;</code>.
    </li>
    <li>
      <strong>Wrap JSX in Parentheses:</strong> When returning JSX from functions (especially multi-line), wrap it in 
      <code className="text-red-600 font-bold">()</code> for better readability.
    </li>
  </ul>       
</section>



        <section className="mb-8">
          <h2 className="text-[30px] font-semibold mb-2">Coding with JSX</h2>

          <p className="mb-2">
            JSX allows us to write HTML elements in JavaScript and place them in the DOM
            without using <code className="text-red-600 font-bold">createElement()</code> and/or <code className="text-red-600 font-bold">appendChild()</code> methods.
          </p>

          <p className="mb-4">
            JSX converts HTML tags into React elements.
          </p>

          <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-4">
            You are not required to use JSX, but it makes writing React applications much easier and cleaner.
          </div>

          <p>
            Here are two examples: the first uses JSX, and the second uses regular JavaScript.
          </p>
        </section>

        {/* Example 1: JSX */}
        <section className="mb-8 bg-black-100 p-4 bg-black rounded-md">
          <h3 className="text-xl  font-semibold mb-2">Example: 1</h3>
          <p className="font-medium  mb-2">JSX:</p>
          <pre className="text-white p-3 rounded-md overflow-x-auto text-sm">
            {`const myElement = (
  <div>
    <h1>Welcome to React JSX Learning</h1>
    <p>This is a JSX example with multiple elements.</p>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`}
          </pre>
        </section>

        {/* Example 2: Without JSX */}
        <section className="mb-8 bg-black-100 p-4 bg-black rounded-md">
          <h3 className="text-xl font-semibold mb-2">Example: 2</h3>
          <p className="  mb-2">Without JSX:</p>
          <pre className="text-white p-3 rounded-md  overflow-x-auto text-sm">
            {`const myElement = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`}
          </pre>
        </section>

        {/* section:3 */}


        {/* Expressions in JSX */}
        <section >
          <p className="text-white ">
            As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.</p>

          <p >JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.  </p>


          <h2 className="text-[30px] text-white mb-2 mt-5">Expressions in JSX</h2>
          <p className="text-white mt-5 mb-2">
            With JSX you can write expressions inside curly braces <code className="text-red-500">{`{ }`}</code>.
          </p>
          <p className="text-white mb-4">
            The expression can be a variable, a property, or any other valid JavaScript expression. JSX will execute the expression and return the result:
          </p>
          <div className="mb-8 bg-black-100 p-4 bg-black rounded-md">
            <h3 className="text-xl font-semibold  mb-2">Example: 3</h3>
            <p className=" mb-2">Execute the expression <span className="text-red-500">5 + 5</span>:</p>
            <pre className="bg-black text-white p-3 rounded-md  overflow-x-auto text-sm">
              {`const myElement = <h1>React is {5 + 5} times better with JSX</h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`}
            </pre>
          </div>
        </section>


        <div>
          <h2 className="text-[35px] text-white mb-2 mt-5">Inserting a Large Block of HTML</h2>
          <p className="text-white mt-5 mb-2">
            To write HTML on multiple lines, put the HTML inside parentheses:
          </p>

          <div className="mb-8 bg-black-100 p-4 bg-black rounded-md">
            <h3 className="text-xl font-semibold  mb-2">Example: 4</h3>
            <p className=" mb-2">Create a list with three list items:</p>
            <pre className="bg-black text-white p-3 rounded-md overflow-x-auto text-sm">
              {`const myElement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`}
            </pre>
          </div>
        </div>


        <div>
          <h2 className="text-[35px] text-white mb-2 mt-5">One Top Level Element</h2>
          <p className="text-white mt-5 mb-2">
            The HTML code must be wrapped in ONE top level element.
          </p>
          <p className="text-white mt-5 mb-2">
            So if you like to write two paragraphs, you must put them inside a parent element, like a  <code className="text-red-600">div</code>  element.
          </p>

          <div className="mb-8 bg-black-100 p-4 bg-black rounded-md">
            <h3 className="text-xl font-semibold  mb-2">Example: 5</h3>
            <p className=" mb-2">Execute the expression <span className="text-red-500">5 + 5</span>:</p>
            <pre className="bg-black text-white p-3 rounded-md  overflow-x-auto text-sm">
              {`
const myElement = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`}
            </pre>
          </div>
        </div>



        <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-4">
          JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.
        </div>


        <section >
          <p >As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.</p>
          <p >JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.  </p>
          <h2 className="text-[30px] text-white mb-2 mt-5">Elements Must be Closed</h2>
          <p>JSX follows XML rules, and therefore HTML elements must be properly closed.</p>
          <div className="mb-8 bg-black-100 p-4 bg-black rounded-md mt-5">
            <h3 className="text-xl font-semibold  mb-2">Example: 6</h3>
            <p className="mb-2">Close empty elements with  <span className="text-red-500"> / </span>:</p>
            <pre className=" p-3 rounded-md  overflow-x-auto text-sm">
              {`const myElement = <input type="text" />;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myElement);`}

            </pre>
          </div>
        </section>




        <div className="flex justify-between mt-6">
          <Link to="/React/EnvironmentSetup" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded">
            <span className="mr-2">❮</span> Previous
          </Link>

          <Link to="/React/ReactComponent" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-1 px-2 rounded">
            Next <span className="ml-2">❯</span>
          </Link>
        </div>



      </div>
    </div>
  );
}

export default Jsx;
