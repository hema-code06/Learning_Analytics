const DashboardLayout = ({ sidebar, children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100 text-gray-800">
      <aside className="h-screen sticky top-0">{sidebar}</aside>
      <main className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default DashboardLayout;
