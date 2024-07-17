import DashboardSearch from "./DashboardSearch";

const DashboardTopBar = () => {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="flex items-center flex-1 gap-x-10">
        <img srcSet="/public/Logo.png 2x" alt="React app" />
        <div className="max-w-[458px] w-full">
          <DashboardSearch />
        </div>
      </div>
      <div className="flex items-center gap-x-10">
      
        <img
          srcSet="/public/Logo.png"
          alt="React app"
          className="object-cover rounded-full"
        />
      </div>
    </div>
  );
};

export default DashboardTopBar;
