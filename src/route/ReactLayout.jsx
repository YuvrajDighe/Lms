import { Outlet } from "react-router-dom";
import Sidebar from "../navbar/Sidebar";

function ReactLayout() {
  return (
   <div className="flex pt-[72px] -mt-2 ">
  <Sidebar />
  <main className="ml-60 flex-1">
    <Outlet />
  </main>
</div>
  );
}

export default ReactLayout;