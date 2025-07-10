import { NavLink } from "react-router-dom";
function Sidebar() {
  return (
    <aside
      className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-48  bg-gray-200 shadow-md z-40 hidden md:block"
    >
      <div className="p-6 space-y-4">
          <NavLink to="/React/ReactIntro" className="block hover:text-blue-500">React Intro</NavLink>
            
        <NavLink to="/React/PropsIntro" className="block hover:text-blue-500">React props</NavLink>
        <NavLink to="/React/ReactEs6" className="block hover:text-blue-500">React Es6</NavLink>
               <NavLink to="/React/ReactComponent" className="block hover:text-blue-500">React component</NavLink>
                  <NavLink to="/React/ReactClass" className="block hover:text-blue-500">React class</NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
