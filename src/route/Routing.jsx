import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ReactLayout from "./ReactLayout";
import React from "../component/React";
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
import ComponentRendering from "../subcomponent/ComponentRendering";

import Callback from "../hookspages/UseCallback";
import Context from "../hookspages/UseContext";
import Effect from "../hookspages/UseEffect";
import Memo from "../hookspages/UseMemo";
import Reducer from "../hookspages/UseReducer";
import Ref from "../hookspages/UseRef";
import State from "../hookspages/UseState";
import Debug from "../hookspages/UseDebug";
import Layout from "../hookspages/UseLayout";
import Imperative from "../hookspages/UseImperative";

import Blur from "../reactevents/Blur";
import Change from "../reactevents/Change";
import Click from "../reactevents/Click";
import DoubleClick from "../reactevents/DoubleClick";
import Drag from "../reactevents/Drag";
import Drop from "../reactevents/Drop";
import Focus from "../reactevents/Focus";
import KeyUp from "../reactevents/KeyUp";
import KeyDown from "../reactevents/KeyDown";
import MouseEnter from "../reactevents/MouseEnter";
import MouseLeave from "../reactevents/MouseLeave";
import OnInput from "../reactevents/OnInput";
import Scroll from "../reactevents/Scroll";
import Submit from "../reactevents/Submit";

import ScrollToTop from "../subcomponent/ReactEs6";
function Routing() {
  return (
    <Router>
      <Navbar />
<ScrollToTop/>
      <Routes>
         {/* ✅ Redirect base path "/" to "/React" */}
        <Route path="/" element={<React />} />
        {/* React-related routes (with sidebar) */}
        <Route path="/React" element={<ReactLayout />}>
          <Route index element={<React />} />
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
 <Route path="ComponentRendering" element={<ComponentRendering />} />

                    <Route path="State" element={<State />} />
                    <Route path="Ref" element={<Ref />} />
                    <Route path="Effect" element={<Effect />} />
                    <Route path="Memo" element={<Memo />} />
                    <Route path="Reducer" element={<Reducer />} />
                    <Route path="Callback" element={<Callback />} />
                    <Route path="Context" element={<Context />} />
                    <Route path="Debug" element={<Debug />} />
                    <Route path="Layout" element={< Layout/>} />
                    <Route path="Imperative" element={< Imperative/>} />

                    <Route path="Blur" element={<Blur />} />
                    <Route path="Click" element={<Click />} />
                    <Route path="Change" element={<Change />} />
                    <Route path="DoubleClick" element={< DoubleClick/>} />
                    <Route path="Submit" element={< Submit/>} />
                    <Route path="Scroll" element={< Scroll/>} />
                    <Route path="Focus" element={< Focus/>} />
                    <Route path="KeyUp" element={< KeyUp/>} />
                    <Route path="KeyDown" element={< KeyDown/>} />
                    <Route path="Drag" element={< Drag/>} />
                    <Route path="Drop" element={< Drop/>} />
                    <Route path="MouseEnter" element={< MouseEnter/>} />
                    <Route path="MouseLeave" element={< MouseLeave/>} />
                    <Route path="OnInput" element={< OnInput/>} />
           {/* <Route path="ReactEs6" element={<ReactEs6 />} /> */}
         
            
        </Route>

        {/* Future: add global pages if needed */}
      </Routes>
    </Router>
  );
}

export default Routing;
