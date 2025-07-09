  import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import React from "./component/React";
function App() {

  return (
    
  <>
  
   <Router>
            <Navbar />

          
            <div className="pt-14 pb-14">
              <Routes>
                <Route path="/React" element={<React />} />
                
              </Routes>
            </div>

          
          </Router>
  </>
  );
}
export default App;
