  import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import Navbar from "./navbar/Navbar";
function App() {

  return (
    
  <>
  
   <Router>
            <Navbar />

          
            {/* <div className="pt-14 pb-14">
              <Routes>
                <Route path="/Home" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/Services" element={<Services />} />
              </Routes>
            </div> */}

          
          </Router>
  </>
  );
}
export default App;
