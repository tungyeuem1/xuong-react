import { NavLink, useNavigate } from "react-router-dom";
import IconDashboard from "../../icon/IconDashboard";
import IconUserDashboard from "../../icon/IconUserDashboard";
import IconStoreDashboard from "../../icon/IconStoreDashboard";
import IconLogout from "./../../icon/IconLogout";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const sideBarLinks = [
  {
    icon: <IconDashboard />,
    url: "/admin",
    title: "Dashboard",
  },
  {
    icon: <IconStoreDashboard />,
    url: "/admin/products",
    title: "Store",
  },
  {
    icon: <IconUserDashboard />,
    url: "/admin/user",
    title: "User",
  },
  {
    icon: <IconLogout />,
    url: "/logout",
    title: "Logout",
  },
];

const DashboardSideBar = () => {
  const nav = useNavigate();
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    // localStorage.removeItem("user");
    logout();
    toast.success("Logout successfully!");
    nav("/sign-in");
  };
  return (
    <div className="w-full flex flex-col py-10 md:w-[76px] rounded-3xl bg-white shadow-[10px_10px_20px_rgba(218,213,213,0.15)]">
      {sideBarLinks.map((link) =>
        link.url === "/logout" ? (
          <button
            className="flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-3xl md:mb-8"
            onClick={handleLogout}
            key={link.title}
          >
            <span>{link.icon}</span>
          </button>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "bg-primary text-white flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-3xl md:mb-8"
                : "flex items-center gap-x-5 md:w-12 md:h-12 md:justify-center md:rounded-3xl md:mb-8"
            }
            to={link.url}
            key={link.title}
            onClick={link.title === "Logout" ? handleLogout : undefined}
          >
            <span>{link.icon}</span>
            {/* <span className="md:hidden">{link.title}</span> */}
          </NavLink>
        )
      )}
    </div>
  );
};

export default DashboardSideBar;
