const DashboardLayout = ({ sidebar, children }) => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {sidebar}

      <div className="flex-1 p-8 overflow-y-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
