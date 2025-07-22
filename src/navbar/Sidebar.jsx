import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import {
  FaReact,
  FaCogs,
  FaPuzzlePiece,
  FaRegObjectGroup,
  FaRegPlayCircle,
  FaBolt,
  FaSyncAlt,
  FaLink,
  FaListAlt,
  FaWpforms,
  FaRoute,
  FaPaintBrush,
  FaDatabase,
  FaBoxOpen,
  FaBookOpen,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const [showHooksDropdown, setShowHooksDropdown] = useState(false);
  const [showEventsDropdown, setShowEventsDropdown] = useState(false);

  useEffect(() => {
    if (location.pathname.startsWith("/React/Hooks")) setShowHooksDropdown(true);
    if (location.pathname.startsWith("/React/EventHandling")) setShowEventsDropdown(true);
  }, [location.pathname]);

  const getLinkClass = ({ isActive }) =>
    `flex items-center gap-2 w-full py-2 px-3 rounded transition-all duration-200 ${
      isActive ? "bg-[#5c5f78] text-white" : "hover:bg-[#525466]"
    }`;

  const dropdownIcon = (isOpen) =>
    isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />;

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
    <>
      <aside
        className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-[#3A3A4B] text-white shadow-xl overflow-y-auto z-40 font-medium"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style>{`
          aside::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        <div className="px-5 pt-4 pb-2 text-xl font-bold border-b border-gray-600">
          React Tutorial
        </div>

        <div className="px-4 pt-4 space-y-1 text-[15px]">
          <NavLink to="/React/ReactIntro" className={getLinkClass}>
            <FaReact /> Introduction
          </NavLink>
          <NavLink to="/React/EnvironmentSetup" className={getLinkClass}>
            <FaCogs /> Environment Setup
          </NavLink>
          <NavLink to="/React/Jsx" className={getLinkClass}>
            <FaPuzzlePiece /> JSX
          </NavLink>
          <NavLink to="/React/ReactComponent" className={getLinkClass}>
            <FaRegObjectGroup /> Components
          </NavLink>
          <NavLink to="/React/ComponentRendering" className={getLinkClass}>
            <FaRegPlayCircle /> Rendering
          </NavLink>
          <NavLink to="/React/StateManegment" className={getLinkClass}>
            <FaBolt /> State Management
          </NavLink>
          <NavLink to="/React/ReactClass" className={getLinkClass}>
            <FaSyncAlt /> Lifecycle (Class)
          </NavLink>

          {/* 🔽 Hooks Dropdown */}
          <div
            onMouseEnter={() => setShowHooksDropdown(true)}
            onMouseLeave={() => setShowHooksDropdown(false)}
          >
            <NavLink
              to="/React/Hooks"
              onClick={handleHooksClick}
              className={({ isActive }) =>
                `flex justify-between items-center w-full px-3 py-2 rounded ${
                  showHooksDropdown || isActive ? "bg-[#5c5f78]" : "hover:bg-[#525466]"
                }`
              }
            >
              <span className="flex items-center gap-2">
                <FaBookOpen /> Hooks
              </span>
              {dropdownIcon(showHooksDropdown)}
            </NavLink>

            {showHooksDropdown && (
              <div className="pl-4 mt-1 space-y-1">
                {[
                  ["State", "useState"],
                  ["Ref", "useRef"],
                  ["Effect", "useEffect"],
                  ["Memo", "useMemo"],
                  ["Reducer", "useReducer"],
                  ["Callback", "useCallback"],
                  ["Context", "useContext"],
                  ["Debug", "useDebugValue"],
                  ["Layout", "useLayoutEffect"],
                  ["Imperative", "useImperativeHandle"],
                ].map(([path, label]) => (
                  <NavLink key={path} to={`/React/${path}`} className={getLinkClass}>
                    {label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/React/PropsIntro" className={getLinkClass}>
            <FaLink /> Props (Data Binding)
          </NavLink>
          <NavLink to="/React/ConditionalRendering" className={getLinkClass}>
            <FaBookOpen /> Conditional Rendering
          </NavLink>
          <NavLink to="/React/ListsKeys" className={getLinkClass}>
            <FaListAlt /> Lists & Keys
          </NavLink>
          <NavLink to="/React/Froms" className={getLinkClass}>
            <FaWpforms /> Forms
          </NavLink>

          {/* 🔽 Events Dropdown */}
          <div
            onMouseEnter={() => setShowEventsDropdown(true)}
            onMouseLeave={() => setShowEventsDropdown(false)}
          >
            <NavLink
              to="/React/EventHandling"
              onClick={handleEventsClick}
              className={({ isActive }) =>
                `flex justify-between items-center w-full px-3 py-2 rounded ${
                  showEventsDropdown || isActive ? "bg-[#5c5f78]" : "hover:bg-[#525466]"
                }`
              }
            >
              <span className="flex items-center gap-2">
                <FaCogs /> Events
              </span>
              {dropdownIcon(showEventsDropdown)}
            </NavLink>

            {showEventsDropdown && (
              <div className="pl-4 mt-1 space-y-1">
                {[
                  "Click",
                  "Change",
                  "Submit",
                  "Blur",
                  "Scroll",
                  "Focus",
                  "KeyUp",
                  "KeyDown",
                  "DoubleClick",
                  "OnInput",
                  "Drag",
                  "Drop",
                  "MouseEnter",
                  "MouseLeave",
                ].map((evt) => (
                  <NavLink key={evt} to={`/React/${evt}`} className={getLinkClass}>
                    {evt}
                  </NavLink>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/React/ReactRouter" className={getLinkClass}>
            <FaRoute /> React Router
          </NavLink>
          <NavLink to="/React/Styling" className={getLinkClass}>
            <FaPaintBrush /> Styling
          </NavLink>
          <NavLink to="/React/Redux" className={getLinkClass}>
            <FaDatabase /> Redux
          </NavLink>
          <NavLink to="/React/BundlersBuild" className={getLinkClass}>
            <FaBoxOpen /> Bundlers & Build
          </NavLink>
          <NavLink to="/React/Miscellaneous" className={getLinkClass}>
            <FaBookOpen /> Misc & Best Practices
          </NavLink>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
