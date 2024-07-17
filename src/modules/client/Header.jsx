import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const Header = () => {
  const nav = useNavigate();
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    logout();
    nav("/sign-in");
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center flex-1 gap-x-10">
          <img srcSet="/public/Logo.png" alt="React app" />
          <div className="max-w-[458px] w-full">
            <ul className="flex gap-6">
              <li className="pl-2 text-lg font-semibold text-text">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="pl-2 text-lg font-semibold text-text">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="pl-2 text-lg font-semibold text-text">
                <Link to="/contact">Contact</Link>
              </li>
              <li className="pl-2 text-lg font-semibold text-text">
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          {isAuthenticated ? (
            <div className="relative">
              <img
                id="avatarButton"
                type="button"
                className="w-10 h-10 rounded-full cursor-pointer"
                src={
                  isAuthenticated
                    ? "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    : ""
                }
                alt="User dropdown"
                onClick={toggleDropdown}
              />
              {/* Dropdown menu */}
              {isDropdownOpen && (
                <div
                  id="userDropdown"
                  className="absolute right-0 z-10 bg-neutral-50 divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                >
                  <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                    <div>Hello</div>
                    <div className="font-medium truncate">{user?.email}</div>
                  </div>
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="avatarButton"
                  >
                    <li>
                      <Link
                        to="/admin"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Dashboard
                      </Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <button
                      onClick={handleLogout}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/sign-in">
                <Button className="bg-primary text-cyan-50">Sign in</Button>
              </Link>
              <Link to="/sign-up">
                <Button className="bg-secondary text-cyan-50">Sign up</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
