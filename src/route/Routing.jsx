import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ReactLayout from "./ReactLayout";
import ReactPage from "../component/React";
import ReactIntro from "../subcomponent/ReactIntro";
import PropsIntro from "../subcomponent/ReactProp";
import ReactComponent from "../subcomponent/ReactComponents";
import ReactEs6 from "../subcomponent/ReactEs6";
import ReactClass from "../subcomponent/ReactClass";
import EnvironmentSetup from "../subcomponent/EnvironmentSetup";
import Jsx from "../subcomponent/Jsx"
import StateManegment from "../subcomponent/StateManagement"
import Hooks from "../subcomponent/Hooks"
import EventHandling from "../subcomponent/EventHandling";
import ConditionalRendering from "../subcomponent/ConditionalRendering";
import ListsKeys from "../subcomponent/ListsKeys";
import Forms from "../subcomponent/Forms";
import ReactRouter from "../subcomponent/ReactRouter"
import Styling from "../subcomponent/Styling";
import Redux from "../subcomponent/Redux";
import BundlersBuild from "../subcomponent/BundlersBuild";
import Miscellaneous from "../subcomponent/Miscellaneous";
function Routing() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* React-related routes (with sidebar) */}
        <Route path="/React" element={<ReactLayout />}>
          <Route index element={<ReactPage />} />
          <Route path="ReactIntro" element={<ReactIntro />} />
               <Route path="EnvironmentSetup" element={<EnvironmentSetup />} />
               <Route path="Jsx" element={<Jsx />} />
   <Route path="ReactComponent" element={<ReactComponent />} />
      <Route path="StateManegment" element={<StateManegment />} />
       <Route path="ReactClass" element={<ReactClass />} />
       <Route path="Hooks" element={<Hooks />} />
        <Route path="EventHandling" element={<EventHandling />} />
         <Route path="ConditionalRendering" element={<ConditionalRendering />} />
          <Route path="ListsKeys" element={<ListsKeys />} />
           <Route path="Froms" element={<Forms/>} />
          <Route path="PropsIntro" element={<PropsIntro />} />
              <Route path="ReactRouter" element={<ReactRouter />} />
                <Route path="Styling" element={<Styling />} />
                  <Route path="Redux" element={<Redux />} />
                    <Route path="BundlersBuild" element={<BundlersBuild />} />
                    <Route path="Miscellaneous" element={<Miscellaneous />} />
           {/* <Route path="ReactEs6" element={<ReactEs6 />} /> */}
         
            
        </Route>

        {/* Future: add global pages if needed */}
      </Routes>
    </Router>
  );
}

export default Routing;
