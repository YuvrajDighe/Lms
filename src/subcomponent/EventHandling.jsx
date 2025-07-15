import React, { useState } from "react";
import { Link } from "react-router-dom"
function EventHandling() {
  const [copied, setCopied] = useState(false);

  const code = `class ClickExample extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    alert('Button Clicked!');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click Me
      </button>
    );
  }
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <div>
        <div className=" text-white p-6 " style={{ backgroundColor: "#464859" }}>
          <h1 className="text-[30px] font-bold mb-4">Handling Events in JSX</h1>

          <div className="flex justify-between mt-6">
            <Link to="/React/Hooks" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              <span className="mr-2">❮</span> Previous
            </Link>

            <Link to="/React/ConditionalRendering" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Next <span className="ml-2">❯</span>
            </Link>
          </div>

          <p className="text-[18px] mb-2 mt-5">
            ✅ In React, we handle events similar to HTML but with **camelCase naming** and passing a function as the event handler.
          </p>

          <div>

            <h1 className="text-[25px] mt-5">What is Event Handling</h1>

            <p className="text-[18px] mt-2 ml-2">
              • Event handling means performing some action when the user interacts with the UI.
            </p>

            <p className="text-[18px] mt-2 ml-2">
              • For example: clicking a button, typing in an input box, submitting a form, or hovering the mouse.
            </p>

            <p className="text-[18px] mt-2 ml-2">
              • In React, events are handled using camelCase syntax and functions as handlers.
            </p>
          </div>

          <h2 className="text-[25px] font-semibold mt-5 mb-2">Type Events:</h2>

          <ul className="list-disc pl-6">
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onClick:</span> Used when an element is clicked.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onChange:</span> Used when value changes, e.g. in input fields.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onSubmit:</span> Triggered when a form is submitted.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onFocus:</span> Triggered when an element gains focus.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onBlur:</span> Triggered when an element loses focus.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onMouseEnter:</span> Triggered when the mouse pointer enters the element.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onMouseLeave:</span> Triggered when the mouse pointer leaves the element.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onKeyDown:</span> Triggered when a key is pressed down.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onKeyUp:</span> Triggered when a key is released.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onInput:</span> Triggered every time the input value changes.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onDoubleClick:</span> Triggered when an element is double-clicked.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onDrag:</span> Triggered when an element is dragged.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onDrop:</span> Triggered when a dragged item is dropped.
            </li>
            <li className="text-[18px] mb-2">
              <span className="font-semibold">onScroll:</span> Triggered when the user scrolls an element.
            </li>
          </ul>


          <h2 className="text-[25px] font-semibold mt-5 mb-2">this Binding in Class Components</h2>

          <p className="text-[18px] mb-2">
            ✅ In Class Components, <code>this</code> refers to the class object.
          </p>
          <p className="text-[18px] mb-2">
            ✅ We need to **bind event handler methods** to <code>this</code> in the constructor or use arrow functions to avoid undefined errors.
          </p>

          <div className="bg-black p-4 rounded mt-4 relative">
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 rounded text-sm"
            >
              {copied ? "Copied!" : "Copy"}
            </button>

            <pre>
              <code>{code}</code>
            </pre>
          </div>

          <p className="text-[18px] mt-4">
            ✅ In the above example, <code>this.handleClick</code> is bound in the constructor to use <code>this</code> inside the method.
          </p>

          <div className="flex justify-between mt-6">
            <Link to="/React/Hooks" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              <span className="mr-2">❮</span> Previous
            </Link>

            <Link to="/React/ConditionalRendering" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Next <span className="ml-2">❯</span>
            </Link>
          </div>



        </div>

      </div>
    </>
  );
}
export default EventHandling;
