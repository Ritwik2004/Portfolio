
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar.component";
import Navbar from "../Components/Navbar.component";

export default function Home() {
  return (
    <div className="min-h-screen md:h-screen w-full bg-[#121212] flex justify-center px-4 pb-4 md:px-10 md:py-18">
      <div className="w-full max-w-[1240px] flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="border border-[#383838] rounded-2xl bg-[#1e1e1f] pt-8 pb-8 md:min-w-[270px] sticky top-4 overflow-y-auto">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex-1 border border-[#383838] rounded-2xl bg-[#1e1e1f] relative overflow-scroll">
          {/* Navbar */}
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>

          {/* Outlet content */}
          <div className="h-auto w-full overflow-y-scroll p-4 pb-8 md:p-8">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
