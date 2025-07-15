export function ReactClass() {
  return (
    <>
        <div className="p-9 text-white" style={{ backgroundColor: "#464859" }}>
    <h1 className="text-4xl font-bold text-white"> React Component Lifecycle</h1>
    
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
                  <h2 className="text-2xl font-bold mb-4">What is React Component Lifecycle</h2>
            </div>
      
          <p className="mb-4">
              the {" "}
              <code className="text-red-500">React Lifecycle</code> 
              describes the stages 
              a React component goes through fromthe 
              {" "}
              <code className="text-red-500">
                creation, to update</code>  
              and finally to removal from the DOM.
            </p>


            <p className="mb-4">
              React components (especially {" "}
              <code className="text-red-500">class components
                </code> have special built-in methods called
              {" "}
              <code className="text-red-500">
                lifecycle methods </code>  that let you run code
                 at specific points in this lifecycle.
            </p>
<h2 className="text-2xl font-bold mb-4"> . React Lifecycle - Mounting Phase</h2>

<p className="text-2xl font-bold mb-4"> . Each component in React goes through a lifecycle. 
  The three main phases are:</p>

  <p>
<li>Mounting</li>
<li>Updating</li>
<li>Unmounting</li>
  </p>

<h3 className="text-2xl font-bold mb-4">Mounting Phase</h3>


<p>Mounting means putting elements into the DOM.</p>



<p className="mb-4 ">
              React calls  {" "}
              <code className="text-red-500">four built-in methods 
                </code> in order when a component is mounted:</p>

                <div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
{'1 constructor()'}
</pre>
</div>
<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
{'2 static getDerivedStateFromProps()'}
</pre>
</div>
<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
{'3 render()'}
</pre>
</div>
<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
{'4 componentDidMount()'}
</pre>
</div>
        <h1 className="text-2xl font-bold mb-4 mt-5">1. constructor(props)</h1> 

        <p>Called when the component is first created.</p>
        <p>Used to initialize state and bind methods.</p>  
        <p className="mb-4 ">
              Always start with  {" "}
              <code className="text-red-500">super(props) 
                </code>   {" "}to inherit from
              <code className="text-red-500">React.Component. 
                </code> </p>

          <div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
  <h1 className="text-2xl font-bold mb-4">Example:</h1>
{`
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));
`}
</pre>
</div>  

<h1 className="text-2xl font-bold mb-4 mt-5">2. static getDerivedStateFromProps(props, state)</h1>

<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
 <p className="mb-4 ">
              . Called  {" "}
              <code className="text-red-500">before render() 
                </code>   {" "} on both mount and update.
              </p>
</pre>
</div>
<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
{'. Used to sync state with props.'}
</pre>
</div>
<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
{'. Rarely used, but helpful for edge cases.'}
</pre>
</div>

<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
  <h1 className="text-2xl font-bold mb-4">Example:</h1>
{`
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  static getDerivedStateFromProps(props, state) {
    return { favoritecolor: props.favcol };
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

ReactDOM.render(<Header favcol="yellow" />, document.getElementById("root"));

`}
</pre>
</div> 



<h1 className="text-2xl font-bold mb-4 mt-5">3. render()</h1>

<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
 <p className="mb-4 ">
              .  {" "}
              <code className="text-red-500">Required () 
                </code>   {" "} method.
              </p>
</pre>
</div>
<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
{'. Returns the JSX to display.'}
</pre>
</div>
<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
{'. Pure and should not change state or interact with DOM directly.'}
</pre>
</div>

<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
  <h1 className="text-2xl font-bold mb-4">Example:</h1>
{`
class Header extends React.Component {
  render() {
    return <h1>This is the content of the Header component</h1>;
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

`}
</pre>
</div> 



<h1 className="text-2xl font-bold mb-4 mt-5">4. componentDidMount()()</h1>

<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
 <p className="mb-4 ">
              . Called {" "}
              <code className="text-red-500"> after the component has rendered. () 
                </code>   {" "} .
              </p>
</pre>
</div>
<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   
{'.Ideal for:.'}
</pre>
</div>
<p className="mt-5">
<h2 >. API calls</h2>
<h2>. Setting timers</h2>
<h2>. Adding event listeners</h2>
</p>
<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
  <h1 className="text-2xl font-bold mb-4">Example:</h1>
{`
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { favoritecolor: "red" };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: "yellow" });
    }, 1000);
  }

  render() {
    return <h1>My Favorite Color is {this.state.favoritecolor}</h1>;
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));

`}
</pre>
</div> 

<div className="rounded-xl mt-8">
      <h1 className="text-2xl font-bold text-white mb-4">Summary Table:</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-200 border border-gray-300">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-3 py-2 border border-gray-300">Method	</th>
              <th className="px-3 py-2 border border-gray-300">	When It Runs	</th>
              <th className="px-3 py-2 border border-gray-300">	Purpose	</th>
              
             
            </tr>
          </thead>
          <tbody>
            {[
              ["constructor()", "	First (on component init)	","Set initial state, bind methods	", ],
              ["getDerivedStateFromProps()", "	Before every render (mount/update)	","Sync state with props	 ", ],
              ["render()", "	Every time UI updates		","Return JSX/HTML", ],
             ["componentDidMount()", "		After first render (mount only)		","DOM interaction, API calls, timers", ],
             
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
      </div>
    </div>

        
          <h2 className="text-2xl font-bold mb-4"> React Component Lifecycle Use:</h2>

         <h2 className="text-2xl font-bold mb-4">  Three Main Lifecycle Phases</h2>


    <div className="rounded-xl mt-8">
      <h1 className="text-2xl font-bold text-white mb-4">Summary Table:</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-200 border border-gray-300">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-3 py-2 border border-gray-300">Phase	</th>
              <th className="px-3 py-2 border border-gray-300">	Description	</th>
              
             
            </tr>
          </thead>
          <tbody>
            {[
              ["Mounting", "	When the component is created and inserted into the DOM", ],
              ["Updating", "	When the component is updated due to state or props change", ],
              ["Unmounting", "	When the component is removed from the DOM", ],
             
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
      </div>
    </div>


<div className="rounded-xl mt-8">
  <h1 className="text-2xl font-bold text-white mb-4">Summary Table:</h1>
  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-200 border border-gray-300">
      <thead className="bg-green-600 text-white">
        <tr>
          <th className="px-3 py-2 border border-gray-300">Method</th>
          <th className="px-3 py-2 border border-gray-300">Phase</th>
          <th className="px-3 py-2 border border-gray-300">Use For</th>
        </tr>
      </thead>
      <tbody>
        {[
          ["`constructor()`", "Mounting", "Initialize state, bind methods"],
          ["`static getDerivedStateFromProps()`", "Mounting / Updating", "Sync state with props (rare use)"],
          ["`render()`", "All", "Display JSX"],
          ["`componentDidMount()`", "Mounting", "Start API calls, timers, subscriptions"],
          ["`shouldComponentUpdate()`", "Updating", "Improve performance by avoiding unwanted renders"],
          ["`getSnapshotBeforeUpdate()`", "Updating", "Capture DOM info before update (e.g., scroll)"],
          ["`componentDidUpdate()`", "Updating", "Fetch new data, react to prop/state changes"],
          ["`componentWillUnmount()`", "Unmounting", "Clean up timers, listeners, intervals"],
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
  </div>
</div>

<div>
<pre className="text-sm text-white bg-black p-4 mt-6 rounded-md font-mono overflow-x-auto">
   <h1 className="text-2xl font-bold mb-4">Mounting Example:</h1>
{`A. Mounting Example (componentDidMount)

componentDidMount() {
  console.log(" Component mounted");
  // Fetch data from API or start a timer
}`}
</pre>
</div>

<div>
<pre className="text-sm text-white bg-black p-4  mt-9 rounded-md font-mono overflow-x-auto">
  <h1 className="text-2xl font-bold mb-4"> Updating  Example:</h1>
{`componentDidUpdate(prevProps, prevState) {
  if (this.state.count !== prevState.count) {
    console.log("Count changed");
  }
}`}
</pre>
</div>

<div className="mt-9">
  <h1 className="text-2xl font-bold text-white mb-4">Unmounting Example:</h1>
  <pre className="text-sm text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
    <h1 className="text-2xl font-bold text-white mb-4">Unmounting Example:</h1>
{`componentWillUnmount() {
  console.log("❌ Component will unmount");
  clearInterval(this.timer);
}`}
  </pre>
</div>


 <div >
  <h2 className="text-2xl font-bold mb-4 mt-9">. React Hooks Equivalent /for Functional Components</h2>
            </div>
<p className="mb-4">
              React functional components use the {" "}
              <code className="text-red-500">useEffect() </code>Hook to do the same thing.
</p>
<div className="mt-9">
  <h1 className="text-2xl font-bold text-white mb-4">Mount Example:</h1>
  <pre className="text-sm text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
{`useEffect(() => {}, [])`}
  </pre>
</div>


 <div className="mt-9">
  <h1 className="text-2xl font-bold text-white mb-4"> Update Example:</h1>
  <pre className="text-sm text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
{`useEffect(() => {}, [deps])`}
  </pre>
</div>


 <div className="mt-9">
  <h1 className="text-2xl font-bold text-white mb-4">Unmounting Example:</h1>
  <pre className="text-sm text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
{`useEffect(() => () => console.log("❌ Component will unmount"), []);`}
  </pre>
</div>

<div className="mt-9">
  
  <pre className="text-sm text-white bg-black p-4 rounded-md font-mono overflow-x-auto">
    <h1 className="text-2xl font-bold text-white mb-4">Example:</h1>
{`useEffect(() => {
  console.log(" Mounted");

  return () => {
    console.log(" Unmounted");
  };
}, []);

useEffect(() => {
  console.log(" count updated");
}, [count]);`}
  </pre>
</div>

<div className="rounded-xl mt-8">
      <h1 className="text-2xl font-bold text-white mb-4"> Table:</h1>
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-200 border border-gray-300">
          <thead className="bg-green-600 text-white">
            <tr>
              <th className="px-3 py-2 border border-gray-300">Lifecycle</th>
              <th className="px-3 py-2 border border-gray-300">	Class Method	</th>
              <th className="px-3 py-2 border border-gray-300">	Hook Equivalent</th>
              
            </tr>
          </thead>
          <tbody>
            {[
              ["Mount	", "componentDidMount()", "useEffect(() => {}, [])",],
              ["Update", "componentDidUpdate() ", "useEffect(() => {}, [deps])", ],
              ["Unmount", "componentWillUnmount()", "useEffect(() => { return () => {} }, [])", ],
             
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
      </div>
    </div>





        
      
     
           
    </div>
    
     
   </div>
       
        
     
    </>
  );
}
export default ReactClass;