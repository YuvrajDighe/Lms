import { Outlet } from "react-router-dom";
import Sidebar from "../navbar/Sidebar";

function ReactLayout() {
  return (
    <div className="flex pt-20">
      <Sidebar />
      <main className="ml-48 flex-1 px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default ReactLayout;