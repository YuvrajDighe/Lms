export function ReactComponent() {
  return (
    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
      {/* Top Heading */}
      <h1 className="text-[40px]">React Components</h1>

      {/* Buttons */}
      <div className="flex justify-between mt-6">
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          <span className="mr-2">❮</span> Previous
        </button>

        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Next <span className="ml-2">❯</span>
        </button>
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
      <div className="mt-5 bg-yellow-100 p-4 rounded">
        <p className="text-[18px]">
          In old React code, Class components were mostly used. Now, 
          it is better to use Function components with Hooks, which were added in React version 16.8.
           There is also an extra section about Class components just for your understanding.
        </p>
      </div>

      {/* Create Your First Component Heading */}
      <h1 className="text-[30px] mt-5">Create Your First Component</h1>

      {/* Instructions */}
      <p className="mt-3 text-[18px]">
        When creating a React component, the component's name MUST start with an uppercase letter.
      </p>

      {/* Class Component Heading */}
      <h1 className="text-[30px] mt-5">Class Component</h1>

      {/* Class component explanation */}
      <p className="mt-3 text-[18px]">
        A class component must include the <code className="bg-gray-200 px-1 rounded">extends React.Component</code> statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.
      </p>

      <p className="mt-3 text-[18px]">
        The component also requires a <code className="bg-gray-200 px-1 rounded">render()</code> method, this method returns HTML.
      </p>
    </div>
  );
}

export default ReactComponent;
