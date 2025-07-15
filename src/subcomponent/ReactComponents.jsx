import { Link } from "react-router-dom";
export function ReactComponent() {
  return (
    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
      {/* Top Heading */}
      <h1 className="text-[40px]">React Components</h1>

      {/* Buttons */}
       <div className="flex justify-between mt-6">
            <Link to="/React/Jsx" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              <span className="mr-2">❮</span> Previous
            </Link>

            <Link to="/React/StateManegment" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Next <span className="ml-2">❯</span>
            </Link>
          </div>

      {/* First Paragraph */}
      <p className="mt-5 text-[18px]">
        Components are like functions that return HTML elements.
      </p>

      {/* React Components Subheading */}
      <h1 className="text-[30px] mt-5">React Components</h1>

      {/* Definition paragraph */}
      <p className="mt-3 text-[18px]">
       Components are small parts of a website. They are like mini programs that create things like buttons, headings, or images and show them on the screen.
      </p>

      {/* Types of components */}
      <p className="mt-3 text-[18px]">
       There are two types of components: Class components and Function components. Here, we will learn Function components because they are simple and easy to make.
      </p>

      {/* Yellow note box */}
      <div className="mt-5 p-4 rounded border text-yellow-800 border-1-4 border-yellow-400  border-gray-1000 bg-yellow-100">
        <p className="text-[18px]">
          In old React code, Class components were mostly used. Now, 
          it is better to use Function components with Hooks, which were added in React version 16.8.
           There is also an extra section about Class components just for your understanding.
        </p>
      </div>

      {/* Create Your First Component Heading */}
      <h1 className="mt-5">Create Your First Component</h1>

      {/* Instructions */}
      <p className="mt-3 text-[18px]">
        When creating a React component, the component's name MUST start with an uppercase letter.
      </p>

      {/* Class Component Heading */}
      <h1 className="text-[30px] mt-5">Class Component</h1>

      {/* Class component explanation */}
      <p className="mt-3 text-[18px]">
        A class component must include the <code className="text-red-500">extends React.Component</code>
 statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
      </p>

      <p className="mt-3 text-[18px]">
        The component also requires a <code className="text-red-500">render()</code> method, this method returns HTML.
      </p>


      <div className="mt-5 text-white">
      {/* Class Component Example Block */}
      <div className=" p-4 rounded mb-8">
        <h2 className="text-xl font-bold mb-2">Example</h2>
        <p className="mb-4">
          Create a Class component called{" "}
          <code className="text-red-500">Student</code>
        </p>
        <div className="bg-black text-white p-4 rounded border border-gray-300">
          <pre>
            <code>
{`class Student extends React.Component {
  render() {
    return <h2>Hi, I am a Student!</h2>;
  }
}`}
            </code>
          </pre>
        </div>
      </div>

      {/* Function Component Explanation */}
      <h2 className="text-xl font-bold mb-2 text-white">Function Component</h2>
      <p className="mb-2 text-white">
        Here is the same example as above, but created using a Function
        component instead.
      </p>
      <p className="mb-4 text-white">
        A Function component works just like a Class component.
         It shows HTML on the screen, but it is easier to write and understand because it needs less code.
         That is why we will use Function components more in this lesson.
      </p>

      {/* Function Component Example Block */}
      <div className=" p-4 rounded">
        <h2 className="text-xl font-bold mb-2">Example</h2>
        <p className="mb-4">
          Create a Function component called{" "}
          <code className="text-red-500">Student</code>
        </p>
        <div className="bg-black text-white p-4 rounded border border-gray-300">
          <pre>
            <code>
{`function Student() {
  return <h2>Hi, I am a Student!</h2>;
}`}
            </code>
          </pre>
        </div>
      </div>
    </div>
    

    <div>
      <h1 className="text-[30px] mt-5">Functional Components :-</h1>
      <h1 className="text-[25px] mt-5">What is Functional Component</h1>
      <p className="text-[18px] mt-2 ml-2">✅ They are just normal JavaScript functions.</p>

      <p className="text-[18px] mt-2 ml-2">✅ They do not have their own state (old method, before hooks).</p>

      <p className="text-[18px] mt-2 ml-2">✅ They can take data as input (called props).</p>

      <p className="text-[18px] mt-2 ml-2">✅ They return what should be shown on the screen.</p>
    </div>

    <div className=" p-4 rounded mb-8">
  <h2 className="text-xl font-bold mb-2">Example :-</h2>
  <p className="mb-4">
    Create a Functional component called{" "}
    <code className="text-red-500">Welcome</code>
  </p>
  <div className="bg-black p-4 rounded ">
    <pre>
      <code>
{`function Welcome() {
  return (
    <div>
      <h1>Welcome to React!</h1>
      <p>This is a Functional Component example.</p>
    </div>
  );
}

export default Welcome;`}
      </code>
    </pre>
  </div>
</div>

<div>
  <h1 className="text-[30px] mt-5">Class Components :-</h1>
  <h1 className="text-[25px] mt-5">What is Class Component</h1>

  <p className="text-[18px] mt-2 ml-2">
      ✅ A Class Component is a way to create components in React using JavaScript classes.
  </p>

  <p className="text-[18px] mt-2 ml-2">
    ✅ It extends <code>React.Component</code> and has a <code>render()</code> method that returns what should be displayed.
  </p>

  <p className="text-[18px] mt-2 ml-2">
    ✅ Before React Hooks, Class Components were used when we needed state or lifecycle methods in a component.
  </p>
</div>

 <div className="flex justify-between mt-6">
            <Link to="/React/Jsx" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              <span className="mr-2">❮</span> Previous
            </Link>

            <Link to="/React/StateManegment" className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
              Next <span className="ml-2">❯</span>
            </Link>
          </div>
    </div>
  );
}

export default ReactComponent;
