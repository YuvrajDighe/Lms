import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showHooksDropdown, setShowHooksDropdown] = useState(false);

  // Auto open if inside /React/Hooks
  useEffect(() => {
    if (location.pathname.startsWith("/React/Hooks")) {
      setShowHooksDropdown(true);
    }
  }, [location.pathname]);

  const linkClass =
    "block w-full py-2 rounded transition-colors duration-200";

  const getLinkClass = ({ isActive }) =>
    `${linkClass} ${isActive ? "bg-gray-600" : "hover:bg-gray-600"}`;

  const handleHooksClick = (e) => {
    e.preventDefault();
    navigate("/React/Hooks");
  };

  return (
    <aside
      className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-60 shadow-md z-40 overflow-y-auto text-white font-bold text-[15px] leading-[20px] tracking-[0.36px] scrollbar-hide"
      style={{
        backgroundColor: "#3A3A4B",
        fontFamily: "'Afacad Flux', sans-serif",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="p-6 space-y-2">
        <NavLink to="/React/ReactIntro" className={getLinkClass}>
          Introduction
        </NavLink>
        <NavLink to="/React/EnvironmentSetup" className={getLinkClass}>
          Environment Setup
        </NavLink>
        <NavLink to="/React/Jsx" className={getLinkClass}>
          JSX (JavaScript XML)
        </NavLink>
        <NavLink to="/React/ReactComponent" className={getLinkClass}>
          React Component
        </NavLink>
        <NavLink to="/React/StateManegment" className={getLinkClass}>
          State Management
        </NavLink>
        <NavLink to="/React/ReactClass" className={getLinkClass}>
          React Lifecycle (Class)
        </NavLink>

        {/* 🔁 Hover + Click Controlled Hooks Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowHooksDropdown(true)}
          onMouseLeave={() => setShowHooksDropdown(false)}
        >
          <NavLink
            to="/React/Hooks"
            onClick={handleHooksClick}
            className={({ isActive }) =>
              `${linkClass} w-full text-left ${
                showHooksDropdown || isActive
                  ? "bg-gray-600"
                  : "hover:bg-gray-600"
              }`
            }
          >
            Hooks {showHooksDropdown ? "🔼" : "🔽"}
          </NavLink>

          {showHooksDropdown && (
            <div className="pl-4 space-y-1">
              <NavLink to="/React/State" className={getLinkClass}>
                useState
              </NavLink>
              <NavLink to="/React/Ref" className={getLinkClass}>
                useRef
              </NavLink>
              <NavLink to="/React/Effect" className={getLinkClass}>
                useEffect
              </NavLink>
              <NavLink to="/React/Memo" className={getLinkClass}>
                UseMemo
              </NavLink>
              <NavLink to="/React/Reducer" className={getLinkClass}>
                useReducer
              </NavLink>
              <NavLink to="/React/Callback" className={getLinkClass}>
                useCallback
              </NavLink>
              <NavLink to="/React/Context" className={getLinkClass}>
                useContext
              </NavLink>
            </div>
          )}
        </div>

        {/* Rest of links */}
        <NavLink to="/React/EventHandling" className={getLinkClass}>
          Event Handling
        </NavLink>
        <NavLink to="/React/ConditionalRendering" className={getLinkClass}>
          Conditional Rendering
        </NavLink>
        <NavLink to="/React/ListsKeys" className={getLinkClass}>
          Lists and Keys
        </NavLink>
        <NavLink to="/React/Froms" className={getLinkClass}>
          Forms
        </NavLink>
        <NavLink to="/React/PropsIntro" className={getLinkClass}>
          Data Binding (Props)
        </NavLink>
        <NavLink to="/React/ReactRouter" className={getLinkClass}>
          React Router
        </NavLink>
        <NavLink to="/React/Styling" className={getLinkClass}>
          Styling in React
        </NavLink>
        <NavLink to="/React/Redux" className={getLinkClass}>
          Redux & State Management
        </NavLink>
        <NavLink to="/React/BundlersBuild" className={getLinkClass}>
          Bundlers & Build Tools
        </NavLink>
        <NavLink to="/React/Miscellaneous" className={getLinkClass}>
          Miscellaneous & Best Practices
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;
