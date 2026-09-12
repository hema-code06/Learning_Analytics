import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const DashboardLayout = ({ sidebar, children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen w-screen overflow-hidden bg-paper text-ink">
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-20 lg:hidden"
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

      <main className="flex-1 h-screen flex flex-col min-w-0">
        <div className="lg:hidden flex items-center gap-3 px-4 py-3 bg-white border-b border-ink/10 sticky top-0 z-10">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-ink text-2xl"
          >
            {sidebarOpen ? <HiX /> : <HiMenu />}
          </button>
          <span className="font-display font-semibold text-ink">Learnlytics</span>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto scroll-thin p-4 md:p-6">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
