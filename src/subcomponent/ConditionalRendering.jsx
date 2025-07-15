import React from 'react'
import { Link } from 'react-router-dom'

function ConditionalRendering() {
  return (

    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
<h1 className="text-4xl font-bold text-white"> ConditionalRendering</h1>

<div className="flex justify-between mt-6">
        <Link to="/React/EventHandling" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          <span className="mr-2">❮</span> Previous
        </Link>
 
        <Link to="/React/ListsKeys" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Next <span className="ml-2">❯</span>
        </Link>
      </div>

       <div className="  mt-8 rounded shadow-md ">
        <div >
              <h2 className="text-2xl font-bold mb-4">What is Conditional Rendering</h2>
        </div>
  
      <p className="mb-4">
        In React, Conditional Rendering means: Show different UI (HTML/JSX) based on conditions (true/false)
      </p>

    
      <h2 className="text-2xl font-bold mb-4"> ConditionalRendering Use:</h2>
      <>
<p className="mb-4">
        
        . To show login message if the user is logged in
      </p>
      <p className="mb-4">
        
        . To hide/show sections (like admin panel, messages, etc.).
      </p>
      <p className="mb-4">
        
        . To control what appears on screen dynamically.
      </p>
      
</>

     

      
    </div>
    

  <div>
    <h2 className="text-2xl font-bold mb-4 mt-5">if / else Condition </h2>
 <div >
              <h2 className="text-2xl font-bold mb-4">What is it?</h2>
        </div>

<p className="mb-4">
          Classic {" "}
          <code className="text-red-500">if...else</code> in JavaScript
        </p>
    <p className="mb-4">
         . Think of:   {" "}
          <code className="text-red-500"> A light switch </code> – ON or OFF
        </p> 


<p className="mb-4">You check if a condition is true, and return different things</p>

 <h2 className="text-2xl font-bold mb-4"> if / else Condition Use:</h2>

 <p className="mb-4">
        
        . Use it when you have more than one line of logic or JSX to handle.
      </p>
      

       <div className="bg-black-100  p-4 mb-3">
      

       <div >
  <pre className="text-sm text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
    <h1 className="text-2xl font-bold mb-4">Example:</h1>
{`function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;

  if (isLoggedIn) {
    return <h1>Welcome Back!</h1>;
  } else {
    return <h1>Please Login</h1>;
  }
}`}
  </pre>
</div>

      </div>
</div>

 <div >
              <h2 className="text-2xl font-bold mb-4">Ternary Operator ? :</h2>
        </div>
       < p className="mb-4">What is it?</p>
  
  <p className="mb-4">
          A short way to write{" "}
          <code className="text-red-500">if...else</code> in one line.
        </p>
        <h2 className="text-2xl font-bold mb-4">Ternary Operator Use:</h2>
<p className="mb-4">
        
        . Perfect for simple true/false JSX decisions.
      </p>
      <p className='mb-4'>Syntax:</p>



      <pre className="text-sm text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
        <h2 className="text-2xl font-bold mb-4">Example:</h2>
{`function Greeting(props) {
  const isLogin = props.isLogin;

  return (
    <h2>{isLogin ? "Hello User" : "Please login"}</h2>
  );
}`}
</pre>


<div >
              <h2 className="text-2xl font-bold mb-4"> Logical && Operator:</h2>
        </div>
< p className="mb-4">What is it?</p>
  <p className="mb-4">
          It renders content{" "}
          <code className="text-red-500">only if condition is true</code> If false → shows nothing.
        </p>
       <h2 className="text-2xl font-bold mb-4"> Logical && Operator Use:</h2>
        <p className="mb-4">
        
        . Good for showing UI only when something is true.
      </p>
      <p className='mb-4'>Syntax:</p>

<pre className="text-sm text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
  <h1 className="text-2xl font-bold mb-4">Example:</h1>
{`function Dashboard(props) {
  const isLoggedIn = props.isLoggedIn;

  return (
    <div>
      {isLoggedIn && <h3>Welcome to Dashboard</h3>}
    </div>
  );
}`}
</pre>



<div className="rounded-xl mt-8">
  <h1 className="text-2xl font-bold text-white mb-4">Summary Table:</h1>
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-200 border border-gray-300">
      <thead className="bg-green-600 text-white">
        <tr>
          <th className="px-3 py-2 border border-gray-300">Feature</th>
          <th className="px-3 py-2 border border-gray-300">	What it is	</th>
          <th className="px-3 py-2 border border-gray-300">Use it when	</th>
          <th className="px-3 py-2 border border-gray-300">Example</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["if / else", "Classic condition", "More logic or many lines", "see Greeting() example"],
          ["Ternary ? :", "Short if / else", "One line true/false display", "x ? A : B"],
          ["Logical &&", "Renders only when condition is true", "One-side condition (only true part)", "x && A"],
         
        ].map((row, index) => (
          <tr key={index} className={index % 2 === 0 ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-800 hover:bg-gray-700"}>
            {row.map((cell, idx) => (
              <td key={idx} className="px-3 py-2 border border-gray-300">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <div className="flex justify-between mt-6">
        <Link to="/React/EventHandling" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          <span className="mr-2">❮</span> Previous
        </Link>
 
        <Link to="/React/ListsKeys" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Next <span className="ml-2">❯</span>
        </Link>
      </div>
  </div>
</div>
    </div>
   
    
  )
}

export default ConditionalRendering;