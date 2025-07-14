import { ChevronLeft, ChevronRight } from 'lucide-react';

export function ReactProp() {
  return (
    <>
      <div className="flex-1 p-6 text-white overflow-auto " style={{ backgroundColor: "#464859",minHeight:"100vh"}}>
        <h1 className=" font-bold">React Props</h1><br />
        <div className="flex justify-between mb-6">
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center">
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center">
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

        <div className="border-b-2 border"></div>

        <p className="mt-4 text-lg">
          Props are arguments passed into React components.
        </p>
        <p className="mt-2 text-lg">
          Props are passed to components via HTML attributes.
        </p>
        <div className='bg-yellow-100 mt-5 p-6 h-20 text-xl'>
          <h1 className='text-stone-600'><span className='text-red-400 bg-blue-100'>Props</span> brstands for properties.</h1>
        </div>
        <h1 className='text-3xl mt-5'>React Props</h1>
         <p className="mt-4 text-lg">
          Props is a special keyword in React that stands for properties,<br /> and it's used for passing data from one component to another. 
        </p>
        <div>
          <h2 className="text-2xl font-bold text-white mb-4 mt-5">what is props</h2>
          <p>In React, props (short for "properties") are a way to pass data from one component to another, typically from a parent component to a child component. They allow components to be dynamic and reusable by enabling them to receive and display different data based on the context in which they are used. Props are similar to parameters in functions and are passed to components as attributes in JSX. Inside the receiving component, props are accessed through the props object. For example, if a parent component passes a name prop to a child component, the child can access it using props.name. Importantly, props are read-only, meaning that the receiving component cannot modify the values it receives. This helps maintain a one-way data flow in React applications, making them easier to understand and debug.</p>
        </div>
      </div>
    </>
  );
}

export default ReactProp;
