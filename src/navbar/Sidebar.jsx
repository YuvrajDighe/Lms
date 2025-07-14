import { NavLink } from "react-router-dom";

function Sidebar() {
  const linkClass =
    "block w-full  py-2 rounded hover:bg-gray-600 transition-colors duration-200";

  return (
   <aside
  className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 shadow-md z-40 overflow-y-auto text-white font-bold text-[15px] leading-[20px] tracking-[0.36px]"
  style={{ backgroundColor: "#3A3A4B", fontFamily: "'Afacad Flux', sans-serif" }}
>
      <div className="p-6 space-y-2">
        <NavLink to="/React/ReactIntro" className={linkClass}>
          Introduction
        </NavLink>
        <NavLink to="/React/EnvironmentSetup" className={linkClass}>
          Environment Setup
        </NavLink>
        <NavLink to="/React/Jsx" className={linkClass}>
          JSX (JavaScript XML)
        </NavLink>
        <NavLink to="/React/ReactComponent" className={linkClass}>
          React Component
        </NavLink>
        <NavLink to="/React/StateManegment" className={linkClass}>
          State Management
        </NavLink>
        <NavLink to="/React/ReactClass" className={linkClass}>
          React Lifecycle (Class)
        </NavLink>
        <NavLink to="/React/Hooks" className={linkClass}>
          Hooks
        </NavLink>
        <NavLink to="/React/EventHandling" className={linkClass}>
          Event Handling
        </NavLink>
        <NavLink to="/React/ConditionalRendering" className={linkClass}>
          Conditional Rendering
        </NavLink>
        <NavLink to="/React/ListsKeys" className={linkClass}>
          Lists and Keys
        </NavLink>
        <NavLink to="/React/Froms" className={linkClass}>
          Forms
        </NavLink>
        <NavLink to="/React/PropsIntro" className={linkClass}>
          Data Binding (Props)
        </NavLink>
        <NavLink to="/React/ReactRouter" className={linkClass}>
          React Router
        </NavLink>
        <NavLink to="/React/Styling" className={linkClass}>
          Styling in React
        </NavLink>
        <NavLink to="/React/Redux" className={linkClass}>
          Redux & State Management
        </NavLink>
        <NavLink to="/React/BundlersBuild" className={linkClass}>
          Bundlers & Build Tools
        </NavLink>
        <NavLink to="/React/Miscellaneous" className={linkClass}>
          Miscellaneous & Best Practices
        </NavLink>
        {/* <NavLink to="/React/ReactEs6" className={linkClass}>React ES6</NavLink> */}
      </div>
    </aside>
  );
}

export default Sidebar;
