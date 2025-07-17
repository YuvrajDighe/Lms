 import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

 function Callback() {
  return (
    <>
    <div className="flex-1 p-6 text-white overflow-auto " style={{ backgroundColor: "#464859",minHeight:"100vh"}}>
    <h1 className="text-3xl">React <span className="text-red-500">useCallback</span> Hook</h1>
    <div className="flex justify-between mt-6">
          <Link to="/React/Reducer" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center">
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </Link>
          <Link to="/React/Context" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center">
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
       <div className="border-b-1 border mt-6"></div>
       <p className='mt-6 text-lg'>The React <span className="text-red-500">useCallback Hook</span> returns a memoized callback function.</p>
    <h1 className='text-2xl mt-6'>what is usecallback in react?</h1>
    <p className='text-lg'><span className="text-red-500">useCallback</span> is a React Hook that returns a memoized version of a callback function. It is primarily used for performance optimization in React applications. </p>
     <div className='bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 mt-5 p-6 h-20 text-xl'>
          <h1 className='text-stone-600'>The useCallback Hook only runs when one of its dependencies update.</h1>
        </div>
         <h1 className='text-2xl mt-6'> Why Use It ?</h1>
    <p className='text-lg'><li>To optimize performance, especially in child components.</li> </p>
    <p className='text-lg'><li>To avoid re-creating functions unnecessarily, which may cause unwanted re-renders.</li> </p>
    <div className=" mt-6">
        <h1 className="text-2xl font-bold mb-4">Example</h1>
        <p className="mb-4 text-lg">Without useCallback  <span className='text-red-400'>(Problem)</span>  element:</p>
     <pre className=" text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
{`
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("Button clicked");
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Child onClick={handleClick} />
    </div>
  );
}

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Me</button>;
}

`}
</pre>
</div>

<div className="flex justify-between mt-6">
          <Link to="/React/Reducer" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center">
            <ChevronLeft className="w-4 h-4 mr-1" /> Previous
          </Link>
          <Link to="/React/Context" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded flex items-center">
            Next <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
    </div>
    </>
  );
}
export default Callback;