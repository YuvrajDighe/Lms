import React from 'react'
import { Link } from 'react-router-dom'

function ConditionalRendering() {
  return (

    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
<h1 className="text-4xl font-bold text-white"> ConditionalRendering</h1>

<div className="flex justify-between mt-6">
        <Link to="/React/PropsIntro" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          <span className="mr-2">❮</span> Previous
        </Link>
 
        <Link to="/React/ListsKeys" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Next <span className="ml-2">❯</span>
        </Link>
      </div>

       <div className="  mt-8  ">
        <div >
              <h2 className="text-2xl font-bold mb-4">What is Conditional Rendering</h2>
        </div>
  
      <p className="mb-4">
        In React, Conditional Rendering means: Show different UI (HTML/JSX) based on conditions (true/false)
      </p>

    
      <h2 className="text-2xl font-bold mb-4"> ConditionalRendering Use:</h2>
      
<p className="mb-4">
        
        . To show login message if the user is logged in
      </p>
      <p className="mb-4">
        
        . To hide/show sections (like admin panel, messages, etc.).
      </p>
      <p className="mb-4">
        
        . To control what appears on screen dynamically.
      </p>
      


     

      
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
      

       <div className="bg-black-100   mb-3">
      

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
              <h2 className="text-2xl font-bold mb-4"> switch Statement:</h2>
        </div>
       < p className="mb-4">What is it</p>

<p className="mb-4">
          The {" "}
          <code className="text-red-500">switch</code>statement is used to perform different 
          actions based on different conditions, like
          {" "}
          <code className="text-red-500"> if / else if. </code> 
        </p> 

        <div >
  <pre className="text-sm text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
    <h1 className="text-2xl font-bold mb-4">Syntax:</h1>
{`switch(expression) {
  case value1:
    // Code block
    break;
  case value2:
    // Code block
    break;
  default:
    // Code block (if no case matches)
}
`}
  </pre>
</div>

<p className="mb-4 mt-5">
           {" "}
          <code className="text-red-500">expression</code> 
         is compared to each 
          {" "}
          <code className="text-red-500"> case  </code> using strict comparison
           {" "}
          <code className="text-red-500"> (===)  </code> 
        </p> 
         <p className='mb-4'> 
          {" "}
          <code className="text-red-500"> default </code>  is like the
           {" "}
          <code className="text-red-500"> else  </code>  part of
           {" "}
          <code className="text-red-500"> if/else </code>  (optional)
           
        </p> 

<div>
  <h1 className="text-2xl font-bold mb-4 text-white">Syntax:</h1>
  <pre className="text-sm text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
{`let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}`}
  </pre>
</div>

< p className="mb-4 mt-4">When to Use switch</p>

<p className="mb-4 mt-5">
      When to Use ?
     {" "}
          <code className="text-red-500">switch</code> 
         </p>
         <h2 h2 className="mb-4 mt-4">When you have many values to compare</h2>
<p className="mb-4 mt-3">
      
     Makes the code cleaner than many{" "}
          <code className="text-red-500">if/else if</code> 
         </p>

<div className="rounded-xl mt-8">
  <h1 className="text-2xl font-bold text-white mb-4">switch vs if/else - Summary Table:</h1>
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-200 border border-gray-300">
      <thead className="bg-green-600 text-white">
        <tr>
          <th className="px-3 py-2 border border-gray-300">Feature</th>
          <th className="px-3 py-2 border border-gray-300">if / else</th>
          <th className="px-3 py-2 border border-gray-300">switch</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["Best for", "Complex conditions, ranges, expressions", "Many fixed value comparisons"],
          ["Syntax", "More flexible (can use <, >, &&, etc.)", "Only compares strict equality (===)"],
          ["Readability", "Becomes messy with many conditions", "Cleaner for multiple known values"],
          ["Performance", "Slightly slower for many conditions", "Slightly faster (in some engines)"],
          ["Use case", "Valid for all logic types", "Best for menu/options/select-type logic"],
          ["Default case", "Uses final else", "Uses default"],
          ["Break needed?", "❌ No need", "✅ Yes (to avoid fall-through)"],
        ].map((row, index) => (
          <tr
            key={index}
            className={index % 2 === 0 ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-800 hover:bg-gray-700"}
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
 
  <pre className="text-sm text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
    <h1 className="text-2xl font-bold mb-4 mt-4 text-white">Example: switch:</h1>
{`let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("🍎 Apple selected");
    break;
  case "banana":
    console.log("🍌 Banana selected");
    break;
  default:
    console.log("❓ Unknown fruit");
}
`}
  </pre>
</div>


 <div >
              <h2 className="text-2xl font-bold mb-4 mt-3">Ternary Operator ? :</h2>
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
        <Link to="/React/PropsIntro" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
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