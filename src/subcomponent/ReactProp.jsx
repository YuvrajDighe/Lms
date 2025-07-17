import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';



export function ReactProp() {

    const differences = [
    {
      feature: "Definition",
      props: "Props are read-only data passed from parent to child component",
      state: "State is data owned by a component, which can change over time"
    },
    {
      feature: "Mutability",
      props: "Immutable (cannot be changed)",
      state: "Mutable (can be updated)"
    },
    {
      feature: "Usage",
      props: "Used to pass data to child components",
      state: "Used to store and manage local data"
    },
    {
      feature: "Controlled by",
      props: "Parent component",
      state: "Component itself"
    },
    {
      feature: "Example",
      props: `<Car brand="Ford" />`,
      state: `const [brand, setBrand] = useState("Ford")`
    }
  ];
  return (
    <>
      <div className="flex-1 p-6 text-white overflow-auto " style={{ backgroundColor: "#464859",minHeight:"100vh"}}>
        <h1 className="text-3xl font-bold">React Props</h1><br />
        <div className="flex justify-between mb-6">
          <Link to="/React/Hooks" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center">
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </Link>
          <Link to="/React/ConditionalRendering" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center">
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>

        <div className="border-b-2 border"></div>

        <p className="mt-4 text-lg">
          Props are arguments passed into React components.Props are passed to components via HTML attributes.
        </p>
        <div className='bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800
  mt-5 p-6 h-20 text-xl'>
          <h1 className='text-stone-600'><span className='text-red-400'>Props  </span> stands for properties.</h1>
        </div>
        <h1 className='text-3xl mt-5'>React Props</h1>
         <p className="mt-4 text-lg">
          Props is a special keyword in React that stands for properties,<br /> and it's used for passing data from one component to another. 
        </p>
        <div>
          <h2 className="text-3xl  text-white mb-4 mt-5">what is props</h2>
          <p className='text-lg'>In React, props (short for "properties") are a mechanism for passing data from a parent component to a child component. They are essentially arguments or inputs that a component receives, allowing it to be dynamic and reusable. </p>
        </div>

         <h1 className='text-3xl mt-6'>Pass Data</h1>
         <p className="mt-4 text-lg">
        Props are also how you pass data from one component to another, as parameters.
        </p>

     <div className=" mt-6">
        <h1 className="text-2xl font-bold mb-4">Example</h1>
        <p className="mb-4 text-lg">Add a "brand" attribute to the <span className='text-red-400'>"App"</span>  element:</p>
     <pre className=" text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
{`
// Parent Component

import React from 'react';
import Car from './Car';
function App() {
  return (
    <div>
      <Car PassData="Toyota Fortuner"/>
    </div>
  );
}
export default App;

`}
</pre>
</div>

 <p className="mt-6 text-lg ">
        If you have a variable to send, and not a string as in the example above, you just put the variable name inside curly brackets:
</p>
 <div className='mt-6'>
        <h1 className="text-2xl font-bold mb-4">Example</h1>
        <p className="mb-4 text-lg">Create a variable named<span className='text-red-400 '> carName </span>  and send it to the<span className='text-red-400 '> "Car" </span> component:</p>
     <pre className=" text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
{`
//Child Component

import React from 'react'
function Car(props) {
  return (
    <>
    <h1>My Car Name: {props.PassData}</h1>
    </>
  )
}

export default Car

`}
</pre>
</div>

<div className='bg-yellow-100 mt-5 p-6 h-20 text-xl'>
          <h1 className='text-stone-600'><span className='font-bold'>Note:</span> React Props are read-only! You will get an error if you try to change their value.</h1>
        </div>

  <h1 className='text-3xl mt-6'>State and props </h1>
         <p className="mt-4 text-lg">
State is data managed within a component, that can change over time and cause the component to re-render. 
        </p>
         <div className='mt-6'>
        <h1 className="text-2xl font-bold mb-4">Example</h1>
        <p className="mb-4 text-lg"><span className='text-red-400 '> State </span> and <span className='text-red-400 '> Props </span>Example</p>
     <pre className=" text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
{`
// Parent Component and Child Component

import React, { useState } from 'react';

function Car(props) {
  return <h2>I am a {props.brand}!</h2>;
}

function App() {
  const [brand, setBrand] = useState("Ford");

  return (
    <div>
      <h1>My Car</h1>
      <Car brand={brand} />
      <button onClick={() => setBrand("BMW")}>Change Car</button>
    </div>
  );
}

export default App;


`}
</pre>
</div>

  <div >
    <h1 className='text-3xl mt-6'>Props vs State in React </h1>
      <table className="w-full text-sm text-left text-white border border-white mt-6">
  <thead className="bg-green-600 text-white">
    <tr>
      <th className="px-4 py-2 border border-white">Feature</th>
      <th className="px-4 py-2 border border-white">Props</th>
      <th className="px-4 py-2 border border-white">State</th>
    </tr>
  </thead>
  <tbody>
    {differences.map((row, index) => (
      <tr
        key={index}
        className={
          index % 2 === 0
            ? "bg-gray-700 hover:bg-gray-600"
            : "bg-gray-800 hover:bg-gray-700"
        }
      >
        <td className="px-4 py-2 border border-white font-semibold">{row.feature}</td>
        <td className="px-4 py-2 border border-white">{row.props}</td>
        <td className="px-4 py-2 border border-white">{row.state}</td>
      </tr>
    ))}
  </tbody>
</table>

    </div>
    
    <div className="flex justify-between mb-6">
          <Link to="/React/Hooks" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center">
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </Link>
          <Link to="/React/ConditionalRendering" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center">
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
      
    </>
  );
}

export default ReactProp;