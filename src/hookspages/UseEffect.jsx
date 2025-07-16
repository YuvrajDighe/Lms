 import React from 'react';
import { Link } from 'react-router-dom';

function Effect() {
  return (
    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
      <h1 className="text-4xl font-bold text-white">useEffect</h1>

      <div className="flex justify-between mt-6">
        <Link
          to="/React/Ref"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/Memo"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </Link>
      </div>

 <div >
                  <h2 className="text-2xl font-bold mb-4 mt-3">What is useEffect</h2>
            </div>
      
          <p className="mb-4 mt-2">
               {" "}
              <code className="text-red-500  bg-gray-200">useEffect </code> 
              is a React Hook that allows you to run side effects in function components.

<p className="mb-4 mt-5">
        . Side effects include: 
         </p>
         <p className="mb-4 mt-1">
        . Data fetching (API calls)</p>
        <p className="mb-4 mt-1">
        . Setting up subscriptions or event listeners</p>
        <p className="mb-4 mt-1">
        . DOM manipulation</p>
        <p className="mb-4 mt-1">
        . Cleanup logic</p>

        Timers {" "}
              <code className="text-red-500  bg-gray-200">(setTimeout, setInterval)
                </code>  
             </p>

              <div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
  <h1 className="text-2xl font-bold mb-4">Basic Syntax:</h1>
{`
Basic Syntax:

useEffect(() => {
  // side effect code
}, [dependencies]);
`}
</pre>
</div>  


<div className="rounded-xl mt-8">
  <h1 className="text-2xl font-bold text-white mb-4">Summary Table:</h1>
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-200 border border-gray-300">
      <thead className="bg-green-600 text-white">
        <tr>
          <th className="px-3 py-2 border border-gray-300">Dependency Array</th>
          <th className="px-3 py-2 border border-gray-300">When useEffect Runs</th>
        </tr>
      </thead>
      <tbody>
        {[
          [
            "[] (empty)",
            <span key="mount">
              Once after first render (like{" "}
              <code className="bg-gray-200 text-black px-1 rounded">componentDidMount</code>)
            </span>
          ],
          [
            "[someVar]",
            <span key="dep">
              When{" "}
              <code className="bg-gray-200 text-black px-1 rounded">someVar</code> changes
            </span>
          ],
          [
            "No dependency array",
            <span key="always">
              Runs on <code className=" bg-gray-200 text-black px-1 rounded">every render</code>
            </span>
          ]
        ].map((row, index) => (
          <tr
            key={index}
            className={
              index % 2 === 0
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-800 hover:bg-gray-700"
            }
          >
            {row.map((cell, idx) => (
              <td key={idx} className="px-3 py-2 border border-gray-300">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>


<div>
  <h1 className="text-2xl font-bold mb-4 mt-6 ">[1]. Run once on mount (fetch data):</h1>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
  <h1 className="text-2xl font-bold mb-4">1. Run once on mount (fetch data):</h1>
  <h1 className="text-2xl font-bold mb-4">Examples:</h1>
  
{`
useEffect(() => {
  fetchData();
}, []);
`}
</pre>
</div>  

<div>
  <h1 className="text-2xl font-bold mb-4 mt-6 ">Run Once (on mount)</h1>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
  
  <h1 className="text-2xl font-bold mb-4">Examples:</h1>
  
{`
useEffect(() => {
  console.log("Mounted");
}, []);
`}
</pre>
</div>  

<div>
  <h1 className="text-2xl font-bold mb-4 mt-3">[2]. Run when count changes:</h1>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
  <h1 className="text-2xl font-bold mb-4">Examples:</h1>
  
{`


useEffect(() => {
  console.log("Count changed:", count);
}, [count]);
`}
</pre>
</div> 

<div>
  <h1 className="text-2xl font-bold mb-4 mt-6 ">Run on State/Prop Change

</h1>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
  
  <h1 className="text-2xl font-bold mb-4">Examples:</h1>
  
{`
useEffect(() => {
  console.log("Count changed");
}, [count]);

`}
</pre>
</div>  

<div>
  <h1 className="text-2xl font-bold mb-4 mt-3">3. No dependency array — runs every render (❌ usually avoid):</h1>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
  
  <h1 className="text-2xl font-bold mb-4">Examples:</h1>
  
{`

useEffect(() => {
  console.log("Runs on every render");
});

`}
</pre>
</div> 

<div>
  <h1 className="text-2xl font-bold mb-4 mt-6 ">Cleanup (Unmount or Update)</h1>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
  
  <h1 className="text-2xl font-bold mb-4">Examples:</h1>
  
{`
useEffect(() => {
  const timer = setInterval(() => console.log("Tick"), 1000);
  return () => {
    clearInterval(timer);
  };
}, []);

`}
</pre>
</div>  

<div>
  <h1 className="text-2xl font-bold mb-4 mt-3">4. With cleanup function:

</h1>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
  
  <h1 className="text-2xl font-bold mb-4">Examples:</h1>
  
{`


useEffect(() => {
  const timer = setInterval(() => {
    console.log("Tick");
  }, 1000);

  return () => {
    clearInterval(timer); // cleanup on unmount
  };
}, []);

`}
</pre>
</div>  

<div>
  <h1 className="text-2xl font-bold mb-4 mt-6 ">Without Dependency (Every Render)</h1>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
  
  <h1 className="text-2xl font-bold mb-4">Examples:</h1>
  
{`
useEffect(() => {
  console.log("Runs every render");
});

`}
</pre>
</div>  



  {/* 📗 useEffect Use Case Table */}
<div className="rounded-xl mt-10 bg-[#2f3242] p-4">
  <h2 className="text-2xl font-bold text-white mb-4">Common useEffect Use Cases:</h2>
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-200 border border-gray-300">
      <thead className="bg-green-600 text-white">
        <tr>
          <th className="px-3 py-2 border border-gray-300">Use Case</th>
          <th className="px-3 py-2 border border-gray-300">
            How to use <code>useEffect</code>
          </th>
        </tr>
      </thead>
      <tbody>
        {[
          [
            "Fetch API Data",
            <code key="1" className="text-red-500 bg-black px-1 rounded">
              useEffect(() =&gt; &#123; fetch(...) &#125;, [])
            </code>
          ],
          [
            "Timer/Interval",
            <code key="2" className="text-red-500 bg-black px-1 rounded">
              useEffect(() =&gt; &#123; setInterval(...) &#125;, [])
            </code>
          ],
         [
            "Event Listeners",
            <span key="mount">
              addEventListener + cleanup{" "}
              <code className="bg-gray-200 text-black px-1 rounded">on unmount</code>)
            </span>
          ],
          
          [
            "LocalStorage access",
            <span key="">
              Save/load items using{" "}
              <code className="bg-gray-200 text-black px-1 rounded">localStorage</code>
            </span>
          ],
         
          [
            "Scroll Tracking",
            "Track scroll with addEventListener and clean up in return"
          ]
        ].map((row, index) => (
          <tr
            key={index}
            className={
              index % 2 === 0
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-800 hover:bg-gray-700"
            }
          >
            {row.map((cell, idx) => (
              <td key={idx} className="px-3 py-2 border border-gray-300">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>



<div className="flex justify-between mt-6">
        <Link
          to="/React/Ref"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          <span className="mr-2">❮</span> Previous
        </Link>

        <Link
          to="/React/Memo"
          className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded"
        >
          Next <span className="ml-2">❯</span>
        </Link>
      </div>

    </div>
  );
}

export default Effect;
