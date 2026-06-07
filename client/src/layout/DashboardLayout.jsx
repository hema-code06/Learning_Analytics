import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const DashboardLayout = ({ sidebar, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 h-screen z-30 transform transition-transform duration-300
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          lg:relative lg:translate-x-0 lg:block`}
      >
        {sidebar}
      </aside>

      <main className="flex-1 overflow-y-auto">
        <div className="lg:hidden flex items-center gap-3 p-4 bg-white shadow-sm sticky top-0 z-10">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-700 text-2xl"
          >
            {sidebarOpen ? <HiX /> : <HiMenu />}
          </button>
          <span className="font-semibold text-gray-800">Learning Analytics</span>
        </div>

        <div className="p-4 md:p-8 max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;