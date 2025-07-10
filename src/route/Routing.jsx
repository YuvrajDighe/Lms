import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import ReactLayout from "./ReactLayout";
import ReactPage from "../component/React";
import ReactIntro from "../subcomponent/ReactIntro";
import PropsIntro from "../subcomponent/ReactProp";

function Routing() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* React-related routes (with sidebar) */}
        <Route path="/React" element={<ReactLayout />}>
          <Route index element={<ReactPage />} />
          <Route path="ReactIntro" element={<ReactIntro />} />
          <Route path="PropsIntro" element={<PropsIntro />} />
        </Route>

        {/* Future: add global pages if needed */}
      </Routes>
    </Router>
  );
}

export default Routing;
