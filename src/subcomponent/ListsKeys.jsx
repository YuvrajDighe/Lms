import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

function Car(props) {
  return <li>I am a {props.brand}</li>;
}

function GarageList() {
  const cars = ["Ford", "BMW", "Audi"];
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Who lives in my garage?</h1>
      <ul className="list-disc ml-6 space-y-1 text-base">
        {cars.map((car, index) => (
          <Car key={index} brand={car} />
        ))}
      </ul>
    </div>
  );
}

function GarageKeys() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Who lives in my garage?</h1>
      <ul className="list-disc ml-6 space-y-1 text-base">
        {cars.map((car) => (
          <Car key={car.id} brand={car.brand} />
        ))}
      </ul>
    </div>
  );
}

const ReactListsAndKeysPage = () => {
  const [showListSplit, setShowListSplit] = useState(false);
  const [showKeySplit, setShowKeySplit] = useState(false);

  return (
    <div className="min-h-screen p-6 bg-[#464859] text-white font-sans">
      {/* --- Lists Section --- */}
      <h1 className="text-3xl font-bold mb-4">React Lists</h1>
      <p className="mb-2">
        In React, you will render lists with some type of loop.
      </p>
      <p className="mb-2">
        The JavaScript <span className="text-pink-400 font-mono">map()</span>{" "}
        array method is generally the preferred method.
      </p>
      <p className="mb-4">
        If you need a refresher on the{" "}
        <span className="text-pink-400 font-mono">map()</span> method, check
        out the ES6 section.
      </p>
       <div className="bg-yellow-200 text-yellow-800 p-3 rounded-md mb-4">
         If you need a refresher on the map() method, check out the ES6 section. 
      </div>

      {/* Code Box */}
      <div className="bg-gray-100 text-black border border-gray-300 rounded-md p-4 mb-6 shadow">
        <h2 className="text-lg font-semibold mb-2">Example:</h2>
        <p className="mb-2 text-sm">
          Let's render all of the cars from our garage:
        </p>
        <pre className="text-sm overflow-auto whitespace-pre-wrap bg-white border p-4 rounded">
{`function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}`}
        </pre>
        <button
          onClick={() => setShowListSplit(true)}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
        >
          Run Example »
        </button>
      </div>

      {/* --- Keys Section --- */}
      <h1 className="text-3xl font-bold mb-4">Keys</h1>
      <p className="mb-2">
        Keys allow React to keep track of elements. This way, if an item is
        updated or removed, only that item will be re-rendered instead of the
        entire list.
      </p>
      <p className="mb-2">
        Keys need to be unique to each sibling. But they can be duplicated
        globally.
      </p>
      <div className="bg-yellow-200 text-yellow-800 p-3 rounded-md mb-4">
        <strong>Generally</strong>, the key should be a unique ID assigned to
        each item. As a last resort, you can use the array index as a key.
      </div>
      <h2 className="text-xl font-semibold mb-2">Example:</h2>
      <p className="mb-2">Let's refactor our previous example to include keys:</p>
      <div className="bg-gray-100 text-black border border-gray-300 rounded-md p-4 mb-6 shadow">
        <pre className="text-sm overflow-auto whitespace-pre-wrap bg-white border p-4 rounded">
{`function Car(props) {
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
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}`}
        </pre>
        <button
          onClick={() => setShowKeySplit(true)}
          className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm"
        >
          Run Example »
        </button>
      </div>

      {/* Split Views */}
      {showListSplit && (
        <div className="fixed inset-0 bg-white text-black z-50 grid grid-cols-2">
          <div className="border-r p-6 overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Code</h2>
              <button
                onClick={() => setShowListSplit(false)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded flex items-center"
              >
                <X className="w-4 h-4 mr-1" /> Close
              </button>
            </div>
            <pre className="bg-gray-100 p-4 rounded text-sm border overflow-auto">
{`function Car(props) {
  return <li>I am a { props.brand }</li>;
}

function Garage() {
  const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Car brand={car} />)}
      </ul>
    </>
  );
}`}
            </pre>
          </div>
          <div className="p-6 overflow-auto">
            <h2 className="text-xl font-bold mb-4">Output</h2>
            <GarageList />
          </div>
        </div>
      )}

      {showKeySplit && (
        <div className="fixed inset-0 bg-white text-black z-50 grid grid-cols-2">
          <div className="border-r p-6 overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Code</h2>
              <button
                onClick={() => setShowKeySplit(false)}
                className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded flex items-center"
              >
                <X className="w-4 h-4 mr-1" /> Close
              </button>
            </div>
            <pre className="bg-gray-100 p-4 rounded text-sm border overflow-auto">
{`function Car(props) {
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
        {cars.map((car) => <Car key={car.id} brand={car.brand} />)}
      </ul>
    </>
  );
}`}
            </pre>
          </div>
          <div className="p-6 overflow-auto">
            <h2 className="text-xl font-bold mb-4">Output</h2>
            <GarageKeys />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReactListsAndKeysPage;
