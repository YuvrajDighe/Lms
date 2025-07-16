import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showHooksDropdown, setShowHooksDropdown] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);

  // Auto open dropdowns if inside their respective routes
  useEffect(() => {
    if (location.pathname.startsWith("/React/Hooks")) {
      setShowHooksDropdown(true);
    }
    if (location.pathname.startsWith("/React/EventHandling")) {
      setShowEventsDropdown(true);
    }
  }, [location.pathname]);

  const linkClass =
    "block w-full py-2 rounded transition-colors duration-200";

  const getLinkClass = ({ isActive }) =>
    `${linkClass} ${isActive ? "bg-gray-600" : "hover:bg-gray-600"}`;

  const handleHooksClick = (e) => {
    e.preventDefault();
    navigate("/React/Hooks");
    setShowHooksDropdown(true);
  };

  const handleEventsClick = (e) => {
    e.preventDefault();
    navigate("/React/EventHandling");
    setShowEventsDropdown(true);
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
         <NavLink to="/React/ComponentRendering" className={getLinkClass}>
         ComponentRendering
        </NavLink>
        <NavLink to="/React/StateManegment" className={getLinkClass}>
          State Management
        </NavLink>
        <NavLink to="/React/ReactClass" className={getLinkClass}>
          React Lifecycle (Class)
        </NavLink>

        {/* 🔽 Hooks Dropdown */}
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
                useMemo
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
              <NavLink to="/React/Debug" className={getLinkClass}>
                useDebugValue
              </NavLink>
              <NavLink to="/React/Layout" className={getLinkClass}>
                useLayoutEffect
              </NavLink>
              <NavLink to="/React/Imperative" className={getLinkClass}>
                useImperativeHandle
              </NavLink>
            </div>
          )}
        </div>

        <NavLink to="/React/PropsIntro" className={getLinkClass}>
          Data Binding (Props)
        </NavLink>

        {/* Other Links */}
        <NavLink to="/React/ConditionalRendering" className={getLinkClass}>
          Conditional Rendering
        </NavLink>
        <NavLink to="/React/ListsKeys" className={getLinkClass}>
          Lists and Keys
        </NavLink>
        <NavLink to="/React/Froms" className={getLinkClass}>
          Forms
        </NavLink>
       

         {/* 🔽 Events Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setShowEventsDropdown(true)}
          onMouseLeave={() => setShowEventsDropdown(false)}
        >
          <NavLink
            to="/React/EventHandling"
            onClick={handleEventsClick}
            className={({ isActive }) =>
              `${linkClass} w-full text-left ${
                showEventsDropdown || isActive
                  ? "bg-gray-600"
                  : "hover:bg-gray-600"
              }`
            }
          >
            Events {showEventsDropdown ? "🔼" : "🔽"}
          </NavLink>

          {showEventsDropdown && (
            <div className="pl-4 space-y-1">
              <NavLink to="/React/Click" className={getLinkClass}>
                onClick
              </NavLink>
              <NavLink to="/React/Change" className={getLinkClass}>
                onChange
              </NavLink>
              <NavLink to="/React/Submit" className={getLinkClass}>
                onSubmit
              </NavLink>
              <NavLink to="/React/Blur" className={getLinkClass}>
                onBlur
              </NavLink>
              <NavLink to="/React/Scroll" className={getLinkClass}>
                onScroll
              </NavLink>
              <NavLink to="/React/Focus" className={getLinkClass}>
                onFocus
              </NavLink>
              <NavLink to="/React/KeyUp" className={getLinkClass}>
                onKeyUp
              </NavLink>
             
              <NavLink to="/React/KeyDown" className={getLinkClass}>
                onKeyDown
              </NavLink>
              <NavLink to="/React/DoubleClick" className={getLinkClass}>
                onDoubleClick
              </NavLink>
              <NavLink to="/React/OnInput" className={getLinkClass}>
               OnInput
              </NavLink>
              <NavLink to="/React/Drag" className={getLinkClass}>
                onDrag
              </NavLink>
              <NavLink to="/React/Drop" className={getLinkClass}>
                onDrop
              </NavLink>
              <NavLink to="/React/MouseEnter" className={getLinkClass}>
                onMouseEnter
              </NavLink>
              <NavLink to="/React/MouseLeave" className={getLinkClass}>
                onMouseLeave
              </NavLink>
            </div>
          )}
        </div>
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
