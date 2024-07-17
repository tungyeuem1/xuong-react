import DashboardSideBar from "../modules/dashboard/DashboardSideBar";
import DashboardTopBar from "../modules/dashboard/DashboardTopBar";

/* eslint-disable react/prop-types */
const LayoutDashboard = ({ children }) => {
  return (
    <div className="min-h-screen p-10 bg-white">
      <DashboardTopBar />
      <div className="flex items-start gap-x-10">
        <DashboardSideBar />
        <div className="w-full ">{children}</div>
      </div>
    </div>
  );
};

export default LayoutDashboard;
