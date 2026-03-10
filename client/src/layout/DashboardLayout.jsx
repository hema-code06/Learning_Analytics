const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6 font-italic">
        Learning Analytics Dashboard
      </h1>
      {children}
    </div>
  );
};

export default DashboardLayout;
