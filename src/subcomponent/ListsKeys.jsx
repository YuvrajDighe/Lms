import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ReactListsAndKeysPage = () => {
  const [copyMessage, setCopyMessage] = useState("");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyMessage("Copied!");
      setTimeout(() => setCopyMessage(""), 2000);
    });
  };

  const listCode = `const fruits = ['Apple', 'Banana', 'Mango'];

const listItems = fruits.map((fruit) => <li>{fruit}</li>);

function FruitList() {
  return <ul>{listItems}</ul>;
}`;

  const keyCode = `function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: 'Ford' },
    { id: 2, brand: 'BMW' },
    { id: 3, brand: 'Audi' }
  ];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </>
  );
}`;

  return (
    <div className="min-h-screen p-10 bg-[#464859] text-white font-sans">
      {/* Page Title */}
      <h1 className="text-4xl font-bold mb-4">Lists and Keys</h1>

      {/* Top Navigation Buttons */}
      <div className="flex justify-between items-center mb-6">
        <Link
          to="/React/ConditionalRendering"
          className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
        >
          <ChevronLeft className="mr-2" size={18} />
          Previous
        </Link>

        <Link
          to="/React/Froms"
          className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
        >
          Next
          <ChevronRight className="ml-2" size={18} />
        </Link>
      </div>

      {/* Lists Explanation */}
      <h2 className="text-2xl font-bold mb-4">What is React Lists</h2>
     <p className="mb-2">
  Lists are used to display in an ordered form and mainly used to display menus on website.
  The <code>map()</code> function is used to traverse the list.
  Include the new list <code>{`<ul><li>`}</code> elements and render it to DOM.
</p>


      {/* List Code Box */}
      <div className="bg-black rounded-md p-4 mb-6 shadow relative">
        <h2 className="text-2xl font-semibold mb-2 text-white">Example:</h2>
        <p className="mb-2 text-sm text-white">Let's render a fruit list:</p>
        <button
          onClick={() => copyToClipboard(listCode)}
          className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white text-xs px-2 py-1 rounded"
        >
          Copy
        </button>
        <pre className="text-sm text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
          {listCode}
        </pre>
      </div>

      {/* Keys Explanation */}
      <h2 className="text-2xl font-bold mb-4">What is React Keys</h2>
      <p className="mb-2">
      A key is unique identifier. In React, it is used to identify which items have changed, updated or deleted from the lists. It is useful when we dynamically create component or when the user edit the Lists.
It also helps to determine which component in a collection need to be rendered instead of re-rendering the entire set of components every time.
      </p>
      <p className="mb-2">
        Keys need to be unique to each sibling. But they can be duplicated
        globally.
      </p>

      {/* Keys Code Box */}
      <div className="bg-black rounded-md p-4 mb-6 shadow relative">
        <h2 className="text-2xl font-semibold mb-2 text-white">Example:</h2>
        <p className="mb-2 text-sm text-white">
          Let's use keys with a car list:
        </p>
        <button
          onClick={() => copyToClipboard(keyCode)}
          className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white text-xs px-2 py-1 rounded"
        >
          Copy
        </button>
        <pre className="text-sm overflow-auto whitespace-pre-wrap bg-black text-white p-4 rounded">
          {keyCode}
        </pre>
      </div>

      {/* Bottom Navigation Buttons */}
      <div className="flex justify-between items-center mt-8">
        <Link
          to="/React/ConditionalRendering"
          className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
        >
          <ChevronLeft className="mr-2" size={18} />
          Previous
        </Link>

        <Link
          to="/React/Froms"
          className="flex items-center bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-2 rounded"
        >
          Next
          <ChevronRight className="ml-2" size={18} />
        </Link>
      </div>

      {/* Copy Message Toast */}
      {copyMessage && (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow">
          {copyMessage}
        </div>
      )}
    </div>
  );
};

export default ReactListsAndKeysPage;
