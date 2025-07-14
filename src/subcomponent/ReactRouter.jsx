 function ReactRouter() {
  return (
    <>
    <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
<h1 className="text-4xl font-bold text-white">React Router</h1>

<div className="flex justify-between mt-6">
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          <span className="mr-2">❮</span> Previous
        </button>
 
        <button className="flex items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
          Next <span className="ml-2">❯</span>
        </button>
      </div>

       <div className="  mt-8 rounded shadow-md ">
        <div >
              <h2 className="text-2xl font-bold mb-4">Add React Router</h2>
        </div>
  
      <p className="mb-4">
        To add React Router in your application, run this in the terminal from the root directory of the application:
      </p>

      <div className="bg-gray-900 text-green-400 font-mono p-4 rounded mb-6">
        <code>npm i -D react-router-dom</code>
      </div>

      <div className="bg-yellow-100 border-l-4 border-yellow-400 text-yellow-800 p-4 mb-6">
        <p className="font-semibold">Note:</p>
        <p>This tutorial uses React Router v6.</p>
        <p>If you are upgrading from v5, you will need to use the <code>@latest</code> flag:</p>
      </div>

      <div className="bg-gray-900 text-green-400 font-mono p-4 rounded">
        <code>npm i -D react-router-dom@latest</code>
      </div>
    </div>
    

  <div>
    <h2 className="text-2xl font-bold mb-4 mt-5">what is React Router </h2>
<p  >
  React Router is a standard library for routing in React applications. It enables the navigation between different components without reloading the entire page, creating a single-page application (SPA) experience. Using React Router, developers can define multiple routes and map them to specific components, allowing the UI to change dynamically based on the URL. It supports nested routes, dynamic parameters, navigation links, programmatic navigation, and more, making it an essential tool for building modern web applications with React.
</p>

  </div>
    </div>
   
    </>
  );
}
export default ReactRouter