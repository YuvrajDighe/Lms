import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
   <aside
  className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-52 bg-gray-200 shadow-md z-40 overflow-y-auto hidden md:block"
>
      <div className="p-6 space-y-4">
          <NavLink to="/React/ReactIntro" className="block hover:text-blue-500">Introduction</NavLink>
              <NavLink to="/React/EnvironmentSetup" className="block hover:text-blue-500">Environment Setup</NavLink>
               <NavLink to="/React/Jsx" className="block hover:text-blue-500">jsx(JavaScript XML)</NavLink>
                <NavLink to="/React/ReactComponent" className="block hover:text-blue-500">React component</NavLink>
                 <NavLink to="/React/StateManegment" className="block hover:text-blue-500">state manegment</NavLink>
                  <NavLink to="/React/ReactClass" className="block hover:text-blue-500">React Lifecycle(class)</NavLink>
                   <NavLink to="/React/Hooks" className="block hover:text-blue-500">Hooks</NavLink>
                    <NavLink to="/React/EventHandling" className="block hover:text-blue-500">Event Handling</NavLink>
                    <NavLink to="/React/ConditionalRendering" className="block hover:text-blue-500">Conditional Rendering</NavLink>
                    <NavLink to="/React/ListsKeys" className="block hover:text-blue-500">Lists and Keys</NavLink>
                    <NavLink to="/React/Froms" className="block hover:text-blue-500">Forms</NavLink>
                    
        <NavLink to="/React/PropsIntro" className="block hover:text-blue-500">Data Binding(props)</NavLink>
      <NavLink to="/React/ReactRouter" className="block hover:text-blue-500">React Router</NavLink>
      
          <NavLink to="/React/Styling" className="block hover:text-blue-500">Styling in react</NavLink>
            <NavLink to="/React/Redux" className="block hover:text-blue-500">Redux & State Mangement</NavLink>
              <NavLink to="/React/BundlersBuild" className="block hover:text-blue-500">Bundlers & Build Tools</NavLink>
                <NavLink to="/React/Miscellaneous" className="block hover:text-blue-500">Miscellaneous & Best Practices</NavLink>
        {/* <NavLink to="/React/ReactEs6" className="block hover:text-blue-500">React Es6</NavLink> */}
              
                 
      </div>
    </aside>
  );
}

export default Sidebar;
