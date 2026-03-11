const DashboardLayout = ({ sidebar, children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {sidebar}

      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>

    </div>
  );
};

export default DashboardLayout;